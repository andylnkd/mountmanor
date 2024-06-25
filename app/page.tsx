'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: "/exterior1.jpeg", alt: "Building Exterior" },
    { src: "/kitchen.jpeg", alt: "Apartment Interior" },
    { src: "/livingroom.jpeg", alt: "Building Entrance" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 2) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 2 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">Welcome to Mount Manor</h1>
            <p className="text-xl sm:text-2xl font-semibold">
              16 Lakhs 1 BHK, 25 Lakhs 2 BHK. <span className='text-black'>Ready Possession</span>
            </p>
          </div>
          <a 
            href="https://wa.me/919960052052" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Carousel */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <Image 
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="w-1/2 pl-2">
              <Image 
                src={images[(currentImage + 1) % images.length].src}
                alt={images[(currentImage + 1) % images.length].alt}
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
          <button onClick={prevImage} className="absolute left-2 top-1/2 bg-white bg-opacity-50 p-2 rounded-full text-2xl" aria-label="Previous image">←</button>
          <button onClick={nextImage} className="absolute right-2 top-1/2 bg-white bg-opacity-50 p-2 rounded-full text-2xl" aria-label="Next image">→</button>
        </div>

        {/* Description */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Experience Luxury Living in Nasik</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Mount Manor offers spacious 1 and 2 BHK apartments in a prime location in Nasik. 
            Enjoy modern amenities, stunning views, and easy access to the city&apos;s best 
            attractions. Perfect for families and professionals alike, our apartments 
            provide comfort, convenience, and value in one of Nasik&apos;s most desirable neighborhoods.
          </p>
        </div>

        {/* Google Maps */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14996.488173437607!2d73.7073887!3d20.0033919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded006eb3ab5b%3A0x55e75499e31788a6!2sMount%20Manor!5e0!3m2!1sen!2sin!4v1719291606383!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>123 Main Street, Nasik, Maharashtra</p>
            <p>Phone: +91 9960052052</p>
            <p>Email: pbdhalwani@yahoo.co.in</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61561117869761" className="hover:text-blue-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; 2024 Mount Manor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}