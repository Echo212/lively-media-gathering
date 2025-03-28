
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { cityCollections, poets, interviews, events } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import PoemCard from '@/components/UI/PoemCard';
import AudioPlayer from '@/components/UI/AudioPlayer';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';

const CityCollection = () => {
  const { cityId } = useParams<{ cityId: string }>();
  
  const cityCollection = cityCollections.find(city => city.id === cityId);
  
  if (!cityCollection) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Collection Not Found</h1>
            <p className="mb-6">We couldn't find the collection you're looking for.</p>
            <Link to="/collections" className="text-primary hover:underline">
              Return to Collections
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get the related data based on IDs
  const cityPoets = poets.filter(poet => cityCollection.poets.includes(poet.id));
  const cityInterviews = interviews.filter(interview => cityCollection.interviews.includes(interview.id));
  const cityEvents = events.filter(event => cityCollection.events.includes(event.id));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-primary/10 py-12">
          <div className="container-custom">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{cityCollection.name} Collection</h1>
            <p className="text-lg max-w-3xl">
              {cityCollection.description}
            </p>
          </div>
        </section>
        
        {cityPoets.length > 0 && (
          <section className="py-12">
            <div className="container-custom">
              <h2 className="font-serif text-3xl font-medium mb-8">Poets</h2>
              
              {cityPoets.map(poet => (
                <div key={poet.id} className="mb-16">
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="md:w-1/4">
                      <img 
                        src={poet.imageUrl} 
                        alt={poet.name} 
                        className="rounded-lg shadow w-full aspect-square object-cover"
                      />
                    </div>
                    
                    <div className="md:w-3/4">
                      <h3 className="font-serif text-2xl font-medium mb-2">{poet.name}</h3>
                      <p className="text-primary mb-4">{poet.city}</p>
                      <p className="mb-6">{poet.bio}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-serif text-xl font-medium mb-6">Selected Poems</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {poet.poems.map((poem) => (
                      <PoemCard key={poem.id} poem={poem} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {cityInterviews.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-serif text-3xl font-medium mb-8">Interviews</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cityInterviews.map((interview) => (
                  <Card key={interview.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <AudioPlayer 
                        src={interview.audioUrl} 
                        title={interview.title} 
                      />
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">
                          {interview.date} • {interview.duration}
                        </p>
                        <p className="mb-4">{interview.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {cityEvents.length > 0 && (
          <section className="py-12">
            <div className="container-custom">
              <h2 className="font-serif text-3xl font-medium mb-8">Events</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cityEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    {event.imageUrl && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-medium mb-2">{event.title}</h3>
                      
                      <div className="flex gap-2 items-center text-sm text-muted-foreground mb-2">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex gap-2 items-center text-sm text-muted-foreground mb-2">
                        <ClockIcon className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex gap-2 items-center text-sm text-muted-foreground mb-4">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{event.location}, {event.city}</span>
                      </div>
                      
                      <p>{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CityCollection;
