'use client';

import { Mail, Phone } from 'lucide-react';
import { FaYoutube, FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function LaunchPage() {

  const link = "https://docs.google.com/forms/d/e/1FAIpQLScWUEMS-GmfveebDp9RbPyi86ZEM51-vq2FTZQd-vvtlihZWQ/viewform?usp=header"
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-green-100 text-center px-4 overflow-hidden">
      {/* Header */}
      <header className="absolute top-6 left-6 flex items-center space-x-2 text-lg font-bold">
        <span className="text-green-600 text-xl">Data<span className="text-red-600">Collect</span></span>
      </header>

      {/* Contact Info */}
      <div className="md:absolute top-6 right-6 flex items-center space-x-4 text-sm text-gray-700 mb-10">
        <div className="flex items-center space-x-1">
          <Mail size={16} />
          <span>datacollect@equalyz.ai</span>
        </div>
        <div className="flex items-center space-x-1">
          <Phone size={16} />
          <span>+2348071997430</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#097C07]">
          Our mobile app will be launching soon.
        </h1>
        <p className="max-w-2xl text-gray-700 text-sm md:text-base">
          A Task management and data collection application that incentivises anyone, anywhere across Africa to contribute text, voice, image and video data, enriching our hyperlocal data bank, for hyperlocal AI models and small language model (SLM) development.
        </p>
        <button className="
        shadow-xl
        px-6 py-3 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition"
          // go to google form link
          onClick={() => window.open(link)}
        >
          Join the waiting list
        </button>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 flex flex-col items-center">
        <div className="flex space-x-4 text-green-700 text-xl">
          <FaYoutube className="hover:text-red-600 cursor-pointer" onClick={() => window.open("https://www.youtube.com/@EqualyzAI")} />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/company/equalyzai")} />
          <FaTwitter className="hover:text-blue-500 cursor-pointer" onClick={() => window.open("https://x.com/equalyz_ai")} />
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" onClick={() => window.open("https://www.facebook.com/equalyzai/")}/>
          <FaInstagram className="hover:text-pink-600 cursor-pointer" onClick={() => window.open("https://www.instagram.com/equalyz_ai/")} />
        </div>
        <p className="text-xs text-gray-600 mt-2">DataCollect - © 2025 All Rights Reserved.</p>
      </footer>
    </div>
  );
}
