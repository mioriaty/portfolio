import { Badge } from '@/libs/components/ui/badge';
import { cn } from '@/libs/utils/string';
import { ArrowUpRight, CheckCircle, Clock, Loader } from 'lucide-react';
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
        return 'bg-[#ffe8d6] text-black';
      case 'In progress':
        return 'bg-[#ff90e8] text-black';
      case 'Done':
        return 'bg-[#cfff6f] text-black';
      default:
        return 'bg-white text-black';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'Not started':
        return <Clock className="h-4 w-4" />;
      case 'In progress':
        return <Loader className="h-4 w-4 animate-spin" />;
      case 'Done':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const normalizedCategory = category ? category.toUpperCase() : 'JOURNAL';
  const normalizedStatus = status ? status.toUpperCase() : 'STATUS';

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-3xl border-4 border-black bg-white p-6 shadow-[12px_12px_0_0_#000] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[16px_16px_0_0_#000]"
    >
      <div className="pointer-events-none absolute -right-10 top-16 hidden h-28 w-28 rotate-12 border-4 border-black bg-[#8ef6e4] opacity-70 transition-transform duration-200 group-hover:-translate-y-2 group-hover:translate-x-2 lg:block" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="inline-flex max-w-[70%] items-center rounded-full border-2 border-black bg-[#f6ff52] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black">
          {normalizedCategory}
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-black text-white transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
        </div>
      </div>

      <h3 className="relative z-10 mt-8 text-2xl font-black uppercase leading-tight text-black">
        <span className="box-decoration-clone bg-[#ff90e8] px-1 text-black">{title}</span>
      </h3>

      <div className="relative z-10 mt-8 flex items-center justify-between gap-4">
        <Badge
          className={cn(
            'flex items-center gap-2 rounded-none border-2 border-black px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] shadow-[6px_6px_0_0_#000] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1',
            getStatusStyles()
          )}
        >
          {getStatusIcon()}
          {normalizedStatus}
        </Badge>
        <span className="rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-black shadow-[4px_4px_0_0_#000]">
          {date}
        </span>
      </div>
    </Link>
  );
};
