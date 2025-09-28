'use client';

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / (height / 2)) * -10;
    const rotateY = (x / (width / 2)) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
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
      className="group relative overflow-hidden text-center p-8 transition-transform duration-300 ease-out glassmorphism"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative z-10 p-0 items-center">
        <div className="mb-4 text-primary bg-primary/10 p-3 rounded-lg inline-block">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 p-0 pt-4">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
