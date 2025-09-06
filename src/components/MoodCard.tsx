import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { moodEmojis, moodColors } from "@/lib/movieData";

interface MoodCardProps {
  mood: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const MoodCard = ({ mood, onClick, className, style }: MoodCardProps) => {
  const emoji = moodEmojis[mood.toLowerCase()];
  const colorClass = moodColors[mood.toLowerCase()];

  return (
    <Card 
      variant="mood" 
      className={`cursor-pointer group ${className}`}
      onClick={onClick}
      style={style}
    >
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-3 group-hover:animate-float">
          {emoji}
        </div>
        <h3 className="text-lg font-semibold capitalize mb-2 text-foreground">
          {mood}
        </h3>
        <div className={`w-full h-1 bg-${colorClass} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />
      </CardContent>
    </Card>
  );
};