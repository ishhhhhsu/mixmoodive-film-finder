export interface Movie {
  id: string;
  title: string;
  genre: string[];
  mood: string[];
  year: number;
  rating: number;
  description: string;
  poster?: string;
}

export const movieDatabase: Movie[] = [
  // Happy Movies
  {
    id: "1",
    title: "The Pursuit of Happyness",
    genre: ["Biography", "Drama"],
    mood: ["happy"],
    year: 2006,
    rating: 8.0,
    description: "A struggling salesman takes custody of his son and finds hope."
  },
  {
    id: "2",
    title: "Inside Out",
    genre: ["Animation", "Family"],
    mood: ["happy"],
    year: 2015,
    rating: 8.1,
    description: "Emotions inside a girl's mind struggle as she adapts to new life."
  },
  {
    id: "3",
    title: "Zootopia",
    genre: ["Animation", "Adventure"],
    mood: ["happy"],
    year: 2016,
    rating: 8.0,
    description: "A rabbit cop and fox con artist team up to solve a mystery."
  },
  {
    id: "4",
    title: "Up",
    genre: ["Animation", "Adventure"],
    mood: ["happy"],
    year: 2009,
    rating: 8.2,
    description: "An elderly man fulfills his dream to see South America."
  },
  {
    id: "5",
    title: "The Intouchables",
    genre: ["Biography", "Comedy"],
    mood: ["happy"],
    year: 2011,
    rating: 8.5,
    description: "An unlikely friendship between a wealthy quadriplegic and his caretaker."
  },
  {
    id: "6",
    title: "Forrest Gump",
    genre: ["Drama", "Romance"],
    mood: ["happy"],
    year: 1994,
    rating: 8.8,
    description: "The extraordinary life of a simple man with a good heart."
  },
  {
    id: "7",
    title: "Paddington",
    genre: ["Family", "Comedy"],
    mood: ["happy"],
    year: 2014,
    rating: 7.2,
    description: "A young bear travels to London in search of a home."
  },
  {
    id: "8",
    title: "Yes Man",
    genre: ["Comedy"],
    mood: ["happy"],
    year: 2008,
    rating: 6.8,
    description: "A man's life changes when he decides to say yes to everything."
  },
  {
    id: "9",
    title: "Amélie",
    genre: ["Romance", "Comedy"],
    mood: ["happy"],
    year: 2001,
    rating: 8.3,
    description: "A shy waitress decides to help those around her find happiness."
  },
  {
    id: "10",
    title: "La La Land",
    genre: ["Musical", "Romance"],
    mood: ["happy"],
    year: 2016,
    rating: 8.0,
    description: "A jazz musician and aspiring actress fall in love in Los Angeles."
  },
  {
    id: "11",
    title: "Kung Fu Panda",
    genre: ["Animation", "Action"],
    mood: ["happy"],
    year: 2008,
    rating: 7.6,
    description: "A clumsy panda becomes an unlikely kung fu master."
  },
  {
    id: "12",
    title: "Coco",
    genre: ["Animation", "Family"],
    mood: ["happy"],
    year: 2017,
    rating: 8.4,
    description: "A boy travels to the Land of the Dead to discover his heritage."
  },
  {
    id: "13",
    title: "The Secret Life of Walter Mitty",
    genre: ["Adventure", "Comedy"],
    mood: ["happy"],
    year: 2013,
    rating: 7.3,
    description: "A daydreamer escapes his mundane life through heroic fantasies."
  },
  {
    id: "14",
    title: "The Intern",
    genre: ["Comedy", "Drama"],
    mood: ["happy"],
    year: 2015,
    rating: 7.1,
    description: "A retired executive becomes an intern at an online fashion site."
  },
  {
    id: "15",
    title: "WALL-E",
    genre: ["Animation", "Adventure"],
    mood: ["happy"],
    year: 2008,
    rating: 8.4,
    description: "A robot left to clean Earth finds love and purpose."
  },
  {
    id: "16",
    title: "Good Will Hunting",
    genre: ["Drama"],
    mood: ["happy"],
    year: 1997,
    rating: 8.3,
    description: "A janitor with genius-level intellect finds his path in life."
  },
  {
    id: "17",
    title: "Soul",
    genre: ["Animation", "Adventure"],
    mood: ["happy"],
    year: 2020,
    rating: 8.0,
    description: "A jazz musician discovers what it truly means to live."
  },
  {
    id: "18",
    title: "Sing",
    genre: ["Animation", "Comedy"],
    mood: ["happy"],
    year: 2016,
    rating: 7.1,
    description: "A koala organizes a singing competition to save his theater."
  },
  {
    id: "19",
    title: "Matilda",
    genre: ["Family", "Fantasy"],
    mood: ["happy"],
    year: 1996,
    rating: 6.9,
    description: "A gifted girl with telekinetic powers stands up to cruel adults."
  },
  {
    id: "20",
    title: "About Time",
    genre: ["Drama", "Romance"],
    mood: ["happy"],
    year: 2013,
    rating: 7.8,
    description: "A man learns he can travel back in time to improve his life."
  },
  {
    id: "21",
    title: "Finding Nemo",
    genre: ["Animation", "Adventure"],
    mood: ["happy"],
    year: 2003,
    rating: 8.2,
    description: "A father fish searches the ocean for his lost son."
  },
  {
    id: "22",
    title: "Big Hero 6",
    genre: ["Animation", "Action"],
    mood: ["happy"],
    year: 2014,
    rating: 7.8,
    description: "A boy and his inflatable robot save their city."
  },

  // Sad Movies
  {
    id: "23",
    title: "Atonement",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 2007,
    rating: 7.8,
    description: "A false accusation destroys love and lives."
  },
  {
    id: "24",
    title: "Blue Valentine",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 2010,
    rating: 7.3,
    description: "The rise and fall of a marriage told in parallel timelines."
  },
  {
    id: "25",
    title: "The Fault in Our Stars",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 2014,
    rating: 7.7,
    description: "Two teenagers with cancer fall in love."
  },
  {
    id: "26",
    title: "Manchester by the Sea",
    genre: ["Drama"],
    mood: ["sad"],
    year: 2016,
    rating: 7.8,
    description: "A janitor is forced to return to his hometown after his brother's death."
  },
  {
    id: "27",
    title: "Hachi: A Dog's Tale",
    genre: ["Biography", "Drama"],
    mood: ["sad"],
    year: 2009,
    rating: 8.1,
    description: "A loyal dog waits for his deceased owner for years."
  },
  {
    id: "28",
    title: "Requiem for a Dream",
    genre: ["Drama"],
    mood: ["sad"],
    year: 2000,
    rating: 8.3,
    description: "Four people spiral into addiction and despair."
  },
  {
    id: "29",
    title: "Grave of the Fireflies",
    genre: ["Animation", "Drama"],
    mood: ["sad"],
    year: 1988,
    rating: 8.5,
    description: "Two siblings struggle to survive during WWII."
  },
  {
    id: "30",
    title: "The Boy in the Striped Pajamas",
    genre: ["Drama", "History"],
    mood: ["sad"],
    year: 2008,
    rating: 7.7,
    description: "A friendship forms between a German boy and a Jewish boy in a concentration camp."
  },
  {
    id: "31",
    title: "My Sister's Keeper",
    genre: ["Drama"],
    mood: ["sad"],
    year: 2009,
    rating: 7.4,
    description: "A girl sues her parents for the right to her own body."
  },
  {
    id: "32",
    title: "Million Dollar Baby",
    genre: ["Drama", "Sport"],
    mood: ["sad"],
    year: 2004,
    rating: 8.1,
    description: "A trainer reluctantly takes on a female boxer."
  },
  {
    id: "33",
    title: "Schindler's List",
    genre: ["Biography", "Drama"],
    mood: ["sad"],
    year: 1993,
    rating: 8.9,
    description: "A businessman saves lives during the Holocaust."
  },
  {
    id: "34",
    title: "Room",
    genre: ["Drama", "Thriller"],
    mood: ["sad"],
    year: 2015,
    rating: 8.1,
    description: "A mother and son escape from captivity and adjust to the outside world."
  },
  {
    id: "35",
    title: "Her",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 2013,
    rating: 8.0,
    description: "A lonely writer develops a relationship with an AI."
  },
  {
    id: "36",
    title: "Brokeback Mountain",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 2005,
    rating: 7.7,
    description: "Two shepherds have a secret relationship over many years."
  },
  {
    id: "37",
    title: "Me Before You",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 2016,
    rating: 7.4,
    description: "A caregiver tries to show her quadriplegic employer life is worth living."
  },
  {
    id: "38",
    title: "A Walk to Remember",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 2002,
    rating: 7.3,
    description: "A bad boy falls for a religious girl with a secret."
  },
  {
    id: "39",
    title: "The Pianist",
    genre: ["Biography", "Drama"],
    mood: ["sad"],
    year: 2002,
    rating: 8.5,
    description: "A Polish-Jewish pianist survives the destruction of the Warsaw ghetto."
  },
  {
    id: "40",
    title: "Dancer in the Dark",
    genre: ["Crime", "Drama"],
    mood: ["sad"],
    year: 2000,
    rating: 8.0,
    description: "A factory worker goes blind and faces devastating consequences."
  },
  {
    id: "41",
    title: "Marley & Me",
    genre: ["Comedy", "Drama"],
    mood: ["sad"],
    year: 2008,
    rating: 7.0,
    description: "A couple's life with their lovable but destructive dog."
  },
  {
    id: "42",
    title: "Beaches",
    genre: ["Drama"],
    mood: ["sad"],
    year: 1988,
    rating: 7.0,
    description: "Two friends maintain their relationship through decades."
  },
  {
    id: "43",
    title: "Leaving Las Vegas",
    genre: ["Drama", "Romance"],
    mood: ["sad"],
    year: 1995,
    rating: 7.6,
    description: "An alcoholic moves to Las Vegas to drink himself to death."
  },
  {
    id: "44",
    title: "Philadelphia",
    genre: ["Drama"],
    mood: ["sad"],
    year: 1993,
    rating: 7.7,
    description: "A lawyer with AIDS fights discrimination in court."
  },

  // Romantic Movies
  {
    id: "45",
    title: "Pride & Prejudice",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 2005,
    rating: 7.8,
    description: "A proud, wealthy man and a prejudiced woman overcome their differences."
  },
  {
    id: "46",
    title: "The Notebook",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 2004,
    rating: 7.8,
    description: "An elderly man tells the story of his decades-long love affair."
  },
  {
    id: "47",
    title: "Titanic",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 1997,
    rating: 7.9,
    description: "A young couple from different social classes fall in love aboard the doomed ship."
  },
  {
    id: "48",
    title: "Before Sunrise",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 1995,
    rating: 8.1,
    description: "Two strangers spend one night together in Vienna."
  },
  {
    id: "49",
    title: "Before Sunset",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 2004,
    rating: 8.1,
    description: "Two lovers reunite nine years after their first encounter."
  },
  {
    id: "50",
    title: "Before Midnight",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 2013,
    rating: 7.9,
    description: "A couple reflects on their relationship during a Greek vacation."
  },
  {
    id: "51",
    title: "Crazy Rich Asians",
    genre: ["Comedy", "Romance"],
    mood: ["romantic"],
    year: 2018,
    rating: 6.9,
    description: "A woman discovers her boyfriend is one of Asia's most eligible bachelors."
  },
  {
    id: "52",
    title: "Notting Hill",
    genre: ["Comedy", "Romance"],
    mood: ["romantic"],
    year: 1999,
    rating: 7.2,
    description: "A bookstore owner falls for a famous actress."
  },
  {
    id: "53",
    title: "Love Actually",
    genre: ["Comedy", "Romance"],
    mood: ["romantic"],
    year: 2003,
    rating: 7.6,
    description: "Ten love stories unfold in London during Christmas."
  },
  {
    id: "54",
    title: "500 Days of Summer",
    genre: ["Comedy", "Drama"],
    mood: ["romantic"],
    year: 2009,
    rating: 7.7,
    description: "A man reflects on his relationship with a woman who doesn't believe in love."
  },
  {
    id: "55",
    title: "Romeo + Juliet",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 1996,
    rating: 6.8,
    description: "Shakespeare's tragedy updated to modern-day Verona Beach."
  },
  {
    id: "56",
    title: "Pretty Woman",
    genre: ["Comedy", "Romance"],
    mood: ["romantic"],
    year: 1990,
    rating: 7.0,
    description: "A businessman falls for the escort he hired for a week."
  },
  {
    id: "57",
    title: "When Harry Met Sally",
    genre: ["Comedy", "Romance"],
    mood: ["romantic"],
    year: 1989,
    rating: 7.7,
    description: "Can men and women be just friends?"
  },
  {
    id: "58",
    title: "Silver Linings Playbook",
    genre: ["Comedy", "Drama"],
    mood: ["romantic"],
    year: 2012,
    rating: 7.7,
    description: "Two troubled people find hope in each other."
  },
  {
    id: "59",
    title: "Call Me By Your Name",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 2017,
    rating: 7.9,
    description: "A teenager falls for his father's research assistant in Italy."
  },
  {
    id: "60",
    title: "Eternal Sunshine of the Spotless Mind",
    genre: ["Drama", "Romance"],
    mood: ["romantic"],
    year: 2004,
    rating: 8.3,
    description: "A couple undergoes a procedure to erase memories of each other."
  },
  {
    id: "61",
    title: "A Star is Born",
    genre: ["Drama", "Music"],
    mood: ["romantic"],
    year: 2018,
    rating: 7.6,
    description: "A musician discovers and falls in love with a struggling artist."
  },
  {
    id: "62",
    title: "Moulin Rouge!",
    genre: ["Drama", "Musical"],
    mood: ["romantic"],
    year: 2001,
    rating: 7.6,
    description: "A writer falls for a cabaret star in 1890s Paris."
  },
  {
    id: "63",
    title: "Sweet Home Alabama",
    genre: ["Comedy", "Romance"],
    mood: ["romantic"],
    year: 2002,
    rating: 6.2,
    description: "A woman must choose between her past and future."
  },
  {
    id: "64",
    title: "Letters to Juliet",
    genre: ["Adventure", "Comedy"],
    mood: ["romantic"],
    year: 2010,
    rating: 6.5,
    description: "A young woman helps reunite a woman with her long-lost love."
  },
  {
    id: "65",
    title: "Twilight",
    genre: ["Drama", "Fantasy"],
    mood: ["romantic"],
    year: 2008,
    rating: 5.3,
    description: "A teenage girl falls in love with a vampire."
  },

  // Thrilling Movies
  {
    id: "66",
    title: "Se7en",
    genre: ["Crime", "Drama"],
    mood: ["thrilling"],
    year: 1995,
    rating: 8.6,
    description: "Two detectives hunt a serial killer who uses the seven deadly sins."
  },
  {
    id: "67",
    title: "The Silence of the Lambs",
    genre: ["Crime", "Drama"],
    mood: ["thrilling"],
    year: 1991,
    rating: 8.6,
    description: "An FBI trainee seeks help from the infamous Dr. Hannibal Lecter."
  },
  {
    id: "68",
    title: "Zodiac",
    genre: ["Crime", "Drama"],
    mood: ["thrilling"],
    year: 2007,
    rating: 7.7,
    description: "The true story of the hunt for the Zodiac killer."
  },
  {
    id: "69",
    title: "Gone Girl",
    genre: ["Drama", "Mystery"],
    mood: ["thrilling"],
    year: 2014,
    rating: 8.1,
    description: "A man becomes the prime suspect in his wife's disappearance."
  },
  {
    id: "70",
    title: "Shutter Island",
    genre: ["Mystery", "Thriller"],
    mood: ["thrilling"],
    year: 2010,
    rating: 8.2,
    description: "A U.S. Marshal investigates a psychiatric facility."
  },
  {
    id: "71",
    title: "Prisoners",
    genre: ["Crime", "Drama"],
    mood: ["thrilling"],
    year: 2013,
    rating: 8.1,
    description: "A father takes matters into his own hands when his daughter goes missing."
  },
  {
    id: "72",
    title: "Fight Club",
    genre: ["Drama"],
    mood: ["thrilling"],
    year: 1999,
    rating: 8.8,
    description: "An insomniac office worker forms an underground fight club."
  },
  {
    id: "73",
    title: "Memento",
    genre: ["Mystery", "Thriller"],
    mood: ["thrilling"],
    year: 2000,
    rating: 8.4,
    description: "A man with short-term memory loss hunts his wife's killer."
  },
  {
    id: "74",
    title: "Psycho",
    genre: ["Horror", "Mystery"],
    mood: ["thrilling"],
    year: 1960,
    rating: 8.5,
    description: "A woman steals money and ends up at a mysterious motel."
  },
  {
    id: "75",
    title: "The Girl with the Dragon Tattoo",
    genre: ["Crime", "Drama"],
    mood: ["thrilling"],
    year: 2011,
    rating: 7.8,
    description: "A journalist and a hacker investigate a wealthy family's dark secrets."
  },
  {
    id: "76",
    title: "No Country for Old Men",
    genre: ["Crime", "Drama"],
    mood: ["thrilling"],
    year: 2007,
    rating: 8.1,
    description: "A hunter stumbles upon drug money and faces a relentless killer."
  },
  {
    id: "77",
    title: "Black Swan",
    genre: ["Drama", "Thriller"],
    mood: ["thrilling"],
    year: 2010,
    rating: 8.0,
    description: "A ballerina's pursuit of perfection leads to psychological breakdown."
  },
  {
    id: "78",
    title: "Get Out",
    genre: ["Horror", "Mystery"],
    mood: ["thrilling"],
    year: 2017,
    rating: 7.7,
    description: "A young man uncovers disturbing secrets during a weekend getaway."
  },
  {
    id: "79",
    title: "Split",
    genre: ["Horror", "Thriller"],
    mood: ["thrilling"],
    year: 2016,
    rating: 7.3,
    description: "A man with multiple personalities kidnaps three teenage girls."
  },
  {
    id: "80",
    title: "Nightcrawler",
    genre: ["Crime", "Drama"],
    mood: ["thrilling"],
    year: 2014,
    rating: 7.8,
    description: "A man discovers the underground world of freelance crime journalism."
  },
  {
    id: "81",
    title: "The Sixth Sense",
    genre: ["Drama", "Mystery"],
    mood: ["thrilling"],
    year: 1999,
    rating: 8.2,
    description: "A child psychologist treats a boy who claims he can see dead people."
  },
  {
    id: "82",
    title: "Insomnia",
    genre: ["Drama", "Mystery"],
    mood: ["thrilling"],
    year: 2002,
    rating: 7.2,
    description: "A detective investigates a murder in Alaska where the sun never sets."
  },
  {
    id: "83",
    title: "The Machinist",
    genre: ["Drama", "Thriller"],
    mood: ["thrilling"],
    year: 2004,
    rating: 7.7,
    description: "An insomniac factory worker hasn't slept in a year."
  },
  {
    id: "84",
    title: "Oldboy",
    genre: ["Action", "Drama"],
    mood: ["thrilling"],
    year: 2003,
    rating: 8.4,
    description: "A man seeks revenge after being imprisoned for 15 years."
  },
  {
    id: "85",
    title: "Mulholland Drive",
    genre: ["Drama", "Mystery"],
    mood: ["thrilling"],
    year: 2001,
    rating: 7.9,
    description: "A woman with amnesia and an aspiring actress search for answers in LA."
  },
  {
    id: "86",
    title: "The Others",
    genre: ["Horror", "Mystery"],
    mood: ["thrilling"],
    year: 2001,
    rating: 7.6,
    description: "A woman and her children believe their house is haunted."
  },

  // Serious Movies
  {
    id: "87",
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    mood: ["serious"],
    year: 1972,
    rating: 9.2,
    description: "The patriarch of a crime family transfers control to his reluctant son."
  },
  {
    id: "88",
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    mood: ["serious"],
    year: 1994,
    rating: 9.3,
    description: "Two imprisoned men bond over years, finding hope through acts of common decency."
  },
  {
    id: "89",
    title: "12 Angry Men",
    genre: ["Crime", "Drama"],
    mood: ["serious"],
    year: 1957,
    rating: 9.0,
    description: "A jury holdout attempts to prevent a miscarriage of justice."
  },
  {
    id: "90",
    title: "Goodfellas",
    genre: ["Biography", "Crime"],
    mood: ["serious"],
    year: 1990,
    rating: 8.7,
    description: "The story of Henry Hill and his life in the mob."
  },
  {
    id: "91",
    title: "The Green Mile",
    genre: ["Crime", "Drama"],
    mood: ["serious"],
    year: 1999,
    rating: 8.6,
    description: "A death row guard encounters a prisoner with supernatural healing powers."
  },
  {
    id: "92",
    title: "American History X",
    genre: ["Crime", "Drama"],
    mood: ["serious"],
    year: 1998,
    rating: 8.5,
    description: "A former neo-Nazi tries to prevent his brother from going down the same path."
  },
  {
    id: "93",
    title: "Spotlight",
    genre: ["Biography", "Crime"],
    mood: ["serious"],
    year: 2015,
    rating: 8.1,
    description: "Journalists uncover systemic child abuse in the Catholic Church."
  },
  {
    id: "94",
    title: "The Social Network",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2010,
    rating: 7.7,
    description: "The founding of Facebook and its legal complications."
  },
  {
    id: "95",
    title: "The Big Short",
    genre: ["Biography", "Comedy"],
    mood: ["serious"],
    year: 2015,
    rating: 7.8,
    description: "The story of the 2008 financial crisis from the perspective of outsiders."
  },
  {
    id: "96",
    title: "Lincoln",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2012,
    rating: 7.3,
    description: "President Lincoln's efforts to abolish slavery during the Civil War."
  },
  {
    id: "97",
    title: "A Beautiful Mind",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2001,
    rating: 8.2,
    description: "A Nobel Laureate mathematician struggles with schizophrenia."
  },
  {
    id: "98",
    title: "The Imitation Game",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2014,
    rating: 8.0,
    description: "Alan Turing helps crack the Enigma code during WWII."
  },
  {
    id: "99",
    title: "Whiplash",
    genre: ["Drama", "Music"],
    mood: ["serious"],
    year: 2014,
    rating: 8.5,
    description: "A young drummer pursues perfection under an abusive instructor."
  },
  {
    id: "100",
    title: "The King's Speech",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2010,
    rating: 8.0,
    description: "King George VI works to overcome his speech impediment."
  },
  {
    id: "101",
    title: "Hotel Rwanda",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2004,
    rating: 8.1,
    description: "A hotel manager saves lives during the Rwandan genocide."
  },
  {
    id: "102",
    title: "Gandhi",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 1982,
    rating: 8.0,
    description: "The life of Mahatma Gandhi and his philosophy of non-violence."
  },
  {
    id: "103",
    title: "There Will Be Blood",
    genre: ["Drama"],
    mood: ["serious"],
    year: 2007,
    rating: 8.2,
    description: "An oil prospector's ambition leads to isolation and madness."
  },
  {
    id: "104",
    title: "Citizen Kane",
    genre: ["Drama", "Mystery"],
    mood: ["serious"],
    year: 1941,
    rating: 8.3,
    description: "The rise and fall of a newspaper tycoon."
  },
  {
    id: "105",
    title: "The Departed",
    genre: ["Crime", "Drama"],
    mood: ["serious"],
    year: 2006,
    rating: 8.5,
    description: "An undercover cop and a police informant try to identify each other."
  },
  {
    id: "106",
    title: "The Great Debaters",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2007,
    rating: 7.5,
    description: "A debate coach inspires his students to challenge social norms."
  },
  {
    id: "107",
    title: "Selma",
    genre: ["Biography", "Drama"],
    mood: ["serious"],
    year: 2014,
    rating: 7.5,
    description: "Martin Luther King Jr.'s campaign to secure voting rights."
  },

  // Excited Movies
  {
    id: "108",
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2019,
    rating: 8.4,
    description: "The Avengers assemble for their final battle against Thanos."
  },
  {
    id: "109",
    title: "Guardians of the Galaxy",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2014,
    rating: 8.0,
    description: "A group of misfits become unlikely heroes to save the galaxy."
  },
  {
    id: "110",
    title: "Iron Man",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2008,
    rating: 7.9,
    description: "A billionaire builds a high-tech suit of armor to fight evil."
  },
  {
    id: "111",
    title: "Doctor Strange",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2016,
    rating: 7.5,
    description: "A neurosurgeon discovers the hidden world of magic and alternate dimensions."
  },
  {
    id: "112",
    title: "Thor: Ragnarok",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2017,
    rating: 7.9,
    description: "Thor must save Asgard from the goddess of death."
  },
  {
    id: "113",
    title: "Spider-Man: No Way Home",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2021,
    rating: 8.4,
    description: "Spider-Man faces villains from alternate dimensions."
  },
  {
    id: "114",
    title: "The Dark Knight",
    genre: ["Action", "Crime"],
    mood: ["excited"],
    year: 2008,
    rating: 9.0,
    description: "Batman faces his greatest psychological and physical challenge."
  },
  {
    id: "115",
    title: "Inception",
    genre: ["Action", "Sci-Fi"],
    mood: ["excited"],
    year: 2010,
    rating: 8.8,
    description: "A thief enters people's dreams to steal secrets."
  },
  {
    id: "116",
    title: "Mad Max: Fury Road",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2015,
    rating: 8.1,
    description: "A post-apocalyptic chase across the desert wasteland."
  },
  {
    id: "117",
    title: "The Matrix",
    genre: ["Action", "Sci-Fi"],
    mood: ["excited"],
    year: 1999,
    rating: 8.7,
    description: "A hacker discovers reality is a computer simulation."
  },
  {
    id: "118",
    title: "Interstellar",
    genre: ["Adventure", "Drama"],
    mood: ["excited"],
    year: 2014,
    rating: 8.6,
    description: "A team of explorers travel through a wormhole in space."
  },
  {
    id: "119",
    title: "Star Wars: A New Hope",
    genre: ["Adventure", "Fantasy"],
    mood: ["excited"],
    year: 1977,
    rating: 8.6,
    description: "A young farm boy joins a rebellion against an evil empire."
  },
  {
    id: "120",
    title: "Star Wars: The Empire Strikes Back",
    genre: ["Adventure", "Fantasy"],
    mood: ["excited"],
    year: 1980,
    rating: 8.7,
    description: "The Empire strikes back against the Rebel Alliance."
  },
  {
    id: "121",
    title: "Black Panther",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2018,
    rating: 7.3,
    description: "The king of Wakanda fights to protect his nation."
  },
  {
    id: "122",
    title: "The Lion King",
    genre: ["Animation", "Adventure"],
    mood: ["excited"],
    year: 1994,
    rating: 8.5,
    description: "A lion prince flees his kingdom only to learn the true meaning of responsibility."
  },
  {
    id: "123",
    title: "Finding Dory",
    genre: ["Animation", "Adventure"],
    mood: ["excited"],
    year: 2016,
    rating: 7.2,
    description: "Dory searches for her long-lost family with help from her friends."
  },
  {
    id: "124",
    title: "Moana",
    genre: ["Animation", "Adventure"],
    mood: ["excited"],
    year: 2016,
    rating: 7.6,
    description: "A spirited teenager sails across the Pacific to save her island."
  },
  {
    id: "125",
    title: "Frozen",
    genre: ["Animation", "Adventure"],
    mood: ["excited"],
    year: 2013,
    rating: 7.4,
    description: "A fearless princess sets off to find her estranged sister."
  },
  {
    id: "126",
    title: "The Lego Movie",
    genre: ["Animation", "Adventure"],
    mood: ["excited"],
    year: 2014,
    rating: 7.7,
    description: "An ordinary LEGO construction worker becomes the key to saving the universe."
  },
  {
    id: "127",
    title: "Ready Player One",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2018,
    rating: 7.4,
    description: "A teenager finds clues to a hidden game in a virtual reality world."
  },
  {
    id: "128",
    title: "Jurassic World",
    genre: ["Action", "Adventure"],
    mood: ["excited"],
    year: 2015,
    rating: 6.9,
    description: "A new theme park with genetically modified dinosaurs goes horribly wrong."
  }
];

export const moodEmojis: Record<string, string> = {
  happy: "😊",
  sad: "😢",
  romantic: "💕",
  thrilling: "🎬",
  serious: "🎭",
  excited: "🎉"
};

export const moodColors: Record<string, string> = {
  happy: "mood-happy",
  sad: "mood-sad", 
  romantic: "mood-romantic",
  thrilling: "mood-thrilling",
  serious: "mood-serious",
  excited: "mood-excited"
};

export const getMoviesByMood = (mood: string): Movie[] => {
  return movieDatabase.filter(movie => 
    movie.mood.includes(mood.toLowerCase())
  ).slice(0, 5);
};

export const searchMovies = (query: string): Movie[] => {
  return movieDatabase.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
  );
};

export const getRandomMovie = (): Movie => {
  return movieDatabase[Math.floor(Math.random() * movieDatabase.length)];
};