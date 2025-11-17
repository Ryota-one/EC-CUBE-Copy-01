
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
              className="relative max-w-5xl mx-auto overflow-hidden "
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '450px'
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
      <div className="flex justify-center pt-6 bg-white space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              currentSlide === index 
               ? 'bg-gray-700' 
               : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`スライド${index + 1}へ`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;