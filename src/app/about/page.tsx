// src/app/about/page.tsx
import { Calendar, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import React from 'react';

import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'GraphQL',
  'Tailwind CSS',
  'Prisma'
];

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description:
      'Leading development of modern web applications using React, Next.js, and Node.js. Architected scalable solutions serving 100k+ users.',
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description:
      'Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.',
    technologies: ['Vue.js', 'Python', 'Django', 'MongoDB']
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description:
      'Built responsive web applications and collaborated with design teams to create intuitive user interfaces.',
    technologies: ['JavaScript', 'React', 'CSS', 'REST APIs']
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
              D
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm a passionate full-stack developer with 5+ years of experience creating modern web applications that
              combine great user experiences with robust, scalable backends.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Available for new opportunities</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Skills Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Skills & Technologies</CardTitle>
              <CardDescription>Technologies I work with to bring ideas to life</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Professional Experience</CardTitle>
              <CardDescription>My journey in software development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((job, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {index < experience.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Personal Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Beyond Code</CardTitle>
              <CardDescription>What drives me outside of development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                When I'm not coding, you can find me exploring the latest in technology trends, contributing to
                open-source projects, or hiking in the beautiful California outdoors. I believe in continuous learning
                and love sharing knowledge with the developer community.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about creating inclusive and accessible web experiences, and I enjoy mentoring junior
                developers to help them grow in their careers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
