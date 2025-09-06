import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send, Sparkles, Shuffle, Film } from "lucide-react";
import { getRandomMovie, moodEmojis } from "@/lib/movieData";

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const MovieBuddy = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Hello! I'm your Movie Buddy 🎬 I'm here to help you discover amazing films based on your mood and preferences. What kind of movie are you in the mood for today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("random") || message.includes("surprise")) {
      const randomMovie = getRandomMovie();
      return `🎲 Here's a surprise pick for you: "${randomMovie.title}" (${randomMovie.year})! ${randomMovie.description} This ${randomMovie.genre.join("/").toLowerCase()} film has a ${randomMovie.rating}/10 rating and matches these moods: ${randomMovie.mood.join(", ")} ${randomMovie.mood.map(mood => moodEmojis[mood] || "🎬").join("")}`;
    }
    
    if (message.includes("happy") || message.includes("upbeat") || message.includes("cheerful")) {
      return "😊 I can tell you're looking for something uplifting! I'd recommend checking out our Happy movies section. Films like 'The Grand Budapest Hotel' or 'La La Land' are perfect for brightening your day!";
    }
    
    if (message.includes("sad") || message.includes("cry") || message.includes("emotional")) {
      return "😢 Sometimes we need a good emotional release! For those deep, moving moments, try 'Manchester by the Sea' or 'Her'. These films will take you on an emotional journey.";
    }
    
    if (message.includes("romantic") || message.includes("love") || message.includes("romance")) {
      return "💕 Ah, looking for love! How about 'The Notebook' for classic romance, or 'Eternal Sunshine of the Spotless Mind' for something more unique? Both will make your heart flutter!";
    }
    
    if (message.includes("action") || message.includes("thrilling") || message.includes("exciting")) {
      return "🎬 Ready for some adrenaline? 'Mad Max: Fury Road' and 'John Wick' are perfect for that heart-pounding excitement you're seeking!";
    }
    
    if (message.includes("serious") || message.includes("drama") || message.includes("thought-provoking")) {
      return "🎭 For something more contemplative, I'd suggest 'There Will Be Blood' or 'Schindler's List'. These are films that will stay with you long after the credits roll.";
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello there! 👋 I'm excited to help you find the perfect movie! Tell me about your mood, or ask me for a random recommendation if you're feeling adventurous!";
    }
    
    if (message.includes("thank")) {
      return "You're very welcome! 🎬 I hope you enjoy whatever you decide to watch! Feel free to come back anytime for more movie recommendations!";
    }
    
    return "That's interesting! 🤔 For the best recommendations, try using our mood selection on the home page, or tell me more about what you're feeling right now. I can also give you a random surprise movie if you'd like!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    { text: "Surprise me with a random movie!", icon: Shuffle },
    { text: "I'm feeling happy today", icon: "😊" },
    { text: "Something romantic please", icon: "💕" },
    { text: "I want an action-packed thriller", icon: "🎬" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-cinema bg-clip-text text-transparent">
              Movie Buddy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your friendly AI assistant for personalized movie recommendations
          </p>
        </div>

        <Card variant="cinema" className="h-[600px] flex flex-col">
          <CardHeader className="border-b border-accent/20">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent" />
              Chat with Movie Buddy
            </CardTitle>
          </CardHeader>
          
          {/* Chat Messages */}
          <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start gap-3 max-w-[80%] ${
                      message.isUser ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <Avatar className="w-8 h-8 shrink-0">
                      {message.isUser ? (
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          U
                        </AvatarFallback>
                      ) : (
                        <>
                          <AvatarImage src="/api/placeholder/32/32" />
                          <AvatarFallback className="bg-accent text-accent-foreground">
                            🎬
                          </AvatarFallback>
                        </>
                      )}
                    </Avatar>
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-accent text-accent-foreground">
                        🎬
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-accent/20">
              <p className="text-sm text-muted-foreground mb-3">Quick suggestions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="justify-start h-auto p-2 text-left"
                    onClick={() => setInputMessage(action.text)}
                  >
                    <span className="mr-2">
                      {typeof action.icon === "string" ? action.icon : <action.icon className="w-4 h-4" />}
                    </span>
                    <span className="text-xs">{action.text}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-accent/20">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask for movie recommendations..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-muted/50 border-accent/20 focus:border-accent/60"
                  disabled={isTyping}
                />
                <Button 
                  variant="cinema" 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card variant="glow" className="text-center">
            <CardContent className="p-6">
              <Sparkles className="w-8 h-8 mx-auto text-accent mb-3" />
              <h3 className="font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized movie suggestions based on your current mood
              </p>
            </CardContent>
          </Card>
          
          <Card variant="glow" className="text-center">
            <CardContent className="p-6">
              <Shuffle className="w-8 h-8 mx-auto text-accent mb-3" />
              <h3 className="font-semibold mb-2">Random Discoveries</h3>
              <p className="text-sm text-muted-foreground">
                Discover hidden gems with our surprise movie feature
              </p>
            </CardContent>
          </Card>
          
          <Card variant="glow" className="text-center">
            <CardContent className="p-6">
              <Film className="w-8 h-8 mx-auto text-accent mb-3" />
              <h3 className="font-semibold mb-2">Curated Database</h3>
              <p className="text-sm text-muted-foreground">
                Access our carefully selected collection of quality films
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MovieBuddy;