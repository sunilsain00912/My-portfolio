'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

export function PortfolioCard({ item }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const projectImage = PlaceHolderImages.find(img => img.id === item.id);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / (height / 2)) * -8;
    const rotateY = (x / (width / 2)) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-lg glassmorphism flex flex-col transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        {projectImage && (
          <div className="relative aspect-video">
            <Image
              src={projectImage.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={projectImage.imageHint}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button variant="secondary" size="icon" asChild>
              <Link href={item.githubUrl} target="_blank">
                <Github />
              </Link>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <Link href={item.liveDemoUrl} target="_blank">
                <ExternalLink />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow z-10">
        <CardHeader>
          <CardTitle className="text-xl">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{item.description}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
