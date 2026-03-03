import { cn } from '@/libs/utils/string';
import Link from 'next/link';
import { FC } from 'react';

export interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  href: string;
  status: string;
}

export const BlogCard: FC<BlogCardProps> = ({ category, date, title, href, status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Not started':
        return 'text-[#231f1f]/50';
      case 'In progress':
        return 'text-amber-800';
      case 'Done':
        return 'text-[#b09a50]';
      default:
        return 'text-[#231f1f]/50';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'Not started':
        return 'upcoming';
      case 'In progress':
        return 'in progress';
      case 'Done':
        return 'published';
      default:
        return status?.toLowerCase() || 'draft';
    }
  };

  const normalizedCategory = category || 'journal';
  const tags = normalizedCategory.split(',').map((t) => t.trim().toLowerCase());

  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between border-b border-[#231f1f]/20 py-7 transition-all duration-300 hover:bg-[#231f1f]/[0.02] px-1"
    >
      {/* Top row: tags + date */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.18em] text-[#231f1f]/70 font-semibold">
              {tag}
              {i < tags.length - 1 && <span className="ml-2 text-[#231f1f]/40">·</span>}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-[10px] tracking-[0.12em] text-[#231f1f]/60 tabular-nums font-medium">
          {date}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-[#231f1f] transition-colors duration-200 group-hover:text-[#c6af69] sm:text-2xl">
        {title}
      </h3>

      {/* Bottom row: status + arrow */}
      <div className="mt-4 flex items-center justify-between">
        <span className={cn('text-[10px] uppercase tracking-[0.18em] italic font-medium', getStatusStyles())}>
          {getStatusLabel()}
        </span>
        <span className="text-xs text-[#231f1f]/50 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#c6af69]">
          →
        </span>
      </div>
    </Link>
  );
};
