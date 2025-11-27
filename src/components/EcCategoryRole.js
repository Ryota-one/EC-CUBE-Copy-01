import React from 'react';

const EcCategoryRole = () => {
    return(
        <section>
            <div className="pt-8 pb-12 bg-gray-100 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <p className="text-lg font-medium">
                        CATEGORY  <span className="font-thin px-5">|</span> <span className="font-thin text-sm">特集</span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                        <img
                        src="/images/fpo_355x150.png"
                        alt="Unknown"
                        className="w-full h-auto" />
                    </div>
                     <div className="relative">
                        <img
                        src="/images/fpo_355x150.png"
                        alt="Unknown"
                        className="w-full h-auto" />
                    </div>
                     <div className="relative">
                        <img
                        src="/images/fpo_355x150.png"
                        alt="Unknown"
                        className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};



export default EcCategoryRole;