/* =====================================================================
   WBCS Prelims Mock Test Series — manifest.js
   Exam rules, the 18 topics, motivational quotes, and the list of
   year-wise paper files.

   HOW TO ADD A NEW YEAR
   1. Copy any data/20xx.js file to data/2024.js and replace the questions.
   2. Add one line to PAPER_LIST below:  {year:2024, file:'data/2024.js'}
   That's all — the year chip appears on the home screen automatically.
   ===================================================================== */

/* ---- Exam rules (edit to match the official pattern you want to simulate) ---- */
window.RULES = {
  examName: 'WBCS Prelims',
  fullMinutes: 120,     // time for a full-paper test
  negative: 0.25,       // marks deducted per wrong answer (1 mark per correct answer)

  /* The 18 topics. `n` must match the "s" field of every question EXACTLY.
     `i` = icon, `k` = short code used on the radar chart. */
  topics: [
    { n: 'English',                    i: '🔤', k: 'ENG'  },
    { n: 'Ancient History',            i: '🏺', k: 'ANC'  },
    { n: 'Medieval History',           i: '🏰', k: 'MED'  },
    { n: 'Modern History',             i: '📜', k: 'MOD'  },
    { n: 'Indian National Movement',   i: '🇮🇳', k: 'INM'  },
    { n: 'Indian Geography',           i: '🗺️', k: 'IGEO' },
    { n: 'World & Physical Geography', i: '🌍', k: 'WGEO' },
    { n: 'Arts & Culture',             i: '🎭', k: 'A&C'  },
    { n: 'West Bengal Specific',       i: '🐅', k: 'WB'   },
    { n: 'Indian Polity',              i: '🏛️', k: 'POL'  },
    { n: 'Indian Economy',            i: '💹', k: 'ECO'  },
    { n: 'Physics',                    i: '⚛️', k: 'PHY'  },
    { n: 'Chemistry',                  i: '🧪', k: 'CHE'  },
    { n: 'Biology',                    i: '🧬', k: 'BIO'  },
    { n: 'Environmental Studies',      i: '🌱', k: 'ENV'  },
    { n: 'Static GK',                  i: '📌', k: 'GK'   },
    { n: 'Current Affairs',            i: '📰', k: 'CA'   },
    { n: 'General Mental Ability',     i: '🧠', k: 'GMA'  }
  ]
};

/* ---- Year-wise paper files (loaded only when the student picks that year) ---- */
window.PAPER_LIST = [
  { year: 2023, file: 'data/2023.js' },
  { year: 2022, file: 'data/2022.js' },
  { year: 2021, file: 'data/2021.js' }
];

/* ---- Motivational quotes (one is shown per day on the home screen). Add your own! ---- */
window.QUOTES = [
  'Consistency beats intensity — one solid hour every day wins the exam.',
  'Every wrong answer you review today is a mark you keep tomorrow.',
  'You don\'t need to be perfect. You need to be better than yesterday.',
  'Discipline is choosing what you want most over what you want now.',
  'Small daily progress adds up to big results.',
  'Mock tests are rehearsals. Make your mistakes here, not in the exam hall.',
  'Your future officer self is watching — keep going.',
  'Don\'t count the days; make the days count.',
  'Hard work compounds. Start the next question.',
  'Revision is where marks are made.',
  'Slow progress is still progress.',
  'Focus on the process; the rank will follow.',
  'Today\'s effort is tomorrow\'s confidence.',
  'One more topic. One more test. One step closer.',
  'Be patient with the syllabus, be strict with your schedule.'
];
