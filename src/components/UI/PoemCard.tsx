
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Poem } from '@/types';

interface PoemCardProps {
  poem: Poem;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="font-serif text-lg font-medium mb-2">
          {poem.title}
          {poem.year && <span className="text-sm text-muted-foreground ml-2">({poem.year})</span>}
        </h3>
        <p className="whitespace-pre-line font-serif text-base leading-relaxed">
          {poem.text}
        </p>
      </CardContent>
    </Card>
  );
};

export default PoemCard;
