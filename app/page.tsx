import Image from 'next/image';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-200 text-black py-6 px-4 text-center self-center">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome to Mount Manor</h1>
            <p className="text-xl mt-2">Affordable 1 and 2 BHK flats in Prime Location in Nasik</p>
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
            Booking & Inquiry - WhatsApp
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {/* Image gallery */}
        <div className="flex flex-wrap justify-center gap-4 my-8">
          <Image 
            src="/images/exterior1.jpeg" 
            alt="Building Exterior" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md"
          />
          <Image 
            src="/images/interior.jpg" 
            alt="Apartment Interior" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md"
          />
          <Image 
            src="/images/entrance.jpg" 
            alt="Building Entrance" 
            width={400} 
            height={300} 
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Experience Luxury Living in Nasik</h2>
          <p className="text-gray-700">
  Mount Manor offers spacious 1 and 2 BHK apartments in a prime location in Nasik. 
  Enjoy modern amenities, stunning views, and easy access to the city&apos;s best 
  attractions. Perfect for families and professionals alike, our apartments 
  provide comfort, convenience, and value in one of Nasik&apos;s most desirable neighborhoods.
</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>123 Main Street, Nasik, Maharashtra</p>
            <p>Phone: +91 9960052052</p>
            <p>Email: info@mountmanor.com</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Amenities</a></li>
              <li><a href="#" className="hover:text-blue-300">Floor Plans</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
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