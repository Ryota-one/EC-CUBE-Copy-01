import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 当サイトについて */}
          <div>
            <h5 className="text-lg font-bold mb-4">当サイトについて</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/commercial-transaction" className="hover:text-white transition">
                  特定商取引法に基づく表記
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* ショップ情報 */}
          <div>
            <h5 className="text-lg font-bold mb-4">ショップ情報</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>株式会社EC-CUBE</li>
              <li>〒150-0002</li>
              <li>東京都渋谷区渋谷2-1-1</li>
              <li>TEL: 03-1234-5678</li>
              <li>Email: info@eccube.example.com</li>
            </ul>
          </div>

          {/* SNS・営業時間 */}
          <div>
            <h5 className="text-lg font-bold mb-4">フォローする</h5>
            <p className="text-sm text-gray-400 mb-4">最新情報をお届けします</p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Twitter
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Instagram
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Facebook
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-2">営業時間</p>
              <p>10:00 - 18:00</p>
              <p>定休日：土日祝</p>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="text-center">
            <p className="mt-8 pt-8  font-medium text-2xl ">EC-CUBE SHOP</p>
            <p className="pt-5 text-sm">&copy; copyright (c) EC-CUBE SHOP all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;