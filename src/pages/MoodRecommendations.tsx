import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shuffle } from "lucide-react";
import { getMoviesByMood, moodEmojis, moodColors } from "@/lib/movieData";
import { useState, useEffect } from "react";

const MoodRecommendations = () => {
  const { mood } = useParams<{ mood: string }>();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<any[]>([]);
  const [moviePool, setMoviePool] = useState<any[]>([]);
  const [poolIndex, setPoolIndex] = useState(0);
  const [previousMovieIds, setPreviousMovieIds] = useState<string[]>([]);
  
  useEffect(() => {
    if (mood) {
      const allMovies = getMoviesByMood(mood);
      const shuffledPool = [...allMovies].sort(() => Math.random() - 0.5);
      const initialMovies = shuffledPool.slice(0, Math.min(5, allMovies.length));
      
      setMoviePool(shuffledPool);
      setMovies(initialMovies);
      setPoolIndex(initialMovies.length);
      setPreviousMovieIds(initialMovies.map(m => m.id));
    }
  }, [mood]);

  const shuffleMovies = () => {
    if (!mood) return;
    
    const allMovies = getMoviesByMood(mood);
    
    // If mood has 5 or fewer movies, no shuffle needed
    if (allMovies.length <= 5) {
      return;
    }
    
    let newMovies: any[] = [];
    let attempts = 0;
    const maxAttempts = 10;
    
    // Try up to 10 times to get a different set
    while (attempts < maxAttempts) {
      // Check if we need to reshuffle the pool
      if (poolIndex + 5 > moviePool.length) {
        const reshuffledPool = [...allMovies].sort(() => Math.random() - 0.5);
        setMoviePool(reshuffledPool);
        setPoolIndex(0);
        newMovies = reshuffledPool.slice(0, 5);
      } else {
        newMovies = moviePool.slice(poolIndex, poolIndex + 5);
      }
      
      // Check if the new set is different from the previous one
      const newMovieIds = newMovies.map(m => m.id);
      const isDifferent = !previousMovieIds.every(id => newMovieIds.includes(id)) || 
                         !newMovieIds.every(id => previousMovieIds.includes(id));
      
      if (isDifferent) {
        break;
      }
      
      attempts++;
      // If we're stuck, just reshuffle the entire pool
      if (attempts >= maxAttempts / 2) {
        const reshuffledPool = [...allMovies].sort(() => Math.random() - 0.5);
        setMoviePool(reshuffledPool);
        setPoolIndex(0);
        newMovies = reshuffledPool.slice(0, 5);
      }
    }
    
    setMovies(newMovies);
    setPoolIndex(prev => (prev + 5) % moviePool.length);
    setPreviousMovieIds(newMovies.map(m => m.id));
  };

  if (!mood) {
    return <div>Mood not found</div>;
  }

  const emoji = moodEmojis[mood.toLowerCase()];
  const colorClass = moodColors[mood.toLowerCase()];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate("/")} size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-3">
            <span className="text-5xl">{emoji}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold capitalize text-foreground">
                {mood} Movies
              </h1>
              <p className="text-muted-foreground">
                Perfect films to match your {mood} mood
              </p>
            </div>
          </div>
        </div>

        {/* Mood Indicator */}
        <Card variant="glow" className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">Current Mood: {mood}</h2>
                <p className="text-muted-foreground">
                  We've curated {movies.length} movies that perfectly capture this feeling
                </p>
              </div>
              {getMoviesByMood(mood).length > 5 ? (
                <Button variant="accent" onClick={shuffleMovies}>
                  <Shuffle className="w-4 h-4 mr-2" />
                  Shuffle Movies
                </Button>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Only {getMoviesByMood(mood).length} movies available
                </p>
              )}
            </div>
            <div className={`w-full h-2 bg-${colorClass} rounded-full mt-4 opacity-80`} />
          </CardContent>
        </Card>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {movies.length === 0 && (
          <Card variant="cinema" className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground text-lg">
                No movies found for this mood. Try a different mood!
              </p>
              <Button variant="cinema" onClick={() => navigate("/")} className="mt-4">
                Explore Other Moods
              </Button>
            </CardContent>
          </Card>
        )}

        {/* More Moods */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">Explore Other Moods</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(moodEmojis).filter(m => m !== mood?.toLowerCase()).map((otherMood) => (
              <Button
                key={otherMood}
                variant="outline"
                onClick={() => navigate(`/mood/${otherMood}`)}
                className="flex items-center gap-2"
              >
                <span>{moodEmojis[otherMood]}</span>
                <span className="capitalize">{otherMood}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodRecommendations;