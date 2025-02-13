import React, { useEffect, useState, useRef } from 'react';
import { 
  Play,
  Film,
  Palette,
  Box,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  CloudDrizzleIcon as CloudDriveIcon,
  Cuboid as Cube,
  Brush,
  PenTool,
  Moon,
  Sun,
  PlayCircle,
  Github
} from 'lucide-react';

// Define TypeScript interfaces for our data structures
interface Project {
  title: string;
  preview: string;
  category: string;
  videoUrl: string;
  description: string;
}

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface ProjectGridProps {
  projects: Project[];
  title: string;
}

// Add new interface for short form content
interface ShortFormContent {
  title: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, title }) => (
  <div className="mb-16">
    <h3 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-200 font-display">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg animate-on-scroll">
          <img 
            src={project.preview} 
            alt={project.title}
            className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        flex flex-col justify-end p-6">
            <h4 className="text-white text-xl font-semibold font-display mb-2">{project.title}</h4>
            <p className="text-white/80 font-body mb-2">{project.category}</p>
            <p className="text-white/70 text-sm mb-4 font-body">{project.description}</p>
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-lg transition-colors duration-300 font-body
                       transform hover:scale-105"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Video
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    { title: 'Video Editing', icon: <Film className="w-8 h-8" />, description: 'Professional video editing with attention to detail and storytelling' },
    { title: 'Color Grading', icon: <Palette className="w-8 h-8" />, description: 'Expert color correction and grading for cinematic looks' },
    { title: '3D Animation', icon: <Cube className="w-8 h-8" />, description: 'Custom 3D animations and visual effects' },
    { title: 'Motion Graphics', icon: <Box className="w-8 h-8" />, description: 'Creative motion graphics and title animations' }
  ];

  const skills: Skill[] = [
    { name: 'Premiere Pro', icon: <Film className="w-6 h-6" /> },
    { name: 'After Effects', icon: <Box className="w-6 h-6" /> },
    { name: 'DaVinci Resolve', icon: <Palette className="w-6 h-6" /> },
    { name: 'Blender', icon: <Cube className="w-6 h-6" /> },
    { name: 'Procreate', icon: <Brush className="w-6 h-6" /> },
  ];

  const videoProjects: Project[] = [
    {
      title: 'Akash POV',
      preview: 'https://img.youtube.com/vi/xD8Sk0YMRAY/maxresdefault.jpg',
      category: 'After effects',
      videoUrl: 'https://youtu.be/xD8Sk0YMRAY',
      description: 'Collage edit for akash !'
    },
    {
      title: 'Short form',
      preview: 'https://img.youtube.com/vi/jyR9zeafvW8/maxresdefault.jpg',
      category: 'Reels',
      videoUrl: 'https://youtube.com/shorts/jyR9zeafvW8?feature=share',
      description: 'Short form content'
    },
    {
      title: 'Finance Long form',
      preview: 'https://img.youtube.com/vi/aOOPVDQlyHs/maxresdefault.jpg',
      category: 'Premiere pro',
      videoUrl: 'https://youtu.be/aOOPVDQlyHs',
      description: 'A quick video edit for financial long form content'
    },
    {
      title: 'Short form carousel',
      preview: 'https://img.youtube.com/vi/mT2SfkBk6q0/maxresdefault.jpg',
      category: 'Short form content',
      videoUrl: 'https://youtube.com/shorts/mT2SfkBk6q0?feature=share',
      description: 'Professional corporate video for tech company'
    },
    {
      title: 'CGI',
      preview: 'https://img.youtube.com/vi/h5VrgQeUGs8/sddefault.jpg',
      category: 'sports',
      videoUrl: 'https://youtube.com/shorts/hXLb1UA8ugA?feature=share',
      description: 'After effects and blender 3d tracking'
    },
    {
      title: 'Nuclea',
      preview: 'https://img.youtube.com/vi/hXLb1UA8ugA/maxresdefault.jpg',
      category: 'Documentary',
      videoUrl: 'https://youtube.com/shorts/hXLb1UA8ugA?feature=share',
      description: 'Advertisement and announcement reel for Nuclea tour'
    }
  ];

  const threeDProjects: Project[] = [
    {
      title: 'Under water env',
      preview: 'https://img.youtube.com/vi/4h2bSlQ_4YY/sddefault.jpg',
      category: 'Modeling',
      videoUrl: 'https://youtube.com/shorts/4h2bSlQ_4YY?feature=share',
      description: 'Detailed character modeling and rigging'
    },
    {
      title: 'Shoe animation',
      preview: 'https://img.youtube.com/vi/_o4E9eVV3JU/maxresdefault.jpg',
      category: 'Animation',
      videoUrl: 'https://youtube.com/shorts/_o4E9eVV3JU?feature=share',
      description: 'Smooth product animation for marketing'
    },
    {
      title: 'bottle animation',
      preview: 'https://img.youtube.com/vi/eb8OX-fFtI8/maxresdefault.jpg',
      category: 'Rendering',
      videoUrl: 'https://youtube.com/shorts/eb8OX-fFtI8?feature=share',
      description: 'Photorealistic architectural visualization'
    },
    {
      title: 'Bottle animation BTS',
      preview: 'https://img.youtube.com/vi/_DTbetxwQXg/maxresdefault.jpg',
      category: 'Game Design',
      videoUrl: 'https://youtube.com/shorts/_DTbetxwQXg?feature=share',
      description: 'Low-poly game asset with animations'
    },
    {
      title: 'Cloth sim',
      preview: 'https://img.youtube.com/vi/CJPTkrzcNbs/maxresdefault.jpg',
      category: 'VFX',
      videoUrl: 'https://youtube.com/shorts/CJPTkrzcNbs?feature=share',
      description: '3D VFX and cloth simulation'
    },
    {
      title: 'cloth sim',
      preview: 'https://img.youtube.com/vi/ugwSGactabc/maxresdefault.jpg',
      category: 'Animation',
      videoUrl: 'https://youtube.com/shorts/ugwSGactabc?feature=share',
      description: '3D motion graphics for broadcast'
    }
  ];

  // Add short form content data
  const shortFormContent: ShortFormContent[] = [
    {
      title: "Tech Review",
      thumbnail: "https://img.youtube.com/vi/mT2SfkBk6q0/maxresdefault.jpg",
      videoUrl: "https://youtube.com/shorts/mT2SfkBk6q0",
      description: "Tech review with style"
    },
    {
      title: "Finance Reels",
      thumbnail: "https://img.youtube.com/vi/jyR9zeafvW8/maxresdefault.jpg",
      videoUrl: "https://youtube.com/shorts/LIHh_TrUUF0?feature=share",
      description: "Finance content that converts"
    },

  ];

  // Create a component for short form preview
  const ShortFormPreview: React.FC<{ content: ShortFormContent }> = ({ content }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };

    return (
      <div 
        className="relative group aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
          src={content.thumbnail}
          alt={content.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          loop
          muted
          playsInline
          poster={content.thumbnail}
        >
          <source src={content.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-2 font-display">{content.title}</h3>
            <p className="text-sm font-body">{content.description}</p>
            <a 
              href={content.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <PlayCircle className="w-5 h-5 mr-1" />
              Watch Now
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">HASHcreates</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</a>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=2000&q=80"
        >
          <source src="your-demo-reel.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in font-display">
            Crafting Visual Stories
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in delay-200 font-body">
            I make your audience go WAUW
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full 
                           transition-all transform hover:scale-105 animate-fade-in delay-300
                           flex items-center justify-center mx-auto font-body">
            <Play className="w-5 h-5 mr-2" />
            View Moui Work ✨
          </button>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100 animate-on-scroll font-display">
            Moui Work
          </h2>

          {/* Short Form Content Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-200 font-display">Short Form Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {shortFormContent.map((content, index) => (
                <ShortFormPreview key={index} content={content} />
              ))}
            </div>
          </div>
          
          {/* Existing ProjectGrid components */}
          <ProjectGrid projects={videoProjects} title="Video Projects" />
          <ProjectGrid projects={threeDProjects} title="Blender Projects" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://i.imgur.com/0JaZKaf.jpg" 
                alt="Profile"
                className="rounded-lg shadow-lg w-full object-cover aspect-square"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100 font-display">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 font-body">
                With over 4 years of experience in video editing and motion design, 
                I specialize in creating compelling visual stories that captivate 
                audiences and deliver messages effectively.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    {skill.icon}
                    <span className="font-body">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100 animate-on-scroll font-display">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700
                                     p-8 rounded-lg shadow-lg transition-all duration-300 
                                     hover:shadow-xl hover:-translate-y-1 animate-on-scroll">
                <div className="text-blue-600 dark:text-blue-400 mb-4 transform transition-transform 
                            group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              <a 
                href="https://www.instagram.com/harrshheta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-all duration-300">
                  <Instagram className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-body">@harrshheta</span>
              </a>

              <a 
                href="https://x.com/harrshheta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-all duration-300">
                  <Twitter className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-body">@harrshheta</span>
              </a>

              <a 
                href="https://www.youtube.com/@HASHGONWEED" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-all duration-300">
                  <Youtube className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-body">@HASHGONWEED</span>
              </a>

              <a 
                href="https://github.com/harrsheeta"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-all duration-300">
                  <Github className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-body">GitHub</span>
              </a>

              <a 
                href="mailto:harrsheeta@gmail.com"
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-all duration-300">
                  <Mail className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-body">Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0 font-display">HASH</div>
            <div className="flex space-x-8 font-body">
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              <a href="https://drive.google.com/your-portfolio" 
                 className="hover:text-blue-400 transition-colors flex items-center">
                <CloudDriveIcon className="w-4 h-4 mr-2" />
                Portfolio Drive Link
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400 font-body">
            © {new Date().getFullYear()} made with LOVE by HASH (YES I do this too)
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
