import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Heart, RotateCcw, Send, TrendingUp, TrendingDown } from "lucide-react";

interface SentimentResult {
  sentiment: "positive" | "negative";
  confidence: number;
  analysis: string;
}

const SentimentAnalysis = () => {
  const [reviewText, setReviewText] = useState("");
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Simple sentiment analysis simulation
  const analyzeSentiment = async () => {
    if (!reviewText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simple keyword-based sentiment analysis
    const positiveWords = ["good", "great", "excellent", "amazing", "wonderful", "fantastic", "love", "best", "awesome", "brilliant", "outstanding", "perfect"];
    const negativeWords = ["bad", "terrible", "awful", "horrible", "worst", "hate", "disappointing", "boring", "stupid", "waste", "poor", "pathetic"];
    
    const text = reviewText.toLowerCase();
    const positiveCount = positiveWords.filter(word => text.includes(word)).length;
    const negativeCount = negativeWords.filter(word => text.includes(word)).length;
    
    let sentiment: "positive" | "negative";
    let confidence: number;
    let analysis: string;
    
    if (positiveCount > negativeCount) {
      sentiment = "positive";
      confidence = Math.min(0.6 + (positiveCount * 0.1), 0.95);
      analysis = `This review contains ${positiveCount} positive indicators and ${negativeCount} negative indicators, suggesting an overall positive sentiment.`;
    } else if (negativeCount > positiveCount) {
      sentiment = "negative";
      confidence = Math.min(0.6 + (negativeCount * 0.1), 0.95);
      analysis = `This review contains ${negativeCount} negative indicators and ${positiveCount} positive indicators, suggesting an overall negative sentiment.`;
    } else {
      sentiment = reviewText.length > 50 ? "positive" : "negative";
      confidence = 0.55;
      analysis = "The sentiment is unclear. The review contains balanced emotional indicators.";
    }
    
    setResult({ sentiment, confidence, analysis });
    setIsAnalyzing(false);
  };

  const resetAnalysis = () => {
    setReviewText("");
    setResult(null);
  };

  const sampleReviews = [
    "This movie was absolutely fantastic! The cinematography was breathtaking and the story kept me engaged throughout.",
    "I was really disappointed by this film. The plot was confusing and the characters were poorly developed.",
    "An okay movie with some good moments, but it didn't really live up to the hype for me."
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-cinema bg-clip-text text-transparent">
              Sentiment Analysis
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Analyze the emotional tone behind movie reviews with AI-powered sentiment detection
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card variant="cinema">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Review Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Enter a movie review:
                </label>
                <Textarea
                  placeholder="Type or paste a movie review here..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="min-h-[120px] bg-muted/50 border-accent/20 focus:border-accent/60"
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="cinema" 
                  onClick={analyzeSentiment}
                  disabled={!reviewText.trim() || isAnalyzing}
                  className="flex-1"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Analyze Sentiment
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={resetAnalysis}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Try these sample reviews:</p>
                <div className="space-y-2">
                  {sampleReviews.map((sample, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="text-left h-auto min-h-[3rem] max-h-[5rem] p-3 text-xs w-full justify-start overflow-hidden"
                      onClick={() => setReviewText(sample)}
                    >
                      <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                        <span className="break-words leading-relaxed block">
                          "{sample.length > 100 ? `${sample.slice(0, 100)}...` : sample}"
                        </span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card variant="cinema">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  {/* Sentiment Badge */}
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
                      result.sentiment === "positive" 
                        ? "bg-mood-happy/20 text-mood-happy border border-mood-happy/30" 
                        : "bg-mood-sad/20 text-mood-sad border border-mood-sad/30"
                    }`}>
                      {result.sentiment === "positive" ? (
                        <TrendingUp className="w-6 h-6" />
                      ) : (
                        <TrendingDown className="w-6 h-6" />
                      )}
                      <span className="text-xl font-semibold capitalize">
                        {result.sentiment}
                      </span>
                    </div>
                  </div>

                  {/* Confidence Score */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Confidence Score</span>
                      <span className="text-sm text-accent font-medium">
                        {Math.round(result.confidence * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          result.sentiment === "positive" ? "bg-mood-happy" : "bg-mood-sad"
                        }`}
                        style={{ width: `${result.confidence * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Analysis Text */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Detailed Analysis</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {result.analysis}
                    </p>
                  </div>

                  {/* Confidence Level Badge */}
                  <div className="flex justify-center">
                    <Badge 
                      variant={result.confidence > 0.8 ? "default" : "secondary"}
                      className="px-3 py-1"
                    >
                      {result.confidence > 0.8 ? "High Confidence" : 
                       result.confidence > 0.6 ? "Medium Confidence" : "Low Confidence"}
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Heart className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">
                    Enter a movie review to see the sentiment analysis results
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <Card variant="glow" className="mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-accent font-semibold">1</span>
                </div>
                <p>Enter or paste a movie review in the text area</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-accent font-semibold">2</span>
                </div>
                <p>Our AI analyzes the emotional tone and language patterns</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-accent font-semibold">3</span>
                </div>
                <p>Get sentiment classification with confidence scoring</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SentimentAnalysis;