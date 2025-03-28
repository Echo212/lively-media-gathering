
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic, Book, Calendar, MapPin } from 'lucide-react';
import PoemCard from '@/components/UI/PoemCard';
import AudioPlayer from '@/components/UI/AudioPlayer';

// Sample data for the homepage
const featuredPoem = {
  id: "poem1",
  title: "The Siberian Winter",
  text: "Snow falls silently,\nCovering the endless plains,\nWhite infinity.\n\nFrozen rivers sleep,\nBeneath the ice, life endures,\nWaiting for the spring.",
  year: "2023"
};

const featuredInterview = {
  title: "Voices of Tomsk",
  audioUrl: "https://example.com/sample-audio.mp3"
};

const Index = () => {
  useEffect(() => {
    console.log('Index component rendered');
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">Poetic Voices</h1>
              <p className="text-xl mb-8 opacity-90">
                A living archive of regional poetry, interviews, and cultural events across Siberian cities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/interviews">Explore Interviews</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/collections">Discover Collections</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="py-16 bg-secondary/50">
          <div className="container-custom">
            <h2 className="font-serif text-3xl font-medium mb-12 text-center">Explore Our Archive</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Interviews Section */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mic className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl ml-3">Interviews</h3>
                  </div>
                  <p className="mb-8 text-muted-foreground">
                    Listen to conversations with poets about identity, creative process, and regional culture.
                  </p>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to="/interviews" className="flex justify-between w-full">
                      Browse Interviews
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Poets Section */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Book className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl ml-3">Poets</h3>
                  </div>
                  <p className="mb-8 text-muted-foreground">
                    Discover voices from across Siberia, with biographies and selected works.
                  </p>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to="/poets" className="flex justify-between w-full">
                      Meet the Poets
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Events Section */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl ml-3">Events</h3>
                  </div>
                  <p className="mb-8 text-muted-foreground">
                    Join readings, congresses, and meetings across the region.
                  </p>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to="/events" className="flex justify-between w-full">
                      View Calendar
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* Collections Section */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl ml-3">Collections</h3>
                  </div>
                  <p className="mb-8 text-muted-foreground">
                    Explore city-specific archives from Tomsk, Novosibirsk, Omsk, and beyond.
                  </p>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to="/collections" className="flex justify-between w-full">
                      Browse Cities
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Featured Content Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Featured Poem */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="font-serif text-2xl font-medium">Featured Poem</h2>
                  <div className="ml-auto">
                    <Button asChild variant="link">
                      <Link to="/poets" className="flex items-center">
                        More poems
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <PoemCard poem={featuredPoem} />
              </div>
              
              {/* Featured Interview */}
              <div>
                <div className="flex items-center mb-6">
                  <h2 className="font-serif text-2xl font-medium">Latest Interview</h2>
                  <div className="ml-auto">
                    <Button asChild variant="link">
                      <Link to="/interviews" className="flex items-center">
                        More interviews
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow">
                  <AudioPlayer 
                    src={featuredInterview.audioUrl} 
                    title={featuredInterview.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* City Collections Preview */}
        <section className="py-16 bg-secondary">
          <div className="container-custom text-center">
            <h2 className="font-serif text-3xl font-medium mb-4">City Collections</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Explore poetry and voices from specific cities across Siberia, each with their unique cultural context and artistic traditions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" className="bg-white hover:bg-gray-50">
                <Link to="/collections/tomsk">Tomsk</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white hover:bg-gray-50">
                <Link to="/collections/novosibirsk">Novosibirsk</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white hover:bg-gray-50">
                <Link to="/collections/omsk">Omsk</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white hover:bg-gray-50">
                <Link to="/collections/barnaul">Barnaul</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white hover:bg-gray-50">
                <Link to="/collections/kemerovo">Kemerovo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
