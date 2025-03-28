
import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-primary/10 py-12">
          <div className="container-custom">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">About Poetic Voices</h1>
            <p className="text-lg max-w-3xl">
              Exploring regional identity through poetry and conversation across Siberia.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="font-serif text-3xl font-medium mb-6">Our Project</h2>
                
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Poetic Voices is a living archive dedicated to documenting and celebrating the diverse poetic traditions across Siberian cities. We aim to preserve and showcase the unique literary voices that emerge from different regional contexts.
                  </p>
                  
                  <p className="mb-4">
                    Through interviews, poetry collections, and documentation of events, we create a comprehensive media library that serves both as an archive and as an active platform for contemporary poetic expression.
                  </p>
                  
                  <p className="mb-4">
                    Our city-specific collections focus on the unique characteristics of each regional poetic community, highlighting both similarities and distinctions in themes, forms, and cultural contexts.
                  </p>
                  
                  <h3 className="font-serif text-xl font-medium mt-8 mb-4">Project Goals</h3>
                  
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Document and preserve contemporary poetic voices across Siberian regions</li>
                    <li className="mb-2">Explore questions of regional identity through creative expression</li>
                    <li className="mb-2">Create connections between disparate poetic communities</li>
                    <li className="mb-2">Provide a platform for emerging and established poets</li>
                    <li className="mb-2">Build a comprehensive archive that evolves over time</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-4">Contact Us</h3>
                    
                    <p className="mb-6">
                      We welcome contributions, suggestions, and inquiries about the Poetic Voices project.
                    </p>
                    
                    <div className="space-y-2">
                      <p>
                        <strong className="block">Email:</strong>
                        <span className="text-primary">contact@poeticvoices.org</span>
                      </p>
                      
                      <p>
                        <strong className="block">Address:</strong>
                        <span>Cultural Institute</span><br />
                        <span>Tomsk State University</span><br />
                        <span>Tomsk, Russia</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
