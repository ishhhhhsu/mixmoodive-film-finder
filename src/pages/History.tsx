import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History as HistoryIcon, TrendingUp, Heart, Search, MessageSquare, Trash2 } from "lucide-react";
import { moodEmojis } from "@/lib/movieData";

// Mock history data
const mockHistory = [
  {
    id: "1",
    type: "mood_selection",
    mood: "happy",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    movies: ["The Grand Budapest Hotel", "La La Land", "Paddington"]
  },
  {
    id: "2",
    type: "sentiment_analysis",
    text: "This movie was absolutely fantastic!",
    result: "positive",
    confidence: 0.92,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  },
  {
    id: "3",
    type: "search",
    query: "romantic comedy",
    resultsCount: 8,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4) // 4 hours ago
  },
  {
    id: "4",
    type: "mood_selection",
    mood: "thrilling",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    movies: ["Mad Max: Fury Road", "The Dark Knight", "Inception"]
  },
  {
    id: "5",
    type: "chat",
    message: "Surprise me with a random movie!",
    response: "Here's a surprise pick: Eternal Sunshine of the Spotless Mind",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2) // 2 days ago
  }
];

const moodStats = {
  happy: 5,
  thrilling: 3,
  romantic: 4,
  serious: 2,
  sad: 1,
  excited: 3
};

const History = () => {
  const getActionIcon = (type: string) => {
    switch (type) {
      case "mood_selection":
        return <TrendingUp className="w-4 h-4" />;
      case "sentiment_analysis":
        return <Heart className="w-4 h-4" />;
      case "search":
        return <Search className="w-4 h-4" />;
      case "chat":
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <HistoryIcon className="w-4 h-4" />;
    }
  };

  const getActionColor = (type: string) => {
    switch (type) {
      case "mood_selection":
        return "text-mood-happy";
      case "sentiment_analysis":
        return "text-mood-romantic";
      case "search":
        return "text-accent";
      case "chat":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  };

  const totalInteractions = mockHistory.length;
  const mostUsedMood = Object.entries(moodStats).reduce((a, b) => moodStats[a[0]] > moodStats[b[0]] ? a : b)[0];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-cinema bg-clip-text text-transparent">
              Your History
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your movie discovery journey and analyze your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card variant="glow">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Interactions</span>
                  <span className="text-2xl font-bold text-accent">{totalInteractions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Most Used Mood</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{moodEmojis[mostUsedMood]}</span>
                    <span className="font-medium capitalize">{mostUsedMood}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">This Week</span>
                  <span className="text-lg font-semibold">12 movies explored</span>
                </div>
              </CardContent>
            </Card>

            {/* Mood Distribution */}
            <Card variant="cinema">
              <CardHeader>
                <CardTitle className="text-lg">Mood Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(moodStats).map(([mood, count]) => (
                    <div key={mood} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>{moodEmojis[mood]}</span>
                        <span className="text-sm capitalize">{mood}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-accent rounded-full transition-all duration-500"
                            style={{ width: `${(count / Math.max(...Object.values(moodStats))) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Timeline */}
          <div className="lg:col-span-2">
            <Card variant="cinema">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <HistoryIcon className="w-5 h-5 text-accent" />
                  Recent Activity
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear History
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockHistory.map((item) => (
                    <div 
                      key={item.id}
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className={`p-2 rounded-full bg-background ${getActionColor(item.type)}`}>
                        {getActionIcon(item.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">
                            {item.type.replace("_", " ")}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(item.timestamp)}
                          </span>
                        </div>

                        {item.type === "mood_selection" && (
                          <div>
                            <p className="text-sm mb-2">
                              Selected <span className="font-medium capitalize">{item.mood}</span> mood 
                              <span className="ml-1">{moodEmojis[item.mood]}</span>
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {item.movies?.slice(0, 3).map((movie, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">
                                  {movie}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.type === "sentiment_analysis" && (
                          <div>
                            <p className="text-sm mb-2">
                              Analyzed review sentiment: 
                              <Badge variant={item.result === "positive" ? "default" : "secondary"} className="ml-2">
                                {item.result} ({Math.round(item.confidence! * 100)}%)
                              </Badge>
                            </p>
                            <p className="text-xs text-muted-foreground italic">
                              "{item.text?.slice(0, 100)}..."
                            </p>
                          </div>
                        )}

                        {item.type === "search" && (
                          <div>
                            <p className="text-sm mb-1">
                              Searched for: <span className="font-medium">"{item.query}"</span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Found {item.resultsCount} movies
                            </p>
                          </div>
                        )}

                        {item.type === "chat" && (
                          <div>
                            <p className="text-sm mb-1">
                              Asked: <span className="italic">"{item.message}"</span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {item.response}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {mockHistory.length === 0 && (
                  <div className="text-center py-12">
                    <HistoryIcon className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No History Yet</h3>
                    <p className="text-muted-foreground">
                      Start exploring movies to see your activity here!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;