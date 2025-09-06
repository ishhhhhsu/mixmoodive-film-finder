import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, Film, Heart, Star } from "lucide-react";
import { moodEmojis } from "@/lib/movieData";

// Mock analytics data
const analyticsData = {
  totalReviews: 1247,
  positiveReviews: 789,
  negativeReviews: 458,
  mostPopularMood: "happy",
  dailyStats: [
    { date: "Mon", happy: 45, sad: 12, romantic: 23, thrilling: 34, serious: 15, excited: 28 },
    { date: "Tue", happy: 52, sad: 8, romantic: 31, thrilling: 29, serious: 18, excited: 35 },
    { date: "Wed", happy: 38, sad: 15, romantic: 19, thrilling: 42, serious: 22, excited: 31 },
    { date: "Thu", happy: 61, sad: 9, romantic: 27, thrilling: 38, serious: 14, excited: 41 },
    { date: "Fri", happy: 47, sad: 11, romantic: 33, thrilling: 45, serious: 19, excited: 38 },
    { date: "Sat", happy: 55, sad: 7, romantic: 41, thrilling: 39, serious: 16, excited: 43 },
    { date: "Sun", happy: 49, sad: 13, romantic: 36, thrilling: 33, serious: 21, excited: 37 }
  ],
  topMovies: [
    { title: "The Grand Budapest Hotel", views: 342, rating: 8.1 },
    { title: "Inception", views: 298, rating: 8.8 },
    { title: "La La Land", views: 287, rating: 8.0 },
    { title: "The Dark Knight", views: 245, rating: 9.0 },
    { title: "Amélie", views: 223, rating: 8.3 }
  ]
};

const Analytics = () => {
  const sentimentRatio = (analyticsData.positiveReviews / analyticsData.totalReviews) * 100;
  const currentHour = new Date().getHours();
  const todayMood = currentHour < 12 ? "excited" : currentHour < 18 ? "happy" : "romantic";

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-cinema bg-clip-text text-transparent">
              Analytics Dashboard
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Insights into movie preferences and sentiment analysis trends
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card variant="glow">
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 mx-auto text-accent mb-3" />
              <div className="text-2xl font-bold text-foreground">{analyticsData.totalReviews}</div>
              <p className="text-sm text-muted-foreground">Total Reviews Analyzed</p>
            </CardContent>
          </Card>

          <Card variant="glow">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto text-mood-happy mb-3" />
              <div className="text-2xl font-bold text-mood-happy">{Math.round(sentimentRatio)}%</div>
              <p className="text-sm text-muted-foreground">Positive Sentiment</p>
            </CardContent>
          </Card>

          <Card variant="glow">
            <CardContent className="p-6 text-center">
              <Film className="w-8 h-8 mx-auto text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground">30+</div>
              <p className="text-sm text-muted-foreground">Movies in Database</p>
            </CardContent>
          </Card>

          <Card variant="glow">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">{moodEmojis[todayMood]}</div>
              <div className="text-lg font-bold capitalize text-foreground">{todayMood}</div>
              <p className="text-sm text-muted-foreground">Most Selected Today</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sentiment Analysis Chart */}
          <Card variant="cinema">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                Sentiment Analysis Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Positive vs Negative */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Positive Reviews</span>
                    <span className="text-sm text-mood-happy font-medium">
                      {analyticsData.positiveReviews} ({Math.round(sentimentRatio)}%)
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="h-3 bg-mood-happy rounded-full transition-all duration-1000"
                      style={{ width: `${sentimentRatio}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Negative Reviews</span>
                    <span className="text-sm text-mood-sad font-medium">
                      {analyticsData.negativeReviews} ({Math.round(100 - sentimentRatio)}%)
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="h-3 bg-mood-sad rounded-full transition-all duration-1000"
                      style={{ width: `${100 - sentimentRatio}%` }}
                    />
                  </div>
                </div>

                {/* Confidence Levels */}
                <div className="pt-4 border-t border-accent/20">
                  <h4 className="text-sm font-semibold mb-3">Analysis Confidence</h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-accent">68%</div>
                      <div className="text-xs text-muted-foreground">High Confidence</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">23%</div>
                      <div className="text-xs text-muted-foreground">Medium Confidence</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-muted-foreground">9%</div>
                      <div className="text-xs text-muted-foreground">Low Confidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Mood Trends */}
          <Card variant="cinema">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Weekly Mood Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.dailyStats.map((day, index) => {
                  const total = Object.entries(day).reduce((sum, [key, val]) => 
                    key !== 'date' && typeof val === 'number' ? sum + val : sum, 0
                  );
                  
                  return (
                    <div key={day.date} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{day.date}</span>
                        <span className="text-xs text-muted-foreground">{total} selections</span>
                      </div>
                      <div className="flex gap-1 h-6 rounded-full overflow-hidden bg-muted">
                        {Object.entries(day).map(([mood, count]) => {
                          if (mood === 'date' || typeof count !== 'number') return null;
                          const percentage = (count / total) * 100;
                          
                          return (
                            <div
                              key={mood}
                              className={`bg-mood-${mood} transition-all duration-500 hover:opacity-80`}
                              style={{ 
                                width: `${percentage}%`,
                                animationDelay: `${index * 100}ms`
                              }}
                              title={`${mood}: ${count}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Top Movies */}
          <Card variant="cinema">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Most Popular Movies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topMovies.map((movie, index) => (
                  <div key={movie.title} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{movie.title}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{movie.views} views</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current text-accent" />
                            <span>{movie.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mood Legend */}
          <Card variant="glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Mood Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(moodEmojis).map(([mood, emoji]) => (
                  <div key={mood} className="flex items-center gap-3 p-2 bg-muted/20 rounded-lg">
                    <span className="text-2xl">{emoji}</span>
                    <div>
                      <p className="font-medium capitalize text-sm">{mood}</p>
                      <div className={`w-8 h-1 bg-mood-${mood} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        <Card variant="glow" className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-mood-happy/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-mood-happy" />
                </div>
                <p className="font-medium mb-1">Positive Trend</p>
                <p className="text-muted-foreground">
                  {Math.round(sentimentRatio)}% of analyzed reviews show positive sentiment, indicating high user satisfaction
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <p className="font-medium mb-1">Popular Choice</p>
                <p className="text-muted-foreground">
                  Happy mood is currently the most selected, showing users prefer uplifting content
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium mb-1">Engagement</p>
                <p className="text-muted-foreground">
                  Weekend selections peak on Saturday, with romantic movies trending on Friday evenings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;