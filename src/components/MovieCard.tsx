import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import type { Movie } from "@/lib/movieData";

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export const MovieCard = ({ movie, className }: MovieCardProps) => {
  return (
    <Card variant="cinema" className={`h-full ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight">{movie.title}</CardTitle>
          <div className="flex items-center gap-1 text-accent shrink-0 ml-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{movie.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {movie.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {movie.genre.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {movie.mood.map((mood) => (
            <span key={mood} className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-md">
              {mood}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};