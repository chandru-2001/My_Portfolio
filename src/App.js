import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Award, Briefcase, GraduationCap, Code, Menu, X, Home, User, Folder, Trophy, MessageSquare } from 'lucide-react';
import TCS from './assets/TCS.png';

// Router simulation using hash navigation
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const route = React.Children.toArray(children).find(
    child => child.props.path === currentPath
  );

  return route || children[0];
};

const Route = ({ children }) => children;

const Link = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.hash = to;
    if (onClick) onClick();
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-500 rounded-full opacity-40 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 rounded-full opacity-30 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-[40%] right-[-15%] w-80 h-80 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full opacity-35 blur-3xl animate-float-reverse"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-72 h-72 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500 rounded-full opacity-30 blur-3xl animate-float-slow"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 animate-pulse-very-slow"></div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/projects', label: 'Projects', icon: Folder },
    { path: '/skills', label: 'Skills', icon: Code },
    { path: '/contact', label: 'Contact', icon: MessageSquare }
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-purple-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            S P Chandrakant Prabhu
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                    currentPath === item.path
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'hover:bg-purple-500/10 text-gray-300 hover:text-purple-400'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                    currentPath === item.path
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'hover:bg-purple-500/10 text-gray-300'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

// Home Page
const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-shimmer">
            S P Chandrakant Prabhu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            React Native Developer | Flutter Developer | Web Developer | Full Stack Engineer | TCS Intern
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            MCA student specializing in Flutter app development, web technologies, and creating scalable, user-centric software solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border-2 border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 inline-block"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Federal Institute of Science and Technology',
      university: 'Kerala Technological University',
      period: '2023 - 2025'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sree Narayana College of Technology',
      university: 'Kerala Technological University',
      period: '2020 - 2023'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Highly motivated MCA student with strong expertise in Flutter app development, web technologies, and database management. 
            Completed an internship at Tata Consultancy Services (TCS), contributing to interactive therapeutic web applications with 
            real-time sensor integration.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Skilled in Python, JavaScript, Java, and modern frameworks, with a strong focus on scalable, user-centric software solutions. 
            Passionate about creating innovative applications that solve real-world problems and enhance user experiences.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-purple-400" />
              <a href="mailto:cprabhu01.cp@gmail.com" className="hover:text-purple-400 transition-colors">
                cprabhu01.cp@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-purple-400" />
              <span>9961015566</span>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="text-purple-400" />
              <a 
                href="https://linkedin.com/in/s-p-chandrakant-prabhu-75a9241a7" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors truncate"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-purple-400" />
              <span>Kollam, Kerala, India</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-purple-400">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <GraduationCap className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-2">{edu.university}</p>
              <p className="text-purple-400 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Experience Page
const ExperiencePage = () => {
  const experience = {
    role: 'Interactive Web Game Development Intern',
    company: 'Tata Consultancy Services (TCS)',
    date: 'April 2025',
    responsibilities: [
      'Designed and developed web-based therapeutic game for physical rehabilitation',
      'Implemented real-time motion controls using smartphone sensor data via WebSocket',
      'Built interactive 3D interfaces with React Three Fiber and Tailwind CSS',
      'Managed game state and achievements using Zustand',
      'Collaborated with cross-functional teams using agile methodologies'
    ],

  };

  return (
    <div className="min-h-screen py-20 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Work Experience
        </h1>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Briefcase className="text-purple-400" size={32} />

            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">{experience.role}</h2>
              <p className="text-xl text-purple-400 mb-1">{experience.company}</p>
              <p className="text-gray-400">{experience.date}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Key Responsibilities:</h3>
            <ul className="space-y-4">
              {experience.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start space-x-3 bg-slate-700/30 p-4 rounded-lg">
                  <span className="text-purple-400 mt-1 text-xl">•</span>
                  <span className="text-gray-300 text-lg">{resp}</span>
                </li>
              ))}
             
            </ul>
             <div className="mt-10 flex justify-center">
  <img
    src={TCS}
    alt="TCS Logo"
    className="w-full h-auto object-contain opacity-90"

  />
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const projects = [
    {
      title: 'Library Helper (TCS Internship)',
      description: 'Web-based therapeutic game to improve motor coordination and postural control with real-time motion sensor integration.',
      tech: ['React', 'React Three Fiber', 'TypeScript', 'Zustand', 'WebSocket', 'Tailwind CSS'],
      highlights: ['Real-time sensor data integration', 'Progressive difficulty levels', '3D interactive interfaces', 'Therapeutic performance metrics']
    },
    {
      title: 'GrocEasy: Smart Grocery Shopping App',
      description: 'Comprehensive grocery shopping platform with role-based authentication for customers and sellers.',
      tech: ['Flutter', 'Hive'],
      highlights: ['Role-based authentication', 'Real-time notifications', 'Seller dashboards', 'Refund workflows', 'Cart management', 'Order tracking']
    },
    {
      title: 'Pomofocus: Time Management & Activity Tracker',
      description: 'Productivity timer application with AI-powered suggestions for focused work sessions.',
      tech: ['Flutter', 'Hive', 'OpenAI API'],
      highlights: ['Pomodoro timer', 'Task tracking', 'AI chatbot integration', 'Local data persistence', 'Productivity statistics']
    },
    {
  title: 'Face Mask Detection System Using Deep Learning',
  description: 'A computer vision project to detect whether a person is wearing a face mask or not using images or real-time video streams.',
  tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'CNN'],
  highlights: [
    'Detects human faces from images or video streams',
    'Classifies faces as mask worn or mask not worn',
    'Automates mask compliance monitoring',
    'Reduces manual monitoring effort',
    'Real-time detection using webcam (optional)',
    'High accuracy with proper training'
  ]
},
{
  title: 'CHESS_ME_UP',
  description: 'Cross-platform Chess App developed in Flutter, allowing play against Stockfish AI, game persistence, and secure user management via Firebase.',
  tech: ['Flutter', 'Dart', 'Firebase', 'Stockfish', 'SQLite', 'Shared Preferences', 'Connectivity_plus'],
  highlights: [
    'Play against advanced Stockfish AI with adjustable skill levels',
    'Store ongoing games and player progress with persistent local storage',
    'Login, logout, and session management via Firebase Authentication',
    'Cross-platform support: Android, iOS, Web, Windows, macOS, Linux',
    'Responsive, clean, and themed UI (dark/light mode)',
    'Connectivity awareness to enhance user experience'
  ]
}


  ];

  return (
    <div className="min-h-screen py-20 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-2 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start space-x-2">
                      <span className="text-purple-400">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Skills Page
const SkillsPage = () => {
  const skills = {
    Languages: ['Python', 'JavaScript', 'Java', 'HTML', 'PHP', 'C', 'TypeScript'],
    'Frameworks & Libraries': ['Flutter', 'React', 'React Native', 'Django', 'Zustand', 'Three.js', 'Tailwind CSS'],
    Databases: ['MySQL', 'MongoDB', 'Hive'],
    'Tools & Platforms': ['Android Studio', 'Firebase', 'Git', 'XAMPP']
  };

  const certifications = [
    { name: 'Interactive Web Game Development Internship', issuer: 'Tata Consultancy Services', date: 'April 2025' },
    { name: 'Google Play Academy - Store Listing Certificate', issuer: 'Google', date: 'Expected September 2025' },
    { name: 'Database Management System', issuer: 'NPTEL', date: 'September 2024' },
    { name: 'Mastering Flutter', issuer: 'Infosys Springboard', date: 'August 2024' }
  ];

  return (
    <div className="min-h-screen py-20 px-4 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Code className="text-purple-400" size={28} />
                <h3 className="text-2xl font-bold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <Award className="text-purple-400 flex-shrink-0" size={28} />
                <div>
                  <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-purple-400 mt-1">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Achievements</h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-slate-700/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🏆</div>
              <p className="font-bold text-xl mb-2">District Champion</p>
              <p className="text-gray-400">Roller Skating</p>
            </div>
            <div className="text-center p-6 bg-slate-700/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <p className="font-bold text-xl mb-2">Tour Coordinator</p>
              <p className="text-gray-400">College Events</p>
            </div>
            <div className="text-center p-6 bg-slate-700/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎮</div>
              <p className="font-bold text-xl mb-2">District Champion</p>
              <p className="text-gray-400">Valorant Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new opportunities, projects, or collaborations
        </p>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-6 bg-slate-700/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <Mail className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:cprabhu01.cp@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                cprabhu01.cp@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-slate-700/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <Phone className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">+91 9961015566</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-slate-700/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <Linkedin className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/s-p-chandrakant-prabhu-75a9241a7" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-slate-700/30 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <MapPin className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">Kollam, Kerala, India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:cprabhu01.cp@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Mail size={20} />
            <span>Send Email</span>
          </a>
          <a
            href="https://linkedin.com/in/s-p-chandrakant-prabhu-75a9241a7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Linkedin size={20} />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const Portfolio = () => {
  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navigation />
      
      <Router>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/experience">
          <ExperiencePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/skills">
          <SkillsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Router>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 S P Chandrakant Prabhu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;