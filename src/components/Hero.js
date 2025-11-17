
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // スライドデータ（画像付き）
  const slides = [
    {
      id: 1,
      image: '/images/img_hero_pc01.jpg',
    },
    {
    id: 2,
      image: '/images/img_hero_pc02.jpg',
    },
    {
     id: 3,
      image: '/images/img_hero_pc03.jpg',
    }
  ];

  // 自動スライド（5秒ごと）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // 前のスライドへ
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 次のスライドへ
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden py-8">
      {/* スライド */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full px-4 sm:px-6 lg:px-8"
          >
            <div
              className="relative max-w-7xl mx-auto rounded-lg overflow-hidden "
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}
            >
              {/* オーバーレイ（テキストを読みやすくするため） */}
              <div className={`${slide.overlay} w-full h-full flex items-center justify-center`}>
                <div className="text-center text-white px-4">
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* インジケーター（ドット） */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              currentSlide === index 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`スライド${index + 1}へ`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;