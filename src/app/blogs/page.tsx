import { BlogsList } from '@/features/blogs/blogs-list';
import { Suspense } from 'react';

export default function PostsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="container mx-auto max-w-3xl px-6 pt-20 pb-24">
        {/* Header */}
        <header className="mb-16 border-b border-[#231f1f]/20 pb-12">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c6af69]">Journal</p>
          <h1 className="font-serif text-5xl font-light leading-tight text-[#231f1f] sm:text-6xl md:text-7xl">
            Writing &amp; <br />
            <em>Thinking</em>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#231f1f]/50">
            Fragments of thought, personal essays, and quiet observations from an ongoing journey.
          </p>
        </header>

        {/* Blog list */}
        <section>
          <Suspense
            fallback={
              <div className="space-y-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between border-b border-[#231f1f]/20 py-7 px-1 animate-pulse"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="h-3 w-32 rounded bg-[#231f1f]/10" />
                      <div className="h-3 w-20 rounded bg-[#231f1f]/10" />
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="h-5 w-4/5 rounded bg-[#231f1f]/10" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="h-3 w-16 rounded bg-[#231f1f]/10" />
                    </div>
                  </div>
                ))}
              </div>
            }
          >
            <BlogsList />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
