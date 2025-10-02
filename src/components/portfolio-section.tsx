import { PortfolioCard } from './portfolio-card';

const portfolio = [
  {
    id: 'project-1',
    title: 'SaaS Platform Dashboard',
    description: 'A comprehensive dashboard for a B2B SaaS application.',
    tags: ['Next.js', 'Tailwind CSS', 'UI/UX'],
    githubUrl: 'https://github.com/sunilsain00912',
    liveDemoUrl: '#',
  },
  {
    id: 'project-2',
    title: 'E-commerce Mobile App',
    description: 'A modern mobile shopping experience.',
    tags: ['React Native', 'GraphQL', 'Figma'],
    githubUrl: 'https://github.com/sunilsain00912',
    liveDemoUrl: '#',
  },
  {
    id: 'project-3',
    title: 'Corporate Website',
    description: 'A professional website for a leading tech company.',
    tags: ['Webflow', 'CMS', 'Brand Identity'],
    githubUrl: 'https://github.com/sunilsain00912',
    liveDemoUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Data Visualization Tool',
    description: 'An intuitive tool for visualizing complex data sets.',
    tags: ['React', 'D3.js', 'Data viz'],
    githubUrl: 'https://github.com/sunilsain00912',
    liveDemoUrl: '#',
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            My projects
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs text-right">
            Explore my recent web design creations and discover how we can transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
