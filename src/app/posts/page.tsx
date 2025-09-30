// src/app/blogs/page.tsx
import React from 'react';

import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with Next.js 14',
    excerpt:
      'Learn how to leverage the latest features in Next.js 14 including App Router, Server Components, and improved performance optimizations.',
    date: '2024-01-15',
    tags: ['Next.js', 'React', 'Web Development'],
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Mastering TypeScript for Better Developer Experience',
    excerpt:
      'Explore advanced TypeScript patterns and best practices that will make your code more maintainable and type-safe.',
    date: '2024-01-08',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Design Systems with Shadcn UI and Tailwind CSS',
    excerpt: 'Creating consistent and scalable design systems using modern tools like Shadcn UI and Tailwind CSS.',
    date: '2024-01-01',
    tags: ['Design Systems', 'UI/UX', 'Tailwind'],
    readTime: '6 min read'
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl hover:text-primary cursor-pointer">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Want to stay updated with my latest posts?</p>
            <Button size="lg">Subscribe to Newsletter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
