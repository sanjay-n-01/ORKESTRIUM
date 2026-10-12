import { SiteConfig, SymposiumEvent, ScheduleEpisode } from '../types/symposium';

export const SITE_CONFIG: SiteConfig = {
  college: "Department of Electronics and Instrumentation Engineering",
  dateLabel: "31 Oct 2026",
  startISO: "2026-10-31T09:00:00+05:30",
  venue: "SRM Valliammai Engineering College",
  address: "Kattankulathur, Chengalpattu, Tamil Nadu, India",
  mapLink: "https://www.google.com/maps/search/?api=1&query=SRM+Valliammai+Engineering+College",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeInTFZb-8xSGRGD7LSP0jjliqOnNXx-LBJxGHAlhdWdzbWOw/viewform",
  food: "Lunch and refreshments will be provided",
  busRoute: [
    "Campus Route 04 from Central Railway Station (every 15 mins)",
    "Express Shuttle from Metro Junction Platform 2"
  ],
  trainRoute: [
    "Central Station (Suburban Line 2) to Tech Campus Halt",
    "Metro Line 1 (Green Line) to University Station"
  ],
  organizers: [
    {
      name: "Sanjay S",
      role: "President",
      image: "/assets/office-bearers/sanjay.jpg"
    },
    {
      name: "Balamuragan R",
      role: "Vice President",
      image: "/assets/office-bearers/balamurugan.jpg"
    },
    {
      name: "Pooja S",
      role: "Secretary",
      image: "/assets/office-bearers/pooja.jpeg"
    },
    {
      name: "Vishmithaa B",
      role: "Joint Secretary",
      image: "/assets/office-bearers/vishmathaa.png"
    },
    {
      name: "Dharun Supreeth N",
      role: "Treasurer",
      image: "/assets/office-bearers/dharun_supreeth.jpg"
    },
    {
      name: "Vignesh S",
      role: "Overall Coordinator",
      image: "/assets/office-bearers/vignesh.png"
    },
    {
      name: "Srikanth K",
      role: "Overall Coordinator",
      image: "/assets/office-bearers/srikanth.jpg"
    },
    {
      name: "Melvin D",
      role: "Overall Coordinator",
      image: "/assets/office-bearers/melvin.png?v=1"
    },
    {
      name: "Lavanya S",
      role: "Overall Coordinator",
      image: "/assets/office-bearers/lavanya.png"
    },
    {
      name: "Tanish S",
      role: "Overall Coordinator",
      image: "/assets/office-bearers/tanish.jpg"
    },
    {
      name: "Samithra P",
      role: "Overall Coordinator",
      image: "/assets/office-bearers/samithra.png"
    },
    {
      name: "Prithviraj N",
      role: "Overall Coordinator",
      image: "/assets/office-bearers/prithviraj.jpeg"
    }
  ],
  email: "srmvec.orkestrim2k26@gmail.com"
};

export const OFFICIAL_EVENTS: SymposiumEvent[] = [
  {
    id: "paper-spark",
    name: "Paper Fusion",
    image: "/assets/posters/paper_fusion.jpeg",
    episode: "Episode 01",
    tagline: "Crack the clues, Outsmart the unknown, Break the limits!",
    genre: "Paper Presentation • Research • Defense",
    category: "presentation",
    rating: "U/A 16+",
    duration: "90m",
    badge: "#1 IN RESEARCH",
    matchScore: 98,
    date: "31 Oct 2026",
    time: "10:45 am - 12:30 pm",
    venue: "Dept of EIE, 10th floor, New Building",
    teamSize: "2 to 4 Members",
    fee: "Rs.200/head",
    description: "Paper theory sparks the budding researchers to gather insight on their ideas pitched - on any category - from faculties",
    rules: [
      "Round 1: THE HYPOTHESIS : This takes place online. Teams should submit abstract as soon as possible via the registration form. Abstract submission must be limited to one page explanation. The best team moves forward.",
      "Round 2: THE NOBEL MOMENT :This takes place offline. Shortlisted teams will present their full paper to our faculties, and winners are announced. Each team gets a maxinum of 10 minutes to present.",
      "Please do join the Whatsapp group provided in the registration form for further updates on the event."
    ],
    highlight: `Submitted papers must be related to one or more of the following technical domains:
  Internet of Things(IoT)
  Embedded Systems
  Instrumentation and Control Systems
  Robotics and Automation
  Sensors and Transducers
  Control Systems and Industrial Automation
  Other Technical Domains`,
    coordinator: {
      name: "Sreeja RK",
      phone: "+91 9345886898",
      name2: "Rajeswari K",
      phone2: "+91 9597796458",
      name3: "Petchiammal R",
      phone3: "+91 9025719247"
    },
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeInTFZb-8xSGRGD7LSP0jjliqOnNXx-LBJxGHAlhdWdzbWOw/viewform"
  },
  {
    id: "brainiacs-battle",
    name: "CLASHFLIX",
    image: "/assets/posters/clash_flix.jpeg",
    episode: "Episode 02",
    tagline: "Battle of Wits !!!",
    genre: "Tech Quiz • Rapid Fire • Trivia",
    category: "strategy",
    rating: "U/A 16+",
    duration: "75m",
    badge: "#2 IN STRATEGY",
    matchScore: 97,
    date: "31 Oct 2026",
    time: "10:45 am - 12:30 pm",
    venue: "Dept of EIE, 10th floor, New Building",
    teamSize: "2 Members",
    fee: "Rs.200/head",
    description: "ClashFlix is a department level technical quiz designed to test paticipants' technical knowledge through three rounds that progress from quick technical decisions to a live clue-based challenge.",
    rules: [
      "Round 1: DIGITAL VAULT : Enter the vault and crack a series of 20 technical MCQ's through an online quiz platform. Accuracy and speed will determine who would advance to the next stage of the heist. ",
      "Round 2: THE MASTER PLAN : Put your technical knowledge to the test in a written quiz. Analyze, think strategically, and answer your way closer to the treasure.",
      "Round 3: THE FINAL CLUE: Put your technical knowledge to test with intriguing clues describing a mystery component or concept. Listen carefully, connect the hints and identify the correct answer. Only the sharpest minds will crack the clues and unlock the final vault!.",
    ],
    coordinator: {
      name: "A. Vijay",
      phone: "+91 6382358039",
      name2: "S. Sangamithra",
      phone2: "+91 9345674866"
    },
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeInTFZb-8xSGRGD7LSP0jjliqOnNXx-LBJxGHAlhdWdzbWOw/viewform"
  },
  {
    id: "techno-connect",
    name: "Beyond Limits",
    image: "/assets/posters/beyond_limits.jpeg",
    episode: "Episode 03",
    tagline: "Enter the Hawkins. Challange the unknown. Survive the Upside Down!",
    genre: "Connection • Deduction • Visual Logic",
    category: "strategy",
    rating: "U/A 16+",
    duration: "75m",
    badge: "#3 IN DEDUCTION",
    matchScore: 97,
    date: "31 Oct 2026",
    time: "2:00 pm to 4:00 pm",
    venue: "Dept of EIE, 10th floor, New Building",
    teamSize: "2-3 Members",
    fee: "Rs.200/head",
    description: "Techno Connect – Beyond Limits is a department-level technical event for students, set in the world of Stranger Things. Teams step into Hawkins Lab and take on three rounds that mix technical knowledge, observation and quick thinking. The rounds are built to be fun and fair, so that every participant, not only the strongest in technical subjects, stays engaged from start to finish.",
    rules: [
      "Teams consist of 2-3 members.",
      "Round 1: HAWKINS LAB RELAY: One teammate gives clues and the other guesses an electrical or electronics component or instrument from a sealed envelope, within a short time limit.",
      "Round 2: UPSIDE-DOWN SNAPSHOT: Teams view a crowded poster for a few seconds, then answer memory and observation questions about general. Stranger Things(Series) and technical items.",
      "Round 3: VECNA'S CURSE BREAKER: A fast-paced final race where teams solve a puzzle, an odd-one-out a picture clue in three stages.",
    ],
    coordinator: {
      name: "Durai Murugan M",
      phone: "+91 9342589541",
      name2: "VishnuVignesh V",
      phone2: "+91 9344486984"
    },
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeInTFZb-8xSGRGD7LSP0jjliqOnNXx-LBJxGHAlhdWdzbWOw/viewform"
  },
  {
    id: "techno-ads",
    name: "BrandBlitz",
    image: "/assets/posters/brandblitz.jpeg",
    episode: "Episode 04",
    tagline: "Sell it like your life depends on it.",
    genre: "Creative Pitch • Marketing • Ad-Mad",
    category: "nontech",
    rating: "U/A 16+",
    duration: "90m",
    badge: "#4 IN CREATIVITY",
    matchScore: 94,
    date: "31 Oct 2026",
    time: "2:00 pm to 4:00 pm",
    venue: "Dept of EIE, 10th floor, New Building",
    teamSize: "2 to 3 Members",
    fee: "Rs.200/head",
    description: "BrandBlitz merges theatrical comedy, engineering insight, and advertising brilliance. Teams are assigned unconventional futuristic gadgets or software ideas and must construct a compelling 3-minute live commercial advertisement that captivates both judges and audience.",
    rules: [
      "Teams of 2 to 3 members.",
      "Topic/product will be assigned on the spot with 10 minutes preparation time.",
      "Performance time: 3 to 4 minutes on stage.",
      "Judging criteria: Creativity, humor, technical coherence, teamwork, and audience engagement.",
      "Vulgarity, derogatory language, or offensive references strictly prohibited and cause immediate ejection."
    ],
    coordinator: {
      name: "Kishore G",
      phone: "+91 93458 25690",
      name2: "Balaji N",
      phone2: "+91 9626510436"
    },
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeInTFZb-8xSGRGD7LSP0jjliqOnNXx-LBJxGHAlhdWdzbWOw/viewform"
  },
  {
    id: "techno-treasure",
    name: "The Voyage X",
    image: "/assets/posters/voyagex.jpeg",
    episode: "Episode 05",
    tagline: "The hunt for the One piece begins!",
    genre: "Campus Hunt • Cryptic Clues • Adventure",
    category: "nontech",
    rating: "U/A 16+",
    duration: "90m",
    badge: "#5 IN ADVENTURE",
    matchScore: 92,
    date: "31 Oct 2026",
    time: "Afternoon Session",
    venue: "Dept of EIE, 10th floor, New Building",
    teamSize: "2 Members",
    fee: "Rs.200/head",
    description: "We will hide 5-6 treasures in different places across campus. Treasures will be hidden in tricky places like inside a balloon, under a desk, inside a book, behind a poster, etc. For each treasure, we will give them a clue (Riddle). Using that clue, they have to find the location, collect it, and get the NEXT clue from there. The team that collects maximum of the treasures and reaches the final spot will be the winner",
    rules: [
      "Teams must have 2 members who stay together throughout the hunt.",
      "5-6 treasures are hidden in different places across campus like in a balloon, under a desk, in a book, etc. Riddles locates clues and treasures are collected. The team that collects maximum of the treasures anchors the 1st spot.",
    ],
    coordinator: {
      name: "Sriram R",
      phone: "+91 9884424123",
      name2: "Vignesh S",
      phone2: "+91 8148920928"
    },
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeInTFZb-8xSGRGD7LSP0jjliqOnNXx-LBJxGHAlhdWdzbWOw/viewform"
  }
];

export const SCHEDULE_EPISODES: ScheduleEpisode[] = [
  {
    epNum: 1,
    slot: "morning",
    time: "08:00 AM — 08:30 AM",
    title: "Check-in and Registration.",
    duration: "60m",
    venue: "Registration Pavilion",
    desc: "Stream into the venue and collect your physical symposium entry credentials.",
    icon: "/assets/schedule_icons/registration.png"
  },
  {
    epNum: 2,
    slot: "morning",
    time: "09:00 AM — 10:00 AM",
    title: "Opening Ceremony & Keynote Address",
    duration: "30m",
    venue: "3rd floor Seminar Hall",
    desc: "Inaugural lamp lighting by the Department of Electronics and Instrumentation Engineering, welcome address, keynote speech, and tournament guidelines briefing.",
    icon: "/assets/schedule_icons/innaguration.png"
  },
  {
    epNum: 3,
    slot: "morning",
    time: "10:15 AM — 10:45 AM",
    title: "Refreshments and Allocations",
    duration: "90m",
    venue: "Seminar Hall 1",
    desc: "Enjoy the refreshments and get ready for the adventure!!",
    icon: "/assets/schedule_icons/refreshments.png"
  },
  {
    epNum: 4,
    slot: "morning",
    time: "10:45 AM — 12:30 PM",
    title: "Paper Fusion and Clashflix Odyssey",
    duration: "75m",
    venue: "10th floor new building.",
    desc: "Simultaneous Paper Fusion and Clashflix adventures to test your knowledge and skills and igniting the spark of ideas.",
    icon: "/assets/schedule_icons/paper.png"
  },
  {
    epNum: 5,
    slot: "afternoon",
    time: "12:30 PM — 02:00 PM",
    title: "Hospitality Feast & Lunch Intermission",
    duration: "60m",
    venue: "Stone Bench",
    desc: "Delish the vegetarian lunch served by the Food Committee.",
    icon: "/assets/schedule_icons/refreshments.png"
  },
  {
    epNum: 6,
    slot: "afternoon",
    time: "02:00 PM — 04:00 PM",
    title: "Voyage X, Brand Blitz and Beyond Limits",
    duration: "90m",
    venue: "10th floor New building",
    desc: "Experiance the great voyage of finding hidden treasures, activate the neurons to answer the quiz and enter the Hawkins Lab to solve the clues .",
    icon: "/assets/schedule_icons/treasure-chest.png"
  },
  {
    epNum: 7,
    slot: "afternoon",
    time: "04:00 PM — 04:30 PM",
    title: "Season Finale: Grand Valedictory Ceremony, Awards and Bannerdrop",
    duration: "45m",
    venue: "3rd floor Seminar Hall",
    desc: "Crowning of symposium champions, cash prize awards distribution, memento presentations, symposium closing remarks and the drop of the banner.",
    icon: "/assets/schedule_icons/prize.png"
  }
];


