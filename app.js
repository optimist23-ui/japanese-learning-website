const hiragana = [
  ["あ", "a", "A round open mouth says ah."],
  ["い", "i", "Two slim lines look like two eels saying ee."],
  ["う", "u", "The little cap on top helps you say ooh."],
  ["え", "e", "It looks like an energetic person leaning into eh."],
  ["お", "o", "The loop feels like a surprised oh."],
  ["か", "ka", "The sharp corner kicks out a ka sound."],
  ["き", "ki", "It looks like a key with extra teeth."],
  ["く", "ku", "A bird beak opens with koo."],
  ["け", "ke", "The gate shape helps you remember keh."],
  ["こ", "ko", "Two cozy lines say koh."],
  ["さ", "sa", "The top slash feels like a quick saw cut: sa."],
  ["し", "shi", "A fishing hook curves like shee."],
  ["す", "su", "The loop swoops down into soo."],
  ["せ", "se", "The crossing lines set up seh."],
  ["そ", "so", "A zigzag stitch says soh."],
  ["た", "ta", "It looks like a table with a side leg: ta."],
  ["ち", "chi", "The curve looks like a cheek: chi."],
  ["つ", "tsu", "A wave curls into tsu."],
  ["て", "te", "A hand shape reaches out: teh."],
  ["と", "to", "A toe tapping forward: toh."],
  ["な", "na", "The knot in the middle ties na together."],
  ["に", "ni", "Two parallel needles say nee."],
  ["ぬ", "nu", "A noodle-like loop helps with noo."],
  ["ね", "ne", "A net catches the loop: neh."],
  ["の", "no", "A simple no-entry loop."],
  ["ま", "ma", "The top bars make a map-like ma."],
  ["み", "mi", "It looks like a musical note: mee."],
  ["む", "mu", "A curled shape hums moo."],
  ["め", "me", "A messy loop says meh."],
  ["も", "mo", "A hook carries more: moh."],
  ["ら", "ra", "A small cap rests on ra."],
  ["り", "ri", "Two reeds stand together: ree."],
  ["る", "ru", "A loop rolls into roo."],
  ["れ", "re", "The line reaches right: reh."],
  ["ろ", "ro", "A road curves around: roh."]
];

const katakana = [
  ["ア", "a", "A bold angle opens with ah."],
  ["イ", "i", "Two strokes stand like the letter i."],
  ["ウ", "u", "The roof shape says ooh."],
  ["エ", "e", "It resembles a squared-off capital E."],
  ["オ", "o", "A strong cross opens into oh."],
  ["カ", "ka", "A clear corner kicks ka."],
  ["キ", "ki", "It looks like a key with straight teeth."],
  ["ク", "ku", "The angled beak says koo."],
  ["ケ", "ke", "A sharp gate shape says keh."],
  ["コ", "ko", "A square corner closes with koh."],
  ["サ", "sa", "The three strokes slice like sa."],
  ["シ", "shi", "The marks lean upward like shee."],
  ["ス", "su", "The diagonal sweep slides into soo."],
  ["セ", "se", "The boxed angle sets up seh."],
  ["ソ", "so", "The two marks slope downward: soh."],
  ["タ", "ta", "A tag shape says ta."],
  ["チ", "chi", "The top line and hook point to chi."],
  ["ツ", "tsu", "The marks drop downward like tsu."],
  ["テ", "te", "A T-like shape helps with teh."],
  ["ト", "to", "A straight post with a toe mark: toh."],
  ["ナ", "na", "A simple cross nails na."],
  ["ニ", "ni", "Two neat lines say nee."],
  ["ヌ", "nu", "Crossed strokes knot into noo."],
  ["ネ", "ne", "A little signpost points to neh."],
  ["ノ", "no", "One simple note says no."],
  ["マ", "ma", "The angled roof marks ma."],
  ["ミ", "mi", "Three lines make mee."],
  ["ム", "mu", "A triangular mouth hums moo."],
  ["メ", "me", "Crossed marks make meh."],
  ["モ", "mo", "More horizontal lines: moh."],
  ["ラ", "ra", "A flat roof rests on ra."],
  ["リ", "ri", "Two reeds stand straight: ree."],
  ["ル", "ru", "The angled leg runs into roo."],
  ["レ", "re", "A long reaching stroke: reh."],
  ["ロ", "ro", "A square room says roh."]
];

const lessons = [
  {
    title: "Kana Foundations",
    label: "Lesson 01",
    text: "Recognize the five vowel sounds, then reinforce with flashcards and matching.",
    target: "#kana"
  },
  {
    title: "Vocabulary Flashcards",
    label: "Lesson 02",
    text: "Practice objects, definitions, and mnemonic hints for daily words.",
    target: "#vocab"
  },
  {
    title: "Timed Matching",
    label: "Lesson 03",
    text: "Race the timer by pairing object clues with Japanese vocabulary.",
    target: "#activities"
  },
  {
    title: "Sentence Builders",
    label: "Lesson 04",
    text: "Use a Japanese word bank to build sentences from English prompts.",
    target: "#activities"
  }
];

const weeklyLessons = [
  {
    id: "week-01",
    label: "Week 1",
    date: "Foundation",
    title: "Kana and classroom phrases",
    summary: "Start with hiragana and katakana rhythm, greetings, and useful class phrases.",
    vocabulary: ["こんにちは", "ありがとう", "すみません", "はい", "いいえ"],
    grammar: ["Japanese sound rhythm", "Polite classroom expressions"],
    culture: ["Classroom etiquette", "Using -san"],
    activities: ["Kana flashcards", "Pronunciation dropdowns", "Quick quiz"]
  },
  {
    id: "week-02",
    label: "Week 2",
    date: "Ability practice",
    title: "できる and できません",
    summary: "Practice saying what you can and cannot do through survival-skill sentences.",
    vocabulary: ["みず", "さがす", "つくる", "つり", "しゅうり"],
    grammar: ["できます", "できません", "verb at the end"],
    culture: ["Teamwork language", "Giving hints in class"],
    activities: ["Sentence builder", "Definitions-to-objects game", "Review missed answers"]
  },
  {
    id: "week-03",
    label: "Week 3",
    date: "Family",
    title: "わたしのかぞく",
    summary: "Learn family words and the difference between your own family and someone else’s family.",
    vocabulary: ["ちち", "はは", "おとうさん", "おかあさん", "かぞく"],
    grammar: ["の possession", "honorific family words", "counting people"],
    culture: ["Respectful address", "Family-role language"],
    activities: ["Family vocabulary cards", "Culture recap", "Flashcard review"]
  },
  {
    id: "week-04",
    label: "Week 4",
    date: "May 5 upload",
    title: "Japanese society and Golden Week",
    summary: "Uploaded class content from May 5: family terms, ability practice, particle も, and Golden Week culture.",
    vocabulary: ["ゴールデンウィーク", "こどものひ", "こいのぼり", "五月病", "しんかんせん"],
    grammar: ["も also / too", "です / ですか", "country + ご for language"],
    culture: ["昭和の日", "憲法記念日", "みどりの日", "こどもの日"],
    activities: ["Grammar focus", "Culture tiles", "Listening recap"]
  },
  {
    id: "week-template",
    label: "Next Week",
    date: "Add after class",
    title: "New lesson placeholder",
    summary: "Add the next transcript, vocabulary, grammar points, cultural notes, and activities here.",
    vocabulary: ["new words"],
    grammar: ["new grammar"],
    culture: ["new culture topic"],
    activities: ["new practice activity"]
  }
];

const vocabulary = [
  ["こんにちは", "konnichiwa", "hello", "greetings", "👋", "A greeting used during the day.", "Konnichiwa has a friendly wave rhythm."],
  ["ありがとう", "arigatou", "thank you", "greetings", "🙏", "Words you say after someone helps you.", "Ari-gatou sounds like a grateful bow."],
  ["すみません", "sumimasen", "excuse me", "greetings", "🙇", "A polite apology or attention-getter.", "Sue me? No, sumimasen softens the moment."],
  ["はい", "hai", "yes", "greetings", "✅", "An affirmative answer.", "Hai is high confidence: yes."],
  ["いいえ", "iie", "no", "greetings", "✖", "A negative answer.", "The long ee sound gives you time to politely refuse."],
  ["水", "mizu", "water", "food", "💧", "A clear drink you need every day.", "Mizu moves like water: mi-zu."],
  ["お茶", "ocha", "tea", "food", "🍵", "A warm or cold Japanese drink.", "O-cha sounds like offering tea."],
  ["ご飯", "gohan", "rice; meal", "food", "🍚", "Cooked rice or a meal.", "Gohan is what Goku wants before training."],
  ["魚", "sakana", "fish", "food", "🐟", "An animal from the water that people eat.", "Sakana has a splashy sa-ka-na rhythm."],
  ["コーヒー", "koohii", "coffee", "food", "☕", "A bitter caffeinated drink.", "Koohii stretches like a long coffee sip."],
  ["駅", "eki", "station", "travel", "🚉", "A place where trains stop.", "Eki is short and quick, like a train stop."],
  ["切符", "kippu", "ticket", "travel", "🎫", "A pass used to ride a train or enter.", "Kippu clips like punching a ticket."],
  ["ホテル", "hoteru", "hotel", "travel", "🏨", "A place to stay while traveling.", "Hoteru sounds close to hotel."],
  ["右", "migi", "right", "travel", "➡", "The direction opposite left.", "Migi has a hard g like go right."],
  ["左", "hidari", "left", "travel", "⬅", "The direction opposite right.", "Hidari has a hidden left turn."],
  ["今日", "kyou", "today", "time", "📅", "This current day.", "Kyou sounds like cue: your cue is today."],
  ["明日", "ashita", "tomorrow", "time", "🌅", "The day after today.", "A-shi-ta steps into the next day."],
  ["朝", "asa", "morning", "time", "🌄", "The early part of the day.", "Asa opens like a sunrise."],
  ["夜", "yoru", "night", "time", "🌙", "The dark part of the day.", "Yoru rolls quietly into night."],
  ["今", "ima", "now", "time", "⏱", "This moment.", "Ima is immediate."],
  ["ちち", "chichi", "my father", "family", "father", "A humble word for your own father.", "Chichi is for your own family: my father."],
  ["はは", "haha", "my mother", "family", "mother", "A humble word for your own mother.", "Haha sounds like a soft family word for mother."],
  ["おとうさん", "otou san", "father", "family", "father-honor", "A polite or honorific word for someone’s father.", "The お and さん make it respectful."],
  ["おかあさん", "okaa san", "mother", "family", "mother-honor", "A polite or honorific word for someone’s mother.", "The long kaa sound stretches warmly in mother."],
  ["かぞく", "kazoku", "family", "family", "family", "Your family or household group.", "Kazoku keeps the whole family together."],
  ["ともだち", "tomodachi", "friend", "family", "friend", "A friend or companion.", "Tomo sounds like together: a friend is with you."]
];

const vocabularyKana = {
  水: "みず",
  お茶: "おちゃ",
  ご飯: "ごはん",
  魚: "さかな",
  コーヒー: "こーひー",
  駅: "えき",
  切符: "きっぷ",
  ホテル: "ほてる",
  右: "みぎ",
  左: "ひだり",
  今日: "きょう",
  明日: "あした",
  朝: "あさ",
  夜: "よる",
  今: "いま",
  ちち: "ちち",
  はは: "はは",
  おとうさん: "おとうさん",
  おかあさん: "おかあさん",
  かぞく: "かぞく",
  ともだち: "ともだち",
  こんにちは: "こんにちは",
  ありがとう: "ありがとう",
  すみません: "すみません",
  はい: "はい",
  いいえ: "いいえ"
};

const phraseNouns = [
  ["コーヒー", "koohii", "coffee"],
  ["お茶", "ocha", "tea"],
  ["日本語", "nihongo", "Japanese"],
  ["音楽", "ongaku", "music"],
  ["映画", "eiga", "movies"]
];

const sentenceChallenges = [
  {
    english: "I like tea.",
    answer: ["わたしは", "おちゃ", "が", "すきです"],
    roles: ["topic", "noun", "particle", "action"],
    bankRoles: {
      おちゃ: "noun",
      わたしは: "topic",
      です: "polite",
      が: "particle",
      すきです: "action",
      みず: "noun"
    },
    bank: ["おちゃ", "わたしは", "です", "が", "すきです", "みず"],
    hint: "Japanese often uses topic first: 私は, then the thing you like."
  },
  {
    english: "This is water.",
    answer: ["これは", "みず", "です"],
    roles: ["topic", "noun", "polite"],
    bankRoles: {
      みず: "noun",
      です: "polite",
      さかな: "noun",
      これは: "topic",
      が: "particle"
    },
    bank: ["みず", "です", "さかな", "これは", "が"],
    hint: "これは means this is. Put the object before です."
  },
  {
    english: "Where is the station?",
    answer: ["えき", "は", "どこ", "ですか"],
    roles: ["noun", "particle", "question", "polite"],
    bankRoles: {
      ですか: "polite",
      は: "particle",
      えき: "noun",
      みぎ: "noun",
      どこ: "question",
      です: "polite"
    },
    bank: ["ですか", "は", "えき", "みぎ", "どこ", "です"],
    hint: "どこ means where. Questions often end with ですか."
  },
  {
    english: "Good morning.",
    answer: ["おはよう", "ございます"],
    roles: ["action", "polite"],
    bankRoles: {
      ありがとう: "action",
      ございます: "polite",
      おはよう: "action",
      こんにちは: "action"
    },
    bank: ["ありがとう", "ございます", "おはよう", "こんにちは"],
    hint: "The polite morning greeting is two parts."
  }
];

const grammarFocus = [
  {
    particle: "は",
    romaji: "wa",
    title: "Topic marker",
    rule: "Use は after the topic you are talking about.",
    example: "わたしは がくせいです。",
    translation: "I am a student."
  },
  {
    particle: "が",
    romaji: "ga",
    title: "Subject or focus marker",
    rule: "Use が to point to the thing doing or receiving the focus.",
    example: "おちゃが すきです。",
    translation: "I like tea."
  },
  {
    particle: "も",
    romaji: "mo",
    title: "Also / too",
    rule: "Use も after a word to add it to the same group.",
    example: "わたしも にほんじんです。",
    translation: "I am Japanese too."
  },
  {
    particle: "の",
    romaji: "no",
    title: "Possession / connection",
    rule: "Use の to connect two nouns, often like apostrophe-s.",
    example: "わたしの かぞく",
    translation: "My family."
  },
  {
    particle: "です",
    romaji: "desu",
    title: "Polite sentence ending",
    rule: "Use です to make simple statements polite.",
    example: "これは みずです。",
    translation: "This is water."
  },
  {
    particle: "ですか",
    romaji: "desu ka",
    title: "Polite question ending",
    rule: "Add か after です to make a polite question.",
    example: "えきは どこですか。",
    translation: "Where is the station?"
  }
];

const grammarQuestions = [
  {
    sentence: "わたし ___ にほんじんです。",
    answers: ["は", "を", "へ"],
    correct: "は",
    feedback: "は marks わたし as the topic."
  },
  {
    sentence: "わたし ___ にほんじんです。",
    answers: ["も", "で", "を"],
    correct: "も",
    feedback: "も means also or too."
  },
  {
    sentence: "おちゃ ___ すきです。",
    answers: ["が", "へ", "に"],
    correct: "が",
    feedback: "が marks the thing being liked."
  }
];

const classRecapMoments = [
  {
    time: "00:10:18",
    title: "Feeling words",
    summary: "うれしい means happy. The class used it during casual check-in conversation.",
    terms: ["うれしい", "happy"]
  },
  {
    time: "00:11:17",
    title: "Classroom phrases",
    summary: "どうですか means how is it or how was it. もう一回 means one more time.",
    terms: ["どうですか", "もう一回", "どうぞ"]
  },
  {
    time: "00:12:44",
    title: "Food and gathering",
    summary: "The class reviewed fruit and vegetables while giving hints about finding food.",
    terms: ["くだもの", "やさい", "さがす"]
  },
  {
    time: "00:16:26",
    title: "Survival skills",
    summary: "Learners practiced what they can and cannot do on an island.",
    terms: ["みず", "つくる", "つり", "できます", "できません"]
  },
  {
    time: "00:38:48",
    title: "Particle も",
    summary: "も works like also or too, and is placed after a word to add it to a set.",
    terms: ["も", "わたしも", "にほんじん"]
  },
  {
    time: "01:21:51",
    title: "My family",
    summary: "The class began わたしのかぞく and compared own-family words with honorific words.",
    terms: ["かぞく", "ちち", "はは", "おとうさん", "おかあさん"]
  }
];

const cultureTiles = [
  {
    date: "April 29",
    time: "Showa Day",
    title: "昭和の日",
    image: "showa",
    summary: "A day to reflect on the Showa era, which lasted from 1926 to 1989.",
    terms: ["しょうわのひ", "reflection", "history"]
  },
  {
    date: "May 3",
    time: "Constitution Memorial Day",
    title: "憲法記念日",
    image: "constitution",
    summary: "A holiday connected to Japan’s postwar constitution.",
    terms: ["けんぽうきねんび", "constitution", "postwar"]
  },
  {
    date: "May 4",
    time: "Greenery Day",
    title: "みどりの日",
    image: "greenery",
    summary: "A day to appreciate nature and the blessings of the natural world.",
    terms: ["みどりのひ", "nature", "plants"]
  },
  {
    date: "May 5",
    time: "Children's Day",
    title: "こどもの日",
    image: "children",
    summary: "Families wish for children’s health and success. Carp streamers are common.",
    terms: ["こどものひ", "こいのぼり", "children"]
  },
  {
    date: "After Golden Week",
    time: "Return to work",
    title: "五月病",
    image: "may",
    summary: "Some people feel tired or burnt out after the long holiday break.",
    terms: ["ごがつびょう", "stress", "new environment"]
  },
  {
    date: "Peak travel",
    time: "Stations and highways",
    title: "大混雑",
    image: "travel",
    summary: "Shinkansen seats, expressways, airports, and tourist areas can become extremely crowded.",
    terms: ["しんかんせん", "じゅうたい", "travel"]
  }
];

const cultureTerms = [
  "ゴールデンウィーク",
  "できる",
  "できません",
  "わたしも",
  "にほんじん",
  "フランスご",
  "かぞく",
  "おこす",
  "しゅうり",
  "ろくにん"
];

const katakanaPracticeWords = [
  {
    word: "テレビ",
    romaji: "terebi",
    answer: "TV",
    choices: ["TV", "table", "ticket", "tea"],
    note: "テレビ is a loanword. Listen for te-re-bi, close to television."
  },
  {
    word: "コーヒー",
    romaji: "koohii",
    answer: "coffee",
    choices: ["coffee", "copy", "cookie", "curry"],
    note: "The long ー mark stretches the vowel: koo-hii."
  },
  {
    word: "ホテル",
    romaji: "hoteru",
    answer: "hotel",
    choices: ["hotel", "hospital", "home", "hall"],
    note: "ホテル sounds close to hotel, but Japanese syllables stay even: ho-te-ru."
  },
  {
    word: "ドライブ",
    romaji: "doraibu",
    answer: "drive",
    choices: ["drive", "drum", "drink", "draw"],
    note: "ドライブ breaks into do-ra-i-bu. Katakana often adapts English sounds."
  },
  {
    word: "ダンス",
    romaji: "dansu",
    answer: "dance",
    choices: ["dance", "desk", "dish", "distance"],
    note: "ダンス uses three beats: da-n-su."
  },
  {
    word: "ギター",
    romaji: "gitaa",
    answer: "guitar",
    choices: ["guitar", "game", "gear", "gate"],
    note: "The long ー mark holds the final sound: gi-taa."
  },
  {
    word: "フランス",
    romaji: "furansu",
    answer: "France",
    choices: ["France", "French", "Florida", "friend"],
    note: "Country names can sound different in Japanese. France becomes fu-ra-n-su."
  },
  {
    word: "ペット",
    romaji: "petto",
    answer: "pet",
    choices: ["pet", "bed", "pen", "belt"],
    note: "The small ッ doubles the next consonant: pet-to."
  }
];

const quizQuestions = [
  {
    prompt: "What does ありがとう mean?",
    answers: ["thank you", "station", "night", "ticket"],
    correct: "thank you"
  },
  {
    prompt: "Which romaji matches すみません?",
    answers: ["sumimasen", "sakana", "ashita", "migi"],
    correct: "sumimasen"
  },
  {
    prompt: "What is the reading for 水?",
    answers: ["mizu", "yoru", "iie", "eki"],
    correct: "mizu"
  },
  {
    prompt: "Which word means station?",
    answers: ["駅", "魚", "朝", "右"],
    correct: "駅"
  },
  {
    prompt: "What does 明日 mean?",
    answers: ["tomorrow", "today", "coffee", "left"],
    correct: "tomorrow"
  }
];

function readProfiles() {
  try {
    const profiles = JSON.parse(localStorage.getItem("nihongoProfiles") || "{}");
    return profiles && typeof profiles === "object" ? profiles : {};
  } catch {
    return {};
  }
}

function writeProfiles(profiles) {
  localStorage.setItem("nihongoProfiles", JSON.stringify(profiles));
}

function profileIdFor(name) {
  return String(name || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function emptyProgress() {
  return {
    knownKana: [],
    knownWords: [],
    bestQuiz: 0,
    reviewItems: []
  };
}

function legacyProgress() {
  return {
    knownKana: JSON.parse(localStorage.getItem("knownKana") || "[]"),
    knownWords: JSON.parse(localStorage.getItem("knownWords") || "[]"),
    bestQuiz: Number(localStorage.getItem("bestQuiz") || "0"),
    reviewItems: JSON.parse(localStorage.getItem("reviewItems") || "[]")
  };
}

function activeProfileProgress() {
  const activeProfileId = localStorage.getItem("activeProfileId") || "";
  const profiles = readProfiles();
  return activeProfileId && profiles[activeProfileId] ? profiles[activeProfileId].progress || emptyProgress() : legacyProgress();
}

const initialProgress = activeProfileProgress();

const state = {
  kanaSet: "hiragana",
  kanaIndex: 0,
  kanaRound: [],
  kanaChartVisible: false,
  revealed: false,
  filter: "all",
  flashIndex: 0,
  flashRevealed: false,
  kanaMatchPairs: [],
  selectedKanaSymbol: "",
  selectedKanaReading: "",
  objectMatchPairs: [],
  selectedObject: "",
  selectedDefinition: "",
  objectMatches: new Set(),
  objectWrong: new Set(),
  activeProfileId: localStorage.getItem("activeProfileId") || "",
  reviewItems: new Map(initialProgress.reviewItems || []),
  matchTime: 45,
  matchRunning: false,
  sentenceIndex: 0,
  sentenceBuild: [],
  sentenceCorrect: false,
  selectedWeekId: localStorage.getItem("selectedWeekId") || weeklyLessons[weeklyLessons.length - 2].id,
  grammarIndex: 0,
  katakanaPracticeIndex: 0,
  quizIndex: 0,
  quizScore: 0,
  answered: false,
  knownKana: new Set(initialProgress.knownKana || []),
  knownWords: new Set(initialProgress.knownWords || []),
  bestQuiz: Number(initialProgress.bestQuiz || 0)
};

let matchInterval = null;

const lessonGrid = document.querySelector("#lessonGrid");
const weekSelect = document.querySelector("#weekSelect");
const selectedWeekTitle = document.querySelector("#selectedWeekTitle");
const selectedWeekSummary = document.querySelector("#selectedWeekSummary");
const weekDetailGrid = document.querySelector("#weekDetailGrid");
const weekCardGrid = document.querySelector("#weekCardGrid");
const kanaSetLabel = document.querySelector("#kanaSetLabel");
const kanaGameSetLabel = document.querySelector("#kanaGameSetLabel");
const kanaRoundNote = document.querySelector("#kanaRoundNote");
const kanaCharacter = document.querySelector("#kanaCharacter");
const kanaAnswer = document.querySelector("#kanaAnswer");
const kanaCard = document.querySelector("#kanaCard");
const kanaChart = document.querySelector("#kanaChart");
const toggleKanaChartButton = document.querySelector("#toggleKanaChartButton");
const markKnownButton = document.querySelector("#markKnownButton");
const nextKanaButton = document.querySelector("#nextKanaButton");
const knownKanaCount = document.querySelector("#knownKanaCount");
const knownWordCount = document.querySelector("#knownWordCount");
const quizBest = document.querySelector("#quizBest");
const heroProgress = document.querySelector("#heroProgress");
const heroProgressBar = document.querySelector("#heroProgressBar");
const wordGrid = document.querySelector("#wordGrid");
const flashObject = document.querySelector("#flashObject");
const flashJapanese = document.querySelector("#flashJapanese");
const flashPrompt = document.querySelector("#flashPrompt");
const flashAnswer = document.querySelector("#flashAnswer");
const flashHintText = document.querySelector("#flashHintText");
const revealFlashButton = document.querySelector("#revealFlashButton");
const nextFlashButton = document.querySelector("#nextFlashButton");
const flashHintButton = document.querySelector("#flashHintButton");
const kanaSymbolChoices = document.querySelector("#kanaSymbolChoices");
const kanaReadingChoices = document.querySelector("#kanaReadingChoices");
const kanaMatchFeedback = document.querySelector("#kanaMatchFeedback");
const newKanaMatchButton = document.querySelector("#newKanaMatchButton");
const kanaHintButton = document.querySelector("#kanaHintButton");
const kanaHintSymbol = document.querySelector("#kanaHintSymbol");
const kanaHintText = document.querySelector("#kanaHintText");
const katakanaWordSelect = document.querySelector("#katakanaWordSelect");
const katakanaPracticeWord = document.querySelector("#katakanaPracticeWord");
const katakanaAnswerGrid = document.querySelector("#katakanaAnswerGrid");
const katakanaAnnotation = document.querySelector("#katakanaAnnotation");
const objectChoices = document.querySelector("#objectChoices");
const definitionChoices = document.querySelector("#definitionChoices");
const matchTimer = document.querySelector("#matchTimer");
const objectMatchScore = document.querySelector("#objectMatchScore");
const objectMatchFeedback = document.querySelector("#objectMatchFeedback");
const startObjectMatchButton = document.querySelector("#startObjectMatchButton");
const resetObjectMatchButton = document.querySelector("#resetObjectMatchButton");
const objectHintButton = document.querySelector("#objectHintButton");
const reviewGrid = document.querySelector("#reviewGrid");
const clearReviewButton = document.querySelector("#clearReviewButton");
const grammarFocusGrid = document.querySelector("#grammarFocusGrid");
const grammarPracticeSentence = document.querySelector("#grammarPracticeSentence");
const grammarAnswerGrid = document.querySelector("#grammarAnswerGrid");
const grammarFeedback = document.querySelector("#grammarFeedback");
const classRecapGrid = document.querySelector("#classRecapGrid");
const culturePhotoGrid = document.querySelector("#culturePhotoGrid");
const cultureTermCloud = document.querySelector("#cultureTermCloud");
const sentenceEnglish = document.querySelector("#sentenceEnglish");
const sentenceSlots = document.querySelector("#sentenceSlots");
const sentenceBank = document.querySelector("#sentenceBank");
const sentenceFeedback = document.querySelector("#sentenceFeedback");
const checkSentenceButton = document.querySelector("#checkSentenceButton");
const clearSentenceButton = document.querySelector("#clearSentenceButton");
const nextSentenceButton = document.querySelector("#nextSentenceButton");
const sentenceHintButton = document.querySelector("#sentenceHintButton");
const phraseJapanese = document.querySelector("#phraseJapanese");
const phraseRomaji = document.querySelector("#phraseRomaji");
const phraseSelect = document.querySelector("#phraseSelect");
const quizProgress = document.querySelector("#quizProgress");
const quizScore = document.querySelector("#quizScore");
const quizPrompt = document.querySelector("#quizPrompt");
const answerGrid = document.querySelector("#answerGrid");
const quizFeedback = document.querySelector("#quizFeedback");
const resetQuizButton = document.querySelector("#resetQuizButton");
const courseTabButtons = document.querySelectorAll("[data-course-tab]");
const coursePanels = document.querySelectorAll("[data-course-panel]");
const profileToggleButton = document.querySelector("#profileToggleButton");
const profilePopover = document.querySelector("#profilePopover");
const profileNameInput = document.querySelector("#profileNameInput");
const profilePinInput = document.querySelector("#profilePinInput");
const profileLoginButton = document.querySelector("#profileLoginButton");
const profileLogoutButton = document.querySelector("#profileLogoutButton");
const profileStatus = document.querySelector("#profileStatus");

const targetToPanel = {
  "#lessons": "lessons",
  "#weeks": "weeks",
  "#kana": "kana",
  "#kana-games": "kana-games",
  "#vocab": "vocab",
  "#flashcards": "flashcards",
  "#activities": "activities",
  ".phrase-section": "phrase",
  "#phrase": "phrase",
  "#grammar": "grammar",
  "#culture": "culture",
  "#quiz": "quiz"
};

function currentKanaList() {
  if (state.kanaSet === "mixed") return state.kanaRound;
  return state.kanaSet === "hiragana" ? hiragana : katakana;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function randomKanaRound() {
  const mixed = [
    ...hiragana.map((item) => [...item, "Hiragana"]),
    ...katakana.map((item) => [...item, "Katakana"])
  ];
  const count = Math.floor(Math.random() * 8) + 5;
  return shuffle(mixed).slice(0, count);
}

function ensureKanaRound() {
  if (state.kanaSet === "mixed" && !state.kanaRound.length) {
    state.kanaRound = randomKanaRound();
  }
}

function saveProgress() {
  const progress = {
    knownKana: [...state.knownKana],
    knownWords: [...state.knownWords],
    bestQuiz: state.bestQuiz,
    reviewItems: [...state.reviewItems]
  };

  if (state.activeProfileId) {
    const profiles = readProfiles();
    if (profiles[state.activeProfileId]) {
      profiles[state.activeProfileId].progress = progress;
      profiles[state.activeProfileId].updatedAt = new Date().toISOString();
      writeProfiles(profiles);
      return;
    }
  }

  localStorage.setItem("knownKana", JSON.stringify(progress.knownKana));
  localStorage.setItem("knownWords", JSON.stringify(progress.knownWords));
  localStorage.setItem("bestQuiz", String(progress.bestQuiz));
  localStorage.setItem("reviewItems", JSON.stringify(progress.reviewItems));
}

function applyProgress(progress) {
  state.knownKana = new Set(progress.knownKana || []);
  state.knownWords = new Set(progress.knownWords || []);
  state.bestQuiz = Number(progress.bestQuiz || 0);
  state.reviewItems = new Map(progress.reviewItems || []);
  renderKana();
  renderKanaMatch();
  renderWords();
  renderReview();
  updateStats();
}

function renderProfileWidget() {
  const profiles = readProfiles();
  const activeProfile = state.activeProfileId ? profiles[state.activeProfileId] : null;
  profileToggleButton.textContent = activeProfile ? `${activeProfile.displayName}'s profile` : "Guest profile";
  profileLogoutButton.hidden = !activeProfile;
  profileStatus.textContent = activeProfile
    ? `Saving progress for ${activeProfile.displayName}.`
    : "Create or open a profile to save progress by name.";
}

function openProfile() {
  const displayName = profileNameInput.value.trim();
  const pin = profilePinInput.value.trim();
  if (!displayName || !/^\d{4}$/.test(pin)) {
    profileStatus.textContent = "Enter a name and a 4-digit password.";
    return;
  }

  const profileId = profileIdFor(displayName);
  const profiles = readProfiles();
  if (profiles[profileId] && profiles[profileId].pin !== pin) {
    profileStatus.textContent = "That profile exists, but the 4-digit password does not match.";
    return;
  }

  if (!profiles[profileId]) {
    profiles[profileId] = {
      displayName,
      pin,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      progress: emptyProgress()
    };
    writeProfiles(profiles);
  }

  state.activeProfileId = profileId;
  localStorage.setItem("activeProfileId", profileId);
  applyProgress(profiles[profileId].progress || emptyProgress());
  profilePinInput.value = "";
  profilePopover.hidden = true;
  renderProfileWidget();
}

function useGuestProfile() {
  state.activeProfileId = "";
  localStorage.removeItem("activeProfileId");
  applyProgress(legacyProgress());
  profilePopover.hidden = true;
  renderProfileWidget();
}

function activateCourseTab(panelName, updateHash = true) {
  const nextPanel = document.querySelector(`[data-course-panel="${panelName}"]`);
  if (!nextPanel) return;

  coursePanels.forEach((panel) => {
    panel.classList.toggle("active", panel === nextPanel);
  });

  courseTabButtons.forEach((button) => {
    const isActive = button.dataset.courseTab === panelName;
    button.classList.toggle("active", isActive);
    if (button.getAttribute("role") === "tab") {
      button.setAttribute("aria-selected", String(isActive));
    }
  });

  document.querySelector("#course")?.scrollIntoView({ behavior: "smooth", block: "start" });
  if (updateHash) {
    history.replaceState(null, "", `#${panelName}`);
  }
}

function kanaForWord(jp) {
  return vocabularyKana[jp] || jp;
}

function visualForNoun(kind, label = "") {
  const base = {
    father: { hair: "#4a2a1d", shirt: "#b8a782", accessory: "bag" },
    "father-honor": { hair: "#4a2a1d", shirt: "#b8a782", accessory: "bag" },
    mother: { hair: "#925655", shirt: "#ef9aaa", accessory: "apron" },
    "mother-honor": { hair: "#925655", shirt: "#ef9aaa", accessory: "apron" },
    friend: { hair: "#8a5b38", shirt: "#75b58a", accessory: "flag" }
  };

  if (kind === "family") {
    return `
      <span class="noun-visual family-visual" aria-hidden="true">
        ${["#7c6bb0", "#6d9ccf", "#f1a85d", "#78a6d8"].map(
          (color, index) => `
            <span class="person mini-person" style="--shirt:${color}; --x:${index * 18}px">
              <i></i><b></b>
            </span>
          `
        ).join("")}
      </span>
    `;
  }

  if (base[kind]) {
    const person = base[kind];
    return `
      <span class="noun-visual person-card" aria-hidden="true" style="--hair:${person.hair}; --shirt:${person.shirt}">
        <span class="person-head"></span>
        <span class="person-body"></span>
        <span class="person-smile"></span>
        <span class="person-cheek left"></span>
        <span class="person-cheek right"></span>
        ${person.accessory === "bag" ? '<span class="briefcase"></span>' : ""}
        ${person.accessory === "apron" ? '<span class="apron"></span>' : ""}
        ${person.accessory === "flag" ? '<span class="mini-flag"></span>' : ""}
      </span>
    `;
  }

  return `<span class="noun-visual object-visual" aria-hidden="true">${label || kind}</span>`;
}

function syllableBreak(romaji) {
  return String(romaji)
    .replace(/\s+/g, " / ")
    .replace(/([aeiou])(?=[bcdfghjklmnpqrstvwxyz])/gi, "$1-")
    .replace(/--+/g, "-");
}

function pronunciationCue(romaji) {
  const value = String(romaji).toLowerCase();
  if (value.includes("aa") || value.includes("ou") || value.includes("oo")) {
    return "Hold the long vowel a little longer, like a smooth two-beat sound.";
  }
  if (value.includes("ch")) return "Use a clear ch sound, like cheese.";
  if (value.includes("sh")) return "Use a soft sh sound, like she.";
  if (value.includes("ts")) return "Start with a quick t, then slide into s.";
  if (value.includes("r")) return "Tap the Japanese r lightly between English r, l, and d.";
  return "Say each syllable evenly. Japanese rhythm is steady and clean.";
}

function addReviewItem(jp, reason) {
  const word = vocabulary.find((item) => item[0] === jp);
  if (!word) return;
  state.reviewItems.set(jp, {
    jp,
    kana: kanaForWord(jp),
    romaji: word[1],
    english: word[2],
    object: word[4],
    definition: word[5],
    hint: word[6],
    reason
  });
  saveProgress();
  renderReview();
}

function renderReview() {
  const items = [...state.reviewItems.values()];
  if (!items.length) {
    reviewGrid.innerHTML = "<p>No missed answers yet. This area fills in as you practice.</p>";
    return;
  }

  reviewGrid.innerHTML = items
    .map(
      (item) => `
        <article class="review-card">
          ${visualForNoun(item.object, item.object)}
          <strong>${item.kana}</strong>
          <p>${item.romaji} · ${item.english}</p>
          <p>${item.definition}</p>
          <div class="review-practice">
            <span>Writing: write ${item.kana} three times.</span>
            <span>Sentence: make one sentence using ${item.kana}.</span>
            <span>Flashcard: cover the English and recall ${item.english}.</span>
          </div>
          <p>${item.hint}</p>
        </article>
      `
    )
    .join("");
}

function renderLessons() {
  lessonGrid.innerHTML = lessons
    .map(
      (lesson) => `
        <article class="lesson-card">
          <span>${lesson.label}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.text}</p>
          <button type="button" data-jump="${lesson.target}">Open</button>
        </article>
      `
    )
    .join("");
}

function renderWeeks() {
  weekSelect.innerHTML = weeklyLessons
    .map((week) => `<option value="${week.id}">${week.label} - ${week.title}</option>`)
    .join("");
  weekSelect.value = state.selectedWeekId;
  renderSelectedWeek();

  weekCardGrid.innerHTML = weeklyLessons
    .map(
      (week) => `
        <article class="week-card">
          <span>${week.label} · ${week.date}</span>
          <h3>${week.title}</h3>
          <p>${week.summary}</p>
          <button type="button" data-week-id="${week.id}">Open week</button>
        </article>
      `
    )
    .join("");
}

function renderSelectedWeek() {
  const week = weeklyLessons.find((item) => item.id === state.selectedWeekId) || weeklyLessons[0];
  selectedWeekTitle.textContent = `${week.label}: ${week.title}`;
  selectedWeekSummary.textContent = week.summary;
  weekDetailGrid.innerHTML = [
    ["Vocabulary", week.vocabulary],
    ["Grammar", week.grammar],
    ["Culture", week.culture],
    ["Activities", week.activities]
  ]
    .map(
      ([title, items]) => `
        <article class="week-detail-card">
          <h3>${title}</h3>
          <div>
            ${items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function selectWeek(weekId) {
  state.selectedWeekId = weekId;
  localStorage.setItem("selectedWeekId", weekId);
  weekSelect.value = weekId;
  renderSelectedWeek();
}

function renderKana() {
  ensureKanaRound();
  const list = currentKanaList();
  const [character, romaji, , script] = list[state.kanaIndex];
  kanaSetLabel.textContent =
    state.kanaSet === "mixed" ? "Random mix" : state.kanaSet === "hiragana" ? "Hiragana" : "Katakana";
  kanaGameSetLabel.textContent = kanaSetLabel.textContent;
  kanaCharacter.textContent = character;
  kanaAnswer.textContent = state.revealed
    ? `${romaji}${state.kanaSet === "mixed" && script ? ` · ${script}` : ""}`
    : "Tap to reveal";
  kanaHintSymbol.textContent = character;
  kanaRoundNote.textContent =
    state.kanaSet === "mixed"
      ? `Practice set: ${state.kanaRound.length} random kana from hiragana and katakana`
      : `Practice set: ${kanaSetLabel.textContent} basics`;

  const chartList =
    state.kanaSet === "mixed"
      ? [...hiragana.map((item) => [...item, "Hiragana"]), ...katakana.map((item) => [...item, "Katakana"])]
      : list;

  kanaChart.hidden = !state.kanaChartVisible;
  toggleKanaChartButton.textContent = state.kanaChartVisible ? "Hide chart" : "Show chart";
  toggleKanaChartButton.setAttribute("aria-expanded", String(state.kanaChartVisible));
  kanaChart.innerHTML = chartList
    .map(([symbol, reading]) => {
      const known = state.knownKana.has(symbol) ? " known" : "";
      return `
        <div class="chart-tile${known}">
          <strong>${symbol}</strong>
          <small>${reading}</small>
        </div>
      `;
    })
    .join("");
}

function selectKanaSet(kanaSet, selectedButton) {
  state.kanaSet = kanaSet;
  state.kanaIndex = 0;
  state.kanaRound = state.kanaSet === "mixed" ? randomKanaRound() : [];
  state.revealed = false;
  document
    .querySelectorAll("[data-kana-set]")
    .forEach((button) => button.classList.toggle("active", button === selectedButton));
  renderKana();
  newKanaMatchRound();
}

function renderWords() {
  const words = vocabulary.filter((word) => state.filter === "all" || word[3] === state.filter);
  wordGrid.innerHTML = words
    .map(
      ([jp, romaji, english, category, object, definition, hint]) => `
        <article class="word-card">
          ${visualForNoun(object, object)}
          <span class="jp">${jp}</span>
          <strong>${english}</strong>
          <p>${romaji} · ${category}</p>
          <details class="pronunciation-box">
            <summary>How to pronounce</summary>
            <div>
              <span class="jp">${kanaForWord(jp)}</span>
              <p><strong>Romaji:</strong> ${romaji}</p>
              <p><strong>Break it down:</strong> ${syllableBreak(romaji)}</p>
              <p>${pronunciationCue(romaji)}</p>
            </div>
          </details>
          <p>${definition}</p>
          <button type="button" data-word="${jp}">Mark reviewed</button>
          <button class="light" type="button" data-word-hint="${hint}">Mnemonic</button>
          <p class="card-hint" hidden></p>
        </article>
      `
    )
    .join("");
}

function renderFlashcard() {
  const [jp, romaji, english, , object, , hint] = vocabulary[state.flashIndex];
  flashObject.innerHTML = visualForNoun(object, object);
  flashJapanese.textContent = jp;
  flashPrompt.textContent = state.flashRevealed ? `${romaji} means ${english}` : "What does this mean?";
  flashAnswer.textContent = state.flashRevealed ? hint : "Tap reveal to check yourself.";
}

function newKanaMatchRound() {
  state.kanaMatchPairs = shuffle(currentKanaList()).slice(0, 5);
  state.selectedKanaSymbol = "";
  state.selectedKanaReading = "";
  kanaMatchFeedback.textContent = "Match each kana to its reading.";
  renderKanaMatch();
}

function renderKanaMatch() {
  const matchedSymbols = new Set([...state.knownKana]);
  const readings = shuffle(state.kanaMatchPairs);
  kanaSymbolChoices.innerHTML = state.kanaMatchPairs
    .map(([symbol]) => {
      const selected = state.selectedKanaSymbol === symbol ? " selected" : "";
      const matched = matchedSymbols.has(symbol) ? " matched" : "";
      return `<button class="${selected}${matched}" type="button" data-kana-symbol="${symbol}">${symbol}</button>`;
    })
    .join("");
  kanaReadingChoices.innerHTML = readings
    .map(([symbol, reading]) => {
      const selected = state.selectedKanaReading === reading ? " selected" : "";
      const matched = matchedSymbols.has(symbol) ? " matched" : "";
      return `<button class="${selected}${matched}" type="button" data-kana-reading="${reading}">${reading}</button>`;
    })
    .join("");
}

function renderKatakanaPracticeOptions() {
  katakanaWordSelect.innerHTML = katakanaPracticeWords
    .map((item, index) => `<option value="${index}">${item.word} · ${item.romaji}</option>`)
    .join("");
  katakanaWordSelect.value = String(state.katakanaPracticeIndex);
  renderKatakanaPractice();
}

function renderKatakanaPractice() {
  const item = katakanaPracticeWords[state.katakanaPracticeIndex];
  katakanaPracticeWord.textContent = item.word;
  katakanaAnnotation.textContent = "Choose one answer. The note will explain the sound and meaning.";
  katakanaAnswerGrid.innerHTML = item.choices
    .map((choice) => `<button type="button" data-katakana-choice="${choice}">${choice}</button>`)
    .join("");
}

function printableKanaSheet(type) {
  const list = type === "hiragana" ? hiragana : katakana;
  const title = type === "hiragana" ? "Hiragana Practice Sheet" : "Katakana Practice Sheet";
  const rows = list
    .map(
      ([symbol, reading]) => `
        <div class="print-row">
          <strong>${symbol}</strong>
          <span>${reading}</span>
          <i></i><i></i><i></i><i></i>
        </div>
      `
    )
    .join("");
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.write(`
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { margin: 0; padding: 28px; color: #1d1d1f; font-family: system-ui, -apple-system, sans-serif; }
          h1 { margin: 0 0 6px; font-size: 28px; }
          p { margin: 0 0 18px; color: #6e6e73; }
          .print-grid { display: grid; gap: 8px; }
          .print-row { display: grid; grid-template-columns: 70px 80px repeat(4, 1fr); gap: 8px; align-items: center; break-inside: avoid; }
          strong { font-family: "Hiragino Sans", "Noto Sans JP", sans-serif; font-size: 34px; text-align: center; }
          span { color: #6e6e73; font-weight: 700; }
          i { display: block; height: 46px; border: 1px solid #d2d2d7; border-radius: 8px; background: linear-gradient(#f5f5f7 1px, transparent 1px), linear-gradient(90deg, #f5f5f7 1px, transparent 1px); background-size: 18px 18px; }
          @media print { body { padding: 18px; } }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <p>Trace each kana, say the sound out loud, then write it from memory. Save as PDF from the print dialog.</p>
        <div class="print-grid">${rows}</div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function answerKatakanaPractice(choice, button) {
  const item = katakanaPracticeWords[state.katakanaPracticeIndex];
  const correct = choice === item.answer;
  button.classList.add(correct ? "correct" : "wrong");
  katakanaAnnotation.textContent = correct
    ? `Correct: ${item.word} means ${item.answer}. ${item.note}`
    : `Not quite. ${item.word} means ${item.answer}. ${item.note}`;
}

function tryKanaMatch() {
  if (!state.selectedKanaSymbol || !state.selectedKanaReading) return;
  const pair = state.kanaMatchPairs.find(([symbol]) => symbol === state.selectedKanaSymbol);
  if (pair?.[1] === state.selectedKanaReading) {
    state.knownKana.add(pair[0]);
    kanaMatchFeedback.textContent = `Matched ${pair[0]} to ${pair[1]}.`;
    saveProgress();
    updateStats();
  } else {
    kanaMatchFeedback.textContent = "Close. Try that pair again.";
  }
  state.selectedKanaSymbol = "";
  state.selectedKanaReading = "";
  renderKana();
  renderKanaMatch();
}

function renderObjectMatch() {
  const pairs = state.objectMatchPairs;
  objectChoices.innerHTML = pairs
    .map(([jp, , english, , object]) => {
      const matched = state.objectMatches.has(jp) ? " matched" : "";
      const selected = state.selectedObject === jp ? " selected" : "";
      const wrong = state.objectWrong.has(jp) ? " wrong" : "";
      const answer = matched ? `<small>${kanaForWord(jp)} · ${english}</small>` : "";
      return `<button class="${matched}${selected}${wrong}" type="button" data-object="${jp}" aria-label="${english}">${visualForNoun(object, object)}${answer}</button>`;
    })
    .join("");

  definitionChoices.innerHTML = shuffle(pairs)
    .filter(([jp]) => !state.objectMatches.has(jp))
    .map(([jp, romaji, english, , , definition]) => {
      const matched = state.objectMatches.has(jp) ? " matched" : "";
      const selected = state.selectedDefinition === jp ? " selected" : "";
      const wrong = state.objectWrong.has(jp) ? " wrong" : "";
      return `
        <button class="${matched}${selected}${wrong}" type="button" data-definition="${jp}">
          <strong>${kanaForWord(jp)}</strong>
          ${definition}
          <small>${romaji} · ${english}</small>
        </button>
      `;
    })
    .join("");

  objectMatchScore.textContent = `${state.objectMatches.size} matches`;
  matchTimer.textContent = state.matchTime;
}

function resetObjectMatch() {
  clearInterval(matchInterval);
  matchInterval = null;
  state.objectMatchPairs = shuffle(vocabulary.filter((word) => ["food", "travel", "time"].includes(word[3]))).slice(0, 6);
  state.selectedObject = "";
  state.selectedDefinition = "";
  state.objectMatches = new Set();
  state.objectWrong = new Set();
  state.matchTime = 45;
  state.matchRunning = false;
  objectMatchFeedback.textContent = "Start the timer when you are ready.";
  startObjectMatchButton.textContent = "Start timer";
  renderObjectMatch();
}

function startObjectMatch() {
  if (state.matchRunning) return;
  state.matchRunning = true;
  startObjectMatchButton.textContent = "Timer running";
  objectMatchFeedback.textContent = "Match the object to the correct definition.";
  matchInterval = setInterval(() => {
    state.matchTime -= 1;
    matchTimer.textContent = state.matchTime;
    if (state.matchTime <= 0) {
      clearInterval(matchInterval);
      state.matchRunning = false;
      state.objectMatchPairs
        .filter(([jp]) => !state.objectMatches.has(jp))
        .forEach(([jp]) => addReviewItem(jp, "missed"));
      objectMatchFeedback.textContent = `Time. You matched ${state.objectMatches.size} of ${state.objectMatchPairs.length}.`;
    }
  }, 1000);
}

function tryObjectMatch() {
  if (!state.selectedObject || !state.selectedDefinition) return;
  if (state.selectedObject === state.selectedDefinition) {
    state.objectMatches.add(state.selectedObject);
    state.knownWords.add(state.selectedObject);
    objectMatchFeedback.textContent = "Correct match.";
    if (state.objectMatches.size === state.objectMatchPairs.length) {
      clearInterval(matchInterval);
      state.matchRunning = false;
      objectMatchFeedback.textContent = `Perfect round with ${state.matchTime} seconds left.`;
    }
    saveProgress();
    updateStats();
  } else {
    state.objectWrong.add(state.selectedObject);
    state.objectWrong.add(state.selectedDefinition);
    addReviewItem(state.selectedObject, "wrong match");
    addReviewItem(state.selectedDefinition, "wrong match");
    objectMatchFeedback.textContent = "That object belongs to a different definition.";
  }
  state.selectedObject = "";
  state.selectedDefinition = "";
  renderObjectMatch();
}

function renderSentenceBuilder() {
  const challenge = sentenceChallenges[state.sentenceIndex];
  sentenceEnglish.textContent = challenge.english;
  sentenceSlots.innerHTML = challenge.answer
    .map((answerWord, index) => {
      const value = state.sentenceBuild[index] || "";
      const role = challenge.roles[index] || "noun";
      const isCorrect = value && value === answerWord;
      const isWrong = value && value !== answerWord;
      const status = isCorrect ? " correct-slot" : isWrong ? " wrong-slot" : "";
      return `<button class="${status}" type="button" data-slot="${index}" data-role="${role}">${value || "Drop word"}</button>`;
    })
    .join("");
  sentenceBank.innerHTML = shuffle(challenge.bank)
    .map((word) => {
      const used = state.sentenceBuild.includes(word) ? " selected" : "";
      const role = challenge.bankRoles[word] || "noun";
      return `<button class="${used}" type="button" data-sentence-word="${word}" data-role="${role}">${word}</button>`;
    })
    .join("");
}

function addSentenceWord(word) {
  const challenge = sentenceChallenges[state.sentenceIndex];
  if (state.sentenceBuild.length >= challenge.answer.length) return;
  state.sentenceBuild.push(word);
  const index = state.sentenceBuild.length - 1;
  sentenceFeedback.textContent =
    challenge.answer[index] === word
      ? "Correct space. Calm and confident."
      : "That word is placed, but check the color and order.";
  renderSentenceBuilder();
}

function checkSentence() {
  const challenge = sentenceChallenges[state.sentenceIndex];
  const built = state.sentenceBuild.join("");
  const answer = challenge.answer.join("");
  if (built === answer) {
    state.sentenceCorrect = true;
    sentenceFeedback.textContent = "Correct sentence. Nicely built.";
    challenge.answer.forEach((word) => state.knownWords.add(word));
    saveProgress();
    updateStats();
    return;
  }
  state.sentenceCorrect = false;
  sentenceFeedback.textContent = "Almost. Check the word order and particles.";
}

function renderGrammarFocus() {
  grammarFocusGrid.innerHTML = grammarFocus
    .map(
      (item) => `
        <article class="grammar-card">
          <span class="jp">${item.particle}</span>
          <strong>${item.title}</strong>
          <p>${item.romaji}</p>
          <p>${item.rule}</p>
          <div>
            <p class="jp">${item.example}</p>
            <p>${item.translation}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGrammarPractice() {
  const question = grammarQuestions[state.grammarIndex];
  grammarPracticeSentence.textContent = question.sentence;
  grammarFeedback.textContent = "Choose the particle that fits the sentence.";
  grammarAnswerGrid.innerHTML = question.answers
    .map((answer) => `<button type="button" data-grammar-answer="${answer}">${answer}</button>`)
    .join("");
}

function answerGrammarQuestion(answer, button) {
  const question = grammarQuestions[state.grammarIndex];
  const correct = answer === question.correct;
  button.classList.add(correct ? "correct" : "wrong");
  grammarFeedback.textContent = correct ? question.feedback : `Try again. ${question.correct} is the best fit here.`;
  if (correct) {
    setTimeout(() => {
      state.grammarIndex = (state.grammarIndex + 1) % grammarQuestions.length;
      renderGrammarPractice();
    }, 900);
  }
}

function renderCultureSection() {
  cultureTermCloud.innerHTML = cultureTerms
    .map((term) => `<span>${term}</span>`)
    .join("");

  classRecapGrid.innerHTML = classRecapMoments
    .map(
      (moment) => `
        <article class="recap-card">
          <span>${moment.time}</span>
          <h3>${moment.title}</h3>
          <p>${moment.summary}</p>
          <div>
            ${moment.terms.map((term) => `<strong>${term}</strong>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  culturePhotoGrid.innerHTML = cultureTiles
    .map(
      (tile) => `
        <article class="culture-photo-card ${tile.image}">
          <div class="culture-photo-art" aria-hidden="true"></div>
          <div class="culture-photo-copy">
            <span>${tile.date} · ${tile.time}</span>
            <h3>${tile.title}</h3>
            <p>${tile.summary}</p>
            <div>
              ${tile.terms.map((term) => `<strong>${term}</strong>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPhraseOptions() {
  phraseSelect.innerHTML = phraseNouns
    .map((noun, index) => `<option value="${index}">${noun[2]}</option>`)
    .join("");
}

function updatePhrase() {
  const [jp, romaji] = phraseNouns[Number(phraseSelect.value || 0)];
  phraseJapanese.textContent = `私は ${jp} が 好きです。`;
  phraseRomaji.textContent = `Watashi wa ${romaji} ga suki desu.`;
}

function renderQuiz() {
  const question = quizQuestions[state.quizIndex];
  quizProgress.textContent = `Question ${state.quizIndex + 1} of ${quizQuestions.length}`;
  quizScore.textContent = `${state.quizScore} correct`;
  quizPrompt.textContent = question.prompt;
  quizFeedback.textContent = "";
  answerGrid.innerHTML = question.answers
    .map((answer) => `<button type="button" data-answer="${answer}">${answer}</button>`)
    .join("");
  state.answered = false;
}

function updateStats() {
  knownKanaCount.textContent = state.knownKana.size;
  knownWordCount.textContent = state.knownWords.size;
  quizBest.textContent = state.bestQuiz;

  const total = hiragana.length + katakana.length + vocabulary.length + quizQuestions.length;
  const quizCredit = Math.min(state.bestQuiz, quizQuestions.length);
  const complete = Math.min(state.knownKana.size, hiragana.length + katakana.length) + Math.min(state.knownWords.size, vocabulary.length) + quizCredit;
  const percent = Math.round((complete / total) * 100);
  heroProgress.textContent = `${percent}%`;
  heroProgressBar.style.width = `${percent}%`;
}

function nextKana() {
  ensureKanaRound();
  state.kanaIndex = (state.kanaIndex + 1) % currentKanaList().length;
  state.revealed = false;
  renderKana();
}

function answerQuestion(answer, button) {
  if (state.answered) return;

  const question = quizQuestions[state.quizIndex];
  const isCorrect = answer === question.correct;
  state.answered = true;

  if (isCorrect) {
    state.quizScore += 1;
    button.classList.add("correct");
    quizFeedback.textContent = "Correct. Nice and clean.";
  } else {
    button.classList.add("wrong");
    quizFeedback.textContent = `Not quite. The answer is ${question.correct}.`;
  }

  state.bestQuiz = Math.max(state.bestQuiz, state.quizScore);
  saveProgress();
  updateStats();

  setTimeout(() => {
    if (state.quizIndex < quizQuestions.length - 1) {
      state.quizIndex += 1;
      renderQuiz();
      return;
    }
    quizFeedback.textContent = `Finished: ${state.quizScore} out of ${quizQuestions.length}.`;
    quizScore.textContent = `${state.quizScore} correct`;
  }, 900);
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".profile-widget")) {
    profilePopover.hidden = true;
  }

  const courseTarget = event.target.closest("[data-course-tab]");
  if (courseTarget) {
    event.preventDefault();
    activateCourseTab(courseTarget.dataset.courseTab);
    return;
  }

  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.jump) {
    const panelName = targetToPanel[target.dataset.jump] || target.dataset.jump.replace("#", "");
    activateCourseTab(panelName);
  }

  if (target.dataset.kanaSet) {
    selectKanaSet(target.dataset.kanaSet, target);
  }

  if (target.dataset.printKana) {
    printableKanaSheet(target.dataset.printKana);
  }

  if (target.dataset.category) {
    state.filter = target.dataset.category;
    document
      .querySelectorAll("[data-category]")
      .forEach((button) => button.classList.toggle("active", button === target));
    renderWords();
  }

  if (target.dataset.word) {
    state.knownWords.add(target.dataset.word);
    saveProgress();
    updateStats();
    target.textContent = "Reviewed";
  }

  if (target.dataset.weekId) {
    selectWeek(target.dataset.weekId);
    activateCourseTab("weeks");
  }

  if (target.dataset.wordHint) {
    const hint = target.closest(".word-card")?.querySelector(".card-hint");
    if (hint) {
      hint.hidden = false;
      hint.textContent = target.dataset.wordHint;
    }
  }

  if (target.dataset.kanaSymbol) {
    state.selectedKanaSymbol = target.dataset.kanaSymbol;
    renderKanaMatch();
    tryKanaMatch();
  }

  if (target.dataset.kanaReading) {
    state.selectedKanaReading = target.dataset.kanaReading;
    renderKanaMatch();
    tryKanaMatch();
  }

  if (target.dataset.katakanaChoice) {
    answerKatakanaPractice(target.dataset.katakanaChoice, target);
  }

  if (target.dataset.object && !state.objectMatches.has(target.dataset.object)) {
    state.selectedObject = target.dataset.object;
    renderObjectMatch();
    tryObjectMatch();
  }

  if (target.dataset.definition && !state.objectMatches.has(target.dataset.definition)) {
    state.selectedDefinition = target.dataset.definition;
    renderObjectMatch();
    tryObjectMatch();
  }

  if (target.dataset.sentenceWord) {
    addSentenceWord(target.dataset.sentenceWord);
  }

  if (target.dataset.grammarAnswer) {
    answerGrammarQuestion(target.dataset.grammarAnswer, target);
  }

  if (target.dataset.slot) {
    state.sentenceBuild.splice(Number(target.dataset.slot), 1);
    sentenceFeedback.textContent = "Word removed.";
    renderSentenceBuilder();
  }

  if (target.dataset.answer) {
    answerQuestion(target.dataset.answer, target);
  }
});

kanaCard.addEventListener("click", () => {
  state.revealed = true;
  renderKana();
});

markKnownButton.addEventListener("click", () => {
  const [symbol] = currentKanaList()[state.kanaIndex];
  state.knownKana.add(symbol);
  saveProgress();
  updateStats();
  nextKana();
});

nextKanaButton.addEventListener("click", nextKana);
newKanaMatchButton.addEventListener("click", newKanaMatchRound);
document.querySelectorAll("[data-kana-set]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    selectKanaSet(button.dataset.kanaSet, button);
  });
});
toggleKanaChartButton.addEventListener("click", () => {
  state.kanaChartVisible = !state.kanaChartVisible;
  renderKana();
});
kanaHintButton.addEventListener("click", () => {
  const [symbol, reading, hint] = currentKanaList()[state.kanaIndex];
  kanaHintSymbol.textContent = symbol;
  kanaHintText.textContent = `${symbol} is ${reading}. ${hint}`;
});

revealFlashButton.addEventListener("click", () => {
  state.flashRevealed = true;
  renderFlashcard();
});

nextFlashButton.addEventListener("click", () => {
  state.flashIndex = (state.flashIndex + 1) % vocabulary.length;
  state.flashRevealed = false;
  flashHintText.textContent = "Hints use memory hooks to connect sound, meaning, and object.";
  renderFlashcard();
});

flashHintButton.addEventListener("click", () => {
  flashHintText.textContent = vocabulary[state.flashIndex][6];
});

startObjectMatchButton.addEventListener("click", startObjectMatch);
resetObjectMatchButton.addEventListener("click", resetObjectMatch);
objectHintButton.addEventListener("click", () => {
  const unmatched = state.objectMatchPairs.find(([jp]) => !state.objectMatches.has(jp));
  objectMatchFeedback.textContent = unmatched ? `${unmatched[4]} is ${unmatched[0]} (${unmatched[1]}): ${unmatched[2]}.` : "All objects are matched.";
});

checkSentenceButton.addEventListener("click", checkSentence);
clearSentenceButton.addEventListener("click", () => {
  state.sentenceBuild = [];
  state.sentenceCorrect = false;
  sentenceFeedback.textContent = "Cleared. Build it again.";
  renderSentenceBuilder();
});
nextSentenceButton.addEventListener("click", () => {
  state.sentenceIndex = (state.sentenceIndex + 1) % sentenceChallenges.length;
  state.sentenceBuild = [];
  state.sentenceCorrect = false;
  sentenceFeedback.textContent = "Pull words from the bank to complete the sentence.";
  renderSentenceBuilder();
});
sentenceHintButton.addEventListener("click", () => {
  sentenceFeedback.textContent = sentenceChallenges[state.sentenceIndex].hint;
});

clearReviewButton.addEventListener("click", () => {
  state.reviewItems.clear();
  saveProgress();
  renderReview();
});

weekSelect.addEventListener("change", () => {
  selectWeek(weekSelect.value);
});

katakanaWordSelect.addEventListener("change", () => {
  state.katakanaPracticeIndex = Number(katakanaWordSelect.value);
  renderKatakanaPractice();
});

profileToggleButton.addEventListener("click", (event) => {
  event.stopPropagation();
  profilePopover.hidden = !profilePopover.hidden;
});

profileLoginButton.addEventListener("click", openProfile);
profileLogoutButton.addEventListener("click", useGuestProfile);
profilePinInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") openProfile();
});

phraseSelect.addEventListener("change", updatePhrase);

resetQuizButton.addEventListener("click", () => {
  state.quizIndex = 0;
  state.quizScore = 0;
  renderQuiz();
});

renderLessons();
renderWeeks();
renderKana();
renderWords();
renderFlashcard();
newKanaMatchRound();
renderKatakanaPracticeOptions();
resetObjectMatch();
renderSentenceBuilder();
renderReview();
renderGrammarFocus();
renderGrammarPractice();
renderCultureSection();
renderPhraseOptions();
updatePhrase();
renderQuiz();
renderProfileWidget();
updateStats();

const initialPanel = targetToPanel[location.hash] || location.hash.replace("#", "") || "lessons";
activateCourseTab(initialPanel, false);
