export type PlayerAnalysis = {
  questionsPassed: number;
  CorrectlyAnswered: number;
  unansweredQuestions: number;
  incorrectQuestions: number;
};

type QuizBody = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  options: Array<string>;
};

export const player1: Array<QuizBody> = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Japanese Anime &amp; Manga",
    question:
      "In the anime Assassination Classroom what is the class that Korosensei teaches?",
    correct_answer: "Class 3-E",
    options: ["Class 3-A", "Class 3-E", "Class 3-B", "Class 3-D"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question:
      "Who famously coined the phrase &quot;I think, therefore I am&quot;?",
    correct_answer: "Descartes",
    options: ["Plato", "Descartes", "Aristotle", "Descartes", "Shakespeare"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question:
      "The creeper in Minecraft was the result of a bug while implementing which creature?",
    correct_answer: "Pig",
    options: ["Zombie", "Chicken", "Cow", "Pig"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question:
      "What is the lowest amount of max health you can have in Team Fortress 2?",
    correct_answer: "70",
    options: ["100", "70", "50", "95"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question:
      "In the Nintendo Game Splatoon 2, what is Marina&#039;s screen name?",
    correct_answer: "DJ_Hyperfresh",
    options: [
      "MC.princess",
      "Kidnotsquid123",
      "I&lt;30ffTh3H00k",
      "DJ_Hyperfresh",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question:
      "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
    correct_answer: "Swiss Air",
    options: ["Air France", "Swiss Air", "British Airways", "TWA"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Books",
    question:
      "Under what pseudonym did Stephen King publish five novels between 1977 and 1984?",
    correct_answer: "Richard Bachman",
    options: ["J. D. Robb", "Richard Bachman", "Mark Twain", "Lewis Carroll"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Animals",
    question: "What is the scientific name for modern day humans?",
    correct_answer: "Homo Sapiens",
    options: [
      "Homo Ergaster",
      "Homo Erectus",
      "Homo Sapiens",
      "Homo Neanderthalensis",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question: "In the 2012 film, &quot;The Lorax&quot;, who is the antagonist?",
    correct_answer: "Aloysius O&#039;Hare",
    options: [
      "Ted Wiggins",
      "The Once-Ler",
      "Aloysius O&#039;Hare",
      "Grammy Norma",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Television",
    question:
      "Who played the Waitress in the Spam sketch of &quot;Monty Python&#039;s Flying Circus&quot;?",
    correct_answer: "Terry Jones",
    options: ["Eric Idle", "Terry Jones", "Graham Chapman", "John Cleese"],
  },
];

export const player2: Array<QuizBody> = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question:
      "Which musical artist was NOT featured as playable avatars in the game &quot;DJ Hero&quot;?",
    correct_answer: "Dr. Dre",
    options: ["Dr. Dre", "DJ Shadow", "Daft Punk", "Grandmaster Flash"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Japanese Anime &amp; Manga",
    question: "What&#039;s the English Dub Name of &quot;Smile Precure&quot;?",
    correct_answer: "Glitter Force",
    options: [
      "Sparkle Girls",
      "Fairy Tale Patrol",
      "Glitter Force",
      "Power Princesses",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Music",
    question:
      "Which of these is NOT a song on The Beatles&#039; 1968 self titled album, also known as the White album?",
    correct_answer: "Being For The Benefit Of Mr. Kite!",
    options: [
      "Being For The Benefit Of Mr. Kite!",
      "Why Don&#039;t We Do It in the Road?",
      "Everybody&#039;s Got Something to Hide Except Me and My Monkey",
      "The Continuing Story of Bungalow Bill",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question:
      "In &quot;Call Of Duty: Zombies&quot;, &quot;Richtofen&quot; is in possession of two filled blood vials belonging to who?",
    correct_answer: "Sal DeLuca and Finn O&#039;Leary",
    options: [
      "Richtofen",
      "Al Arlington and Sal DeLuca",
      "Sal DeLuca and Finn O&#039;Leary",
      "Jessica Rose and Jack Vincent",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Video Games",
    question:
      "What animal is on Link&#039;s pajamas in The Legend of Zelda: The Wind Waker?",
    correct_answer: "Crawfish",
    options: ["Lobster", "Salmon", "Crawfish", "Swordfish"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question:
      "In 2012 the German-speaking microstate &quot;Liechtenstein&quot; in Central Europe had a population of how many inhabitants?",
    correct_answer: "36,600",
    options: ["2,400", "36,600", "90,000", "323,400"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question: "Which of these Marvel games was released on the Playstation 2?",
    correct_answer: "Spider-Man 2",
    options: [
      "Silver Surfer",
      "Howard the Duck",
      "Wolverine: Adamantium Rage",
      "Spider-Man 2",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "The movie &quot;Tron&quot; received an Oscar nomination for Best Visual Effects.",
    correct_answer: "False",
    options: ["True", "False", "Don't know", "You must know"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Music",
    question: "Who won the 1989 Drum Corps International championships?",
    correct_answer: "Santa Clara Vanguard",
    options: [
      "Blue Devils",
      "The Academy",
      "Santa Clara Vanguard",
      "The Bluecoats",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question: "What city is known as the Rose Capital of the World?",
    correct_answer: "Tyler, Texas",
    options: [
      "San Diego, California",
      "Tyler, Texas",
      "Miami, Florida",
      "Anaheim, California",
    ],
  },
];

export let player1Analysis: PlayerAnalysis = {
  questionsPassed: 0,
  CorrectlyAnswered: 0,
  unansweredQuestions: 0,
  incorrectQuestions: 0,
};
export let player2Analysis: PlayerAnalysis = {
  questionsPassed: 0,
  CorrectlyAnswered: 0,
  unansweredQuestions: 0,
  incorrectQuestions: 0,
};

localStorage.setItem("player1Analysis", JSON.stringify(player1Analysis));
localStorage.setItem("player2Analysis", JSON.stringify(player2Analysis));
