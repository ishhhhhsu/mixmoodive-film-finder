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
    title: "The Grand Budapest Hotel",
    genre: ["Comedy", "Adventure"],
    mood: ["happy", "excited"],
    year: 2014,
    rating: 8.1,
    description: "A whimsical adventure through a legendary hotel and its eccentric staff."
  },
  {
    id: "2",
    title: "La La Land",
    genre: ["Musical", "Romance"],
    mood: ["happy", "romantic"],
    year: 2016,
    rating: 8.0,
    description: "A jazz musician and aspiring actress fall in love in Los Angeles."
  },
  {
    id: "3",
    title: "Paddington",
    genre: ["Family", "Comedy"],
    mood: ["happy"],
    year: 2014,
    rating: 7.2,
    description: "A young bear travels to London in search of a home."
  },
  {
    id: "4",
    title: "The Princess Bride",
    genre: ["Adventure", "Comedy", "Romance"],
    mood: ["happy", "romantic", "excited"],
    year: 1987,
    rating: 8.0,
    description: "A classic fairy tale adventure with romance and humor."
  },
  {
    id: "5",
    title: "Amélie",
    genre: ["Romance", "Comedy"],
    mood: ["happy", "romantic"],
    year: 2001,
    rating: 8.3,
    description: "A shy waitress decides to help those around her find happiness."
  },

  // Sad Movies
  {
    id: "6",
    title: "Manchester by the Sea",
    genre: ["Drama"],
    mood: ["sad", "serious"],
    year: 2016,
    rating: 7.8,
    description: "A janitor is forced to return to his hometown after his brother's death."
  },
  {
    id: "7",
    title: "Her",
    genre: ["Drama", "Romance", "Sci-Fi"],
    mood: ["sad", "romantic", "serious"],
    year: 2013,
    rating: 8.0,
    description: "A lonely writer develops a relationship with an AI."
  },
  {
    id: "8",
    title: "Blue Is the Warmest Color",
    genre: ["Drama", "Romance"],
    mood: ["sad", "romantic", "serious"],
    year: 2013,
    rating: 7.7,
    description: "The emotional journey of a young woman discovering love."
  },
  {
    id: "9",
    title: "Moonlight",
    genre: ["Drama"],
    mood: ["sad", "serious"],
    year: 2016,
    rating: 7.4,
    description: "A young black man grapples with identity and sexuality."
  },
  {
    id: "10",
    title: "Inside Out",
    genre: ["Animation", "Family"],
    mood: ["sad", "happy"],
    year: 2015,
    rating: 8.1,
    description: "Emotions inside a girl's mind struggle as she adapts to new life."
  },

  // Romantic Movies
  {
    id: "11",
    title: "The Notebook",
    genre: ["Romance", "Drama"],
    mood: ["romantic", "sad"],
    year: 2004,
    rating: 7.8,
    description: "An elderly man tells the story of his decades-long love affair."
  },
  {
    id: "12",
    title: "Casablanca",
    genre: ["Romance", "Drama"],
    mood: ["romantic", "serious"],
    year: 1942,
    rating: 8.5,
    description: "A cynical nightclub owner helps his former lover escape."
  },
  {
    id: "13",
    title: "When Harry Met Sally",
    genre: ["Romance", "Comedy"],
    mood: ["romantic", "happy"],
    year: 1989,
    rating: 7.7,
    description: "Can men and women be just friends?"
  },
  {
    id: "14",
    title: "Eternal Sunshine of the Spotless Mind",
    genre: ["Romance", "Drama", "Sci-Fi"],
    mood: ["romantic", "sad", "serious"],
    year: 2004,
    rating: 8.3,
    description: "A couple undergoes a procedure to erase memories of each other."
  },
  {
    id: "15",
    title: "Before Sunset",
    genre: ["Romance", "Drama"],
    mood: ["romantic", "serious"],
    year: 2004,
    rating: 8.1,
    description: "Two lovers reunite nine years after their first encounter."
  },

  // Thrilling Movies
  {
    id: "16",
    title: "Mad Max: Fury Road",
    genre: ["Action", "Thriller"],
    mood: ["thrilling", "excited"],
    year: 2015,
    rating: 8.1,
    description: "A post-apocalyptic chase across the desert wasteland."
  },
  {
    id: "17",
    title: "The Dark Knight",
    genre: ["Action", "Thriller", "Crime"],
    mood: ["thrilling", "serious"],
    year: 2008,
    rating: 9.0,
    description: "Batman faces his greatest psychological and physical challenge."
  },
  {
    id: "18",
    title: "Inception",
    genre: ["Thriller", "Sci-Fi"],
    mood: ["thrilling", "serious"],
    year: 2010,
    rating: 8.8,
    description: "A thief enters people's dreams to steal secrets."
  },
  {
    id: "19",
    title: "John Wick",
    genre: ["Action", "Thriller"],
    mood: ["thrilling", "excited"],
    year: 2014,
    rating: 7.4,
    description: "A retired hitman seeks vengeance for his murdered dog."
  },
  {
    id: "20",
    title: "No Country for Old Men",
    genre: ["Thriller", "Crime"],
    mood: ["thrilling", "serious"],
    year: 2007,
    rating: 8.1,
    description: "A hunter stumbles upon drug money and faces a relentless killer."
  },

  // Serious Movies
  {
    id: "21",
    title: "There Will Be Blood",
    genre: ["Drama"],
    mood: ["serious"],
    year: 2007,
    rating: 8.2,
    description: "An oil prospector's ambition leads to isolation and madness."
  },
  {
    id: "22",
    title: "12 Years a Slave",
    genre: ["Drama", "History"],
    mood: ["serious", "sad"],
    year: 2013,
    rating: 8.1,
    description: "A free black man is kidnapped and sold into slavery."
  },
  {
    id: "23",
    title: "Schindler's List",
    genre: ["Drama", "History"],
    mood: ["serious", "sad"],
    year: 1993,
    rating: 8.9,
    description: "A businessman saves lives during the Holocaust."
  },
  {
    id: "24",
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    mood: ["serious"],
    year: 1972,
    rating: 9.2,
    description: "The patriarch of a crime family transfers control to his reluctant son."
  },
  {
    id: "25",
    title: "Spotlight",
    genre: ["Drama", "Thriller"],
    mood: ["serious"],
    year: 2015,
    rating: 8.1,
    description: "Journalists uncover systemic child abuse in the Catholic Church."
  },

  // Excited Movies
  {
    id: "26",
    title: "Guardians of the Galaxy",
    genre: ["Action", "Adventure", "Comedy"],
    mood: ["excited", "happy"],
    year: 2014,
    rating: 8.0,
    description: "A group of misfits become unlikely heroes to save the galaxy."
  },
  {
    id: "27",
    title: "Spider-Man: Into the Spider-Verse",
    genre: ["Animation", "Action", "Adventure"],
    mood: ["excited", "happy"],
    year: 2018,
    rating: 8.4,
    description: "Teen Miles Morales becomes Spider-Man in his universe."
  },
  {
    id: "28",
    title: "Baby Driver",
    genre: ["Action", "Crime"],
    mood: ["excited", "thrilling"],
    year: 2017,
    rating: 7.6,
    description: "A young getaway driver is coerced into a doomed heist."
  },
  {
    id: "29",
    title: "The Avengers",
    genre: ["Action", "Adventure"],
    mood: ["excited", "thrilling"],
    year: 2012,
    rating: 8.0,
    description: "Superheroes assemble to save Earth from an alien invasion."
  },
  {
    id: "30",
    title: "Kingsman: The Secret Service",
    genre: ["Action", "Comedy"],
    mood: ["excited", "happy"],
    year: 2014,
    rating: 7.7,
    description: "A street kid is recruited into a secret spy organization."
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