import { BlogsList } from '@/features/blogs/blogs-list';

export default function PostsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f5ff] pb-16">
      <div className="absolute left-8 top-16 hidden h-24 w-24 -rotate-6 border-4 border-black bg-[#ffd15f] shadow-[10px_10px_0_0_#000] md:block" />
      <div className="absolute -right-24 top-1/3 hidden h-40 w-40 rotate-6 border-4 border-black bg-[#8ef6e4] shadow-[14px_14px_0_0_#000] lg:block" />

      <div className="container relative mx-auto px-4 pt-20">
        <section className="relative overflow-hidden rounded-3xl border-4 border-black bg-white px-8 py-12 shadow-[16px_16px_0_0_#000] sm:px-12">
          <div className="absolute -right-6 -top-6 hidden h-24 w-24 rotate-12 border-4 border-black bg-[#ff90e8] shadow-[12px_12px_0_0_#000] sm:block" />
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#f6ff52] px-4 py-1 text-xs font-black uppercase tracking-[0.25em] text-black">
            <span className="inline-block h-2 w-2 rounded-full border border-black bg-black" />
            Blog Studio
          </span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-black sm:text-5xl md:text-6xl">
            Ideas with an Edge
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium text-neutral-900 sm:text-lg">
            Bold colors, louder opinions. Explore experiments, breakdowns, and stories from my build-in-public journey.
          </p>
        </section>
      </div>

      <section className="container relative mx-auto mt-16 px-4">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <BlogsList />
        </div>
      </section>
    </div>
  );
}
