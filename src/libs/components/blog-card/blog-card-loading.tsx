export function BlogCardLoading() {
  return (
    <div className="flex flex-col justify-between border-b border-[#231f1f]/20 py-7 px-1 animate-pulse">
      {/* Tags + date row */}
      <div className="flex items-start justify-between gap-4">
        <div className="h-3 w-32 rounded bg-[#231f1f]/10" />
        <div className="h-3 w-20 rounded bg-[#231f1f]/10" />
      </div>

      {/* Title */}
      <div className="mt-3 space-y-2">
        <div className="h-5 w-4/5 rounded bg-[#231f1f]/10" />
        <div className="h-5 w-2/3 rounded bg-[#231f1f]/10" />
      </div>

      {/* Status + arrow row */}
      <div className="mt-4 flex items-center justify-between">
        <div className="h-3 w-16 rounded bg-[#231f1f]/10" />
        <div className="h-3 w-4 rounded bg-[#231f1f]/10" />
      </div>
    </div>
  );
}
