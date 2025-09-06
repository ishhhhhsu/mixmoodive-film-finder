import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoodCard } from "@/components/MoodCard";
import { MovieCard } from "@/components/MovieCard";
import { Navigation } from "@/components/Navigation";
import { Sparkles, Film, Heart, Zap } from "lucide-react";
import { getMoviesByMood, getRandomMovie } from "@/lib/movieData";
import heroImage from "@/assets/hero-cinema.jpg";
const Index = () => {
  const navigate = useNavigate();
  const [featuredMovies, setFeaturedMovies] = useState(() => getMoviesByMood("happy").slice(0, 3));
  const moods = ["happy", "sad", "romantic", "thrilling", "serious", "excited"];
  const handleMoodClick = (mood: string) => {
    navigate(`/mood/${mood}`);
  };
  const handleRandomMovie = () => {
    const randomMovie = getRandomMovie();
    setFeaturedMovies([randomMovie, ...featuredMovies.slice(0, 2)]);
  };
  return <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Cinematic hero background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-cinema bg-clip-text text-transparent">
                MixMoodive
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Because every feeling deserves a film. Discover movies that match your mood and analyze the sentiment behind every review.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="cinema" size="xl" onClick={() => navigate("/sentiment")}>
                <Heart className="w-5 h-5 mr-2" />
                Analyze Sentiment
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Mood Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What's Your Mood?
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose your current feeling and discover the perfect movies for you
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {moods.map((mood, index) => <MoodCard key={mood} mood={mood} onClick={() => handleMoodClick(mood)} className={`animate-scale-in`} style={{
            animationDelay: `${index * 100}ms`
          }} />)}
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-background via-card to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured Recommendations
            </h2>
            <p className="text-muted-foreground text-lg">
              Handpicked movies to brighten your day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMovies.map((movie, index) => <div key={movie.id} className="animate-fade-in" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <MovieCard movie={movie} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glow" className="text-center cursor-pointer" onClick={() => navigate("/sentiment")}>
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Sentiment Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analyze movie reviews and discover the emotional tone behind the words
                </p>
              </CardContent>
            </Card>
            
            <Card variant="glow" className="text-center cursor-pointer" onClick={() => navigate("/search")}>
              <CardHeader>
                <Film className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Movie Search</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Search for movies and discover their mood tags and emotional themes
                </p>
              </CardContent>
            </Card>
            
            <Card variant="glow" className="text-center cursor-pointer" onClick={() => navigate("/buddy")}>
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Movie Buddy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Chat with our AI assistant for personalized movie recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;