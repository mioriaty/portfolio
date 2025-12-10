import { NuoiTaoContent } from '@/features/nuoi-tao/nuoi-tao-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuôi Tôi - Hãy Nuôi Tôi',
  description: 'Tôi hứa sao kể đây đủ! Hãy nuôi tôi với những cam kết vàng và sự minh bạch 300%.',
  openGraph: {
    title: 'Nuôi Tôi - Hãy Nuôi Tôi',
    description: 'Tôi hứa sao kể đây đủ! Hãy nuôi tôi với những cam kết vàng và sự minh bạch 300%.'
  }
};

export default function NuoiTaoPage() {
  return <NuoiTaoContent />;
}
