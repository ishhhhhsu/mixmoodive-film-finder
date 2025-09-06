import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MovieCard } from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { movieDatabase, searchMovies } from "@/lib/movieData";

const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedMood, setSelectedMood] = useState<string>("all");
  const [filteredMovies, setFilteredMovies] = useState(movieDatabase);

  const genres = ["all", ...Array.from(new Set(movieDatabase.flatMap(movie => movie.genre)))];
  const moods = ["all", ...Array.from(new Set(movieDatabase.flatMap(movie => movie.mood)))];

  const handleSearch = () => {
    let results = searchQuery ? searchMovies(searchQuery) : movieDatabase;
    
    if (selectedGenre !== "all") {
      results = results.filter(movie => movie.genre.includes(selectedGenre));
    }
    
    if (selectedMood !== "all") {
      results = results.filter(movie => movie.mood.includes(selectedMood));
    }
    
    setFilteredMovies(results);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGenre("all");
    setSelectedMood("all");
    setFilteredMovies(movieDatabase);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-cinema bg-clip-text text-transparent">
              Movie Search
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover movies and explore their mood tags and emotional themes
          </p>
        </div>

        {/* Search and Filters */}
        <Card variant="cinema" className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-accent" />
              Search & Filter Movies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="flex gap-2">
              <Input
                placeholder="Search movies by title or genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-muted/50 border-accent/20 focus:border-accent/60"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button variant="cinema" onClick={handleSearch}>
                <Search className="w-4 h-4" />
              </Button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Genre</label>
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger className="bg-muted/50 border-accent/20">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre === "all" ? "All Genres" : genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mood</label>
                <Select value={selectedMood} onValueChange={setSelectedMood}>
                  <SelectTrigger className="bg-muted/50 border-accent/20">
                    <SelectValue placeholder="Select mood" />
                  </SelectTrigger>
                  <SelectContent>
                    {moods.map((mood) => (
                      <SelectItem key={mood} value={mood}>
                        {mood === "all" ? "All Moods" : mood}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" onClick={clearFilters} className="w-full">
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Applied Filters */}
            <div className="flex flex-wrap gap-2">
              {searchQuery && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent rounded-md text-sm">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")}>
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {selectedGenre !== "all" && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent rounded-md text-sm">
                  Genre: {selectedGenre}
                  <button onClick={() => setSelectedGenre("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {selectedMood !== "all" && (
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent rounded-md text-sm">
                  Mood: {selectedMood}
                  <button onClick={() => setSelectedMood("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Search Results ({filteredMovies.length} movies)
          </h2>
          <p className="text-muted-foreground">
            {filteredMovies.length === movieDatabase.length 
              ? "Showing all movies in our database" 
              : `Found ${filteredMovies.length} movies matching your criteria`}
          </p>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovies.map((movie, index) => (
              <div
                key={movie.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <Card variant="cinema" className="text-center py-12">
            <CardContent>
              <Filter className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Movies Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or clearing the filters
              </p>
              <Button variant="cinema" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SearchMovies;