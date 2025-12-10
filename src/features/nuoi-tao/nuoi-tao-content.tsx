import { HeroSection } from '@/libs/components/hero-section';
import { ProfileImage } from '@/libs/components/profile-image';
import { SocialNavigation } from '@/libs/components/social-navigation';
import { TextBlock } from '@/libs/components/text-block';
import Image from 'next/image';

export function NuoiTaoContent() {
  return (
    <div className="w-full flex h-screen flex-col sm:flex-row font-inter p-2">
      {/* Mobile Social Navigation */}
      <div className="fixed left-0 sm:hidden col-span-2 row-span-1 flex justify-end items-start z-30 w-full">
        <SocialNavigation variant="mobile" className="bg-beige-100" />
      </div>

      {/* Left Section */}
      <div className="flex flex-col w-full sm:w-1/2">
        <HeroSection title="Nuôi Tôi" subtitle="Tôi hứa sao kể đây đủ!" />

        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid grid-rows-[100px_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr_80px] flex-1">
          <div className="bd bd-top col-start-1 col-span-4 uppercase flex justify-center items-center text-xl">
            <p className="font-semibold">HÃY NUÔI TÔI - MINH BẠCH 300%</p>
          </div>

          <div className="bd bd-top bd-right col-start-1 col-span-1 row-start-2 row-span-3"></div>

          <div className="bd bd-top bd-right row-start-2 col-start-2 col-span-2 row-span-3 px-8">
            <div>
              <ProfileImage
                src="/vcb.jpg"
                alt="Nuôi Tôi Logo"
                width="400"
                height="400"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
                containerClassName="relative pt-[70%] mt-8 mb-4 -ml-24 max-w-[100%]"
                loading="lazy"
              />
              <TextBlock title="Cam Kết" subtitle="Sao kê realtime, minh bạch như bụng dưa" />
            </div>
          </div>

          <div className="bd bd-top row-start-2 col-start-4 row-span-3 uppercase text-vert flex justify-center items-center font-semibold">
            Donate ngay đi
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden">
        <div className="bd bd-top w-full py-8 flex items-center justify-center">
          <p className="text-xl uppercase font-semibold">HÃY NUÔI TÔI - MINH BẠCH 300%</p>
        </div>
        <ProfileImage src="/banner.jpeg" alt="Nuôi Tôi Logo" width="400" height="400" containerClassName="bd bd-top" />
        <div className="p-8 bd bd-top">
          <TextBlock title="Cam Kết" subtitle="Sao kê realtime, minh bạch như bụng dưa" />
        </div>
        <div className="bd bd-top w-full py-8 flex items-center justify-center">
          <p className="text-xl uppercase font-semibold">Donate ngay đi</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/2 sm:grid grid-rows-[100px_1fr_1fr] grid-cols-2">
        {/* Desktop Social Navigation */}
        <div className="hidden bd bd-left col-span-2 row-span-1 sm:flex justify-end items-start">
          <SocialNavigation variant="desktop" />
        </div>

        {/* Main Content Area */}
        <div className="bd bd-left bd-top col-start-1 col-span-2 row-span-2 p-2 sm:p-8 overflow-y-auto">
          {/* Why Section */}
          <section className="mb-12">
            <TextBlock
              title="Tại Sao Nên Nuôi Tôi?"
              subtitle="4 lý do không thể chối từ"
              variant="uppercase"
              containerClassName="mb-8"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bd bd-full p-4">
                <h3 className="bg-green-signature text-lg font-semibold mb-2 font-cormorant">Sao Kê Realtime</h3>
                <p className="text-sm leading-relaxed">Cập nhật từng giây! Còn nhanh hơn cả tốc độ bạn chuyển tiền!</p>
              </div>

              <div className="bd bd-full p-4">
                <h3 className="bg-green-signature text-lg font-semibold mb-2 font-cormorant">Minh Bạch 300%</h3>
                <p className="text-sm leading-relaxed">Hơn cả 100%! Tôi còn báo cáo cả việc mua ly trà sữa!</p>
              </div>

              <div className="bd bd-full p-4">
                <h3 className="bg-green-signature text-lg font-semibold mb-2 font-cormorant">Chi Tiêu Hợp Lý</h3>
                <p className="text-sm leading-relaxed">Không mua xe hơi, nhà cửa. Chỉ ăn cơm với mì tôm thôi!</p>
              </div>

              <div className="bd bd-full p-4">
                <h3 className="bg-green-signature text-lg font-semibold mb-2 font-cormorant">App Tracking</h3>
                <p className="text-sm leading-relaxed">
                  Theo dõi 24/7 tôi ăn gì, uống gì, đi đâu. Như "Big Brother" vậy!
                </p>
              </div>
            </div>
          </section>

          {/* Commitments Section */}
          <section className="mb-12">
            <TextBlock
              title="Cam Kết Vàng Của Tôi"
              subtitle="6 điều tôi hứa sẽ làm"
              variant="uppercase"
              containerClassName="mb-8"
            />

            <div className="bd bd-full p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm">✓</span>
                  <div className="leading-relaxed">
                    <strong>Sao kê mỗi ngày:</strong> Cập nhật lúc 6h sáng, đều như vật lý! (Kể cả Chủ Nhật & Lễ)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm">✓</span>
                  <div className="leading-relaxed">
                    <strong>Không giấu giếm:</strong> Từ tô phở 50k đến hộp sữa chua 8k đều được ghi chép tỉ mỉ!
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm">✓</span>
                  <div className="leading-relaxed">
                    <strong>Có hóa đơn chứng từ:</strong> Chụp hình bill, quét mã vạch, lưu biên lai đầy đủ!
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm">✓</span>
                  <div className="leading-relaxed">
                    <strong>Video unboxing:</strong> Mở từng gói mì tôm live trên Facebook cho anh chị xem!
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm">✓</span>
                  <div className="leading-relaxed">
                    <strong>Hotline 24/7:</strong> Gọi hỏi tôi ăn gì bất cứ lúc nào, kể cả 3h sáng!
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm">✓</span>
                  <div className="leading-relaxed">
                    <strong>Không block:</strong> Hỏi khó đến mấy cũng trả lời, không "đã xem" rồi im lặng!
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="mb-12">
            <TextBlock
              title="So Sánh Với Người Khác"
              subtitle="Sự khác biệt rõ rệt"
              variant="uppercase"
              containerClassName="mb-8"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Người Khác */}
              <div className="bd bd-full p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-500 text-white px-2 py-1 text-sm">✗</span>
                  <h3 className="text-lg font-bold font-cormorant">Người Khác:</h3>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div>• Sao kê sau 3 năm (hoặc không bao giờ)</div>
                  <div>• File Excel blur mờ như ảnh ma</div>
                  <div>• Số liệu "làm tròn" theo kiểu 1 + 1 = 3</div>
                  <div>• Block người hỏi nhanh như chớp</div>
                </div>
              </div>

              {/* Nuôi Tôi */}
              <div className="bd bd-full p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-signature px-2 py-1 text-sm">✓</span>
                  <h3 className="text-lg font-bold font-cormorant">Nuôi Tôi:</h3>
                </div>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div>• Sao kê trước khi tiêu (đề anh chị duyệt)</div>
                  <div>• File Excel 4K Ultra HD, có chữ ký điện tử</div>
                  <div>• Số liệu chính xác đến từng đồng</div>
                  <div>• Trả lời inbox nhanh hơn cả chatbot</div>
                </div>
              </div>
            </div>
          </section>

          {/* Donate Section */}
          <section className="mb-12">
            <TextBlock
              title="Donate Ngay Đi!"
              subtitle="Nếu bạn đang cười"
              variant="uppercase"
              containerClassName="mb-8"
            />

            <div className="bd bd-full p-6 text-center">
              <p className="mb-6 leading-relaxed">Quét mã QR này để nuôi tôi (và nhận bản sao kê ngay lập tức!)</p>

              <div className="w-60 h-60 mx-auto mb-6 bd bd-full flex items-center justify-center">
                <Image src="/vcb.jpg" alt="QR Code" width={128} height={128} className="w-full h-full object-contain" />
              </div>

              <p className="mb-4 leading-relaxed">✨ Chuyển xong là có mail tự động! ✨</p>
              <div className="bd bd-full inline-block px-6 py-3 cursor-pointer hover:bg-green-signature transition-colors font-cormorant font-semibold">
                🎁 TÔI MUỐN NUÔI BẠN!
              </div>
            </div>
          </section>

          {/* Money Usage Section */}
          <section className="mb-12">
            <TextBlock
              title="Tôi Sẽ Dùng Tiền Vào Đâu?"
              subtitle="Breakdown chi tiết từng đồng"
              variant="uppercase"
              containerClassName="mb-8"
            />

            <div className="bd bd-full p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm font-bold font-mono">40%</span>
                  <div className="leading-relaxed">Ăn uống (Cơm, mì tôm, trứng, rau. KHÔNG có tôm hùm!)</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm font-bold font-mono">20%</span>
                  <div className="leading-relaxed">Điện nước internet (Để sao kê cho anh chị)</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm font-bold font-mono">15%</span>
                  <div className="leading-relaxed">Thuê nhà (Phòng trọ 15m², không phải penthouse)</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm font-bold font-mono">10%</span>
                  <div className="leading-relaxed">Y tế (Thuốc cảm, vitamin C, khẩu trang)</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm font-bold font-mono">10%</span>
                  <div className="leading-relaxed">Học tập nâng cao (Sách, khóa học online để sao kê tốt hơn)</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-green-signature px-2 py-1 text-sm font-bold font-mono">5%</span>
                  <div className="leading-relaxed">Giải trí (Netflix? Không! Chỉ Youtube miễn phí thôi!)</div>
                </div>
              </div>
            </div>
          </section>

          {/* Heart Message Section */}
          <section className="mb-12">
            <TextBlock
              title="Lời Nhắn Từ Trái Tim"
              subtitle="Chân thành và thật lòng"
              variant="uppercase"
              containerClassName="mb-8"
            />

            <div className="bd bd-full p-6">
              <p className="mb-4 leading-relaxed">
                Trong thời đại mà <strong>"từ thiện"</strong> đã trở thành từ nhạy cảm, Tôi xin khẳng định:{' '}
                <span className="bg-green-signature px-1 font-cormorant font-semibold">HÃY NUÔI TÔI!</span>
              </p>
              <p className="mb-4 leading-relaxed">
                Tôi nghèo, tôi cần tiền, nhưng tôi <strong>KHÔNG MẤT LƯƠNG TÂM!</strong> Mỗi đồng tiền các bạn gửi, tôi
                sẽ chi tiêu rõ ràng, minh bạch như bụng dưa của tôi vậy! 😊
              </p>
              <p className="text-sm italic leading-relaxed">
                P/S: Tôi hứa sẽ không mua xe hơi bằng tiền donate. Vì... tôi chưa có bằng lái! 🚗❌
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bd bd-full p-4 text-center text-sm mb-8">
            <p className="leading-relaxed">
              ⚠️ <strong>DISCLAIMER:</strong> Đây là trang web mang tính chất <strong>HÀI HƯỚC!</strong> Mọi nội dung
              đều mang tính giải trí, không nhằm mục đích xúc phạm hay chỉ trích bất kỳ cá nhân/tổ chức nào.
            </p>
          </div>

          {/* Footer Stats */}
          <div className="text-center">
            <TextBlock
              title="Biểu đồ chi tiết"
              subtitle="Cập nhật hàng tuần trên website!"
              containerClassName="text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
