
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { poets } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import PoemCard from '@/components/UI/PoemCard';

const Poets = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-primary/10 py-12">
          <div className="container-custom">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Poets</h1>
            <p className="text-lg max-w-3xl">
              Discover voices from across Siberia, with biographies and selected works.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            {poets.map((poet) => (
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
                    <h2 className="font-serif text-3xl font-medium mb-2">{poet.name}</h2>
                    <p className="text-primary mb-4">{poet.city}</p>
                    <p className="mb-6">{poet.bio}</p>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-medium mb-6">Selected Poems</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {poet.poems.map((poem) => (
                    <PoemCard key={poem.id} poem={poem} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Poets;
