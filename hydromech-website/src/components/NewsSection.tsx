import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in the oil and gas industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">Industry News</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Latest Industry Update {item}
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay informed about the latest developments in our industry.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;