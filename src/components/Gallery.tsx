import React from 'react';

export default function Gallery() {
  const sections = [
    {
      id: 1,
      title: 'Pool Maintenance',
      image: 'https://cdn.pixabay.com/photo/2020/01/02/16/39/water-4736282_1280.jpg',
      description: 'Regular maintenance keeps your pool crystal clear and ready for enjoyment'
    },
    {
      id: 2,
      title: 'Drain & Clean Service',
      image: 'https://images.unsplash.com/photo-1499989344695-bd3616da4944?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Complete transformation from stained and neglected to sparkling clean'
    },
    {
      id: 3,
      title: 'Equipment Repair',
      image: 'https://images.unsplash.com/photo-1752177335248-04d3626dd31c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Professional equipment repair and replacement for optimal pool performance'
    },
    {
      id: 4,
      title: 'Filter Service',
      image: 'https://cdn.pixabay.com/photo/2017/05/23/17/00/filter-2337802_1280.jpg',
      description: 'Clean filters ensure proper water circulation and crystal clear results'
    },
    {
      id: 5,
      title: 'Pool Startup',
      image: 'https://images.unsplash.com/photo-1506359585186-16ff29581308?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Professional pool opening service gets your pool ready for the season'
    },
    {
      id: 6,
      title: 'One Time Clean',
      image: 'https://images.unsplash.com/photo-1583429760131-b4e0bcef5ad8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Upgrade to salt water system for softer, more comfortable swimming experience'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See the amazing transformations from our professional pool services across Central Florida
          </p>
        </div>

        {/* Single Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section) => (
            <div
              key={section.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h3>
                  <p className="text-slate-600 text-sm">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready for Professional Pool Service?
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let us take care of your pool with our expert services. Contact us today for a free consultation and quote.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
