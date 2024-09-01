import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
 
    <footer className="bg-black text-white py-4 text-xs md:text-lg">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-6 lg:mb-0">
            <p className="mt-2">
              Zahrat Al Reef Elect. & Sanitary Ware TR. LLC
              <br />

              Tel:+97165532390,+971526346199
              <br/>Al Nabbah , Sharjah - UAE
              <br />
            
            </p>
          </div>

          <div className="flex flex-row space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
