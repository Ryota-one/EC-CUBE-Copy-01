import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const NewsSection = () => {
  // お知らせデータ
  const newsItems = [
    {
      id: 1,
      date: '2025.11.24 ',
      title: 'サイトオープンいたしました!',
      sentence:'旬の色どりスイーツとこだわりのジェラートをお届けします。',
      link: '#'
    },    
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-8">
            <div>
                <p className="text-lg font-medium">
                    NEWS  <span className="font-thin px-5">|</span> <span className="font-thin text-sm">新着情報</span>
                </p>
            </div>
        </div>

        {/* お知らせリスト */}
        <div className="bg-gray-100 p-6">
          <div className="space-y-4">
            {newsItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-white "
              >
                {/* 日付 */}
                <div className="flex-shrink-0">
                  <time className="text-sm text-gray-500 font-medium">
                    {item.date}
                  </time>
                </div>

                {/* タイトル */}
                <div className="flex-1">
                  <p className="text-gray-900 group-hover:text-blue-600 transition">
                    {item.title}
                  </p>
                </div>

                    {/* 矢印アイコン */}
                    <div className="flex-shrink-0 hidden sm:block">
                    <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition" />
                    </div>
              </a>
            ))}
          </div>
        </div>

        {/* もっと見るボタン（モバイル用） */}
        <div className="mt-6 text-center sm:hidden">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            すべて見る
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;