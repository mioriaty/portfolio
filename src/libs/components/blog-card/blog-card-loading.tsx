import { ArrowUpRight } from 'lucide-react';

export function BlogCardLoading() {
  return (
    <div className="relative block overflow-hidden rounded-3xl border-4 border-black bg-white p-6 shadow-[12px_12px_0_0_#000]">
      <div className="pointer-events-none absolute -right-10 top-16 hidden h-28 w-28 rotate-12 border-4 border-black bg-[#8ef6e4] opacity-40 lg:block" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="h-6 w-28 rounded-full border-2 border-black bg-[#f6ff52] animate-pulse" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-black text-white">
          <ArrowUpRight className="h-5 w-5 animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 mt-8 h-8 w-3/4 rounded-md bg-[#ff90e8] opacity-80 animate-pulse" />

      <div className="relative z-10 mt-8 flex items-center justify-between gap-4">
        <div className="h-8 w-32 rounded-none border-2 border-black bg-[#ffe8d6] shadow-[6px_6px_0_0_#000] animate-pulse" />
        <div className="h-8 w-24 rounded-full border-2 border-black bg-white shadow-[4px_4px_0_0_#000] animate-pulse" />
      </div>
    </div>
  );
}
