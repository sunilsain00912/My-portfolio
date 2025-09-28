import {
  AppWindow,
  Server,
  Cloud,
  GitBranch,
  Cpu,
  Database,
} from 'lucide-react';
import { SkillCard } from './skill-card';

const skills = [
  {
    icon: <Cpu size={32} />,
    title: 'Scalable Architectures',
    description: 'Designing robust systems that grow with your business.',
  },
  {
    icon: <Server size={32} />,
    title: 'API Development',
    description: 'Building secure and efficient RESTful & GraphQL APIs.',
  },
  {
    icon: <Database size={32} />,
    title: 'Database Management',
    description: 'Optimizing and managing data for performance and reliability.',
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud Deployment',
    description: 'Deploying applications to cloud platforms like GCP and AWS.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
              Building Robust & Scalable Web Solutions
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hey, I'm Sunil, a full-stack developer passionate about building
              complete, high-performance web applications from the ground up.
            </p>
            <p>
              With a strong foundation in both front-end and back-end
              technologies, I bring ideas to life by creating seamless and
              efficient digital experiences. From architecting scalable
              server-side logic to building intuitive user interfaces, I combine
              clean code, modern development practices, and a user-centric
              approach to deliver solutions that are both powerful and easy to
              use. Let's build something amazing together.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
