
import React from'react';

const TopicRole = () => {
    return(
        <section>
          <div className="pt-8 pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-lg font-medium ">
                TOPICS <span className="font-thin px-5">|</span> <span className="font-thin text-sm">特集</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src="/images/img_bnr01.jpg" 
                  alt="ジェラート特集"
                  className="w-full h-auto"
                />
                <p className="pt-3">濃厚なのにアイスよりヘルシー!!ジェラート特集</p>
              </div>

              <div className="relative">
                <img 
                  src="/images/img_bnr02.jpg" 
                  alt="ジェラートコーン"
                  className="w-full h-auto "
                />
                <p className="pt-3">サクサク食感が魅力!!コーンアイス特集</p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default TopicRole;