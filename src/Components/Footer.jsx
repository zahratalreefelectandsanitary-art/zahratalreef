import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>

      <footer className="bg-black text-white py-4 text-xs md:text-lg">
        <div className="container mx-auto px-6 lg:px-32">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="text-sm mb-6 lg:mb-0">
              <p className="mt-2">
                Zahrat Al Reef Elect. & Sanitary Ware TR. LLC
                <br />

                Tel:+97165532390,+971526346199
                <br />Al Nabbah , Sharjah - UAE
                <br />

              </p>
              <p className=''>©2026 all rights reserved. Designed by <a href="https://www.instagram.com/tri._design?igsh=MXMyNHVvb2Q5Z3U2eA==" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">WaveX</a></p>
            </div>

            <div className="flex flex-row space-x-4">
              <a
                aria-label="Facebook"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-gray-400"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                aria-label="Youtube"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-gray-400"
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
