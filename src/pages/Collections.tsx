
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { cityCollections } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-primary/10 py-12">
          <div className="container-custom">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">City Collections</h1>
            <p className="text-lg max-w-3xl">
              Explore poetry and voices from specific cities across Siberia, each with their unique cultural context and artistic traditions.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cityCollections.map((city) => (
                <Card key={city.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={city.imageUrl} 
                      alt={city.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-medium mb-2">{city.name}</h2>
                    <p className="mb-6">{city.description}</p>
                    
                    <Button asChild className="group">
                      <Link to={`/collections/${city.id}`} className="flex items-center">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
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

export default Collections;
