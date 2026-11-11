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
    { n: 'English',                    i: '🔤', k: 'English'  },
    { n: 'Ancient History',            i: '🏺', k: 'Ancient Hist.'  },
    { n: 'Medieval History',           i: '🏰', k: 'Medieval Hist.'  },
    { n: 'Modern History',             i: '📜', k: 'Modern Hist.'  },
    { n: 'Indian National Movement',   i: '🇮🇳', k: 'Indian National Movement'  },
    { n: 'Indian Geography',           i: '🗺️', k: 'Indian Geog.' },
    { n: 'World & Physical Geography', i: '🌍', k: 'World & Phy Geog.' },
    { n: 'Arts & Culture',             i: '🎭', k: 'Arts & Culture'  },
    { n: 'West Bengal Specific',       i: '🐅', k: 'W.B. Specific'   },
    { n: 'Indian Polity',              i: '🏛️', k: 'Polity'  },
    { n: 'Indian Economy',            i: '💹', k: 'Econony'  },
    { n: 'Physics',                    i: '⚛️', k: 'Physics'  },
    { n: 'Chemistry',                  i: '🧪', k: 'Chemistry'  },
    { n: 'Biology',                    i: '🧬', k: 'Biology'  },
    { n: 'Environmental Studies',      i: '🌱', k: 'Envs'  },
    { n: 'Static GK',                  i: '📌', k: 'Static GK'   },
    { n: 'Current Affairs',            i: '📰', k: 'Current Affairs'   },
    { n: 'General Mental Ability',     i: '🧠', k: 'Mental Ability'  }
  ]
};

/* ---- Year-wise paper files (loaded only when the student picks that year) ---- */
window.PAPER_LIST = [
  { year: 2024, file: 'data/2024.js' },
  { year: 2023, file: 'data/2023.js' },
  { year: 2022, file: 'data/2022.js' },
  { year: 2021, file: 'data/2021.js' },
  //{ year: 2020, file: 'data/2024.js' },
  //{ year: 2019, file: 'data/2019.js' },
  //{ year: 2018, file: 'data/2018.js' },
  //{ year: 2017, file: 'data/2017.js' },
  //{ year: 2016, file: 'data/2016.js' },
  //{ year: 2015, file: 'data/2015.js' },
  //{ year: 2014, file: 'data/2014.js' },
  //{ year: 2013, file: 'data/2013.js' },
  //{ year: 2012, file: 'data/2012.js' },
  //{ year: 2011, file: 'data/2011.js' },
  //{ year: 2010, file: 'data/2010.js' },
  //{ year: 2009, file: 'data/2009.js' },
  //{ year: 2008, file: 'data/2008.js' },
  //{ year: 2007, file: 'data/2007.js' },
  //{ year: 2006, file: 'data/2006.js' },
  //{ year: 2005, file: 'data/2005.js' },
  //{ year: 2004, file: 'data/2004.js' },
  //{ year: 2003, file: 'data/2003.js' },
  //{ year: 2002, file: 'data/2002.js' },
  //{ year: 2001, file: 'data/2001.js' }
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
