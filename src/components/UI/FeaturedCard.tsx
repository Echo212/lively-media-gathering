
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

interface FeaturedCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  type?: string;
}

const FeaturedCard = ({ title, description, imageUrl, linkTo, type }: FeaturedCardProps) => {
  return (
    <Link to={linkTo}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl || "/placeholder.svg"} 
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          {type && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded">
              {type}
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-serif text-lg font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeaturedCard;
