import { Section } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
  return (
    <section className=" from-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
                <h2 className="mb-3">CUBE GELATO ICE</h2>
                <p className="text-2xl mb-3 font-medium">秋のジェラート”CUBE”をご堪能下さい。</p>
                <p>
                    ジェラートとはイタリアン・アイスクリームのことで、
                    一般的なアイスクリームに比べて、乳脂肪分が低いのが特徴です。
                    <br />
                    当店では厳選した旬の果物のおいしさをそのままジェラートに仕上げました。
                    風味が濃厚でありながら、甘さ控えめでヘルシーなキューブジェラートをご堪能下さい。
                    <br />
                    さらにジェラートの製法を活かした、アイスキャンディ・アイスサンドも販売しております。
                    <br />
                    <p className="text-center p-3 mt-3 w-60 bg-black">
                        <a className=" font-medium text-white" href="#">一覧を見る</a>
                    </p>
                </p>
            </div>
            <div className="">
                <img src="/images/img_about (1).jpg" alt="About"></img>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;