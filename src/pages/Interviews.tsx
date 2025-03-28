
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { interviews } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import AudioPlayer from '@/components/UI/AudioPlayer';

const Interviews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-primary/10 py-12">
          <div className="container-custom">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Interviews</h1>
            <p className="text-lg max-w-3xl">
              Conversations with poets exploring identity, creative process, and regional perspectives across Siberia.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interviews.map((interview) => (
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
                      {interview.transcript && (
                        <Link to={`/interviews/${interview.id}`} className="text-primary hover:underline">
                          View transcript
                        </Link>
                      )}
                    </div>
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

export default Interviews;
