// Attribution: Mutant Crawl Classics and MCC RPG are trademarks of Goodman Games.
const MUTATION_DATA = {
    "Physical Mutations": [
        {
            "name": "Amplimorph",
            "type": "Active",
            "range": "N/A",
            "duration": "1 turn per class level",
            "save": "None",
            "general": "The mutant is able to alter their physical size, growing larger or smaller. Except as noted, only the mutant's body alters in size, mass, and strength, not possessions or clothing.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant doubles over in pain as the size change takes effect"
                },
                {
                    "roll": "2",
                    "result": "The mutant's skin roils as muscle and bone reshape"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body appears to strobe as they change size in small increments"
                },
                {
                    "roll": "4",
                    "result": "The mutant is surrounded by a nimbus of rotating electrons"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant increases or decreases in size by 3 feet. If larger, add +2 to Strength and -2 to AC. If smaller, subtract -2 from Strength and add +2 to Agility"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant increases in size to 12 feet tall or decreases in size to 1 foot tall. If larger, Strength score increases by 4 (to a maximum of 24) and -3 to AC. If smaller, subtract -4 from Strength and add +3 to Agility"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant increases in size to 18 feet tall or decreases in size to 6 inches tall. If larger, Strength increases to 20 and reduce AC by 5. If smaller, reduce Strength by 6 and increase Agility to 20"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant increases in size to 18 feet tall or decreases in size to 6 inches tall. If larger, Strength increases to 20. If smaller, increase Agility to 20"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant increases in size to 24 feet tall or decreases in size to 3 inches tall. If larger, Strength increases to 21 and unarmed attacks do 2d6 damage. If smaller, Agility increases to 20, while unarmed attacks still do 2d6 damage"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant increases in size to 24 feet tall or decreases in size to 2 inches tall. If larger, Strength increases to 22 and unarmed attacks do 3d6 damage. If smaller, Agility increases to 20, and unarmed attacks do 3d6 damage"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant increases in size to 32 feet tall or decreases in size to 1 inch tall. If larger, the mutant gains a 23 Strength, 4d6 base damage for unarmed attacks, and additional 24 hp. If smaller, the mutant gains 22 Agility, 4d6 damage with unarmed attacks, and is only hit on a natural critical hit"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant increases in size to 36 feet tall or decreases in size to 1/2 inch tall. If larger, the mutant gains a 24 Strength, 6d6 damage unarmed attacks, and an additional 36 hp. If smaller, the mutant gains 24 Agility, 6d6 damage with unarmed attacks, and is only hit on a natural critical hit"
                }
            ]
        },
        {
            "name": "Carapace",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body is covered or partially covered in a protective shell or armored hide.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's back and abdomen are encased in a turtle-like shell"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body is covered by a chitinous exoskeletal"
                },
                {
                    "roll": "3",
                    "result": "The mutant's skin is like thick, spiked dinosaur hide"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body is covered in hexagonal granite-like epidermal cells"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; non-protective skin change"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's natural AC increases by +2"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's natural AC increases by +3, +1 to Fortitude saves"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's natural AC increases by +4, +2 to Fortitude saves, speed reduced by 5 feet"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's natural AC increases by +5, +3 to Fortitude saves, speed reduced by 10 feet"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's natural AC increases by +6, +4 to Fortitude saves, speed reduced by 15 feet"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's natural AC increases by +7, +5 to Fortitude saves, speed reduced by 16 feet"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's natural AC increases by +8, +5 to Fortitude saves, speed reduced by 18 feet"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's natural AC increases by +9, +5 to Fortitude saves, speed reduced by 20 feet"
                }
            ]
        },
        {
            "name": "Claws",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant possesses retractable claws ideal for combat.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's claws are composed of a razor sharp chitinous or bone-like material"
                },
                {
                    "roll": "2",
                    "result": "The mutant's claws are comprised of organic duralloy"
                },
                {
                    "roll": "3",
                    "result": "The mutant's Claws are molecular-edge carbon nano-structures"
                },
                {
                    "roll": "4",
                    "result": "The mutant's claws are projected as edged plasma fields"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; non-damaging claws"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's claws cause 1d3 damage per strike"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's claws cause 1d5 damage per strike"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's claws cause 1d7 damage per strike"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's claws cause 1d14 damage per strike; +1 to initiative rolls"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's claws cause 1d16 damage per strike; +2 to initiative rolls"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's claws cause 1d20 damage per strike; +3 to initiative rolls"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's claws cause 1d20 damage per strike; 2 attacks per action die; +4 to initiative rolls"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's claws cause 1d20 damage per strike; 3 attacks per action die; +5 to initiative rolls"
                }
            ]
        },
        {
            "name": "Electrical Generation",
            "type": "Active",
            "range": "10 feet per class level",
            "duration": "Instant",
            "save": "Reflex vs. mutation check",
            "general": "The mutant's body acts as a natural generator of electricity.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's feet glow and a directional pulse of current travels through the ground to target"
                },
                {
                    "roll": "2",
                    "result": "The mutant's hands glow and twin arcs of electricity shoot out from them to target"
                },
                {
                    "roll": "3",
                    "result": "The hair on the mutant's body stands on end as a tesla arc of electricity jumps from the mutant's mid-section to target"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body crackles and glows as balls of electricity form in the mutants hands that can be thrown at target"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant releases a single arc or pulse of electricity that does 2d6 damage to a single target; target is entitled to save for half-damage"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant releases a single arc or pulse of electricity that does 3d6 damage to a single target; target is entitled to save for half-damage"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant releases twin arcs or pulses of electricity that do 2d6 damage each, save for half. These arcpulses may be targeted at different targets"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant releases four arcs or pulses of electricity that do 2d6 damage each, save for half. These arcpulses may be targeted at multiple targets"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant releases a single mighty arc or pulse of chained electricity that strikes a single target for 6d6 damage, then skips to the next nearest target for 5d6 damage (all save for half-damage), and so on until the electricity dissipates. Hostile targets will be targeted first, but if the electricity has not fully discharged itself on hostile targets, it will continue to jump to friendly targets. The mutant cannot be damaged by this"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's body releases a gigantic orb of ball lightning that deals 6d6 damage to any targets in a straight path to its final target, save for half"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant releases a circular pulse of electricity so powerful that it short circuits neural system and technological devices of a single target, causing paralysis or deactivation for 1d6 rounds; target is entitled to save for half-damage"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's body releases an EMP that deactivates all technological devices for 1d6 rounds, and that causes anyone within range (except the mutant or any other mutant with the electrical generation mutation) to be stunned for 1d6 rounds; target is entitled to save for half-damage"
                }
            ]
        },
        {
            "name": "Extra Senses",
            "type": "Active",
            "range": "Varies",
            "duration": "Instant",
            "save": "None",
            "general": "The mutant has one extraordinary sense. This sense is not passive, and the mutant must concentrate to use the mutation.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant has bat-like ears and can effectively see in the dark via echolocation"
                },
                {
                    "roll": "2",
                    "result": "The mutant has a flicking, extensible tongue which allows the mutant to sense other creatures and objects by taste and smell"
                },
                {
                    "roll": "3",
                    "result": "The mutant has insectoid antennae that act as motion detectors"
                },
                {
                    "roll": "4",
                    "result": "The mutant's skin acts as a radiation detector, sensing micro-changes in heat and radiation"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, By concentrating for one full round, the mutant senses hidden creatures up to 20 feet and the mutant is granted a general direction for the detected stimuli"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, By concentrating for one full round, the mutant senses hidden creatures up to 30 feet and the mutant is granted a compass direction for the detected stimuli"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, By concentrating for one full round, the mutant senses hidden creatures up to 50 feet and the mutant is granted a compass direction and approximate distance for the detected stimuli"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, By concentrating for one full round, the mutant senses hidden creatures up to 75 feet and the mutant is granted a compass direction and range for the detected stimuli"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant automatically senses hidden creatures up to 100 feet and the mutant is granted a compass direction and range for the detected stimuli"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant automatically senses hidden creatures up to 125 feet and the mutant is granted a compass direction and range for the detected stimuli"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant automatically senses hidden creatures up to 150 feet and the mutant is granted an exact range and distance to the detected stimuli"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's extra sense detects even the tiniest sound, motion, smell, taste, or radiation for 200 feet, preventing the mutant from being surprised, and the mutant is granted an exact range and distance to the detected stimuli"
                }
            ]
        },
        {
            "name": "Gas Generation",
            "type": "Active",
            "range": "5 feet per class level",
            "duration": "Varies",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's body exudes highly volatile gases.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "A jet of gas is exhaled from the mutant's mouth"
                },
                {
                    "roll": "2",
                    "result": "Twin streams of gas pour from special orifices located in the palms of the mutant's hands or manipulative members"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body exudes gas from pores in the mutant's skin"
                },
                {
                    "roll": "4",
                    "result": "Through concentration, the mutant is able to transmute a localized pocket of air into an efficacious gas"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant releases a single puff of dense opaque gas that blinds a single target for 1d6 rounds, save to avoid"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant releases a single puff of anesthetic gas that blinds and stuns a single target for 1d6 rounds, save to avoid"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant releases a jet of poisonous gas that blinds a single target for 1d6 rounds and does 2d6 of damage from toxic fumes, save for half"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant releases a jet of poisonous gas that blinds up to three adjacent targets for 1d8 rounds and does 3d6 of damage from toxic fumes, save for half"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant releases a billowing cloud of caustic gas that shoots forth in a 30 feet wide arc, affecting all within its range; targets are blinded for 1d10 rounds and suffer 4d6 of damage, save for half"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's body releases a cloud of noxious gas 20 feet in diameter that deals 6d6 damage to any targets encompassed within (save for half); the vision of those within this cloud is impaired and all attack rolls are at -4. This cloud appears centered on the mutant (who is unaffected), and may be directed, moving 20 feet per round"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's body releases a cloud of acidic gas 30 feet in diameter and centered on the mutant that deals 8d6 damage to any targets encompassed within (save for half); unprotected weapons, armor, and artifacts must make a Fortitude save vs DC 15 or instantly corrode and become useless"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's body releases an explosive cloud of radioactive steam 50 feet in diameter and centered on the mutant (who is unaffected). All within this radioactive cloud must make a save versus the mutation check roll or take 10d6 in heat damage; all affected mutants, manimals, and plantients within range gain one random mutation or defect"
                }
            ]
        },
        {
            "name": "Heightened Agility",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's reaction time and agility are increased up to super-human levels. Any armor worn by the mutant negates the benefits of this mutation according to the appropriate Agility check penalty. Agility score may not be raised above 24.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's metabolism runs at a superior rate and the rail-thin mutant must consume twice as many calories as normal"
                },
                {
                    "roll": "2",
                    "result": "The mutant's genes carry fragments of mongoose DNA, causing increased reaction speed and giving the mutant a rat-like face"
                },
                {
                    "roll": "3",
                    "result": "The mutant's nerve conduction velocity is accelerated to that of a radioactive spider"
                },
                {
                    "roll": "4",
                    "result": "The mutant's brain is able to scan alternate future timelines in a limited fashion, and is thus better able to calculate body speed, position, and actions"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by a defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in a cosmetic change only: hyperactive speech"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's Agility score is increased by +1"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's Agility score is increased by +2"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's Agility score is increased by +3"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's Agility score increases by +4; base speed is increased to 35 feet"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's Agility score increases by +6; AC is increased by +9 (ignore normal Agility modifier for AC); base speed is increased to 40 feet"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's Agility score increases by +7; AC is increased by +10 (ignore normal Agility modifier for AC); base speed is increased to 60 feet"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's Agility score increases by +8; AC is increased by +11 (ignore normal Agility modifier for AC); base speed is increased to 80 feet"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's Agility score increases by +9; AC is increased by +12 (ignore normal Agility modifier for AC); base speed is increased to 100 feet; the mutant cannot be surprised"
                }
            ]
        },
        {
            "name": "Heightened Stamina",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body is hardened to radiation and many other forms of damage. Stamina score may not be raised above 24.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's skin appears as dull lead"
                },
                {
                    "roll": "2",
                    "result": "The mutant's skin is the color of oxidized copper"
                },
                {
                    "roll": "3",
                    "result": "The mutant's skin resembles chrome plating"
                },
                {
                    "roll": "4",
                    "result": "The mutant's skin flashes metallic red briefly each time the mutant makes a Fortitude saving throw"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by a defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in a cosmetic change only: mutant's skin does not appear to show external damage or trauma"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's Stamina score is increased by +1"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's Stamina score is increased by +2"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's Stamina score is increased by +3"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's Stamina score increases by +4; mutant is not vulnerable to electrical attacks"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's Stamina score increases by +6; mutant is immune to heat attacks"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's Stamina score increases by +7; mutant is fully resistant to radiation attacks"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's Stamina score increases by +8; mutant is impervious to kinetic attacks (including physical melee and ranged attacks)"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's Stamina score increases by +9; mutant is unaffected by energy-based attacks. The mutant cannot miss a Fortitude save except on a natural 1"
                }
            ]
        },
        {
            "name": "Heightened Strength",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant is gifted with supernormal strength. Strength score may not be raised above 24.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body appears extremely over-muscled"
                },
                {
                    "roll": "2",
                    "result": "The mutant is abnormally short and squat, as though adapted for a higher gravity"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body glows dimly and converts nearby matter directly into kinetic energy whenever extreme strength is exercised"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body is composed of superdense ebony-colored elements and weighs 3x normal"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by a defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in a cosmetic change only: mutant appears well-muscled"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's Strength score is increased by +1"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's Strength score is increased by +2"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's Strength score is increased by +3"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's Strength score increases by +4; mutant's speed is reduced by 5 feet"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's Strength score increases by +6; mutant's speed is reduced by 10 feet"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's Strength score increases by +7; mutant's speed is reduced by 15 feet"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's Strength score increases by +8; mutant's speed is reduced by 20 feet"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's Strength score increases by +9; mutant may only engage in melee attacks every other round"
                }
            ]
        },
        {
            "name": "Holographic Skin",
            "type": "Active",
            "range": "N/A",
            "duration": "1 turn/class level",
            "save": "None",
            "general": "The mutant's skin cells have the uncanny ability to bend and refract electromagnetic radiation.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's appearance becomes that of a barely noticeable silhouette"
                },
                {
                    "roll": "2",
                    "result": "The mutant's appearance briefly inverts into a color negative of itself before vanishing"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body shimmers in a rainbow banded light and then vanishes"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body appears to loose dimensionality, first along the horizontal plane, then along the vertical"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's body becomes translucent and difficult to see; +3 AC if clothed, +5 AC if naked"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's body becomes transparent, leaving only a noticeable silhouetted distortion; +5 AC if clothed, +7 AC if naked"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's body becomes invisible and almost impossible to see except by environmental interactions; +7 AC if clothed, +10 AC if naked"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant and all clothes and possessions become completely invisible; +10 AC"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to render him or herself completely invisible to detection in the infrared and visible light spectrums"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to render anything within a 5 foot radius invisible to detection in the infrared, ultraviolet, and visible light spectrums"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to render anything within a 10 foot radius invisible to detection in the infrared, ultraviolet, visible light, and x-ray spectrums"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to render anything within a 20 foot radius invisible to detection in the infrared, ultraviolet, visible light, microwave, and x-ray spectrums"
                }
            ]
        },
        {
            "name": "Increased Speed",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's metabolism runs at superhuman extremes, resulting in the ability to move very quickly, but with no corresponding increase in reaction time or agility.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's movements, even when resting, appear jittery and shaky"
                },
                {
                    "roll": "2",
                    "result": "The mutant is unable to remain still or at rest, even when sleeping"
                },
                {
                    "roll": "3",
                    "result": "The mutant operates in a slightly different time frame, and does not appear to move at all, but strobes instantly from one position to the next"
                },
                {
                    "roll": "4",
                    "result": "The mutant's movements cannot be followed by normal vision, as he is visible only as a blurred streak when acting at an accelerated pace"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by a defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in a cosmetic change only: mutant is twitchy, and constantly moves as quickly as possible, rarely resting"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's movement speed is increased by +5 feet"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's movement speed is increased by +10 feet"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's movement speed is increased by +15 feet; gains additional d14 action die"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's movement speed is increased by +20 feet; gains additional d16 action die"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's movement speed is increased by +25 feet; gains additional d20 action die"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's movement speed is increased by +30 feet; gains two additional d14 action dice"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's movement speed is increased by +50 feet; gains two additional d16 action dice"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's movement speed is increased by +100 feet; gains two additional d20 action dice"
                }
            ]
        },
        {
            "name": "Infravision",
            "type": "Passive",
            "range": "Varies",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's vision extends into the infrared range of electromagnetic radiation.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's eyes reflect red light in the dark"
                },
                {
                    "roll": "2",
                    "result": "The mutant's entire field of vision can be dimly seen in the dark as twin projected light beams"
                },
                {
                    "roll": "3",
                    "result": "The mutant's eyes are entirely comprised of reddish pupils"
                },
                {
                    "roll": "4",
                    "result": "The mutant has a third eye placed center in the mutant's forehead which actively broadcasts infrared light"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by a defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in a cosmetic change only (see manifestation)"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 10 feet distant"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 20 feet distant"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 40 feet distant"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 60 feet distant, including residual heat signatures up to 10 minutes old"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 100 feet distant, including residual heat signatures and cold spots up to 30 minutes old"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 100 feet distant, including residual heat signatures and cold spots up to 2 hours old"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 100 feet distant and up to 1 foot in depth through organic matter, allowing 3D views of internal organs"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 100 feet distant and up to 10 feet in depth through organic matter, and up to 5 feet in depth through inorganic matter, allowing 3D views of internal organs, viewing of heat signatures behind normal walls, etc"
                }
            ]
        },
        {
            "name": "Light Generation",
            "type": "Active",
            "range": "Line of sight",
            "duration": "Varies",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's body is able to generate blasts of photons.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's hands flash brightly"
                },
                {
                    "roll": "2",
                    "result": "The mutant's eyes shoot twin beams of light"
                },
                {
                    "roll": "3",
                    "result": "The mutant's skin momentarily incandesces in a flash of light"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body is momentarily surrounded by a globe of bright light which collects itself at his chest before discharging"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant releases a single flash of light that blinds one target for 1d3 rounds (save for half the duration), or optionally the mutant may generate a field of ambient light in a 40 foot radius for 1 hour/class level"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant releases a single flash of light that blinds one target for 1d6 rounds, save for half the duration"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant releases a single flash of light that blinds up to 6 targets for 1d6 rounds, save for half the duration"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant releases a series of strobing light pulses that blind and stun up to 6 targets for 1d6 rounds"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant releases a cascade of dazzling light pulses that hypnotize up to 10 HD of targets for 1d8 rounds (save for half the duration) and places them in a highly suggestible state"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's body releases a gigantic orb of pure photons that deals 6d6 damage to any targets in a straight path to its final target, blinding anyone looking for 1d10 rounds (save for half damage and duration)"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant fires a high energy beam of coherent light that permanently blinds one target and causes 8d6 of damage, save for temporary blindness (1d10 turns) and half damage"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant fires a high energy beam of coherent light that permanently blinds one target and causes 10d6 of damage, save for temporary blindness (1d10 days) and half damage; up to four additional adjacent targets are blinded for 1d10 rounds"
                }
            ]
        },
        {
            "name": "Metamorph",
            "type": "Active",
            "range": "N/A",
            "duration": "1 turn/class level",
            "save": "None",
            "general": "The mutant is able to alter the size and shape of his body, imitating any object or living creature that the mutant has physically touched. Except where noted, only the appearance (not composition) of the mutant changes.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's skin shimmers and twists as the change takes place"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body appears to rapidly rotate in multiple blurred bands of movement"
                },
                {
                    "roll": "3",
                    "result": "An image of the intended new shape flickers briefly in the mutant's pupils immediately prior to the change"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body briefly becomes wavy and gelatinous as it transitions into the new shape"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant changes shape into any other living creature of the same approximate size and weight"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant changes shape into any object or living creature of the same approximate size and weight"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant changes shape into any object or living creature up to double or one-half the same size and weight; temporarily gains 1d5 hit points"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant changes shape into any object or living creature up to double or one-half the same size and weight; temporarily gains 1d7 hit points"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant becomes a near perfect duplicate of the imitated creature or object, including complex parts and held objects; temporarily gains 1d12 hit points"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant becomes a near perfect duplicate of the imitated creature or object; with duplicate AC and HD"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant becomes a near perfect duplicate of the imitated creature or object; with duplicate AC, HD, and physical abilities (but not mutations or powers)"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant becomes a functioning duplicate of the imitated creature or object; with duplicate or equivalent AC, HD, abilities, and mutations"
                }
            ]
        },
        {
            "name": "Multiple Body Parts",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant has more than the standard number of body parts.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The extra body parts are a different skin color (see Table 1-6, result 1-5)"
                },
                {
                    "roll": "2",
                    "result": "The extra body parts are scaly or furry"
                },
                {
                    "roll": "3",
                    "result": "The extra body parts are skeletal or chitinous"
                },
                {
                    "roll": "4",
                    "result": "The extra body parts are metallic, and appear artificial"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; roll 1d3 and mutant gains a single nonfunctional and vestigial (**1**) arm, (**2**) leg, or (**3**) tiny head on his chest"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant has 2 extra arms and gains a d16 additional action die for melee attacks only"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant has 2 extra legs and gains an additional 20 feet to movement"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant has 2 extra arms and gains a d20 additional action die for melee attacks only"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant has 2 extra arms and gains a d20 additional action die for melee attacks only; mutant also has 2 extra legs and gains an additional 30 feet to movement"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant has 4 extra arms and gains a d20 additional action die for melee attacks only; also has 4 extra legs and gains an additional 40 feet to movement"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant has 1d5+3 extra arms (round down to an even number) and gains two additional d20 action dice that can be used for melee and missile attacks only"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant has 1d5+3 extra arms (round down to an even number) and gains two additional d20 action dice; also has 1d5+3 extra legs (round down to an even number) and gains an additional 50 feet to ground movement"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant has 1d5+5 extra arms (round down to an even number) and gains two additional d20 action dice; also has 1d5+5 extra legs (round down to an even number) and gains an additional 60 feet to movement"
                }
            ]
        },
        {
            "name": "New Body Parts",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant has additional body parts not normally found upon mutant's genotype or sub-type.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The new body parts are scaly"
                },
                {
                    "roll": "2",
                    "result": "The new body parts are furred"
                },
                {
                    "roll": "3",
                    "result": "The new body parts are skeletal or chitinous"
                },
                {
                    "roll": "4",
                    "result": "The new body parts are metallic, and appear artificial"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; roll 1d3 and mutant gains a single nonfunctional and vestigial (**1**) arm, (**2**) leg, or (**3**) tiny head on his chest"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant has 2 extra arms and gains a d16 additional action die for melee attacks only"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant has 2 extra legs and gains an additional 20 feet to movement"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant has 2 extra arms and gains a d20 additional action die for melee attacks only"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant has 2 extra arms and gains a d20 additional action die for melee attacks only; mutant also has 2 extra legs and gains an additional 30 feet to movement"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant has 4 extra arms and gains a d20 additional action die for melee attacks only; also has 4 extra legs and gains an additional 40 feet to movement"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant has 1d5+3 extra arms (round down to an even number) and gains two additional d20 action dice that can be used for melee and missile attacks only"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant has 1d5+3 extra arms (round down to an even number) and gains two additional d20 action dice; also has 1d5+3 extra legs (round down to an even number) and gains an additional 50 feet to ground movement"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant has 1d5+5 extra arms (round down to an even number) and gains two additional d20 action dice; also has 1d5+5 extra legs (round down to an even number) and gains an additional 60 feet to movement"
                }
            ]
        },
        {
            "name": "Plasticity",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body is elastic, allowing the mutant to stretch his or her limbs.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body is supple and rubbery"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body and appendages are coiled and extensible"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body is gelatinous in nature with pseudopodic arms and legs"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body is comprised of an unknown quantum state of matter, able to add and subtract mass instantaneously"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; mutant can contort arms and legs in a minimal fashion"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to extend arms 10 feet and may engage in melee at that range"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to extend arms and legs 15 feet and may engage in melee at that range; gains additional 15 feet to movement"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to extend arms and legs 20 feet and may engage in melee at that range; gains additional 20 feet to movement; gains -1 to all damage from blunt force attacks"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to extend arms and legs 30 feet and may engage in melee at that range; gains additional 30 feet to movement; gains -1d3 to all damage from blunt force attacks"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to extend entire body 40 feet and may engage in melee at that range; gains additional 40 feet to movement; gains -1d6 to all damage from blunt force attacks"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to extend entire body 60 feet and may engage in melee at that range; gains additional 60 feet to movement; gains -1d8 to all damage from blunt force attacks"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to extend entire body 80 feet and may engage in melee at that range; gains additional 80 feet to movement; does not take damage from normal melee or ranged attacks; may assume the shape of any platonic solid at will"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to extend entire body 100 feet and may engage in melee at that range; gains additional 100 feet to movement; does not take damage from normal melee or ranged attacks; may assume any complex shape at will"
                }
            ]
        },
        {
            "name": "Radiation Generation",
            "type": "Active",
            "range": "10 feet/class level",
            "duration": "Instant",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's body is capable of generating blasts of ionizing radiation.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body glows with a bright blue halo"
                },
                {
                    "roll": "2",
                    "result": "The mutant's hands are surrounded by a blue nimbus of orbiting electrons"
                },
                {
                    "roll": "3",
                    "result": "The mutant's eyes fire twin blasts of searing blue light"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body flashes blue/white for one second, and then a small mushroom cloud roils upwards from him or her"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant fires a radiation blast, inflicting 1d6 of radiation damage to target, save for half"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant fires a radiation blast, inflicting 1d8 of radiation damage to target, save for half"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant fires a radiation blast, inflicting 1d10 of radiation damage to target (save for half); the target remains irradiated for 1d3 rounds, suffering an additional 1 point of damage per round"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant fires a radiation blast, inflicting 1d12 of radiation damage to target (save for half); the target remains irradiated for 1d6 rounds, suffering an additional 2 points of damage per round"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant fires a radiation blast, inflicting 3d6 of radiation damage to target (save for half); the target remains irradiated for 1d8 rounds, suffering an additional 3 points of damage per round; non-PSH targets must make an additional Fortitude save or gain one random defect"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant releases a radiation blast in a 30 foot radius that causes 4d6 damage to all targets within range (save for half); targets remain irradiated for 1d8 rounds, suffering an additional 4 points of damage per round; non-PSH targets must make an additional Fortitude save or gain 1d3 random defects"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant releases an intense radiation blast in a 40 foot radius that causes 8d6 damage to all targets within range (save for half); targets remain irradiated for 1d6 rounds, suffering an additional 4 points of damage per round; non-PSH targets must make an additional Fortitude save or gain 1d4 random defects"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's body temporarily achieves active fusion, releasing a 10d6 radiation blast in a 100 foot radius centered on the mutant. Effected targets missing their save are blinded for 1d6 rounds; all organic possessions and clothing are disintegrated (including those of the mutant); targets are irradiated for an additional 1d6 rounds, suffering 1d6 burn damage per round"
                }
            ]
        },
        {
            "name": "Regeneration",
            "type": "Active",
            "range": "N/A",
            "duration": "Instant",
            "save": "None",
            "general": "The mutant's cellular metabolism is accelerated to such an extent that the mutant's body heals at an abnormally fast rate.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body is bathed in a soft white glow when healing"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body shimmers and sparkles as cells divide and regrow"
                },
                {
                    "roll": "3",
                    "result": "Any visible wounds on the mutant's body immediately fill with an opaque white gel which solidifies into flesh and bone"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body roils as existing tissues shoot fleshy tendrils over wounds and then gradually rebuild damaged areas"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant heals 1 HD in damage, up to the mutant's natural hit point total"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant heals 2 HD in damage, up to the mutant's natural hit point total"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant heals 3 HD in damage, up to the mutant's natural hit point total; any poisons are detoxified and/or radiation exposure decontaminated"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant heals 4 HD in damage, up to the mutant's natural hit point total; any poisons are detoxified and/or radiation exposure decontaminated; lost limbs regrow within 1d3 rounds"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant heals 5 HD in damage, up to the mutant's natural hit point total; any poisons are detoxified and/or radiation exposure decontaminated; lost limbs regrow within 1d3 rounds; lose one defect"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant heals 4 HD in damage, up to the mutant's natural hit point total; any poisons are detoxified and/or radiation exposure decontaminated; lost limbs regrow within 1d3 rounds; any defects are lost"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's hit point total is fully restored and any ability score loss is erased (notwithstanding losses accrued from glowburn when using this mutation)"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's hit point total is fully restored and any ability score loss is erased (notwithstanding losses accrued from glowburn when using this mutation). If even a single cell of the mutant's body remains intact, mutant may even revive himself from death within 1 round of death or incapacitation occurring"
                }
            ]
        },
        {
            "name": "Shorter",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant is notably smaller than average members of genotype and species.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body is a scaled-down version of other members of his genotype"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body is shorter but just as wide as other members of his genotype"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body is shorter than other members of his genotype, but his lower legs and feet are extra-large"
                },
                {
                    "roll": "4",
                    "result": "The mutant's upper body is normally proportioned, but he has no legs with feet attached directly to the torso"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; mutant is only slightly shorter than average for the genotype and species"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is 1 foot shorter than average members of his genotype and species; AC increases by +1"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is 2 feet shorter than average members of his genotype and species; AC increases by +2, normal movement speed is reduced by 5 feet per round"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is 3 feet shorter than average members of his genotype and species; AC increases by +3, normal movement speed reduced by 10 feet per round"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is 1/3 the height of average members of his genotype and species; AC increases by +4, normal movement speed reduced by 15 feet per round"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is 1/4 the height of average members of his genotype and species; AC increases by +5, normal movement speed reduced by 20 feet per round"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is very small at approximately 6 inches in height; AC increases by +6, normal movement speed reduced to 5 feet per round"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is tiny at approximately 3 inches in height; AC increases by +7, normal movement speed reduced to a scant 2 feet per round"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is miniature at approximately 1 inch in height; AC increases by +10, normal movement speed reduced to a mere 1 foot per round"
                }
            ]
        },
        {
            "name": "Sonic Generation",
            "type": "Active",
            "range": "15 feet per class level",
            "duration": "Instant",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant broadcasts waves of sonic energy.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Concentric waves of sonic energy erupt from the mutant's mouth as a high-pitched scream"
                },
                {
                    "roll": "2",
                    "result": "The mutant's fingertips project blasts of sonic energy"
                },
                {
                    "roll": "3",
                    "result": "A small organ in the mutant's forehead emits sonic pulses"
                },
                {
                    "roll": "4",
                    "result": "The mutant emits pulsating waves of sonic energy directly from his or her chest"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant releases a pulse of sonic energy that does 2d6 of damage to a single target, save for half"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant releases a pulse of sonic energy that does 3d6 of damage to a single target, save for half"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant releases a quick series of four sonic pulses that do 1d6 of damage each, save for half. These pulses may be targeted at multiple targets; targets are deafened for 1d3 rounds"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant releases a sweeping arc of sonic energy that does 4d6 of damage to up to four adjacent targets (save for half); targets are deafened for 1d6 rounds"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant releases a tightly-focused pulse of sonic energy that strikes a single target for 6d6 of damage (save for half); target is permanently deafened"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant releases a sonic wave harmonic that deals 6d6 of damage to any targets in a straight path to its final target (save for half); all targets are permanently deafened and must make a Fortitude save vs. mutation check DC or be stunned for 1d3 rounds"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant releases an omnidirectional sonic scream that it delivers 8d6 of damage to anyone or anything within a 50 foot range (save for half); any creature or breakable object (judge's discretion) must make an additional Fortitude save vs. mutation check DC or be permanently deafened or shattered; anyone within range (except the mutant or any other mutant with the sonic generation mutation) is stunned for the next 1d3 rounds"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant releases an omnidirectional sonic howl of such intensity that it delivers 10d6 of damage to anyone or anything within a 100 foot range (save for half); any creature or breakable object must make an additional Fortitude save vs. mutation check DC or be permanently deafened or shattered; anyone within range (except the mutant or any other mutant with the sonic generation mutation) is stunned for the next 1d6 rounds"
                }
            ]
        },
        {
            "name": "Spines",
            "type": "Passive",
            "range": "10 feet per class level",
            "duration": "Instant",
            "save": "None",
            "general": "The mutant's body is covered or partially covered in quills or spines; armor use is restricted to leather armour, natural, or armour specifically modified to accommodate the mutant's spines.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's back and abdomen are covered in stiff quills"
                },
                {
                    "roll": "2",
                    "result": "The mutant's forearms are covered with bony spines"
                },
                {
                    "roll": "3",
                    "result": "The mutant's head has long sharp metallic quills, helmets and other headgear may not be worn"
                },
                {
                    "roll": "4",
                    "result": "The mutant's skin contains thousands of sub-dermal pores containing short, chitinous bone spikes"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; quills or spines are non-functional"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's AC increases by +1; mutant may fire quills/spines for 1d4 damage against a single target"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's AC increases by +2; mutant may fire quills/spines for 1d6 damage against a single target"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's AC increases by +3; mutant may fire quills/spines for 2d6 damage against a single target, or for 1d6 each against two adjacent targets"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's AC increases by +3; mutant may fire quills/spines for 3d6 damage against a single target, or for 1d6 each against three adjacent targets"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's AC increases by +5, +2 to Reflex saves; mutant may fire quills/spines for 4d6 damage against a single target, or for 1d6 each against four adjacent targets"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's AC increases by +6, +3 to Reflex saves; mutant may fire quills/spines for 5d6 damage against a single target, or for 1d6 each against five adjacent targets"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's AC increases by +7, +4 to Reflex saves; mutant gains 100 feet of movement and the ability to jump 50 feet while ricocheting on quills/spines as he or she is rolled up into a tight ball"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's AC increases by +8, +5 to Reflex saves; mutant fires all quills/spines at once, resulting in a devastating and omnidirectional torrent of 12d6 piercing damage to all within a 50 foot radius. This mutation may not be used again for 7 days after this result"
                }
            ]
        },
        {
            "name": "Symbiotic Touch",
            "type": "Active",
            "range": "Touch",
            "duration": "Until contact is broken",
            "save": "Willpower vs. mutation check",
            "general": "The mutant has the ability to control other living creatures with skin-to-skin contact. Once control has been established, the mutant may engage in no other actions besides controlling the target, regardless of the number of action dice the mutant has or the effects of other mutations.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's fingers end in tiny suction cups"
                },
                {
                    "roll": "2",
                    "result": "The mutant's forearms shoot out serpentine tendrils"
                },
                {
                    "roll": "3",
                    "result": "Whatever part of the mutant that is in direct physical contact with the target merges with the skin of the target"
                },
                {
                    "roll": "4",
                    "result": "The mutant's head is surrounded by a semi-transparent holographic projection of the face of the target creature"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to order the target creature to perform any act that can be stated aloud in a single word, save to resist"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to order the target creature to perform any act that can be stated aloud using two words, save to resist"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to order the target creature to perform any act that can be stated aloud using three words, save to resist"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to order the target creature to perform any act that can be stated aloud in a simple sentence or statement; mutant is able to read surface thoughts and emotions of the controlled creature, save to resist"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to order the target creature to perform any complex acts that can be stated aloud using simple language, including the use of the creature's physical mutations, if any; mutant is able to read most thoughts and emotions of the controlled creature; and may access the creature's recent memories, save to resist"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to order the target creature to perform complex acts, including the use of the creature's physical and mental mutations, if any; mutant is able to read all thoughts and emotions of the controlled creature; and has full access the creature's memories, save to resist"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant and the target creature act as one combined being under the player's control. Target may make a save to resist once per turn"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant and the target creature become permanently fused, creating a new gestalt creature with mixed abilities and stats of the judge's choosing. This gestalt creature is under the player's control, but only lasts for 24 hours before shattering back into its two original forms"
                }
            ]
        },
        {
            "name": "Taller",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant is notably taller than average members of his genotype and species.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body is a scaled-up version of other members of his genotype"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body is taller but much slimmer than other members of his genotype"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body is taller than other members of his genotype, but his lower legs and feet are extra-wide"
                },
                {
                    "roll": "4",
                    "result": "The mutant's upper body is normally proportioned, but he his legs are much longer than other members of his genotype or species"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; mutant is only slightly taller than average for their genotype and species"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is 1 foot taller than average members of their genotype and species; mutant gains +1 to Strength (to a maximum of 24) and AC decreases by -1"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is 2 feet taller than average members of their genotype and species; mutant gains +2 to Strength (to a maximum of 24), +5 feet to movement speed, and AC decreases by -2"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is 3 feet taller than average members of their genotype and species; mutant gains +3 to Strength (to a maximum of 24), +10 feet to movement speed, and AC decreases by -3"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant towers over others at approximately 10 feet in height; mutant gains +5 to Strength (to a maximum of 24), AC decreases by -4, movement speed is 50 feet, and Hit Dice changes to d10"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is huge at approximately 12 feet in height; mutant gains +6 to Strength (to a maximum of 24), AC decreases by -5, movement is 60 feet, and Hit Dice changes to d12"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is enormous at approximately 14 feet in height; mutant gains +7 to Strength (to a maximum of 24), AC decreases by -6, movement is 70 feet, and Hit Dice changes to d14"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is a giant at approximately 16 feet in height; mutant gains +8 to Strength (to a maximum of 24), AC decreases by -7, movement is 80 feet, and Hit Dice changes to d16"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is a colossus at approximately 18 feet in height; mutant gains +9 to Strength (to a maximum 24), AC decreases by -8, movement is 90 feet, and Hit Dice changes to d20"
                }
            ]
        },
        {
            "name": "Ultravision",
            "type": "Passive",
            "range": "Varies",
            "duration": "1 round per class level",
            "save": "None",
            "general": "The mutant's vision range extends into both the upper and lower EM frequencies.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's eyes glow ultraviolet"
                },
                {
                    "roll": "2",
                    "result": "The mutant's entire field of vision acts as a black light lamp, these purple beams are visible under dim lighting conditions"
                },
                {
                    "roll": "3",
                    "result": "The mutant's eyes are entirely composed of dark purple pupils"
                },
                {
                    "roll": "4",
                    "result": "The mutant has a single cyclopean eye that is all-white with no visible iris or pupil"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in a cosmetic change only (see manifestation)"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to see in the ultraviolet range, up to 10 feet distant; mutant has full vision in any outdoor situation, no matter how dark"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to see in the ultraviolet range, up to 20 feet distant; mutant has full vision in any outdoor or underground situation, no matter how dark"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to see microwave sources and transmissions up to 40 feet distant; mutant's vision may inflict 2d6 of heat damage to a single target as an action"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to see in the x-ray spectrum; mutant's vision is capable of penetrating up to 5 inches of organic matter and 1 inch of inorganic matter (except lead and force screens \u2014 which appear opaque to the mutant though otherwise transparent to normal vision)"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 100 feet distant, including residual heat signatures and cold spots up to 30 minutes old"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 100 feet distant, including residual heat signatures and cold spots up to 2 hours old"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to see infrared heat sources up to 100 feet distant and up to 1 foot in depth through organic matter, allowing 3D views of internal organs in living creatures"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to see in every spectrum of EM radiation from radio waves to gamma rays \u2014 all at once, and is therefor effectively blinded by the sensory overload; mutant's vision is equivalent to a disintegration beam, severing the molecular bonds of any single target of less than 10 foot by 10 foot by 10 foot volume (successful targeting requires variable DC check as determined by the Judge)"
                }
            ]
        },
        {
            "name": "Wings",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body has functional wings.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant has wings of a type closely related to the mutant's genotype (furred for mammals, feathered for avians, scaly for reptilians, etc.)"
                },
                {
                    "roll": "2",
                    "result": "The mutant has wings of an unrelated type for the mutant's genotype (insectoid or feathered wings on a mammal, and so on)"
                },
                {
                    "roll": "3",
                    "result": "The mutant has wings comprised of a chrome-like organic metal"
                },
                {
                    "roll": "4",
                    "result": "The mutant has wings composed of electric-blue projected force fields"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; non-functional wings"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's wings are capable of level gliding for distances up to 40 feet per round, or 1/2 speed carrying up to 50 lbs"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's wings are capable of powered flight for distances up to 50 feet per round, or 1/2 speed carrying up to 100 lbs"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's wings are capable of powered flight for distances up to 60 feet per round, or 1/2 speed carrying up to 150 lbs"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's wings are capable of powered flight for distances up to 70 feet per round, or 1/2 speed carrying up to 200 lbs or full strength capacity, whichever is greater"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's wings are capable of powered flight for distances up to 80 feet per round, or 1/2 speed carrying up to full strength capacity"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's wings are capable of powered flight for distances up to 100 feet per round; wings may be used to create a buffeting wind that will knock prone any targets within a 20-foot range who fail a DC 12 Reflex save"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's wings are capable of powered flight for distances up to 120 feet per round; wings may be used to create a cyclonic wind that will buffet any targets in a 30-foot radius for 2d6 damage per round (DC 14 Reflex save for half damage)"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's wings are capable of supersonic flight, causing a sonic boom capable of stunning anyone in a 50 foot range for 1d3 rounds (DC 16 Fortitude save to avoid stunning)"
                }
            ]
        }
    ],
    "Mental Mutations": [
        {
            "name": "Absorption",
            "type": "Passive",
            "range": "Touch",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body telekinetically absorbs and sometimes even benefits from specific forms of energy.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's skin ripples each time he is struck; he appears healthier"
                },
                {
                    "roll": "2",
                    "result": "The mutant's complexion deepens and he appears healthier"
                },
                {
                    "roll": "3",
                    "result": "The air around the mutant's body shimmers when attacked"
                },
                {
                    "roll": "4",
                    "result": "The mutant is suffused in a warm pink glow"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; mutant appears to roll with the punches exceptionally well"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant absorbs kinetic energy; takes only 1/2 damage from normal melee and missile attacks"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant absorbs kinetic energy; takes only 1/2 damage from normal melee and missile attacks and gains 1d3 hit points (up to normal hit point maximum) from each attack"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant absorbs kinetic energy; takes only 1/2 damage from normal melee and missile attacks and gains 1d6 hit points (up to normal hit point maximum) from each attack"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant absorbs kinetic energy; takes 1/2 damage from normal melee and missile attacks and gains 1 HD in hit points (up to normal hit point maximum) from each attack"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant absorbs kinetic energy and takes no damage from normal melee and missile attacks; damage from such attacks are converted into hit points added to the mutant's total; extra hit points beyond the mutant's normal total are lost immediately after combat ends"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant absorbs kinetic and electrical energy and takes no damage from these type of attacks; damage from such attacks are converted into hit points added to the mutant's total; extra hit points accrued that exceed the mutant's natural hit point total are temporarily retained for 1 turn after combat ends"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant absorbs kinetic, electrical, and heat energy and takes no damage from these type of attacks; damage from such attacks are converted into hit points added to the mutant's total; extra hit points accrued that exceed the mutant's natural hit point total are temporarily retained for 1d6 turns"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant absorbs kinetic, electrical, heat, and radiation energy and takes no damage from these type of attacks; damage from such attacks are converted into hit points added to the mutant's total; extra hit points accrued that exceed the mutant's natural hit point total are temporarily retained for 1d8 hours, or optionally, the mutant may choose to immediately funnel them directly into damage delivered by a successful bare-handed melee attack"
                }
            ]
        },
        {
            "name": "Cryokinesis",
            "type": "Active",
            "range": "Varies",
            "duration": "1 round/class level",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's mind is telekinetically capable of lowering the speed at which molecules vibrate.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "A dense ice fog rolls off the mutant's body"
                },
                {
                    "roll": "2",
                    "result": "The mutant's skin is icy blue and eyes are a cold, glazed white"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body becomes temporarily encased in layer of snow"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body temporarily becomes glassy, semi-transparent, and extremely cold to the touch"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's hands become icy, inflicting 1d6 of cold damage to target, save for half"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's hands become icy, inflicting 1d8 of cold damage to target, save for half"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's hands become icy, inflicting 1d10 of cold damage to target (save for half); liquids or targets which contain liquids (including living creatures) freeze, inflicting an additional 1d3 of damage per round until warmed by an external heat source"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's hands become so cold that 1d4 icy snowballs may be readily produced from the ambient moisture in the air; these snowballs may be flung all at once at a single target or multiple targets as missile attacks, causing 1d6 damage per snowball"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's hands become so cold that 1d6 ice daggers may be readily produced from the ambient moisture in the air; these ice daggers may be flung all at once at a single target or multiple targets as missile attacks causing 1d8 damage per icicle"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's body produces intense cold in a 30-foot radius that causes 4d6 of immediate damage to all targets within range (save for half); affected targets are frozen and take an additional 1d3 of damage per round until thawed"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's body produces an intense cold in a 40-foot radius that causes 8d6 of immediate damage to all targets within range (save for half); affected targets are frozen and take an additional 1d6 of damage per round until thawed"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's body temporarily reaches absolute zero, cryogenically freezing everything within a 50-foot radius centered on the mutant, including the air which solidifies and rains down as snow; effected targets are flash frozen and placed into a state of suspended animation for 1d12 hours. If thawed carefully and slowly, targets may be revived unharmed, otherwise thawing causes 6d6 damage from cellular disruption."
                }
            ]
        },
        {
            "name": "Death Field Generation",
            "type": "Active",
            "range": "5 feet per class level, Varies",
            "duration": "Instant",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's mind is capable of telekinetically decreasing or even shutting down the metabolic functions of other living creatures.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body is surrounded in a dark-violet nimbus"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body exudes the ghastly smell of rotting corpses"
                },
                {
                    "roll": "3",
                    "result": "Skin on the mutant's head becomes temporarily transparent, exposing the skull"
                },
                {
                    "roll": "4",
                    "result": "The mutant's hands and arms or equivalent limbs have no flesh, and are skeletal"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to stun 1 target creature for 1d3 rounds"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to stun 1 target creature for 1d6 rounds"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to stun up to 4 target creatures for 1d6 rounds"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant reduces every living thing within a 20 foot range to 1 hit point; targets who make their saving throw are only reduced to 1/2 of their current hit point total"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant reduces every living thing within a 20 foot range to 1 hit point; targets who fail their saving throw are also stunned for 1d10 rounds"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant reduces every living thing within a 30 foot range to 0 hit points and targets will die in 3 rounds if unattended; targets who make their saving throw are reduced to 1/2 of their current hit point total"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant reduces every living thing within a 50 foot range to 0 hit points and targets will die on the next round if unattended; targets who make their saving throw are only reduced to 1 hit point"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant reduces every living thing within a 100 foot range to 0 hit points; targets who fail their saving throw are killed outright; targets who make their saving throw are reduced to 0 hit points but may be successfully healed or bandaged if this action happens within 1 round"
                }
            ]
        },
        {
            "name": "Devolution",
            "type": "Active",
            "range": "10 feet per class level",
            "duration": "Instant",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's mind is capable of telekinetically altering the genetic code of target living creatures, regressing their DNA along evolutionary lines.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's forehead glows a bright green"
                },
                {
                    "roll": "2",
                    "result": "A bright green ray is projected from the mutant's eyes"
                },
                {
                    "roll": "3",
                    "result": "The mutant's hands are surrounded by a glowing green aureole resembling ever-changing DNA strands"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to temporarily remove one random mutation from target creature for 1d3 rounds; pure strain humans are unaffected"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to temporarily remove one random mutation from target creature for 1d6 rounds; pure strain humans lose 1d6 of Intelligence for 1d6 rounds. Save to reduce duration by half"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to temporarily remove two random mutations from target creature for 1d8 rounds (save for half duration); pure strain humans lose 1d8 of Intelligence (to a minimum of 3) for 1d8 rounds (save for half)"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to temporarily remove three random mutations from target creature for 1d10 rounds (save for half duration); pure strain humans lose 1d10 of Intelligence (to a minimum of 3) for 1d10 rounds (save for half); mutant may optionally permanently remove one mutation or defect with no other effect on target"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to temporarily remove all mutations from target mutant for 24 hours (manimals and plantients also lose the ability to speak and handle tools); pure strain humans become primitive ape-men with an Intelligence score of 3 for 24 hours. Save for half the duration"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant reduces target creature to a small, prehistoric version of its genotype"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant reduces target creature to a small, prehistoric version of its genotype"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant reduces target creature to a small, prehistoric version of its genotype"
                }
            ]
        },
        {
            "name": "Domination",
            "type": "Active",
            "range": "Touch",
            "duration": "1 round per class level",
            "save": "Willpower vs. mutation check",
            "general": "The mutant has the ability to mentally dominate the will of other sentient living creatures.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's eyes glow with an intense yellow light"
                },
                {
                    "roll": "2",
                    "result": "The mutant's facial features become temporarily beatific"
                },
                {
                    "roll": "3",
                    "result": "The mutant's merest hand gesture produces sparkles in the air"
                },
                {
                    "roll": "4",
                    "result": "A spinning hypnotic pinwheel of light appears above the mutant's head"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to plant a simple suggestion in the mind of target creature; suggested action may not cause harm to target creature or its allies"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to plant a complex suggestion in the mind of target creature; suggested action may not cause harm to target creature or its allies"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to mentally order target creature to perform any one action; this action may not cause direct harm to target creature, but may cause harm to its allies"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to mentally order target creature to perform any one action; this action may even cause self-harm to target creature and its allies"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant completely dominates the will of up to 10 HD of target creatures and may mentally order these creatures to perform any action possible"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant completely dominates the will of up to 20 HD of target creatures and may mentally order these creatures to perform any action possible"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant completely dominates the will of up to 50 HD of target creatures and may mentally order these creatures to perform any action possible"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant has completely dominated the will of up to 100 HD of target creatures and may mentally order these creatures to perform any action possible"
                }
            ]
        },
        {
            "name": "Dual Brain",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant possesses two brains, with some of the benefits of both.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's second brain is located in a large and pronounced bump in the forehead of the skull"
                },
                {
                    "roll": "2",
                    "result": "The mutant's second brain is located at the base of the spine or equivalent body form"
                },
                {
                    "roll": "3",
                    "result": "The mutant's second brain is located in a second head"
                },
                {
                    "roll": "4",
                    "result": "The mutant's second brain is located in a small malformed twin that is embedded in the mutant's chest"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by defect"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation results in cosmetic change only; mutant has non-functional second brain"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's Intelligence score increases by +2"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's Intelligence score increases by +3; gains additional +1 to Willpower saves"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's Intelligence score increases by +4; gains additional +2 to Willpower saves"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's Intelligence score increases by +5; gains additional +3 to Willpower saves and gains 1 additional random mental mutation"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's Intelligence score increases by +6 (to a maximum of 24); gains additional +3 to Willpower saves and gains 2 additional random mental mutations; movement is reduced by 10 feet"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's Intelligence score increases by +8 (to a maximum of 24); gains additional +3 to Willpower saves and 3 additional random mental mutations; movement is reduced by 15 feet"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant has a vast intellect; Intelligence score increases by +9 (to a maximum of 24); gains additional +3 to Willpower saves and 3 additional random mental mutations with no defects possible; movement is reduced by 20 feet"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's twin brains make mutant a supreme intellect with an ego to match; Intelligence score is changed to 24 and Personality to 18; gains an additional 4 random mental mutations with no defects possible; legs have atrophied to vestigial organs and movement rate is reduced to 0 feet per round"
                }
            ]
        },
        {
            "name": "Empathy",
            "type": "Active",
            "range": "Varies",
            "duration": "1 turn per class level",
            "save": "Willpower vs. Mutation check",
            "general": "The mutant has the ability to mentally read and control the emotional states of sentient creatures.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's eyes glow warmly behind closed lids"
                },
                {
                    "roll": "2",
                    "result": "The mutant's head is encircled and suffused with a warm glow"
                },
                {
                    "roll": "3",
                    "result": "The mutant's face suddenly transforms into a semblance of the target creature"
                },
                {
                    "roll": "4",
                    "result": "For a flickering instant, the mutant and target creature appear to exchange bodies and places"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to mentally sense the surface emotional state of 1 target sentient"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to mentally sense the primary emotional state of 1 target sentient, including general truthfulness and intent; the mutant may project an added emotional state of his or her choosing onto target sentient"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to mentally sense the emotional state of 1 target sentient, including truthfulness, intent, and core feelings; the mutant may project a replacement emotional state of his or her choosing unto target creature"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to mentally sense the emotional state of up to 3 target sentients, including their truthfulness, intent, and core feelings; the mutant may project replacement emotional states of his or her choosing onto up to 3 of the same target sentients"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to mentally sense the emotional state of up to 10 target sentients, including truthfulness, intent, and core feelings; if targets miss their save, the mutant may control these sentients, who will regard the mutant quite favorably"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to control the mood and disposition of any sentient creatures within a 20 foot radius; all sentients successfully controlled in this manner will regard the mutant as a mentor figure whose advice should be followed"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to control the mood and disposition of any sentient creatures within a 50 foot radius; all sentients successfully controlled in this manner will regard the mutant as a leader whose orders are to be obeyed at all costs"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to control the mood and disposition of any living sentient within a 100 foot radius; all sentients successfully controlled in this manner will regard the mutant as their messianic leader and godhead, wishing only to serve, worship, and protect their new spiritual leader"
                }
            ]
        },
        {
            "name": "Force Field Generation",
            "type": "Active",
            "range": "Varies",
            "duration": "1 turn per class level",
            "save": "None",
            "general": "The mutant's mind is able to project a telekinetic shield that blocks various attacks from harming the mutant and his allies.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant generates a force field that is completely invisible"
                },
                {
                    "roll": "2",
                    "result": "The mutant generates a force screen that causes the air to ripple in a wavy pattern and hums noticeably"
                },
                {
                    "roll": "3",
                    "result": "The mutant is surrounded by wall of translucent blue light"
                },
                {
                    "roll": "4",
                    "result": "The mutant's force field appears as a yellow-orange hexagonal grid that waves and undulates"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant projects a personal force field that will block all physical attacks, absorbing 6 points of damage before it falls"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant projects a personal force field that will block all physical attacks, absorbing 12 points of damage before it falls"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant projects a personal force field that will block all physical and energy-based attacks, absorbing 20 points of damage before it falls"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant projects a personal force field that will block all physical, mental, and energy-based attacks, absorbing 30 points of damage before it falls"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant projects a force field 5 feet in radius that will block all physical and energy-based attacks, absorbing up to 40 points of damage before it is brought down"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant projects a strong force field 10 feet in radius that will block all physical and energy-based attacks, absorbing up to 50 points of damage before it is brought down"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant projects a mighty force field 20 feet in radius that will block all physical, mental, and energy-based attacks, absorbing up to 75 points of damage before it is brought down"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant projects an impregnable force field 30 feet in radius that will block all physical, mental, radiation, and energy-based attacks, absorbing up to 100 points of damage before it is brought down"
                }
            ]
        },
        {
            "name": "Heightened Intelligence",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant is gifted with supernormal intelligence; Intelligence score may not be raised above 24.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's head is overlarge with an extended, tall forehead"
                },
                {
                    "roll": "2",
                    "result": "The mutant's head is bald and body is hairless (or equivalent for genotype)"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body beneath the neck is notably atrophied"
                },
                {
                    "roll": "4",
                    "result": "The mutant appears to be a far-future highly-evolved version of his or her genotype, with slender body, slight facial features, and overlarge head and eyes"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's Intelligence score is increased by +1"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's Intelligence score is increased by +2"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's Intelligence score is increased by +3"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's Intelligence score is increased by +4; Artifact checks succeed automatically up to tech level 2"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's Intelligence score is increased by +5; Artifact checks succeed automatically up to tech level 3"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's Intelligence score is increased by +6 (to a maximum of 24); artifact checks succeed automatically up to tech level 4"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is a super-genius and Intelligence score is increased by +7 (to a maximum of 24); Artifact checks succeed automatically up to tech level 5"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's perspicacious intellect seems almost god-like, with an Intelligence score of 24; Artifact checks happen automatically for all tech levels; mutant cannot be surprised"
                }
            ]
        },
        {
            "name": "Illusion Generation",
            "type": "Active",
            "range": "Line of sight",
            "duration": "2 rounds per class level",
            "save": "Willpower vs. mutation check",
            "general": "The mutant has the ability to mentally project life-like illusions into the minds of living creatures.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's eyes turn all-white;"
                },
                {
                    "roll": "2",
                    "result": "The mutant must touch the forefingers of one hand to his forehead;"
                },
                {
                    "roll": "3",
                    "result": "The mutant's forehead appears to ripple in concentric circles;"
                },
                {
                    "roll": "4",
                    "result": "The mutant appears to be is surrounded by a rotating miasma of polychromatic chaos."
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able project a simple illusion that is unmoving and purely visual"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able project a more complex illusion that moves, but is purely visual"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able project a complex illusion that moves, with both visual and auditory elements"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able project a complex illusion that moves, with both visual, auditory, and olfactory elements"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able project an interactive illusion that moves, with both visual, auditory, olfactory, and tactile elements; target's belief in the apparition is so strong that the illusion may cause up to 1d6 in damage"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able project an interactive illusion that moves, with both visual, auditory, olfactory, and tactile elements; target's belief in the apparition is so strong that the illusion may cause up to 2d6 in damage"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is capable of projecting a compelling fantasy world, with both visual, auditory, olfactory, and tactile elements; illusion may cause up to 3d6 in damage per targeted attack; the illusion does not appear to take damage from attacks and continues to exist for the full duration of the mutation"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is seemingly capable of reordering reality itself, creating a complex and interactive new world with unerring verisimilitude for all living creatures within range; events transpire in the illusory reality at the mutant's direction, and have the same impact and results as though they actually happened, though physical object cannot be harmed or take damage from the illusion \u2014 only living creatures able to perceive the illusion may be damaged or affected"
                }
            ]
        },
        {
            "name": "Life Force Reflection",
            "type": "Active",
            "range": "Varies",
            "duration": "Instant",
            "save": "As attack reflected",
            "general": "The mutant is able to mentally flip his quantum state, causing mutational attacks (physical or mental) to be reflected back upon the assailant. This mutation grants the mutant the ability to react out of initiative order (but doing so uses one of that mutant's action die for the round).",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's appearance momentarily shimmers and sparkles"
                },
                {
                    "roll": "2",
                    "result": "A circular field of mirroring energy appears in front of the mutant"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body visibly distorts, bowing slightly before rebounding"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body momentarily becomes a silhouetted doorway into another dimension"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to reflect up to 1d6 in damage or 1/2 of other effects from any mutation power directed at him or her back against the attacker; mutant takes remaining damage or 1/2 effect"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to reflect up to 2d6 in damage or other effects from any mutation power directed at him or her back against the attacker; mutant is unaffected by the attack"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to reflect up to 3d6 in damage or other effects from any mutation power directed at him or her back against the attacker; mutant is unaffected by the attack; the mutant is healed for 1d3 hit points"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to reflect up to 4d6 in damage or other effects from any mutation power directed at him or her; the reflected damage or effect may be directed at any other single target; mutant is unaffected by the attack; mutant is healed for 1d4 hit points"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to reflect up to 5d6 in damage or other effects from any mutation power directed at him or her; the reflected damage or effect may be directed at any other available targets (per the reflected mutation); mutant is unaffected by the attack; mutant is healed for 1d5 hit points"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to reflect up to 6d6 in damage or other effects from all mutation powers directed at him or her; the reflected damage or effect may be directed at any other available targets (per the reflected mutation); mutant is unaffected by the attack; mutant is healed for 1d7 hit points"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to reflect all mutation powers directed at him or her in a single round; the full effects of these reflected mutations may be directed at any number of targets within range (per the reflected mutations); mutant is unaffected by the attack; mutant is healed for 1d14 hit points"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to reflect all mutation powers directed at him or her in a single round; the effects of these reflected mutations are doubled (where applicable) and may be directed at any number of targets within range (per the reflected mutations); mutant is unaffected by the attack; mutant is restored to full hit points"
                }
            ]
        },
        {
            "name": "Magnetic Control",
            "type": "Active",
            "range": "10 feet per caster level",
            "duration": "1 round per caster level",
            "save": "Reflex vs. mutation check",
            "general": "The mutant's mind is capable of telekinetically controlling ferrous materials and electromagnetic fields.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's head is bald, and the mutant has arched eyebrows"
                },
                {
                    "roll": "2",
                    "result": "The mutant's eyes appear to be momentarily lit as though by a soft spotlight, even in the dark"
                },
                {
                    "roll": "3",
                    "result": "The mutant's merest glance causes involuntary flinching in others"
                },
                {
                    "roll": "4",
                    "result": "The mutant's skull and other head tissues become momentarily transparent, revealing his or her brain"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's mind is able to lift and move one ferrous object with the equivalent force of a 6 Strength"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's mind is able to lift and move one ferrous object with the equivalent force of a 9 Strength"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's mind is able to lift and move one ferrous object with the equivalent force of a 12 Strength"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's mind is able to lift and move one ferrous object with the equivalent force of a 16 Strength; mutant is able to lift and move any non-plant creature by manipulating the iron content of their blood"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to lift, move, and otherwise control up to 4 ferrous objects/creatures, or objects/creatures containing any ferrous atoms whatsoever, with the equivalent of an 18 Strength"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to lift, move, and otherwise control up to 8 ferrous objects/creatures, or objects/creatures containing any ferrous atoms whatsoever, with the equivalent of an 18 Strength; mutant is able to confuse the actions of any one non-patron AI; mutant may deactivate any one technological device in range"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to lift, move, and otherwise control any number of ferrous objects/creatures, or objects/creatures containing any ferrous atoms whatsoever, with the equivalent of a 20 Strength; mutant is able to control the actions of any single non-patron AI; mutant may deactivate up to 3 technological devices in range"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's mind cools to cryogenic levels and the mutant becomes a large superconducting magnet; the mutant is able to lift, move, and otherwise control any number of ferrous objects/creatures, or objects/creatures containing any ferrous atoms whatsoever, with the equivalent of a 24 Strength; mutant is able to control the actions of, or effectively destroy, the mind of any single non-patron AI; mutant may render any single technological device in range permanently inert"
                }
            ]
        },
        {
            "name": "Mind Control",
            "type": "Active",
            "range": "10 feet per character level",
            "duration": "Varies",
            "save": "Willpower vs. mutation check",
            "general": "The mutant has the ability to manipulate the thought patterns of other living creatures, causing them to regard them favorably.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's head is bald, and the mutant has arched eyebrows"
                },
                {
                    "roll": "2",
                    "result": "The mutant's eyes appear to be momentarily lit as though by a soft spotlight, even in the dark"
                },
                {
                    "roll": "3",
                    "result": "The mutant's merest glance causes involuntary flinching in others"
                },
                {
                    "roll": "4",
                    "result": "The mutant's skull and other head tissues become momentarily transparent, revealing his or her brain"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to cause a single 1 HD creature or sentient to regard the mutant as friendly and worthy of trust for 6 hours"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to cause up to 3 HD in creatures or sentients to regard the mutant as friendly and worthy of trust for 12 hours"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to cause up to 6 HD in creatures or sentients to regard the mutant as friendly and worthy of trust for 1 day"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to cause up to 12 HD in creatures or sentients to regard the mutant as their revered advisor for 1 day"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to cause up to 24 HD in creatures or sentients to regard the mutant as their charismatic leader for 1 day"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to cause up to 10 sentient creatures within a 20 foot radius to obey the mental orders of the mutant; for each additional 24 hour period that passes, target sentients receive a new saving throw at a +3 to determine if they remain under the mutant's mental sway"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to cause any sentient creatures within a 30 foot radius to hold the mutant in the high regard and to consider themselves devoted followers of the mutant; for each additional 24 hour period that passes, target sentients receive a new saving throw to determine if they remain under the mutant's mental sway"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to cause any sentient creatures within a 50 foot radius to hold him or her in the highest possible regard and to consider themselves fanatical followers of the mutant, willing to die for him or her if necessary; for each additional 24 hour period that passes, target sentients receive a new saving throw at a -3 to determine if they remain under the mutant's mind control sway"
                }
            ]
        },
        {
            "name": "Mental Blast",
            "type": "Active",
            "range": "10 feet per caster level",
            "duration": "Instant",
            "save": "Willpower vs. mutation check",
            "general": "The mutant's mind is capable of causing severe damage to the brain of other living creatures, impairing all bodily functions.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "A narrow beam of white light shoots directly from the mutant's forehead"
                },
                {
                    "roll": "2",
                    "result": "A torch of jagged white energy flares from the mutant's head"
                },
                {
                    "roll": "3",
                    "result": "Concentric rings of white light radiate from the heads of the mutant and all of his or her targets"
                },
                {
                    "roll": "4",
                    "result": "A piercing white noise whine emanates from the bones in the mutant's skull"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant causes 1d4 damage to a single target creature, save for half damage"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant causes 1d6 damage to a single target creature; creature cannot act for 1 round; target's Intelligence is permanently reduced -1, save for half damage and no ability reduction"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant causes 2d6 damage to a single target creature; creature is stunned for 1d3 rounds; target's Intelligence is permanently reduced -2, save for half damage"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant causes 3d6 damage to a single target creature; creature is stunned for 1d5 rounds; target's Intelligence is permanently reduced -3, save for half damage and no ability reduction"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant causes 6d6 damage to 2 target creatures; creatures are stunned for 1d8 rounds targets' Intelligence scores are permanently reduced -4, save for half damage and no ability reduction"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant shuts down the mind of up to 4 target creatures, causing them to immediately pass into a permanent deep coma, save to be stunned for 1 round per class level"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant completely shuts down the mind of up to 6 target creatures, causing death within 1 round if not properly resuscitated (CPR or equivalent); resuscitated creatures have 1 hit point and are mindless vegetables. A successful save results in a deep coma"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant completely shuts down the mind of up to 8 target creatures, causing instant death, a successful save results in a deep coma"
                }
            ]
        },
        {
            "name": "Mental Shield",
            "type": "Active",
            "range": "Varies",
            "duration": "1 turn per character level",
            "save": "None",
            "general": "The mutant's mind is able to shield itself from mental mutation attacks. This mutation grants the mutant the ability to react out of initiative order (but doing so uses one of that mutant's action die for the round).",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant generates a mental shield that appears as a translucent blue-green sphere around the mutant's head"
                },
                {
                    "roll": "2",
                    "result": "The mutant generates a mental shield that appears as an illusory riveted metal band around the mutant's forehead"
                },
                {
                    "roll": "3",
                    "result": "The mutant's mental shield manifests as numerous small, glowing crystals that orbit the mutant's head"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant shields himself from 1d6 of damage from a mental mutation attack"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant shields himself from 2d6 of damage or 1/2 effect from a mental mutation attack"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant shields himself from up to 2d6 of damage or 1/2 effect from a mental mutation attack; if attack has a saving throw, a successful save means that the attack was entirely negated"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant shields himself from up to 3d6 of damage or 1/2 effect from a mental mutation attack; if attack has a saving throw, a successful save means that the attack was entirely negated"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant shields himself or herself from up to 4d6 of damage and is fully shielded from other effects of a mental mutation attack; if attack has a saving throw, a successful save means that the attack was entirely negated and the negated mutation may not be used by the attacker again that day"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant projects a sturdy mental shield in a 10 foot radius that is proof against all mental mutation attacks; any mental mutation attacks aimed at targets within the shield are negated and fail outright"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant projects a mighty mental shield in a 20 foot radius that is proof against all mental mutation attacks; any mental mutation used inside the mental shield (except for the mutant's own) or aimed at targets within the shield are negated and fail outright"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant projects a massive mental shield in a 50 foot radius that dampens all mental mutation attacks; any mental mutation used inside the mental shield (except for the mutant's own) or aimed at targets within the shield are negated and fail outright. any mental mutation used inside or against the shield (except for the mutant's) may not be used again that day"
                }
            ]
        },
        {
            "name": "Mental Reflection",
            "type": "Active",
            "range": "Varies",
            "duration": "Instant",
            "save": "As attack reflected",
            "general": "The mutant is able to mentally reflect the effects of other mental mutations back upon the attacker. This mutation grants the mutant the ability to react out of initiative order (but doing so uses one of that mutant's action die for the round).",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's appearance momentarily glimmers and gleams"
                },
                {
                    "roll": "2",
                    "result": "A octagonal field of reflective energy appears in front of the mutant"
                },
                {
                    "roll": "3",
                    "result": "The air around the mutant's head appears to distort, warping slightly before rebounding"
                },
                {
                    "roll": "4",
                    "result": "The mutant's eyes momentarily become blackened twin orbs"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to reflect up to 1d6 in damage or 1/2 of other effects from any mental mutation power directed at him back against the attacker; mutant takes remaining damage or 1/2 effect"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to reflect up to 2d6 in damage or other effects from any mental mutation power directed at him back against the attacker; mutant is unaffected by the attack"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to reflect up to 3d6 in damage or other effects from any mental mutation power directed at him back against the attacker; mutant is unaffected by the attack"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to reflect up to 4d6 in damage or other effects from any mental mutation power directed at him; the reflected damage or effect may be directed at any other single target; mutant is unaffected by the attack"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to reflect up to 5d6 in damage or other effects from any mental mutation power directed at him; the reflected damage or effect may be directed at any other available targets (per the reflected mutation); mutant is unaffected by the attack"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to reflect up to 6d6 in damage or other effects from all mental mutation powers directed at him; the reflected damage or effect may be directed at any other available targets (per the reflected mutation); mutant is unaffected by the attack"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to reflect all mental mutation powers directed at him in a single round; the full effects of these reflected mental mutations may be directed at any number of targets within range (per the reflected mutations); mutant is unaffected by the attack"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to reflect all mental mutation powers directed at him in a single round; the effects of these reflected mental mutations are doubled (where applicable) and may be directed at any number of targets within range (per the reflected mutations); mutant is unaffected by the attack"
                }
            ]
        },
        {
            "name": "Molecular Disruption",
            "type": "Active",
            "range": "5 feet per class level",
            "duration": "Instant",
            "save": "None",
            "general": "The mutant's mind is capable of telekinetically severing the molecular bonds and atomic valences of ordinary matter.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's hands project a bright yellow ray of light that sizzles when it hits target"
                },
                {
                    "roll": "2",
                    "result": "The mutant's eyes send out twin beams of searing red-orange energy that zigzags unerringly towards targets"
                },
                {
                    "roll": "3",
                    "result": "The mutant's forefinger casts forth a pulsating red beam that whines rhythmically"
                },
                {
                    "roll": "4",
                    "result": "The mutant's body momentarily flashes as a bright green silhouette revealing a photo-reversed black skeleton inside"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to disintegrate up to 5% of the total matter within one creature or object, causing 1d3 in damage. Roll a d6 on crit table I"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to disintegrate up to 10% of the total matter within one creature or object, causing 1d6 in damage. Roll d8 on crit table I"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to disintegrate up to 15% of the total matter within one creature or object, causing 2d6 in damage. Roll d10 on crit table II"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to disintegrate up to 25% of the total matter within one creature or object, causing 3d6 in damage. Roll d12 on crit table III"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant completely disintegrates one target creature or object no larger than an average sentient; force fields and screens take 15 points of damage"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant completely disintegrates one target creature or object up to a maximum of 5 cubic feet in size; force fields and screens take 25 points of damage"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant completely disintegrates one target creature or object up to a maximum of 10 cubic feet in size; force fields and screens take 50 points of damage"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant completely disintegrates one target creature or object up to a maximum of 15 cubic feet in size, including objects made of duralloy and permaglass; force fields and screens are destroyed and fail utterly"
                }
            ]
        },
        {
            "name": "Molecular Integration",
            "type": "Active",
            "range": "Touch",
            "duration": "Instant",
            "save": "None",
            "general": "The mutant's mind is capable of telekinetically reassembling matter into its original pattern and quantum state at the molecular level.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's hands glow with a bluish white light"
                },
                {
                    "roll": "2",
                    "result": "The mutant's hands radiate bluewhite rings of concentric energy"
                },
                {
                    "roll": "3",
                    "result": "The mutant's hands cast forth a pulsating blue-white light that bathes target creature or object in an angelic glow"
                },
                {
                    "roll": "4",
                    "result": "The mutant's entire body is bathed in a cascading shower of blue-white sparkles which gradually flow over to target creature or object"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to heal up to 1d3 in damage to any single creature or object"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to heal up to 1d6 in damage to any single creature or object"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to heal up to 1d12 in damage to any single creature or object"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to heal up to 2d6 in damage to any single creature or object; cures creatures who were poisoned; repairs broken artifacts"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to heal up to 3d6 in damage to any single creature or object; restores creatures who were poisoned, mind controlled, or devolved; repairs broken artifact or fully recharges power cell"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant mentally reassembles and restores a single creature or object (up to the size of an average sentient) exactly as they existed at any point in time during the last 1 hour; mutant may restore a dead creature to life or to completely restore a destroyed object"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant mentally reassembles a single creature or object (up to 5 cubic feet in size) exactly as they existed at any point in time during the last 24 hours; mutant may restore a dead creature to life or to completely restore a destroyed object"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant mentally disassembles and reassembles a single creature or object (up to 10 cubic feet in size) exactly as they existed at any point in time during the last month, including possessions, experience points totals, memories, artifact charges; with direct access to any remaining portion of a single creature or object, mutant may restore a dead creature to life or to completely restore a destroyed object. Note: while it may be possible to create multiple copies of a creature or object by this method, the existence of duplicates will be tenuous at best, and both will implode into clouds of pure molecular hydrogen if they come into physical contact with each other for any reason"
                }
            ]
        },
        {
            "name": "Pyrokinesis",
            "type": "Active",
            "range": "10 feet per class level",
            "duration": "Instant",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's mind is capable of greatly exciting the molecular motion of target creatures and objects until the ignite.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body begins to shimmer with ripples of heated air"
                },
                {
                    "roll": "2",
                    "result": "The mutant's body starts to glow, beginning with a dull red and eventually becoming white hot"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body hums as he begins to broadcast microwave radiation"
                },
                {
                    "roll": "4",
                    "result": "The mutant's hands catch fire as they become sheathed in glowing plasma"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's hands fire a torch of fire, inflicting 1d6 of heat damage to single target. Save for half"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's hands shoot jets of flame, inflicting 1d8 of heat damage to a single target. Save for half"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant creates a small fireball which strikes target, inflicting 1d10 of heat damage to target (save for half); combustible materials held or worn by target catch fire, inflicting an additional 1d3 of damage per round until extinguished with DC 18 Reflex save"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant creates a large fireball which strikes target, inflicting 1d14 of heat damage to target (save for half); combustible materials held or worn by target catch fire, inflicting an additional 1d5 of damage per round until extinguished with a DC 20 Reflex save; metal objects held or worn become too hot to hold or wear and must be discarded immediately or the target suffers and additional 1d5 of damage per round"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant releases an intense heat pulse in a 20 foot radius that causes 3d6 damage to all targets within range (save to resist); setting targets on fire for an additional 1d6 of damage per round until extinguished with a DC 24 Reflex save"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant releases a burning ring of fire in a 30 foot radius that burns and causes 4d6 damage to all targets within range (save for half); setting targets afire for an additional 1d8 of damage per round until extinguished with a DC 28 Reflex save"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant releases a huge gout of splashing flame in a 40 foot radius that causes 8d6 damage to all targets within range (save for half); setting targets ablaze for an additional 1d8 of damage until extinguished with a DC 30 Reflex save"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's body goes super-nova, releasing a 10d6 heat blast in a 50 foot radius centered on the mutant, save for half. Affected targets missing their save are also blinded for 1d4 rounds; targets take an additional 1d10 of fire damage per round until extinguished with a DC 32 Reflex save"
                }
            ]
        },
        {
            "name": "Telekinesis",
            "type": "Active",
            "range": "5 feet per class level",
            "duration": "1 round per class level",
            "save": "Reflex vs. mutation check",
            "general": "The mutant is capable of telekinetically moving targets and objects with his or her mind.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Segmented lines of translucent force are visible between the mutant's head and target object"
                },
                {
                    "roll": "2",
                    "result": "The mutant's head is surrounded by a translucent white sphere of energy when mutation is used"
                },
                {
                    "roll": "3",
                    "result": "The mutant's eyes become all-white when this mutation is used"
                },
                {
                    "roll": "4",
                    "result": "Huge translucent hands manifest around target whenever this mutation is used"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's mind is able to lift and move one target with the equivalent force of a 6 Strength"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's mind is able to lift and move one target with the equivalent force of a 9 Strength"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's mind is able to lift and move one target with the equivalent force of a 12 Strength; 1d4 damage melee attacks using the targeted object are possible on a d16 action die"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's mind is able to lift and move one target with the equivalent force of a 15 Strength; 1d6 melee attacks are possible using targeted object on a d20 action die; simple manipulations of the target are possible with d16 action die against a judge-determined DC"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to lift, move, and otherwise control up to 4 targets with the equivalent of an 18 Strength; melee attacks are possible with targeted object using a d24 action die; simple manipulations of the target are possible with d20 action die against a judge-determined DC"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to lift, move, and otherwise control up to 2 targets within range with the equivalent of a 20 Strength; mutant may cause up to 2d6 in crushing damage via telekinetic strength to each targeted creature or object; mutant may fly up to 30 feet"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to lift, move, and otherwise control up to 4 targets within range with the equivalent of a 22 Strength; mutant may cause up to 5d6 in crushing damage via telekinetic strength to each targeted creature or object; mutant may fly 50 feet while carrying any targeted creatures or objects"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to lift, move, and otherwise control any number of targets within range with the equivalent of a 24 Strength; mutant may cause up to 10d6 in damage via telekinetic strength to each targeted creature or object, such as turning objects inside-out or causing them to implode in upon themselves; mutant may fly 100 feet while carrying any targeted creatures or objects"
                }
            ]
        },
        {
            "name": "Telepathy",
            "type": "Active",
            "range": "20 feet per class level, Varies",
            "duration": "1 round per class level",
            "save": "Willpower vs. mutation check",
            "general": "The mutant has the ability to mentally read the thoughts of target sentient creatures, and to project mutant's",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The irises of the mutant's eyes vanish"
                },
                {
                    "roll": "2",
                    "result": "The mutant's head is encircled with a subtle white glow"
                },
                {
                    "roll": "3",
                    "result": "The mutant's eyebrows are arched"
                },
                {
                    "roll": "4",
                    "result": "A shrill sonic hum fills the air"
                },
                {
                    "roll": "5",
                    "result": "The mutant possesses all of the above manifestations"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure,** mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure,** mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to read a single surface thought of 1 target sentient"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to read the surface thoughts of 1 target sentient including sincerity and intent; mutant may project one thought of his or her own into target sentient's mind"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to read the surface thoughts of 1 target sentient and to carry on a limited telepathic conversation of no more than two sentences each"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to read the surface and deeper thoughts of 1 target sentient and to carry on a telepathic conversation no more than ten seconds length"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to read the thoughts, recent memories, and intentions of all sentients within range, but mutant must make successful DC 15 Willpower save to successfully process and understand the telepathic burbling of multiple minds; mutant may transmit any one thought to all sentients within range or the mutant may telepathically communicate with any single known sentient within 100 feet"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant is able to read the thoughts, memories, and intentions of all sentients within range, but mutant must make successful DC 12 Willpower save to process and understand the telepathic burbling of multiple minds; mutant may transmit any thoughts to all sentients within range; the mutant may telepathically communicate with any single known sentient within a 1 mile range"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant is able to read and process the thoughts, memories, and intentions of all sentients within range; mutant may transmit any thoughts to all sentients within range; the mutant may telepathically communicate with any single known sentient within a 10 mile range"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant is able to read and process the thoughts, memories, and intentions of all sentients within range; mutant may transmit any thoughts to all sentients within range; the mutant may telepathically communicate with any single known sentient within a 50 mile range"
                }
            ]
        },
        {
            "name": "Temporary Invulnerability",
            "type": "Active",
            "range": "N/A",
            "duration": "2 rounds per class level",
            "save": "None",
            "general": "The mutant's mind creates a temporary skin-tight telekinetic shield around the mutant.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body twinkles and sparkles subtly when attacked"
                },
                {
                    "roll": "2",
                    "result": "All objects, including clothes and possessions, are pushed away from the mutant's body by 1/4 inch"
                },
                {
                    "roll": "3",
                    "result": "For a microsecond the mutant's body appears to shift into a sideways dimension"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure,** mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure,** mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's AC increases by +4"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's AC increases by +6; +2 to Fortitude saves; mutant does not take the first 5 points of damage inflicted each round"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's AC increases by +8; +4 to Fortitude and Reflex saves; mutant does not take the first 10 points of damage inflicted each round"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's AC increases by +10, +5 to Fortitude, Reflex, and Willpower saves; mutant does not take up to 25 points of damage in a single round"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's AC increases by +12, +6 to Fortitude, Reflex, and Willpower saves; mutant does not take up to 50 points of damage in a single round"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant cannot be harmed, controlled, or manipulated by any form of physical or mental attack, and can shake off up to 75 points of damage in a single round; mutant does not need to breathe"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant cannot be harmed, controlled, or manipulated by any form of physical or mental attack, and can shake off up too 150 points of damage in a single round; mutant does not need to eat or breathe"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant cannot be harmed, controlled, or manipulated by any form of physical or mental attack, and can easily survive even an atomic detonation or free fall from orbit, walking away completely unharmed and unscathed; mutant does not need to eat or breathe"
                }
            ]
        },
        {
            "name": "Thought Spike",
            "type": "Active",
            "range": "N/A",
            "duration": "Varies",
            "save": "None",
            "general": "The mutant's mental functions speed up in such a fashion that mental mutation checks and Will saving",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Transparent red bands of ribboned energy rotate around the mutant's head in elliptical patterns"
                },
                {
                    "roll": "2",
                    "result": "The mutant's head appears to enveloped in a jet of cool red flames, obscuring all of his facial features"
                },
                {
                    "roll": "3",
                    "result": "The mutant's head appears to transform into a red ruby-like material"
                },
                {
                    "roll": "4",
                    "result": "An ethereal red armet appears around the mutant's head"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure,** mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure,** mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's mental mutation checks are increased by 1d3 for the next 3 rounds"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's mental mutation checks and Will saves are increased by 1d4 for the next 4 rounds"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's mental mutation checks and Will saves are increased by 1d6 for the next 6 rounds"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's mental mutation checks and Will saves are increased by 1d8 for the next 8 rounds"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's mental mutation checks and Will saves are increased by 1d10 for the next 10 rounds; the mutant cannot be surprised"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's mental mutation checks and Will saves are increased by 1d16 for the next 16 rounds or until the end of combat; the mutant cannot be surprised"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's mental mutation checks and Will saves are increased by 1d20 for the next 20 rounds or until the end of combat; the mutant cannot be surprised. These effects extend to any allied creature within 10 feet of the mutant"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's mental processes accelerate to super luminal speeds, effectively rendering him immune to any mental attack before it occurs; this effect lasts until the end of combat or until all immediate danger has passed. Mutant's own mutation checks are all critical successes (as if natural 20s were rolled)"
                }
            ]
        },
        {
            "name": "Time Sense",
            "type": "Active",
            "range": "N/A",
            "duration": "1 round per class level",
            "save": "none",
            "general": "",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's face appears to blur horizontally as his eyes glow with a deep crimson light"
                },
                {
                    "roll": "2",
                    "result": "The mutant becomes semi-transparent as his form appears to revolve vertically around a central axis (does not effect the true facing of the mutant)"
                },
                {
                    "roll": "3",
                    "result": "Whenever the mutant moves while this mutation is activated, his physical form appears to strobe into three identical forms, one cyan-colored, followed by magenta and then yellow, as each version follows the other exactly a half-second apart"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure,** mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure,** mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant's attack rolls are increased by 1"
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant's attack rolls and AC are increased by 1d3"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant's attack rolls, mutation checks, and AC are increased by 1d4"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant's attack rolls, mutation checks, and AC are increased by 1d6; roll for each separate effect"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant's attack rolls, mutation checks, and AC are increased by 1d8; roll for each separate action or benefit"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant's attack rolls, mutation checks, and AC are increased by 1d10; roll for each separate action or benefit"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant's and his allies' attack rolls, mutation checks, and AC are increased by 1d12; roll this once"
                },
                {
                    "roll": "32+",
                    "result": "**Success**, The mutant's ability to sense future events is so keen, he cannot be killed or struck in combat, nor can any of his allies, if such deaths are avoidable by virtue of any possible and practical action taken by the mutant (judge's discretion); any attack rolls made by the mutant or his allies automatically hit, it possible. Effect lasts until the end of combat or immediate danger"
                }
            ]
        }
    ],
    "Defects": [
        {
            "name": "Time Stop",
            "type": "Active",
            "range": "10 feet per class level",
            "duration": "1 round per class level",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's mind is capable of isolating small discreet pockets of space/time from the rest of the universe and freezing that moment in time.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Target color-shifts towards the red spectrum"
                },
                {
                    "roll": "2",
                    "result": "Target is surrounded by a shifting waves of banded color"
                },
                {
                    "roll": "3",
                    "result": "Target becomes a black silhouette of no-light"
                },
                {
                    "roll": "4",
                    "result": "Target's form blurs but freezes in place"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure,** mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-11",
                    "result": "**Failure,** mutation may not be used again that day"
                },
                {
                    "roll": "12-13",
                    "result": "**Success**, The mutant is able to stop the passage of time for one target creature; creature is effectively paralyzed and immune to all other attacks for 1 round."
                },
                {
                    "roll": "14-17",
                    "result": "**Success**, The mutant is able to stop the passage of time for one target creature; creature is effectively paralyzed and immune to all other attacks for 1d3 rounds, save to be stunned for 1d3 rounds instead"
                },
                {
                    "roll": "18-19",
                    "result": "**Success**, The mutant is able to stop the passage of time for one target creature; creature is effectively paralyzed and immune to all other attacks for 1d6 rounds, save for 1d3 rounds instead"
                },
                {
                    "roll": "20-23",
                    "result": "**Success**, The mutant is able to stop the passage of time for one target creature; creature is effectively paralyzed and immune to all other attacks for 1d8 rounds, save for 1d4 rounds instead"
                },
                {
                    "roll": "24-27",
                    "result": "**Success**, The mutant is able to stop the passage of time for up to 4 target creatures; creatures are effectively paralyzed and immune to all other attacks for 1d10 rounds, save for 1d5 rounds instead"
                },
                {
                    "roll": "28-29",
                    "result": "**Success**, The mutant has stopped time for 1 turn in a sphere with a 10 foot radius centered on the mutant; all creatures and objects within the sphere (except the mutant) are effectively paralyzed and frozen in action. Successful saves result in being repelled from the sphere, but the target remains in a stunned state for 1 turn"
                },
                {
                    "roll": "30-31",
                    "result": "**Success**, The mutant creates a time lock lasting 3 turns in a sphere with a 25 foot radius centered on the mutant; all creatures and objects within the sphere (except the mutant) are effectively paralyzed and frozen in action. Excepting items carried on the mutant's person when the time lock occurred, all items and artifacts are non-functional during the time lock. Successful saves result in being repelled from the sphere, but the target remains in a stunned state for 3 turns"
                },
                {
                    "roll": "32+",
                    "result": "The mutant creates an entire pocket universe lasting 1 hour that is comprised of everything originally located within a 50 foot radius sphere, centered on the mutant. This pocket universe contains localized gravity and sufficient air for inhabitants, but only just. Any extraordinary exertion or combustion sources will quickly deplete the available air supply. This pocket universe floats in the absolute blackness of an endless void. Any unprotected living creature that steps outside the pocket universe is subject to 10d6 of cold damage, asphyxiation, and is immediately transported to a random dimension of existence"
                }
            ]
        },
        {
            "name": "Asymmetrical Body",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body plan is not symmetrical.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant has only 1/2 of a normal body, roll 1d4: (**1**) Mutant is missing lower half, no legs, movement 0 feet; (**2**) Mutant is missing upper half, head springs directly from hips, no arms or torso, no normal attacks; (**3**) Mutant is missing vertical half of body no arm or leg on one side, melee and missile attack every other round, 1/2 movement; (**4**) Mutant is missing one arm and one leg on opposite sides of the body, melee and missile attack every other round, 1/2 movement"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's body is greatly atrophied on one side, with a stump-like and useless arm and leg on the affected side; melee and missile attacks at -3, -10 feet movement speed"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant has one arm much larger than the other; +1 Strength, -2 Agility"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant has one leg much longer than the other; +5 feet movement speed, -2 Agility"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's posture is distorted, roll 1d4: (**1**) Mutant's spine is permanently curved to the left; (**2**) Mutant's spine is permanently curved to the right; (**3**) Mutant's neck holds his or her head at a permanently odd angle; (**4**) Mutant's spine and hips are so distorted on one side that mutant cannot walk or run, but can only lurch at varying speeds; -5 feet movement speed"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's facial features are lopsided and distorted, roll 1d4: (**1**) One eye is located 3 inches higher / lower than normal; (**2**) Mouth is located off-center on one side of face; (**3**) One ear is located 3 inches further back on head than the other; (**4**) Nose or nostrils are located 3 inches to one side of face; -3 Personality, -2 AI recognition"
                },
                {
                    "roll": "20+",
                    "result": "The mutant's facial features are ever so slightly off-center, just enough so to indicate possible mutant heritage; -1 AI recognition"
                }
            ]
        },
        {
            "name": "Attraction Odor",
            "type": "Passive",
            "range": "50 feet per class level",
            "duration": "Permanent",
            "save": "None",
            "general": "",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's malodorous musk perfectly mimics the fear scent of prey for carnivores of all genotypes and varieties"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's mephitic aroma triggers stalking behavior in mammalian, reptilian, and insectoid carnivores. Roll twice as often for nighttime encounters when this mutant is present"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's fetid stench attracts carrion feeders; -3 Personality"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's rancid pungence causes rodents to seek out the mutant"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's redolent odor attracts biting insects, bees, and wasps"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's musky fragrance causes non-sentient creatures to go into rut"
                },
                {
                    "roll": "20+",
                    "result": "The mutant slight air of feculence attracts flies wherever he goes"
                }
            ]
        },
        {
            "name": "Body Part Loss",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant has no head; all features normally found on the head are located mid-abdomen; -3 Personality"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant is missing one leg; -4 Agility, 1/2 normal movement"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant is missing one arm; -2 Agility"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant is missing one eye and has no depth perception; -2 melee attacks, -3 missile attacks"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant has no torso; mutant's head, neck, and limbs connect directly to each other; -1d3 hit points, +2 AC"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant has no eyelids, and must sleep with eyes open or blindfolded; -1 Stamina"
                },
                {
                    "roll": "20+",
                    "result": "The mutant has only three fat sausage fingers and a thumb on each hand and is missing a lower jaw causing a pronounced overbite; skin color is bright yellow"
                }
            ]
        },
        {
            "name": "Death Pretense",
            "type": "Active",
            "range": "N/A",
            "duration": "Instant",
            "save": "Willpower vs. DC",
            "general": "The mutant reflexively feigns death when shocked or surprised (judge's discretion).",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant must make DC 17 Willpower save or fall into a coma for 1d10 rounds"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant must make DC 15 Willpower save or fall into a coma for 1d6 rounds"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant must make DC 12 Willpower save or fall into a coma for 1d3 rounds"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant must make DC 10 Willpower save or pass out for 1d6 rounds; mutant may be revived by slapping or being splashed with water"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant must make DC 8 Willpower save or fall asleep for 1d6 rounds; mutant may be wakened by any loud noise"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant must make DC 5 Willpower save or fall asleep for 1d3 rounds; mutant may be wakened by any loud noise"
                },
                {
                    "roll": "20+",
                    "result": "The mutant involuntarily falls down and curls into a fetal position while still awake and aware for 1 round"
                }
            ]
        },
        {
            "name": "Delayed Reaction",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The hemispheres of the mutant's mind do not interact well, causing delayed reaction times.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's deep-rooted dyslexia causes the mutant to automatically go last in combat initiative order"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's congenital indecisiveness causes mutant to automatically go after all adversaries in combat initiative order"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's tendency to hem and haw results in -5 to initiative rolls"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's chronic over thinking results in -4 to combat initiative rolls"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's habitual dawdling results in -3 to initiative rolls"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's momentary pause results in -2 to initiative rolls"
                },
                {
                    "roll": "20+",
                    "result": "The mutant's slight hesitation results in -1 to initiative rolls"
                }
            ]
        },
        {
            "name": "Delusional",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's mind suffers from various delusions and psychoses.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant believes that he or she is all-powerful and omnipotent; unless a DC 12 Willpower save is made, mutant will always either use glowburn or Luck burning to add at least 1 point to each mutation check roll made"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's hysterical blindness towards one genotype renders that genotype effectively invisible (but not inaudible) to the mutant; roll 1d4: (1) pure strain humans; (2) mutants; (3) manimals; (4) plantients (if mutant rolls his own genotype, that character is an orphan who was adopted and raised by another genotype)"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's tenuous grasp on reality causes the mutant to believe that his or her weapon of choice is sentient and able to speak (weapon becomes an NPC under the judge's control); mutant is -4 to all attacks made with the weapon when the weapon does not approve of the combat"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's inherent and authoritarian fundamentalist beliefs cause them to consider the Ancient Ones to be literal gods who are to be worshiped and obeyed in all things, likewise their agents (AIs, robots, etc.); mutant also believes that all artifacts, no matter how mundane, are holy relics are to be respected and used wisely"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's obsession with the innate sanctity of one form of sentient life causes him or her to attack at a -4 when in combat with that particular genotype, while happily enjoying a +1 versus all other genotypes; roll 1d5 to determine the overvalued genotype (re-roll any result for the same genotype as the mutant): (1) pure strain humans; (2) mutants; (3) manimals; (4) plantients; (5) AIs and robots"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's innate paranoia causes the mutant to believe that he or she is least liked among his or her compatriots; mutant will fuss and pout whenever he or she is not given first pick of any loot found as proof that \u201cSee? They all despise me\u201d"
                },
                {
                    "roll": "20+",
                    "result": "The mutant's deep-rooted suspicion that the entire Universe is out to get them gives the mutant 1 extra hit point each time he correctly guesses an adversary's next action (usable once per encounter)"
                }
            ]
        },
        {
            "name": "Devolved",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant has less evolved traits when compared with other examples of his or her genotype.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant physically resembles their source genotype, including size and base locomotion/movement (though abilities and stats remain the same); mutant is mute and unable to handle tools unless base genotype already possesses prehensile appendages. Note: For mutants this result means that they are a small primate; for plantients this result means that they have a movement of 0 feet and must be carried in a pot"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant physically resembles his or her source genotype, including size and base locomotion/movement (though most abilities and stats remain the same); mutant is able to communicate via a cant-like approximation of language using squeaks, grunts, and other vocalizations; mutant is barely able to handle tools with a -6 Agility"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant physically resembles a slightly larger version of his or her source genotype (though most abilities and stats remain the same); mutant is able to speak and use tools; -4 Agility"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant physically resembles a tall, erect version of his or her source genotype (though most abilities and stats remain the same); mutant is able to speak and use tools; -2 Agility"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's ungracile appearance marks the mutant as a primitive and barely sentient example of his or her genotype; -6 Intelligence (3 minimum), -2 Agility, +2 Strength"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's brutish appearance is that of a \u201cmissing link\u201d between his ancestral form and an average example of his or her genotype; -2 Intelligence, -1 Agility, +1 Strength"
                },
                {
                    "roll": "20+",
                    "result": "The mutant is a slightly less evolved example of his or her genotype; -1 Intelligence"
                }
            ]
        },
        {
            "name": "Diminished Body Part",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body possesses at least one body part that is greatly atrophied.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's head is tiny and doll-like; -3 to all ranged attacks"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's hands are over-small and childlike; -2 to melee and missile attacks"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's feet are stunted and miniature; -2 Agility, -10 feet movement speed"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's lungs are diminutive; after first three rounds of combat, mutant attacks every other round, missing the fourth round while the mutant regains their breath"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's digestive track is reduced in size and function; -1 Stamina"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's heart is three sizes too small; due to reduced blood flow to frontal cortex mutant hates all celebrations and holidays; -2 Personality"
                },
                {
                    "roll": "20+",
                    "result": "Using the formula ((L*D)+(W/G))/(A^2), the mutant's pro-generative organs are slightly smaller than average for mutant's genotype; mutant receives an automatic +1 to their next attack whenever teased or taunted for any reason"
                }
            ]
        },
        {
            "name": "Diminished Sense",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "One of the mutant's senses is greatly diminished.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's vision is greatly impaired; roll 1d4: (1) Mutant is extremely nearsighted with -4 to all ranged attacks; (2) Mutant is quite farsighted with -4 to all melee attacks; (3) Mutant is colorblind with -4 to all Artifact checks; (4) Mutant has motion blindness with -2 to all attacks"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's tactile sense is notably diminished; mutant suffers a -1 to melee attacks, and a -5 to all Artifact checks"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's auditory senses are damaged; mutant is automatically surprised when attacked from behind or in any situation which requires hearing audible cues; +2 to saves versus sonic attacks"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's olfactory sense is perhaps not the best; mutant suffers a -5 to any detection checks or Artifact checks which require a sense of smell"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant suffers from a complete lack of common sense; -2 Intelligence"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant suffers from low levels of autism, and is unable to recognize facial or social cues (for example, the mutant enjoys sharing long and pointless stories about his adventures even when all listening are bored to tears); -2 Personality"
                },
                {
                    "roll": "20+",
                    "result": "The mutant has absolutely no sense of taste and is thus easily poisoned with ingested poisons; mutant is prone to loud and unfashionable choices in dress"
                }
            ]
        },
        {
            "name": "Diminished Stamina",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body is extraordinarily susceptible to radiation and many other forms of damage. Stamina score is reduced, but may not be lowered below 3.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's Stamina score decreases by -7; mutant receives no saving throw versus damage from radiation-based attacks"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's Stamina score decreases by -6; mutant receives no saving throw versus damage from heat-based attacks"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's Stamina score decreases by -5; mutant receives no saving throw versus damage from electrical attacks"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's Stamina score decreases by -4"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's Stamina score decreases by -3"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's Stamina score decreases by -2"
                },
                {
                    "roll": "20+",
                    "result": "The mutant's Stamina score decreases by -1"
                }
            ]
        },
        {
            "name": "Enmity",
            "type": "Passive",
            "range": "10 feet per class level",
            "duration": "Permanent",
            "save": "Willpower vs. mutation DC",
            "general": "The mutant's mind unconsciously broadcasts a low-level telepathic field that causes feelings of hostility towards the mutant in certain sentients and creatures.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "Any sentient or creature within range must make a Willpower save or automatically attack the mutant upon first meeting their (does not affect mutant's friends and family); -5 Personality"
                },
                {
                    "roll": "5-7",
                    "result": "Any non-sentient creature within range must make a Willpower save or automatically attack the mutant upon first encountering their; -4 Personality"
                },
                {
                    "roll": "8-11",
                    "result": "Any sentient not of the mutant's own genotype and within range must make a Willpower save or automatically attack the mutant upon first meeting their (does not affect mutant's friends and family); -3 Personality"
                },
                {
                    "roll": "12-15",
                    "result": "Any carnivore within range must make a Willpower save or automatically attack the mutant upon first encountering their; -2 Personality"
                },
                {
                    "roll": "16-17",
                    "result": "Any sentient within range must make a Willpower save or treat the mutant with general contempt, completely ignoring them (does not affect mutant's friends and family); -1 Personality"
                },
                {
                    "roll": "18-19",
                    "result": "Any sentient not of the mutant's own genotype and within range must make a Willpower save or treat the mutant with distaste, completely avoiding them when possible (does not affect mutant's friends and family)"
                },
                {
                    "roll": "20+",
                    "result": "No one except the mutant's close friends and family can stand to be around him or her for more than 1 turn, making endless excuses about needing to be someplace else"
                }
            ]
        },
        {
            "name": "Enlarged Body Part",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body possesses at least one pronounced body part that is greatly enlarged and out-ofproportion.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's head is humongous; -2 AC"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's hands are over-large and clumsy; -2 to melee and missile attacks"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's feet are huge and ungainly; -2 Agility, +5 feet movement"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's lungs are gigantic and require more oxygen than normal; after first three rounds of combat, mutant attacks every other round, missing the fourth round while the mutant regains his or her breath"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's digestive track is enlarged and hyper-efficient; unless the mutant eats six regular meals a day the mutant suffers -1 Stamina"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's heart is three sizes too large; mutant takes in and adopts all strays; +2 Personality"
                },
                {
                    "roll": "20+",
                    "result": "The mutant is very popular with members of the opposite sex"
                }
            ]
        },
        {
            "name": "Ipsilateral Body Plan",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's body plan is notably lopsided.",
            "manifestations": [],
            "checks": []
        },
        {
            "name": "Life Force Transference",
            "type": "Active",
            "range": "Touch",
            "duration": "Instant",
            "save": "None",
            "general": "The mutant is able to mentally transfer his or her own life force into other living creatures.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "Mutant may restore a single target creature to full hit points while reducing their own hit point total to 0"
                },
                {
                    "roll": "5-7",
                    "result": "Mutant may restore a single target creature to full hit points while reducing their own hit point total to 1"
                },
                {
                    "roll": "8-11",
                    "result": "Mutant is able to transfer any number of mutant's own hit points to a single target creature on a 1-for-1 basis"
                },
                {
                    "roll": "12-15",
                    "result": "Mutant is able to transfer mutant's own hit points to a single target creature on a 1-for-2 basis (each hit point transferred gives target creature 2 hit points)"
                },
                {
                    "roll": "16-17",
                    "result": "Mutant is able to transfer mutant's own hit points to a single target creature on a 1-for-4 basis (each hit point transferred gives target creature 4 hit points)"
                },
                {
                    "roll": "18-19",
                    "result": "Mutant may restore a single target creature to full hit points while reducing their own hit point total by 1/2"
                },
                {
                    "roll": "20+",
                    "result": "Mutant may restore a single target creature to full hit points while reducing their own hit point total by -1"
                }
            ]
        },
        {
            "name": "Mental Block",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "Willpower vs. mutation DC",
            "general": "The mutant's mind suffers from a pronounced mental block.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant has a crippling mental block when it comes to committing to combat; mutant may never initiate combat, and will always hesitate, withholding any actions or attacks until the second round of combat"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant has a severe mental block about pure strain humans or anyone or anything resembling a pure strain human (androids, holograms, mutants with no visible mutations) and cannot see, hear, or acknowledge the presence of these beings"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant has a congenital mental block when it comes to using artifacts of the Ancient Ones; mutant may never willingly or knowingly possess or use an artifact"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant has a serious mental block regarding manimals and any other sentient animal life, and will treat them as one would a pet or a wild animal (re-roll this result if player character is a manimal)"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant has a serious mental block regarding plantients and any other sentient plant life; mutant cannot hear plantients speak (re-roll this result if the player character is a plantient)"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant has a mild mental block regarding any technology above tech level 2, believing anything without a simple, neolithic explanation to be demonic magic; when confronted with artifacts tech level 3 and above, mutant often exclaims, \u201cDemon Dogs!\u201d"
                },
                {
                    "roll": "20+",
                    "result": "The mutant has a mental block about taking common sense approaches to problem solving, making the mutant a serial contrarian; mutant will arbitrarily contest the group consensus on most plans of action"
                }
            ]
        },
        {
            "name": "Mental Defenselessness",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's mind is extraordinarily susceptible to mental mutation attacks (Personality score may not be lowered below 3).",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's Personality score decreases by -7; mutant receives no saving throws versus damage from mental mutation attacks"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's Personality score decreases by -6; mutant receives no saving throw versus Domination, Empathy, Mind Control, Mental Blast, or Telepathy mutation attacks"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's Personality score decreases by -5; mutant receives no saving throw versus Domination, Empathy, Mind Control, or Telepathy mutation attacks"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's Personality score decreases by -4; mutant receives no saving throw versus Domination or Mind Control mutation attacks"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's Personality score decreases by -3"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's Personality score decreases by -2"
                },
                {
                    "roll": "20+",
                    "result": "The mutant's Personality score decreases by -1"
                }
            ]
        },
        {
            "name": "Multiple Personalities",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "Varies",
            "general": "The mutant's sense of self is fragmented into multiple personalities who often compete for dominance.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant has 10 different personalities (which should be rolled up randomly as additional characters with consultation of judge); whenever the mutant rolls combat initiative, they must make a DC 18 Willpower save \u2013 failure means that a new random personality is in charge of the character"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant has 8 different personalities (which should be rolled up randomly as additional characters with consultation of Judge); whenever the mutant is attacked, they must make a DC 15 Willpower save \u2013 failure means that a new random personality is in charge of the character"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant has 6 different personalities (which should be rolled up randomly as additional characters with consultation of Judge); whenever the mutant takes damage, they must make a DC 12 Willpower save \u2013 failure means that a new random personality is in charge of the character"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant has 5 different personalities (which should be rolled up randomly as additional characters with consultation of Judge); whenever the mutant takes damage, they must make a DC 12 Willpower save \u2013 failure means that a new random personality is in charge of the character"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant has 4 different personalities (which should be rolled up randomly as additional characters with consultation of judge); whenever the mutant misses a saving throw, they must make a DC 12 Willpower save \u2013 failure means that a new random personality is in charge of the character"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant has 3 distinct personalities (which should be rolled up randomly as additional characters with consultation of Judge); whenever the judge deems it appropriate, they must make a DC 10 Willpower save \u2013 failure means that one of the other two personalities is in charge of the character"
                },
                {
                    "roll": "20+",
                    "result": "The mutant has 2 distinct personalities (which should be rolled up randomly as additional characters with consultation of Judge); whenever the judge deems it appropriate, they must make a DC 8 Willpower save \u2013 failure means that the alternate personality is in charge of the character"
                }
            ]
        },
        {
            "name": "Mutation Loss",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant loses one or more random mutations.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant loses all current mutations; roll 1 new random physical mutation"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant loses all current mutations; roll 1 new random physical mutation and 1 new random mental mutation (even plantients)"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant loses 1 random physical mutation and 1 random mental mutation (even plantients)"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant loses 1 random mental mutation (plantients lose a physical mutation)"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant loses 1 random physical mutation"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant loses one defect, if any are present"
                },
                {
                    "roll": "20+",
                    "result": "The mutant loses one defect, if any are present; mutant gains +1 Personality"
                }
            ]
        },
        {
            "name": "Special Vulnerability",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's biochemistry is uniquely vulnerable to certain types of substances and energies.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant has a congenitally weak constitution, and takes 2x damage from all attacks, regardless of nature or origin"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant is hemophilic, and takes 2x damage from physical attacks; mutant takes an additional 1 hp of damage/round until mutant is healed or wounds are bound"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant is xenodermic, and takes 2x damage from energy-based attacks; mutant takes 1 hp damage/ round when mutant's skin is directly exposed to daylight or any other source of UV radiation"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant is osteogenetic, and their bones break easily; if mutant takes damage that exceeds 1/2 of the mutant's hit point total, mutant is effectively crippled, and cannot attack or move until healed"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant is highly susceptible to radiation; whenever mutant is exposed to radiation or radiation-based attacks, roll 1d6. In addition to normal damage and effects, mutant (**1**) Loses 1 random physical mutation; (**2**) Loses 1 random mental mutation; (**3**) Gains 1 random defect; (**4**) Gains 1 random physical mutation; (**5**) Gains 1 random mental mutation; (**6**) Loses the Special Vulnerability defect"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant is narcoleptic and falls asleep at inopportune times; mutant must make DC 10 Fortitude save to stay awake during watches or combat"
                },
                {
                    "roll": "20+",
                    "result": "The mutant is mildly allergic to airborne dust; mutant must make DC 8 Fortitude save or sneeze in each combat round (unless in a sterile environment) causing a -1 to next attack roll"
                }
            ]
        },
        {
            "name": "Stumblebum",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's reaction time and agility are greatly impaired, making the mutant a flailing and easily targeted hot mess. Agility score may not be lowered below 3.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's Agility score is decreased by -7; AC is decreased by -10 (ignore Agility modifier for AC); movement is decreased by -10 feet"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's Agility score is decreased by -6; AC is decreased by -9 (ignore Agility modifier for AC)"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's Agility score is decreased by -5"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's Agility score is decreased by -4"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's Agility score is decreased by -3"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's Agility score is decreased by -2"
                },
                {
                    "roll": "20-+",
                    "result": "The mutant's Agility score is decreased by -1"
                }
            ]
        },
        {
            "name": "Stunted Wings",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant possesses vestigial non-functional wings.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant has two ill-balanced fleshy nubs growing out of mutant's back; -2 Agility"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant has tiny malformed wings that are as laughably non-functional as they are awkward; -1 Agility"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant has non-functional flight feathers growing from forearms and calves"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant has non-functional membranes stretching from wrist to ankles"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant has smallish wings that act as a crude and ineffective parachute; mutant takes 1/2 damage from falling"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant has wings that allow limited gliding ability; mutant may glide up to 5 feet; mutant takes 1/4 damage from falling"
                },
                {
                    "roll": "20-+",
                    "result": "The mutant has wings that allow limited gliding ability; mutant may glide up to 10 feet; mutant does not take falling damage"
                }
            ]
        },
        {
            "name": "Thin Skin",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's skin is remarkably thin and is permeable to various substances and energies.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The atomic valences in the molecules of the mutant's skin are trans-kinetic and easily severed; mutant takes 2x damage from physical attacks"
                },
                {
                    "roll": "5-7",
                    "result": "The molecules in the mutant's skin are quantum entangled with each other, acting as microscopic focusing lenses for morphic fields; mutant takes 2x damage from mental mutation attacks"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's skin is transparent to light and most EM radiation, revealing muscle tissues, blood vessels, and bone underneath; mutant takes 2x damage from any EM-based attacks"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's skin is copper-based and water soluble; mutant takes 2 hp damage per round if exposed to or immersed in water"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's skin lacks any subcutaneous layers of fat or sweat glands; mutant takes 2 hp damage for every 6 hours spent exposed unprotected to temperatures outside a range of 40\u00ba-70\u00baF"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant is an albino, as mutant's skin lacks melatonin; mutant takes 2 hp damage for every 6 hours spent exposed unprotected to direct sunlight or any UV radiation"
                },
                {
                    "roll": "20+",
                    "result": "The mutant is so thin-skinned that they is unable to participate in any group activity unless constantly praised by their fellows"
                }
            ]
        },
        {
            "name": "Uncontrolled Empathy",
            "type": "Passive",
            "range": "20 feet per class level",
            "duration": "Instant",
            "save": "Varies",
            "general": "The mutant unconsciously broadcasts their emotional state into the minds of other living creatures.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant wildly broadcasts their current emotional state to all within range; other creatures within range easily detect the mutant's presence and motives even if otherwise hidden; at judge's discretion, mutant must make DC 10 Willpower save or adopt the emotional state of next nearest sentient being within range"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant energetically broadcasts their current emotional state to all within range; other creatures within range note the mutant's presence and motives even if otherwise hidden"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant actively broadcasts their current emotional state to all within range; other creatures within range discern the mutant's presence and motives with a DC 4 Willpower Save"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant is an obvious and quick study for others; other sentients may detect mutant's motives by making a DC 6 Willpower save"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's motives and feelings are as transparent as permaglass; other sentients may detect mutant's motives by making a DC 8 Willpower save"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant has absolutely no poker face; other sentients may detect mutant's motives by making a DC 10 Willpower save"
                },
                {
                    "roll": "20+",
                    "result": "The mutant is unable to conceal their true intent when negotiating; other sentients may detect mutant's motives by making a DC 12 Willpower save"
                }
            ]
        },
        {
            "name": "Uncontrolled Telepathy",
            "type": "Passive",
            "range": "20 feet per class level",
            "duration": "Instant",
            "save": "Varies",
            "general": "The mutant unconsciously broadcasts his or her thoughts into the minds of other sentients.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant's deepest thoughts, memories, and intentions are an open book to all sentients within range; any sentient need only make a DC 4 Willpower save to determine exactly what the mutant is thinking and planning"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant's deepest thoughts, memories, and intentions are easily read by any sentients within range; any sentient making a DC 6 Willpower save knows exactly what the mutant is thinking"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant's thoughts and intentions can be read by any sentients within range; any sentient making a DC 8 Willpower save knows exactly what the mutant is thinking"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant's thoughts and intentions can be read by any sentients within range; any sentient making a DC 10 Willpower save knows exactly what the mutant is thinking"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant's deep thoughts and intentions may be read by any sentient making a DC 12 Willpower save"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant's surface thoughts and intentions may be read by any sentient making a DC 14 Willpower save"
                },
                {
                    "roll": "20+",
                    "result": "The mutant's passing thoughts may be read by any sentient making a DC 16 Willpower save"
                }
            ]
        },
        {
            "name": "Useless Body Parts",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant has additional non-functional body parts not normally found upon mutant's genotype or sub-type",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant possesses multitudinous stubby, non-functional body parts, including wing stubs, malformed gills, useless antennae, a stubby tail, and multiple tiny tentacles growing from their torso; -5 Personality"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant possesses multiple non-functional body parts, including wing stubs, useless antennae, and a stubby tail; -4 Personality"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant possesses a long clumsy tail that constantly throws the mutant off balance; -3 Agility"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant possesses non-functional gills and vestigial fins on arms and legs; -2 Agility"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant has small knobs growing out of his or her forehead; -1 AI recognition"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant possesses a sixth finger on each hand which occasionally lights up and beeps"
                },
                {
                    "roll": "20+",
                    "result": "The mutant has a thin membrane between ankles and wrists; mutant gains 5 feet of gliding movement"
                }
            ]
        }
    ],
    "Physical Mega Mutations": [
        {
            "name": "Weak Willed",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's sense of ego is so diminished that he is easily persuaded by others, friend or foe.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Roll this mutation check again, plus roll one additional defect"
                },
                {
                    "roll": "2-4",
                    "result": "The mutant has difficulty deciding which side is right in any conflict, and frequently changers sides in an argument or even combat. Personality score is reduced to 3 and all Will saves are at a -3"
                },
                {
                    "roll": "5-7",
                    "result": "The mutant is incapable of making decisions on his own, and will do whatever the last person told him to do, even if it conflicts with a just enacted decision. Personality score is reduced to 5 and all Will saves are at a -2"
                },
                {
                    "roll": "8-11",
                    "result": "The mutant has difficultly deciding how best to make an attack, and often falls towards the end of the initiative order in combat while he decides. Personality score is reduced by 4 and all initiative rolls are at a -1d3"
                },
                {
                    "roll": "12-15",
                    "result": "The mutant vacillates between which mutation to use at any given time, and must make a DC 10 Will save to use any mutation purposely; on a missed Will save the mutant uses another random mutation. Personality score is reduced by 3"
                },
                {
                    "roll": "16-17",
                    "result": "The mutant has difficulty standing up to bullying, and must make a DC 8 Will save whenever he wishes to enter combat or win an argument"
                },
                {
                    "roll": "18-19",
                    "result": "The mutant is so fixated on people-pleasing that he cannot refuse any request from friends or allies for help or assistance of any type"
                },
                {
                    "roll": "20+",
                    "result": "The mutant is a \u201cyes man\u201d and must at least appear to agree with everyone, even enemies"
                }
            ]
        },
        {
            "name": "Anaerobic",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's metabolism does not require oxygen (or carbon dioxide if a plantient) for respiration; being is sustained instead by other gases or requires no gasses at all.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Mutant has no nose, and instead has strange pulsing gills slits along the neck area"
                },
                {
                    "roll": "2",
                    "result": "Instead of a nose and lungs, mutant's skin contains thousands of microscopic tracheal openings"
                },
                {
                    "roll": "4",
                    "result": "Mutant's nose and mouth are covered by a thin membrane of fern-like webbing (mutant cannot consume solid food)"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation results in cosmetic change only (see manifestation)"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant requires carbon dioxide for respiration, like a plant (plantients require nitrogen for respiration)"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant requires nitrogen for normal respiration and metabolic function"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant requires only very small amounts of nitrogen for normal respiration, and can survive at extremely high altitudes or low atmospheric pressures"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant requires only very small amounts of nitrogen for normal respiration, and can survive at extremely high altitudes or low atmospheric pressures; mutant can survive in a complete vacuum for up to 20 rounds"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant requires only very small amounts of any gas for normal respiration, and can survive at extremely high altitudes or low atmospheric pressures; mutant can survive in a complete vacuum or underwater for up to 1 day"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant does not require any gasses or atmospheric pressure to live, being able to survive indefinitely in a complete vacuum if necessary"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant does not require any gasses or atmospheric pressure to live, being able to survive indefinitely in a complete vacuum if necessary; mutant's reversed biology excretes large amounts of oxygen and carbon dioxide as by-products so long as food is available. These gasses can theoretically support up to 4 other humanoid-sized beings"
                },
                {
                    "roll": "34+",
                    "result": "The mutant\u2018s alien biology draws all life-sustaining energies from a parallel dimension, thus the mutant does not require any atmosphere, light, or nutrition to survive and flourish"
                }
            ]
        },
        {
            "name": "Detonating Fingers",
            "type": "Active",
            "range": "10 feet per class level",
            "duration": "Instant",
            "save": "Reflex vs. mutation check for 1/2 damage",
            "general": "The mutant is able to channel dimensional energies from sub-space through the tips of his fingers and project these energies as explosive charges.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Mutant's hands and feet are overlarge and covered in a short grey fur"
                },
                {
                    "roll": "2",
                    "result": "Mutant's hands are extremely flattened and produce detonations whenever slapped together with force"
                },
                {
                    "roll": "3",
                    "result": "Mutant's hands are comprised of a 4-dimensional metal that shimmers and shines in unknown colors beyond those of the visible light spectrum"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant fires 1 micro-explosion at a single target for 1d4 damage"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant fires an explosive charge at target for 1d6 damage"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant fires an explosive charge at target for 1d8 damage"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant fires 1d4 explosive charges at up to 4 targets for 1d10 damage each"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant fires 1d6 explosive charges at up to 6 targets for 1d12 damage each"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant fires an 1d8 explosive charges at up to 8 targets for 1d20 damage each"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant fires 10 quantum-tunneling detonating charges at up to 10 visible targets. Each charge acts as a homing device and unerringly tracks its target through and around all obstacles, including force screens and other seemingly impenetrable barriers, doing 3d10 explosive damage and causing an additional Reflex save versus mutation check to prevent catching on fire for 1d6 damage until the fire is extinguished"
                },
                {
                    "roll": "34+",
                    "result": "With a prodigious clap, the mutant's hands open a 10-foot radius portal directly to sub-space at any point within range and line-of-sight. This portal opens with a concussive blast that does 15d10 explosive damage to any targets within 20 feet except the mutant, knocking any creature prone who cannot make a Reflex save versus the mutation check. After the portal opens, the air pressure differential between normal space and sub-space creates a hurricane-force wind that sweeps all unanchored object and creatures into sub-space where they are forever lost. Anyone grabbing a firmly anchored object and making a Strength check versus DC 18 winds may prevent themselves from being sucked into the nether void"
                }
            ]
        },
        {
            "name": "Gene Splice",
            "type": "Active",
            "range": "Touch",
            "duration": "Varies",
            "save": "Fortitude vs. mutation check",
            "general": "With voluntary contact or a successful grapple attack, the mutant is capable of temporarily gene splicing a mutation from a target mutant and adding it to his own set of mutations.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Mutant's inner palms are covered with hundreds of small suckers"
                },
                {
                    "roll": "2",
                    "result": "The mutant's fingernails contain tiny retractable spines capable of piercing flesh or carapace"
                },
                {
                    "roll": "3",
                    "result": "The mutant's tongue is extensible up to 1 foot and ends in a large sucker"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant copies 1 random mutation from target creature, and has full use of this mutation for 1d3 rounds"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant copies 1 random mutation from target creature, and has full use of this mutation for 1d4 rounds"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant copies 1 random mutation from target creature, and has full use of this mutation for 1d6 rounds"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant copies 1 mutation of choice from target creature, and has full use of this mutation for 1d20 rounds"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant steals any 1 mutation of choice from the target creature and retains this new mutation for 1d6 turns, removing this same mutation from the creature permanently in the process"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant steals any 2 mutations of choice from the target creature and retains these new mutations for 1d12 turns, removing those same mutations from the creature permanently in the process"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant steals all of target creatures mutations and adds them to his own for the next 1d20 turns, rendering the target creature unconscious and mutation-free for the same amount of time"
                },
                {
                    "roll": "34+",
                    "result": "The mutant steals all of target creatures mutations and adds them to his own for the next 24 hours, rendering the target creature unconscious and mutation-free for the same amount of time. At the end of 24 hours, the mutant may elect to retain one gene spliced mutation permanently, switching it out for any other permanent mutation except for Gene Splice"
                }
            ]
        },
        {
            "name": "Merge",
            "type": "Active",
            "range": "Touch",
            "duration": "Varies",
            "save": "Will vs. mutation check",
            "general": "Upon a successful grapple attack, the mutant is able to physically merge their body with that of the target living creature, creating a new gestalt being drawing from the abilities, attributes (no score may be raised above 24), and hit points from both. The mutant may choose to invoke any effect of equal to or less than his mutation check, allowing a range of options to produce a weaker but potentially more useful result.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Mutant's face is smooth and white, with minimal distinguishing features"
                },
                {
                    "roll": "2",
                    "result": "The mutant's skin shifts and flows at a barely discernible pace"
                },
                {
                    "roll": "3",
                    "result": "The mutant's body appears to be made of clay"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "Thought Scan: The mutant achieves a quick-touch merge, but only enough to learn surface thoughts and intentions from target creature. This grants a +1 bonus to AC and saving throws from actions taken by the target for the next round"
                },
                {
                    "roll": "16-19",
                    "result": "Growth: The mutant is able to merge with his target, enlarging and adding the target's hit points and physical attribute bonuses to his own for 1d3 rounds"
                },
                {
                    "roll": "20-21",
                    "result": "Mimicry: The mutant fuses with his target, gaining density but not size. The mutant can, at will, take on the features and voice of his target. The mutant adds the target's hit points to his own and the mutant's AC increases by +5. This union lasts for 1d6 rounds or until the mutant releases the target creature"
                },
                {
                    "roll": "22-25",
                    "result": "Conjoined: The mutant partially merges with his target, leaving the target's arms and legs unabsorbed and available for use. The mutant adds the target's movement rate and action dice to their own. The additional action dice may only be used for physical actions. The merged state lasts for 1d12 rounds or until the mutant releases the target creature"
                },
                {
                    "roll": "26-29",
                    "result": "Armor: The mutant merges with his target and redirects the target's flesh and bones around himself, like a living suit of armor. The mutant's AC becomes equal to the target's AC plus the mutant's agility bonus. Additionally, all damage is soaked by the target before the mutant takes any damage. This union lasts 1d3+1 rounds or until the target creature is killed"
                },
                {
                    "roll": "30-31",
                    "result": "Subsumation: The mutant fully merges with his target, adding the targets hit points, physical attributes (maximum 24), and class abilities to their own while visibly increasing in size and gaining full control of the target's range of physical mutations for 2d4 rounds"
                },
                {
                    "roll": "32-33",
                    "result": "Domination: The mutant adds the target's hit points, mental mutations, Intelligence, and memories to his own. This additional mental acumen allows the mutant to perform a number of astonishing feats, including predicting the actions of an attacker (+2 to AC); inherently understanding technology of level 5 or lower, and being allowed to change their initiative order and interrupt any declared action. This union lasts for 1d3+3 rounds or until released by the mutant"
                },
                {
                    "roll": "34+",
                    "result": "Gestalt: The mutant is able to merge with any and all allies in a 25 foot radius, becoming a gigantic gestalt entity up to 60 feet tall with the minds of each ally still active via the mental coordination of the mutant. Each ally may draw upon the powers of the collective gestalt being, although no single action or mutation (unless possessed by more than one member of the collective) may be used twice in a round. This union lasts for 1 turn per participant or until the mutant releases the collective"
                }
            ]
        },
        {
            "name": "Metallic Skin",
            "type": "Active",
            "range": "N/A",
            "duration": "Varies",
            "save": "None",
            "general": "By actively concentrating the mutant can cover his entire body with flexible metal, providing additional protection and increased",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's chest emits a blinding flash of energy and, as the glare fades, the mutant is armored head to toe in glistening silver metal"
                },
                {
                    "roll": "2",
                    "result": "Liquid metal pours from the mutants mouth, rushing over him in a coppery tide"
                },
                {
                    "roll": "3",
                    "result": "The air around the mutant grows cloudy as the very air molecules around them change, reform, and restructure in a strange, cold fusion reaction that leaves them encased in glittering gold"
                },
                {
                    "roll": "4",
                    "result": "The mutant's skin is infused with trillions of gray metallic nanoparticles that join together in a micromesh and harden upon command"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "For the next round, the mutant's natural AC increases by +3, their Strength increases by +1, and they gain +1 to all Fortitude saves"
                },
                {
                    "roll": "16-19",
                    "result": "For the next 1d3 rounds, the mutant's natural AC increases by +4, their strength increases by +2, and they gain +1 to all Fortitude saves"
                },
                {
                    "roll": "20-21",
                    "result": "For the next 2d5 rounds, the mutant's natural AC increases by +5, their Strength increases by +2, and they gain +2 to all Fortitude saves"
                },
                {
                    "roll": "22-25",
                    "result": "For the next 2d7 rounds, the mutant's natural AC increases by +6, their Strength increases by +2, and they gain +3 to all Fortitude saves"
                },
                {
                    "roll": "26-29",
                    "result": "For the next turn, the mutant's natural AC increases by +7, their Strength increases by +3, and they gain +3 to Fortitude saves"
                },
                {
                    "roll": "30-31",
                    "result": "For the next 1d3 turns, the mutant's natural AC increases by +8, their Strength increases by +3, and they gain +4 to Fortitude saves"
                },
                {
                    "roll": "32-33",
                    "result": "For the next hour, the mutant's natural AC increases by +9, their Strength increases by +4, and they gain +4 to Fortitude saves"
                },
                {
                    "roll": "34+",
                    "result": "For the next 2d4 hours, the mutant's natural AC increases by +10, their Strength increases by +6, and they gain +6 to Fortitude saves"
                }
            ]
        },
        {
            "name": "Phase Shift",
            "type": "Active",
            "range": "N/A",
            "duration": "Varies",
            "save": "None",
            "general": "The mutant is able to alter the vibrational rate of their molecules, bringing them out of phase with the rest of the universe. This allows the mutant to pass through solid objects and reduce the damage of physical attacks. Due to the nature of this mutation, mutants out of phase gain no AC bonus against Fazer weapons and take double damage from similar phased attacks.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant appears more and more insubstantial from semi-translucent to fully transparent at higher mutation checks"
                },
                {
                    "roll": "2",
                    "result": "The mutant's form rapidly flickers in and out of being"
                },
                {
                    "roll": "3",
                    "result": "A pale blue glow surrounds the mutant"
                },
                {
                    "roll": "4",
                    "result": "The form of the mutant becomes monochromatic"
                },
                {
                    "roll": "5",
                    "result": "The mutant's body appears as a horizontally blurred object, and makes a rapid throbbing sound"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "For the next round, the mutant's altered phase vibrations increases his AC by +1 and reduces incoming damage by -1 per physical damage source"
                },
                {
                    "roll": "16-19",
                    "result": "For the next 1d3+1 rounds, the mutant's altered phase vibrations increases his AC by +1 and reduces incoming damage by -2 per physical damage source"
                },
                {
                    "roll": "20-21",
                    "result": "For the next 1d3+2 rounds, the mutant's altered phase vibrations increases his AC by +2 and reduces incoming damage by -3 per individual physical damage source. Additionally, the mutant can move through solid matter at the rate of 6 inches per round"
                },
                {
                    "roll": "22-25",
                    "result": "For the next 1d5+3 rounds, the mutant's altered phase vibrations increases his AC by +2 and reduces incoming damage by -4 per individual physical damage source. Additionally, the mutant can move through solid matter at the rate of 1 foot per round"
                },
                {
                    "roll": "26-29",
                    "result": "For the next 1d5+4 rounds, the mutant's altered phase vibrations increases his AC by +3 and reduces incoming damage by -5 per individual physical damage source. Additionally, the mutant can move through solid matter at the rate of 5 feet per round and levitate at 1 foot per round"
                },
                {
                    "roll": "30-31",
                    "result": "For the next 1d7+5 rounds, the mutant's altered phase vibrations increases his AC by +3 and reduces incoming damage by -6 per individual physical damage source. Additionally, the mutant can move through solid matter at the rate of 10 feet per round and levitate at 5 feet per round"
                },
                {
                    "roll": "32-33",
                    "result": "For the next 1d7+6 rounds, the mutant's altered phase vibrations increases his AC by +4 and reduces incoming damage by -7 per individual physical damage source. Additionally, the mutant may freely move through solid matter and fly at their regular movement rate"
                },
                {
                    "roll": "34+",
                    "result": "The mutant becomes wholly insubstantial, immune to all physical barriers and physical damage for one turn. Because of his altered state, the mutant can fly at three times their normal movement rate. The mutant is still subject to mental attacks as well as attacks that blind, deafen, or disorient based on overwhelming the senses of sight or hearing"
                }
            ]
        },
        {
            "name": "Singularity",
            "type": "Active",
            "range": "Varies",
            "duration": "Instant",
            "save": "None except as noted",
            "general": "The cells of the mutant's body are able to act as microscopic gravitational lenses, causing the mutant's form to alter into a miniature wormhole to other parallel dimensions and locations in the fabric of spacetime.",
            "manifestations": [
                {
                    "roll": "Result",
                    "result": "Result"
                },
                {
                    "roll": "1",
                    "result": "The mutant is enveloped in a field of black, crackling energy that conforms to their body"
                },
                {
                    "roll": "2",
                    "result": "A swirling vortex of polychromatic light emerges from the mutant's abdomen"
                },
                {
                    "roll": "3",
                    "result": "The mutant physically pulls their chest cavity open, revealing the event horizon of a black hole"
                },
                {
                    "roll": "4",
                    "result": "The mutant's form is silhouetted and becomes a doorway to a vast cosmic landscape of swirling galaxies and nebula"
                },
                {
                    "roll": "5",
                    "result": "The mutant's body ceases to reflect any light and becomes a two-dimensional, mutant-shaped hole in space"
                }
            ],
            "checks": [
                {
                    "roll": "Result",
                    "result": "Result"
                },
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant directs the gravitational tidal forces towards a single foe within 100 feet, doing 3d6 crushing damage"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant directs gravitational tidal forces towards a single foe within 150 feet, doing 4d6 crushing damage"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant projects the gravitational tidal forces at a target within 200 feet, doing 5d6 to the target and 2d6 damage to all within 20 feet of the designated target"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant projects a 20 foot black sphere at a point within 500 feet. The sudden gravitational tides do 3d6 crushing damage to all caught within the sphere, while doing 1d6 damage to all others within 50 feet of the sphere"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant projects gravitational tidal forces, manifesting a 20 foot sphere anywhere within his line of sight. The gravitational tides do 8d6 crushing damage to all caught within, while and causing 4d6 damage to all others within 50 feet"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant becomes a portal to another time, sucking up all matter within a 50 foot range. Objects larger than the height and width of the mutant are largely unaffected by the resulting time-space dislocation. All objects and beings sucked through the portal are sent to another time zone. Roll 1d2 (1) Sent to the past; (2) Sent to the future. Then roll 1d6 (**1**) Sent minutes; (**2**) sent hours; (**3**) Sent days; (**4**) Sent years; (**5**) Sent centuries; (**6**) Sent millennia. Finally, roll 1d100 for number of time units objects and beings are sent"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant becomes a doorway to alternate realities, sucking up all matter within a 75 foot range. Objects larger than the height and width of the mutant are folded in n-space and unfolded on the other side. On a habitable world in another reality (judges discretion), all matter and beings are ejected from an all-white version of the mutant's form, taking 10d6 damage but allowed a DC 14 Fort save for half damage"
                },
                {
                    "roll": "34+",
                    "result": "The mutant becomes a humanoid-shaped singularity, sucking up all matter within a 100 foot range. Objects drawn into the mutant are crushed and spaghettified into sub-atomic particles before passing through the mutant's too-dark form, taking \u221ed6 damage as a side effect. This process causes a new universe to be created in the explosion of a Big Bang that happens somewhere in the distant multiverse. Billions of years from now, the intelligent lifeforms of this new universe will call to and seek their creator god in vain"
                }
            ]
        }
    ],
    "Mental Mega Mutations": [
        {
            "name": "Xenomorph",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's DNA has been contaminated with that of an unknown extraterrestrial species, allowing",
            "manifestations": [],
            "checks": [
                {
                    "roll": "Result",
                    "result": "Result"
                },
                {
                    "roll": "1",
                    "result": "Failure, roll on defects table"
                },
                {
                    "roll": "2-4",
                    "result": "Xenomorphic DNA fragment from low gravity world. Mutant permanently loses 1 point of Strength"
                },
                {
                    "roll": "5-7",
                    "result": "Xenomorphic DNA fragment from lower life form. Mutant permanently loses 1 point of Intelligence"
                },
                {
                    "roll": "8-10",
                    "result": "Xenomorphic DNA is independently intelligent and sometimes fights his host. Mutant permanently loses 1 point of Luck"
                },
                {
                    "roll": "11-13",
                    "result": "Xenomorphic DNA causes a sense of \u201cotherness\u201d that is felt by others on a primal level. Mutant permanently loses 1 point of Personality"
                },
                {
                    "roll": "14-15",
                    "result": "Xenomorphic DNA fragment is highly compatible with mutant life. Mutant gains a permanent +2 when making active mutation checks"
                },
                {
                    "roll": "16-17",
                    "result": "Xenomorphic DNA fragment from life form with advanced intelligence. Mutant permanently gains 1d4+1 Intelligence (Max 24)"
                },
                {
                    "roll": "18-19",
                    "result": "Xenomorphic DNA fragment from trans-dimensional being. Mutant has psychic projection field making them look like an ordinary pure strain human despite any other mutation manifestation results. This mental field is only active while the mutant is conscious"
                },
                {
                    "roll": "20-21",
                    "result": "Xenomorphic DNA fragment from a world beneath a strange sun. Mutant has 10 foot x-ray vision blocked only by lead, duralloy, or force screens that shield from radiation"
                },
                {
                    "roll": "22-25",
                    "result": "Xenomorphic DNA fragment from a hostile biosphere. Mutant gains +2 on all Fort saves against poison"
                },
                {
                    "roll": "26-29",
                    "result": "Xenomorphic DNA fragment from high gravity world. Mutant permanently gains 1d4+1 strength (Max 24)"
                },
                {
                    "roll": "30-31",
                    "result": "Xenomorphic DNA fragment from higher life form. Once per session the mutant may re-roll any single die roll and choose the more beneficial result"
                },
                {
                    "roll": "32-33",
                    "result": "Xenomorphic DNA fragment from engineered life form. Mutant's blood is a molecular acid, and highly caustic. Individuals causing melee damage must make a DC 12 Reflex save of be splashed for 3d6 burn damage"
                },
                {
                    "roll": "34+",
                    "result": "Xenomorphic DNA fragment from time traveling species. Once per week the mutant may rewind any single round of action and have it play out again with all rolls made anew"
                }
            ]
        },
        {
            "name": "Assimilation",
            "type": "Active",
            "range": "Line of sight",
            "duration": "Varies",
            "save": "Will vs. mutation check",
            "general": "Reaching out with his mind, the mutant is able to enter the minds of others, exerting the power of his will over the will of their target to coerce, command, and sometimes even kill.",
            "manifestations": [
                {
                    "roll": "Result",
                    "result": "Result"
                },
                {
                    "roll": "1",
                    "result": "A pair of antennae emerge from the mutant's head, broadcasting his thoughts into the mind of his target"
                },
                {
                    "roll": "2",
                    "result": "The mutant's eyes flash with light and glow with an inner light for the duration of the effect"
                },
                {
                    "roll": "3",
                    "result": "Large veins on the mutant's head begin to pulse and throb in time with the target's heartbeat"
                },
                {
                    "roll": "4",
                    "result": "While showing no physical signs of control, the mutant unconsciously whispers every thought and command being placed into the mind of the target"
                }
            ],
            "checks": [
                {
                    "roll": "Result",
                    "result": "Result"
                },
                {
                    "roll": "1",
                    "result": "**Failure**, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant clouds a single target creature's thoughts. The target creature makes all rolls at 1 die lower on the dice chain when taking any action against the will of the mutant for 1d4+1 rounds"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant reaches into the mind of a target creature and forms a two way stream of communication lasting 2d4 rounds. This allows him to read the target's memories and implant false memories (allowing an additional Will save for each instance). False memories that are plausible remain with the target indefinitely, while demonstrably false or strange memories (judge's discretion) remain intact for 2d3 hours"
                },
                {
                    "roll": "20-21",
                    "result": "A single target creature must make a Will save or fall under the mutant's complete control, as if he was his devoted servant. However, the target will not perform actions that are suicidal or which would cause him physical harm. This control lasts 1d3+1 hours"
                },
                {
                    "roll": "22-25",
                    "result": "A single target creature must make a Will save or fall under the mutant's complete control, as if he was his devoted servant. However, the target will not perform actions that are suicidal or which would cause him physical harm. This control lasts 1d5+1 hours"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant may influence a number of target creatures equal to his level. The targets must make a Will save or fall under the mutant's complete control, as if his personal servants and bodyguards. The target creatures will not perform actions that are suicidal or which would cause them physical harm unless it is to protect the controlling mutant. This control lasts 1d7+1 hours"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant may influence a number of target creatures equal to his level. The targets must make a Will save or fall under the mutant's complete control, as if they were his devoted servants. However, the targets will not perform actions that are suicidal or which would cause them physical harm. Targets succeeding in their Will saves are merely stunned for 1 round. This control lasts 1d12+1 hours"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant may influence any and all targets within line of sight. The targets must make a Will save or fall under the complete control of the mutant, acting as extensions of his mind and body. The mutant can access their senses, direct them to take actions that are out of their self interest, but instructions to take actions that are blatantly suicidal allow the target to make a second Will save. The mutant can maintain this control for a number of days equal to his intelligence score"
                },
                {
                    "roll": "34+",
                    "result": "The mutant may mentally join with any number of willing allies within line of sight, forming a mental connection that allows for the sharing of sensory input, information, and even the projection of mental mutations, amongst the members of the collective. This connection is mentally taxing on all participants, requiring a DC 15 Will save per hour to remain connected. Barring a failed Will save, conscious members may remain connected so long as the controlling mutant is not rendered unconscious or asleep. Individuals separating from the collective must adapt to having only their own mind again, causing a 1 die penalty on all actions for 1 hour"
                }
            ]
        },
        {
            "name": "Cognitive Immortality",
            "type": "Active",
            "range": "varies",
            "duration": "Varies",
            "save": "Will vs. mutation check",
            "general": "So great is the power of the mutant's mind that the death of the body holds no fear. Upon circumstances where the mutant would normally die, the quantum ghost of their consciousness sheds its physical casing and casts about for a new brain (biological or electronic) in which to take residence, wiping out that brain's prior personality and memories in the process. Except where noted, the mutant may only possess the mind of creatures or beings of equal to or lesser hit dice. Each failed attempt (either from a successful Will save or not being powerful enough to succeed in the attempt)",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure,** the quantum field of mutant's consciousness has lost cohesion and is dispersed back into the quantum foam of the multiverse"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant's consciousness has 1 round in which to find a new host within 30 feet. This is the minimum mutation check required to compress and implant the mutant's consciousness into a non-sentient lifeform's mind"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant's consciousness has 2 rounds in which to find a new host within 60 feet"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant's consciousness has 5 rounds in which to find a new host within 100 feet. This is the minimum mutation check required to dispossess a pure strain human brain"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant's consciousness has 1 turn in which to find a new host within 500 feet"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant's consciousness has 3 turns in which to find a new host within 1 mile. This is the minimum force of will required to dispossess an artificial brain"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant's consciousness has 1 day in which to find a new host within 5 miles"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant's consciousness has 1 week in which to find a new host within 10 miles. This is the minimum force of will required to dispossess an extraterrestrial mind"
                },
                {
                    "roll": "34+",
                    "result": "The mutant's consciousness can roam freely for up to a month and attempt to supplant any target within 100 miles. This is the minimum force of will required to dispossess a truly exceptional mind such as that of an Ancient One (judge's discretion) although beings beyond mortal kenning, such as Patron AIs remain immune"
                }
            ]
        },
        {
            "name": "Eidetic Memory",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's memory is able to store memories in a quantum state using q-bits, sorting and storing information with a capability that is vastly superior to the common being. Their ability to recall information with accuracy and detail is at the level of near perfection. The judge is encouraged to provide some small level of inaccuracy based on how close to failure the Intelligence check is.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's eyes bulge grotesquely"
                },
                {
                    "roll": "2",
                    "result": "A series of 1s and 0s flicker across the mutant's skin"
                },
                {
                    "roll": "3",
                    "result": "The mutant's eyes roll back into their head as they directly view the memory on the surface of their brain"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutant is no longer able to remember proper nouns"
                },
                {
                    "roll": "14-15",
                    "result": "With a successful DC 15 Intelligence check, the mutant can remember major past events with great accuracy (judge's discretion)"
                },
                {
                    "roll": "16-19",
                    "result": "With a successful DC 14 Intelligence check, the mutant can remember even minor past events with great accuracy (judge's discretion). Additionally, the mutant gains +1 on all artifact checks"
                },
                {
                    "roll": "20-21",
                    "result": "With a successful DC 13 Intelligence check, the mutant can remember even trivial past events (judge's discretion). Additionally, the mutant gains +2 on all artifact checks"
                },
                {
                    "roll": "22-25",
                    "result": "With a successful DC 12 Intelligence check, the mutant can remember even small details from past events (judge's discretion). Additionally, the mutant gains +3 on all artifact checks"
                },
                {
                    "roll": "26-29",
                    "result": "With a successful DC 11 Intelligence check, the mutant can remember even insignificant details from past events (judge's discretion). Additionally, the mutant gains +4 on all artifact checks and AI recognition checks"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant gains savant-like abilities and can remember even the smallest detail of past events (judge's discretion). With a successful DC 15 Intelligence check, the mutant can make leaps of deduction based on otherwise mundane information (such as a mutant's home village by the color of mud on their feet). Additionally, the mutant gains +5 on all artifact checks and suffers from a -2 on Personality"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant is nearly autistic in his seemingly preternatural recall of even the smallest detail of past events (judge's discretion). With a successful DC 13 Intelligence check, the mutant can make leaps of deduction based on otherwise mundane information (such as the insect responsible for a bite based upon fruit stains on an individual's clothing). Additionally, the mutant gains +6 on all artifact checks and AI recognition checks, but suffers a permanent -4 to Personality"
                },
                {
                    "roll": "34+",
                    "result": "The mutant can recall every single moment of their life from residing inside their mother's womb to the present. Unable to fully process the zettabytes of information back into common language, the mutant is mute except for occasional outbursts of gibberish incomprehensible to other sentient beings. Although the mutant gains a +10 to all artifact checks, he cannot communicate this knowledge to others. When encountering any AI or artificial being, the two may communicate in machine language but AI recognition rolls are not allowed as the artificial being will always recognize the mutant as a fellow AI, and treat with him strictly according to its ancient programming"
                }
            ]
        },
        {
            "name": "Genetic Oracle",
            "type": "Passive",
            "range": "N/A",
            "duration": "Permanent",
            "save": "None",
            "general": "The mutant's mind has access to the ego and memories of his or her line of maternal ancestry via mitochondrial DNA. These personalities are always present but the mutant is the dominant mental presence in their own mind. The longer the line of memory, the greater the impact. This mutation is unusual in that it is always passed from mother to child with sons being a dead end for the genetic memory line.",
            "manifestations": [],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, the mutant suffers from an endless babble of past ancestors arguing with each other about how to best proceed; mutant suffers a permanent -1d4 to Intelligence"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant's ancestral line includes a number of well-versed nomadic gatherers who often have heated discussion about matters of weather patterns and natural forecasting signs. Due to the constant flow of voices, the mutant is at -1 to all Will saves, but with the aid of these voices, she may predict the week's weather with 90% accuracy"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant's ancestral line includes no personages of any note but there certainly are a number of individual memories covering many survival topics. Once per adventure she may call on her ancestors' advice and gain +1d4 to any non-damage die roll"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant's ancestral line includes her very social grandmother, known throughout the local tribes, as well as a number of other ancestors who are well traveled. When encountering sentient beings from no more than 20 miles from home, a successful DC 12 Personality check ensures that her grandmother is fondly remembered by any resident tribe and that the mutant and her companions are welcomed as kin. Within 50 miles the mutant can always find their way back to the village. Additionally the mutant may seek the advice of her ancestors once per day, gaining +1d5 to any non-damage die roll. Mutant also gains a permanent +1 to all Will saves"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant's ancestral line includes a skilled tracker, who is the dominant voice heard. The mutant can follow a target across any terrain capable of holding track or sign, only requiring a successful DC 12 Intelligence check per 6 hours to remain on the trail due to their collected knowledge of the wilderness. Mutant gains a +2 to hit and damage on any non-sentient creature. The mutant also gains a permanent +2 to all Will saves"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant's ancestral line includes a famed warrior, who is the dominant voice heard. Once per combat the mutant may call upon her for advice, gaining +1d6 to hit or damage on a single attack. The mutant also gains a permanent +3 to all Will saves"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant's ancestral line goes back to within three generations of the Great Disaster. The mutant gains +5 on all Artifact checks and once per week may surrender herself to the will and experience of her ancestors, gaining a +10 on any one artifact check, AI recognition check, or other non-combat die roll. The mutant also gains a permanent +4 to all Will saves"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant's ancestral line includes an ancestor who devoured the brain of a shaman of Tetraplex to steal their wisdom. Once per adventure the mutant may draw upon a piece of information previously absorbed by their ancestor via their use of the Query wetware program (the mutant may select from Query results 14-17, 18-19, 30-31, or 32 (see page 237)). The mutant also gains a permanent +5 to all Willpower saving throws"
                },
                {
                    "roll": "34+",
                    "result": "The collective wisdom and knowledge of the mutant's ancestry is vast and the strength of their collected egos and personalities is great. The mutant makes two rolls for all actions dice and saving throws, selecting the more beneficial result. After each success, the multitude of inner voices all scream at once, \"I knew it all along!\""
                }
            ]
        },
        {
            "name": "Life Force Drain",
            "type": "Active",
            "range": "5 feet per class level",
            "duration": "Instant",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant is able to mentally drain and absorb the very life force of other living creatures.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "The mutant's body is surrounded by a swirling deep-violet nimbus"
                },
                {
                    "roll": "2",
                    "result": "The mutant appears temporarily younger and more vibrant as target creatures visibly age and wither"
                },
                {
                    "roll": "3",
                    "result": "The mutant's chest glows flowing skeins of violet energy snake between the mutant and target creatures"
                },
                {
                    "roll": "4",
                    "result": "The mutant leaves barely visible handprints and footprints as their merest touch kills all bacterial and microscopic life from any surface"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant is able to siphon 1d3 of hit points from a single target creature (save for half); additional hit points are retained for a maximum of 2 rounds"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant is able to siphon 1d6 of hit points from a single target creature (save for half); additional hit points are retained for a maximum of 1 turn"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant is able to siphon 1d8 of hit points from a single target creature (save for half); additional hit points are retained for 1 hour"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant is able to siphon 1d4 of hit points each from up to 4 target creatures (save for half); additional hit points are retained for 3 hours"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant is able to siphon 1d6 of hit points each from up to 4 target creatures (save for half); additional hit points are retained for 12 hours"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant is able to siphon 1d3 of hit points each from all living creatures within a 20 foot radius (save for half); additional hit points are retained for 1 day"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant siphons the life force from all living creatures within a 50 foot radius, reducing affected targets to 1 hit point (a successful save reduces hp by half); for 1d3 rounds the mutant's hit point total rises to 75 and all of the mutant's abilities temporarily become 18 (if lower naturally) with all the benefits derived thereof"
                },
                {
                    "roll": "34+",
                    "result": "The mutant siphons the life force from all living creatures within a 100 foot radius, reducing affected targets to 0 hit points (a successful save reduces hp to 1); for 1d5 rounds the mutant's hit point total rises to 100 and all of the mutant's abilities temporarily become 24, with all the benefits derived thereof"
                }
            ]
        },
        {
            "name": "Meditative State",
            "type": "Active",
            "range": "N/A",
            "duration": "Instant",
            "save": "None",
            "general": "By calming their mind, slowing their spirit, and focusing their chi, the mutant is able to draw on exceptional abilities and can perform extraordinary feats. The mutant may choose to invoke any effect of equal to or less than his mutation check, allowing a range of options to produce a weaker but potentially more useful result.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "A glowing eye opens in the middle of the mutant's forehead"
                },
                {
                    "roll": "2",
                    "result": "The mutant begins to give off a soft yellow glow while smelling pleasantly of flowers"
                },
                {
                    "roll": "3",
                    "result": "The mutant floats, stationary, 1 inch off the ground"
                },
                {
                    "roll": "4",
                    "result": "The Mutant's chakras light up from within his body and visibly align, spinning synchronously together"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "**Failure**, mutation replaced by a defect"
                },
                {
                    "roll": "2-13",
                    "result": "**Failure**, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "**Effect**, The mutant is capable of surviving for 1d4+1 days without food or water with no ill effect"
                },
                {
                    "roll": "16-19",
                    "result": "**Effect**, The mutant is able to focus and increase their horrifying image to the point where they draw all focus to themselves, allowing all allies within 10 feet gain the mutant's mutant horror bonus to initiative"
                },
                {
                    "roll": "20-21",
                    "result": "**Effect**, With concentration the mutant is able to temporarily increase their fearsome aspect and improving the die type for their mutant horror bonus (see table 2-9) by 2 steps"
                },
                {
                    "roll": "22-25",
                    "result": "Focusing their energies the mutant receives +5 to their next attack, if this attack occurs within 1 hour"
                },
                {
                    "roll": "26-29",
                    "result": "Focusing their energies the mutant shrugs off most attacks, gaining +5 to their AC for the next 1d3+ level rounds"
                },
                {
                    "roll": "30-31",
                    "result": "Focusing their concentration into their genome, the mutant temporarily negates a mutational defect of their choice for 1d3 turns"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant channels their incredibly plastic DNA towards the task of healing their wounds at the cellular level, healing 1d6+ level hit points, and regrowing lost body parts or organs if applicable"
                },
                {
                    "roll": "34+",
                    "result": "Focusing their concentration into their morphic genetic structure, the mutant temporarily gains 1 random mutation (rolling once on table 3-4). This additional mutation lasts for 2 x level rounds"
                }
            ]
        },
        {
            "name": "Molecular Analysis",
            "type": "Active",
            "range": "Line-of-sight",
            "duration": "Instant",
            "save": "None",
            "general": "The mutant's mind is capable of instantly studying, deconstructing, and understanding the stress points and weaknesses of an object or individual at a molecular level. This allows them to deal devastating bare-hand blows that quickly damage or destroy. The mutant may choose to invoke any effect of equal to or less than his mutation check, increasing the bonus of the selected effect by the number of steps down taken for the chosen result. This mutation must be used on a specified target.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "A red scanning beam emanates from the mutant's eyes, repeatedly sweeping up and down the selected target"
                },
                {
                    "roll": "2",
                    "result": "The mutant's eyes take on the appearance of swirling galaxies"
                },
                {
                    "roll": "3",
                    "result": "The mutant emits an ultrasonic tone only audible to those with the ability to echolocate via the extra senses mutation"
                },
                {
                    "roll": "4",
                    "result": "The mutant must assume a Zen-like pose immediately prior to the attack as he mentally tunes into the Universe"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant is able to find the weakness in a single object or being no heavier than 10 lbs, gaining a +1 bonus to damage with a successful melee strike. On subsequent rounds the mutant may destroy an object's functionality with a successful DC 12 Strength check"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant is able to find the weakness in a single object or being no heavier than 50 lbs, gaining a +2 bonus to damage with a successful melee strike. On subsequent rounds the mutant may destroy an object's functionality with a successful DC 12 Agility check"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant is able to find the weakness in a single structural point (a wall, door, etc), object under 200 lbs, or living being, gaining +1d4 to melee damage inflicted. On subsequent rounds the mutant may break through the impediment with a successful DC 15 Strength check"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant is able to find the structural weakness of an individual weapon being used in melee. On subsequent rounds the mutant may declare that they are attacking the weapon rather than its wielder. A successful strike against a mundane weapon has it automatically sundered; a weapon forged by the ancients is damaged (reducing its effectiveness by -1 die). A mutant with a natural attack method, such as claws or a bite, has its claws or teeth shattered, imposing a -4 penalty to damage rolls with the affected natural attack for the rest of the combat. Very large monsters, such as cactacea rex or gigantopithecus, may not be affected or may receive a lesser penalty to damage rolls. Each success grants a +1 bonus to the attack roll"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant is able to find the structural weak-points in a foe's armor (including natural armor). Melee strikes from the mutant on subsequent rounds permanently lower the target's AC. Each success grants a -1d4 AC reduction per strike"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant is able to find a major structural weakness in their foe. On a successful strike on subsequent rounds the target must make a Fort save vs. the original mutation check or be stunned for 2d6 rounds. Objects composed of mundane substances (rock, wood, normal metals) are shattered"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant is able to find the most injurious locations to strike a given foe. On subsequent rounds the mutant's melee attacks do additional damage. Each successful melee strike on the same foe grants a +1d6 bonus to damage. Objects composed of materials of the Ancient Ones (duralloy, plasteel, permaglass) are shattered"
                },
                {
                    "roll": "34+",
                    "result": "The mutant is able to find the weakest point on any foe. On subsequent rounds the mutant's melee attacks do additional damage. Each successful melee strike on the same foe grants a +1d6 bonus to damage plus an automatic critical hit. Force screens are shattered and dropped"
                }
            ]
        },
        {
            "name": "Time Lash",
            "type": "Active",
            "range": "10 feet per class level",
            "duration": "Instant",
            "save": "Fortitude vs. mutation check",
            "general": "The mutant's mind is capable of manipulating the timeline of target creature.",
            "manifestations": [
                {
                    "roll": "1",
                    "result": "Any grass, flowers, of plant life at the target's feet grow, bloom, and wither cyclically at a maddening pace"
                },
                {
                    "roll": "2",
                    "result": "The target appears to twitch and bob in a sudden blur of sped-up motion"
                },
                {
                    "roll": "3",
                    "result": "The target is suddenly lit in a strobing light effect as if the sun were passing overhead at increasingly accelerated speeds"
                },
                {
                    "roll": "4",
                    "result": "A low grinding sound is heard as though a set of cosmic keys were being slowly dragged across an infinite length of piano wire"
                }
            ],
            "checks": [
                {
                    "roll": "1",
                    "result": "Failure, mutation may not be used again that day, roll on defects table"
                },
                {
                    "roll": "2-13",
                    "result": "Failure, mutation may not be used again that day"
                },
                {
                    "roll": "14-15",
                    "result": "The mutant causes target creature to suddenly age 12 hours, becoming tired and hungry; target creature is -1 to all actions"
                },
                {
                    "roll": "16-19",
                    "result": "The mutant causes target creature to suddenly age 24 hours, becoming very tired and hungry; target creature is -2 to all actions"
                },
                {
                    "roll": "20-21",
                    "result": "The mutant causes target creature to suddenly age 3 days, becoming exhausted and starved; target creature is -3 to all actions"
                },
                {
                    "roll": "22-25",
                    "result": "The mutant causes target creature to suddenly age 1 week; target creature drops unconscious from dehydration and starvation"
                },
                {
                    "roll": "26-29",
                    "result": "The mutant advances the timeline of target creature 10 years; target's ability scores improve by 1d3, but hit points are halved due to system shock"
                },
                {
                    "roll": "30-31",
                    "result": "The mutant advances the timeline of target creature 50 years; target becomes enfeebled and cannot move or attack"
                },
                {
                    "roll": "32-33",
                    "result": "The mutant advances the timeline of target creature 100 years in an instant; target creature is immediately killed and skeletonized, organic clothing and possessions likewise age, and normal metallic items tarnish and rust"
                },
                {
                    "roll": "34+",
                    "result": "The mutant advances the timeline of target creature 500 years in an instant; target creature immediately crumbles to dust as do all organic clothing and possessions, normal metallic items corrode into a worthless state, and even artifacts loose all charges and power"
                }
            ]
        }
    ]
};