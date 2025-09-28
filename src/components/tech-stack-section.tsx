'use client';
import React from 'react';

const techStack = [
  {
    name: 'HTML5',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.626 0h20.748l-1.88 21.328-8.494 2.672-8.494-2.672L1.626 0zM19.39 5.422H7.742l.354 4.016h10.94l-.354 3.99-3.725 1.04-.002.002-3.723-1.04-.24-2.69h-4.01l.53 5.968 7.447 2.074.002-.002 7.45-2.074 1.05-11.844z" />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.374 0l-1.88 21.328-8.494 2.672L3.506 21.328 1.626 0h20.748zM12 19.32l5.44-1.516L17.88 4.68H6.12l.44 4.94h6.88l-.3 3.4-3.1.86-3.1-.86-.2-2.24H5.8l.4 4.48 5.8 1.62 5.8-1.62.6-6.72H6.56l-.44-4.94h11.76l-.44 4.94H12z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0V0zm22.034 18.213c.27-.45.39-.84.39-1.17 0-.39-.12-.72-.39-1.02-.27-.3-.66-.45-1.17-.45-.48 0-.87.15-1.14.42-.27.3-.42.66-.42 1.08 0 .45.15.81.45 1.11.3.3.69.45 1.14.45.48 0 .87-.15 1.14-.42zm-3.15-1.02c0-.6.27-1.11.81-1.5.51-.39 1.14-.6 1.86-.6.72 0 1.35.21 1.89.6.54.39.81.9.81 1.5s-.27 1.11-.81 1.5c-.54.39-1.17.6-1.89.6-.72 0-1.35-.21-1.86-.6-.51-.42-.81-.93-.81-1.5zM12 18.963c.63.45 1.44.69 2.43.69.87 0 1.59-.18 2.16-.54.57-.33.84-.78.84-1.32 0-.48-.21-.87-.63-1.17-.42-.3-.99-.54-1.71-.72l-1.02-.24c-.45-.12-.81-.3-.99-.57s-.27-.6-.27-1.02c0-.42.15-.78.45-1.05.3-.27.69-.42 1.14-.42.42 0 .81.12 1.14.33s.6.54.81.96l2.13-1.29c-.42-.75-.99-1.32-1.71-1.71-.72-.39-1.56-.6-2.52-.6-.93 0-1.71.21-2.34.6-.6.42-.93.93-.93 1.53 0 .54.21.99.63 1.32.42.33 1.02.6 1.83.81l.99.21c.57.15.99.36 1.29.63.3.27.42.66.42 1.11 0 .57-.24 1.02-.72 1.35s-1.11.48-1.89.48c-.69 0-1.35-.18-1.95-.54l-1.23 2.07z" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-4.06-8.854a.5.5 0 0 0-.68.708 6 6 0 0 0 9.48 0 .5.5 0 0 0-.68-.708 5 5 0 0 1-8.12 0zM12 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.33 15.22L12 14.28l-3.33 2.94.94-3.83-2.94-2.52h3.65l1.62-3.81 1.62 3.81h3.65l-2.94 2.52.94 3.83z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5v11z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.001 4.8c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5 5.5-2.46 5.5-5.5-2.46-5.5-5.5-5.5zm0 9.3c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm0-16.1C6.48 0 2 4.48 2 10s4.48 10 10 10c1.89 0 3.64-.54 5.1-1.45l-1.45-1.45C14.6 17.64 13.39 18 12 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.39 0 2.6.36 3.65.95l1.45-1.45C15.64.54 13.89 0 12 0z" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg
        className="w-12 h-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12c-1.657 0-3-1.343-3-3s1.343-3 3-3V0C5.373 0 0 5.373 0 12s5.373 12 12 12h6v-6c0-3.314-2.686-6-6-6zm-6 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm6-6c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM12 18c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm6-6c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
        <svg
            className="w-12 h-12"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12.38.34c-.16-.02-.32-.01-.48.01C4.84.86 0 6.13 0 12.19c0 5.43 3.88 10.2 9.13 11.23.33.07.66.1.99.1.2 0 .4-.02.6-.05 7.18-.95 12.28-7.34 12.28-14.28V.34h-10.62zM9.47 18.91H6.18v-9.1h3.29v9.1zm8.39-4.21c0 .54-.05.98-.16 1.32-.11.34-.28.63-.51.87s-.52.42-.87.54-.75.18-1.21.18h-2.18v-3.3h2.05c1.45 0 2.29.57 2.29 1.71zm-1.07-1.69c-.43-.44-.99-.66-1.69-.66h-1.39v1.84h1.42c.73 0 1.3-.23 1.66-.7.36-.47.54-1.05.54-1.74 0-.71-.18-1.3-.55-1.77-.37-.47-.9-.7-1.59-.7h-3.51v9.1h3.45c1.19 0 2.2-.33 3.01-.98.81-.65 1.22-1.57 1.22-2.75 0-1.05-.33-1.92-.98-2.61-.65-.69-1.52-1.04-2.6-1.04z" />
        </svg>
    ),
  },
  {
      name: 'TypeScript',
      icon: (
          <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zM18.42 5.82H7.67l.31 3.5h9.8l-.31 3.5h-9.8l.31 3.5h9.8l-.75 8.35-4.43 1.25-4.43-1.25-.31-3.5h-3.1l.63 7.02L12 22.1l8.08-2.28L21.5 5.82z" />
          </svg>
      ),
  },
  {
      name: 'Python',
      icon: (
          <svg
              className="w-12 h-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zM12 4a8 8 0 018 8h-2.25A5.75 5.75 0 0012 6.25V4zm-3.75 2.5A2.25 2.25 0 0110.5 8.75v3.5A2.25 2.25 0 018.25 14.5H4.08A8 8 0 014 12c0-1.08.21-2.1.6-3.02L6.5 6.5zm7.5 5A2.25 2.25 0 0113.5 13.75v3.5a2.25 2.25 0 01-2.25 2.25h-3.5a2.25 2.25 0 01-2.25-2.25v-1.5H12v1.5a.75.75 0 00.75.75h3.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75H7.75A2.25 2.25 0 015.5 9.25V4.08A8 8 0 0112 4c1.08 0 2.1.21 3.02.6L17.5 6.5A5.73 5.73 0 0015.75 6.5z" />
          </svg>
      ),
  },
];

const TechLogos = () => (
  <>
    {techStack.map((tech, index) => (
      <div
        key={`${tech.name}-${index}`}
        className="flex flex-col items-center justify-center mx-8 group flex-shrink-0"
      >
        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
            {tech.icon}
        </div>
        <p className="mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">{tech.name}</p>
      </div>
    ))}
  </>
)

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-12 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold tracking-tight uppercase text-center mb-8">
          My Tech Stack
        </h2>
        <div         
          className="w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
            <div className="flex animate-scroll" style={{ animation: 'scroll 40s linear infinite' }}>
              <div className="flex min-w-full flex-shrink-0 items-center justify-around">
                <TechLogos />
              </div>
               <div className="flex min-w-full flex-shrink-0 items-center justify-around" aria-hidden="true">
                <TechLogos />
              </div>
            </div>
            <style jsx>{`
              @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-100%);
                }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
              }
            `}</style>
          </div>
      </div>
    </section>
  );
}
