
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { events } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-primary/10 py-12">
          <div className="container-custom">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Events</h1>
            <p className="text-lg max-w-3xl">
              Join readings, congresses, and meetings across the region.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    
                    <p className="mb-4">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
