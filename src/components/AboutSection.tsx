import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Youtube } from 'lucide-react';
import SocialButton from './SocialButton';
import CurrentProject from './CurrentProject';
import ResumeSection from './ResumeSection';

const AboutSection = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Profile Card */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#111111] rounded-3xl p-8 border border-white/10 hover:border-[#0ff]/50 transition-colors duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-2 ring-[#0ff]/30 p-1">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="hero-text text-white mb-2">amberm</h1>
          <p className="text-[#0ff]/80 mb-4">@ambermtech</p>
          <p className="text-gray-400 text-xl">Developer with 4+ years of experience</p>
        </div>
      </div>

      {/* CTA Card */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#111111] rounded-3xl p-8 border border-white/10 hover:border-[#0ff]/50 transition-colors duration-300">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-white mb-6">Have a project in mind?</h2>
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#0a0a0a] text-[#0ff] border border-[#0ff]/30 rounded-full 
                     hover:bg-[#0ff]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          >
            Let's talk
          </Link>
        </div>
      </div>

      {/* Current Project */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <CurrentProject />
      </div>

      {/* Resume Section */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <ResumeSection />
      </div>

      {/* Social Links Grid */}
      <div className="col-span-12 flex justify-center gap-6 py-4">
        <SocialButton icon={Github} label="GitHub" href="https://github.com" />
        <SocialButton icon={Twitter} label="Twitter" href="https://twitter.com" />
        <SocialButton icon={Instagram} label="Instagram" href="https://instagram.com" />
        <SocialButton icon={Youtube} label="YouTube" href="https://youtube.com" />
      </div>
    </div>
  );
};

export default AboutSection;