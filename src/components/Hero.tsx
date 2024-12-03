import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import logo from './profil.png';
import Resume from './Resumep.pdf';
import './Hero.css';

export function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDoubleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/08/70/c0/0870c06d6a0b9fe7eff0894ae02d9f46.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="text-section">
          <h1 className="hero-title">
            Hi, It's Rahim Shaikh
            <span className="highlight">Being a programmer</span>
          </h1>
          <p className="hero-description">
            I craft beautiful and functional web experiences with modern technologies.
            Let's build something amazing together.
          </p>

          {/* Button Section */}
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-[#cc73f8] text-white px-6 py-3 rounded-lg flex items-center hover:bg-[#b85ee4] transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="border border-[#cc73f8] text-[#cc73f8] px-6 py-3 rounded-lg hover:bg-[#cc73f8]/10 transition-colors"
            >
              Contact Me
            </a>
            <a
              href={Resume}
              download="Resume"
              className="border border-[#cc73f8] text-[#cc73f8] px-6 py-3 rounded-lg hover:bg-[#cc73f8]/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Image Card */}
        <div className="card-container-wrapper">
          <div
            className="card-container"
            onDoubleClick={handleDoubleClick}
          >
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
              {/* Front Side */}
              <div className="card-front">
                <img
                  src={logo}
                  alt="profile"
                  className="card-image"
                />
              </div>

              {/* Back Side */}
              <div className="card-back">
                <p className="card-description">
                Results-driven Computer Applications graduate with strong skills in software development and web technologies.
                 Proficient in languages like Java, Python, 
                JavaScript, C#, and C++, and experienced with frameworks like React.js, Angular, and Node.js. Familiar with Agile, CI/CD, and Docker to optimize system performance.
                 Passionate about problem-solving and delivering innovative solutions. Seeking to contribute to a dynamic organization and grow as a technical professional.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
