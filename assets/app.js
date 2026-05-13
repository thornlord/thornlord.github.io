let mutationData = {};

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Data Source
  mutationData = MUTATION_DATA;
  console.log("Mutations loaded locally");

  // 2. DOM Elements
  const form = document.getElementById('mutationForm');
  const classSelect = document.getElementById('type');
  const methodSelect = document.getElementById('method');
  const physCountSelect = document.getElementById('physicalCount');
  const mentCountSelect = document.getElementById('mentalCount');
  const selectContainer = document.getElementById('select-container');
  const selectPhysContainer = document.getElementById('select-physical-container');
  const selectMentContainer = document.getElementById('select-mental-container');

  const formRow = form.closest('.row');
  const resultsContainer = document.getElementById('results-container');
  const resultsOutput = document.getElementById('results-output');
  const btnBack = document.getElementById('btn-back');
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');

  // 3. Theme Switching Logic
  const setTheme = (theme) => {
    if (theme === 'terminal') {
      document.body.classList.remove('theme-glass');
      document.body.classList.add('theme-terminal');
      if (btnThemeToggle) btnThemeToggle.innerHTML = '<i class="fa fa-sun-o"></i> Switch to Modern';
      localStorage.setItem('mcc-theme', 'terminal');
    } else {
      document.body.classList.remove('theme-terminal');
      document.body.classList.add('theme-glass');
      if (btnThemeToggle) btnThemeToggle.innerHTML = '<i class="fa fa-terminal"></i> Switch to Terminal';
      localStorage.setItem('mcc-theme', 'glass');
    }
  };

  // Initialize Theme
  const savedTheme = localStorage.getItem('mcc-theme') || 'glass';
  setTheme(savedTheme);

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      const isTerminal = document.body.classList.contains('theme-terminal');
      setTheme(isTerminal ? 'glass' : 'terminal');
    });
  }

  // 4. Form Logic
  function updateUI() {
    const charClass = classSelect.value;
    const method = methodSelect.value;

    // Reset disabled states and apply class-specific logic
    if (charClass === 'manimal') {
      // Manimals: Max 2 physical, Max 1 mental
      if (parseInt(physCountSelect.value) > 2) physCountSelect.value = '2';
      if (parseInt(mentCountSelect.value) > 1) mentCountSelect.value = '1';
      physCountSelect.disabled = false;
      mentCountSelect.disabled = false;
    } else if (charClass === 'plantient') {
      // Plantients: 0 mental mutations
      mentCountSelect.value = '0';
      mentCountSelect.disabled = true;
      physCountSelect.disabled = false;
    } else {
      // Mutants/Default: No restrictions
      physCountSelect.disabled = false;
      mentCountSelect.disabled = false;
    }

    const pCount = parseInt(physCountSelect.value);
    const mCount = parseInt(mentCountSelect.value);

    // Manual Selection Logic
    if (method === 'select') {
      selectContainer.style.display = 'block';
      renderManualSelects(pCount, 'physical');
      renderManualSelects(mCount, 'mental');
    } else {
      selectContainer.style.display = 'none';
      selectPhysContainer.innerHTML = '';
      selectMentContainer.innerHTML = '';
    }
  }

  function renderManualSelects(count, type) {
    const container = type === 'physical' ? selectPhysContainer : selectMentContainer;
    container.innerHTML = '';
    if (count === 0) return;

    const dataArr = type === 'physical' ? mutationData["Physical Mutations"] : mutationData["Mental Mutations"];
    if (!dataArr) return;

    const heading = document.createElement('h6');
    heading.textContent = type === 'physical' ? 'Physical Mutations' : 'Mental Mutations';
    heading.className = "text-muted";
    container.appendChild(heading);

    for (let i = 0; i < count; i++) {
      const select = document.createElement('select');
      select.className = 'form-select mb-2 manual-select-' + type;
      select.name = `manual_${type}_${i}`;

      dataArr.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.name;
        opt.textContent = m.name;
        select.appendChild(opt);
      });

      container.appendChild(select);
    }
  }

  classSelect.addEventListener('change', updateUI);
  methodSelect.addEventListener('change', updateUI);
  physCountSelect.addEventListener('change', updateUI);
  mentCountSelect.addEventListener('change', updateUI);

  // Initialize UI
  updateUI();

  // 5. Generation Logic
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const charClass = classSelect.value;
    const level = parseInt(document.getElementById('level').value);
    const method = methodSelect.value;
    const pCount = parseInt(physCountSelect.value);
    const mCount = charClass === 'plantient' ? 0 : parseInt(mentCountSelect.value);
    const charName = document.getElementById('casterName').value || '_______________________';

    let selectedMutations = [];

    if (method === 'random') {
      selectedMutations = selectedMutations.concat(pickRandom(mutationData["Physical Mutations"], pCount));
      selectedMutations = selectedMutations.concat(pickRandom(mutationData["Mental Mutations"], mCount));
    } else {
      // Get selected values
      const physSelects = document.querySelectorAll('.manual-select-physical');
      physSelects.forEach(s => {
        const found = mutationData["Physical Mutations"].find(m => m.name === s.value);
        if (found) selectedMutations.push(found);
      });

      const mentSelects = document.querySelectorAll('.manual-select-mental');
      mentSelects.forEach(s => {
        const found = mutationData["Mental Mutations"].find(m => m.name === s.value);
        if (found) selectedMutations.push(found);
      });
    }

    renderResults(charName, level, charClass, selectedMutations);
  });

  function pickRandom(arr, count) {
    if (!arr || arr.length === 0 || count === 0) return [];
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // 5. Dice Rolling Logic
  function parseRange(rangeStr) {
    const str = rangeStr.replace('&#8209;', '-').replace('+', '');
    if (str.includes('-')) {
      const parts = str.split('-');
      return { min: parseInt(parts[0]), max: parseInt(parts[1]) };
    } else {
      return { min: parseInt(str), max: rangeStr.includes('+') ? 999 : parseInt(str) };
    }
  }

  function getTableResult(roll, tableData) {
    for (let row of tableData) {
      const range = parseRange(row.roll);
      if (roll >= range.min && roll <= range.max) {
        return row;
      }
    }
    return tableData[tableData.length - 1]; // fallback
  }

  function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  // 6. Rendering Output
  function renderResults(name, level, charClass, mutations) {
    // Hide form, show results
    formRow.style.display = 'none';
    resultsContainer.style.display = 'block';

    let html = '';

    const coverEl = document.getElementById('cover');
    const addCover = coverEl ? coverEl.checked : false;
    if (addCover) {
      html += `
        <div class="cover-page w-100 text-center d-flex flex-column justify-content-center align-items-center">
          <h1 class="display-3 fw-bold mb-3">${name}</h1>
          <h3 class="mb-5">Level ${level} ${charClass.charAt(0).toUpperCase() + charClass.slice(1)}</h3>
          <img src="MCC logo.png" alt="MCC Logo" class="img-fluid my-5" style="max-height: 400px;">
          <p class="lead mt-5">Personal Mutation Grimoire</p>
        </div>
      `;
    }

    html += `<h2 class="text-center mb-4 mutation-header">${name}'s Mutations</h2>`;
    html += `<p class="text-center mb-5 mutation-header">Level ${level} ${charClass.charAt(0).toUpperCase() + charClass.slice(1)}</p>`;

    if (mutations.length === 0) {
      html += `<div class="alert alert-warning text-center glass-panel">No mutations generated. Please select at least 1 mutation from the dropdowns.</div>`;
    }

    mutations.forEach(mut => {
      let manifestationHtml = '';
      if (mut.manifestations && mut.manifestations.length > 0) {
        manifestationHtml = `
          <div class="col-md-12 mb-4">
            <h5><i class="fa fa-eye"></i> Manifestations</h5>
            <div class="table-responsive">
              <table class="table table-dark table-bordered table-striped mt-2 small manifestation-table">
                <thead><tr><th style="width: 10%">Roll</th><th>Result</th></tr></thead>
                <tbody>
                  ${mut.manifestations.map(m => `<tr><td class="text-center">${m.roll}</td><td>${m.result}</td></tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      let checkHtml = '';
      if (mut.checks && mut.checks.length > 0) {
        checkHtml = `
          <div class="col-md-12 mb-2">
            <h5>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#facc15" style="vertical-align: middle; margin-right: 10px;">
                <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,14,12,14z M17.65,13.65l-1.41-1.41C16.43,11.83,16.5,11.43,16.5,11s-0.07-0.83-0.26-1.24l1.41-1.41C18.17,9.08,18.5,10.01,18.5,11 S18.17,12.92,17.65,13.65z M14.35,16.65l-1.41-1.41c-0.41,0.19-0.81,0.26-1.24,0.26s-0.83-0.07-1.24-0.26l-1.41,1.41 C9.08,18.17,10.01,18.5,11,18.5S12.92,18.17,14.35,16.65z M6.35,13.65C5.83,12.92,5.5,11.99,5.5,11s0.33-1.92,0.85-2.65l1.41,1.41 C7.57,10.17,7.5,10.57,7.5,11s0.07,0.83,0.26,1.24L6.35,13.65z"/>
              </svg>
              Mutation Check
            </h5>
            <div class="table-responsive">
              <table class="table table-dark table-bordered table-striped mt-2 small">
                <thead><tr><th style="width: 10%">Roll</th><th>Result</th></tr></thead>
                <tbody>
                  ${mut.checks.map(c => `<tr><td class="text-center">${c.roll}</td><td>${c.result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</td></tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      html += `
        <div class="glass-panel mutation-card p-4 mb-4">
          <h3 class="mb-3">${mut.name}</h3>
          
          <div class="mutation-meta d-flex flex-wrap gap-4 mb-3 p-3 rounded">
            <div><strong>Type:</strong> ${mut.type || 'N/A'}</div>
            <div><strong>Range:</strong> ${mut.range || 'N/A'}</div>
            <div><strong>Duration:</strong> ${mut.duration || 'N/A'}</div>
            <div><strong>Save:</strong> ${mut.save || 'N/A'}</div>
          </div>
          
          <p class="mutation-description">${mut.general}</p>
          <hr class="glass-border my-4">
          
          <div class="row">
            ${manifestationHtml}
            ${checkHtml}
          </div>
        </div>
      `;
    });

    resultsOutput.innerHTML = html;
  }

  btnBack.addEventListener('click', () => {
    resultsContainer.style.display = 'none';
    formRow.style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener('click', () => {
      const element = document.getElementById('results-output');
      const charName = document.getElementById('casterName').value || 'Character';
      const safeName = charName.replace(/[^a-z0-9]/gi, '_').toLowerCase();

      const opt = {
        margin: 0.5,
        filename: `${safeName}_mutations.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, windowWidth: 720, x: 0, scrollX: 0 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: 'css' }
      };

      // Temporarily hide buttons for the PDF capture
      const btnRow = document.querySelector('#results-container .row');
      if (btnRow) btnRow.style.display = 'none';

      // Temporarily enable PDF export mode for black/white and pagebreak styles
      document.body.classList.add('pdf-export-mode');

      // Increase timeout and force reflow to ensure styles are applied
      setTimeout(() => {
        // Trigger a reflow
        void document.body.offsetHeight;

        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
          if (btnRow) btnRow.style.display = 'flex'; // restore buttons
          document.body.classList.remove('pdf-export-mode'); // restore screen layout
          window.open(pdf.output('bloburl'), '_blank');
        }).save();
      }, 1000); // Increased timeout to 1000ms
    });
  }

});
