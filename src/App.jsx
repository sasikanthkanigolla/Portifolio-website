import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Calendar,
  GraduationCap,
  Menu,
  X,
  ChevronDown,
  Briefcase,
} from "lucide-react";
import "./App.css";
import "./index.css";
import resume from "./assets/Sasikanth_kanigolla_Resume.pdf";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    "Programming Languages": [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    "Frameworks & Tools": [
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "REST APIs",
        icon: "https://img.icons8.com/ios/50/000000/code.png",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        icon: "https://img.icons8.com/ios/50/000000/code.png",
      },
      {
        name: "PuTTY",
        icon: "https://img.icons8.com/ios-filled/50/000000/console.png",
      },
    ],
    "Machine Learning": [
      {
        name: "Scikit-learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "PCA",
        icon: "https://img.icons8.com/ios/50/000000/data-configuration.png",
      },
      {
        name: "SVM",
        icon: "https://img.icons8.com/ios/50/000000/line-chart.png",
      },
    ],
  };
  const experience = [
    {
      company: "Tata Consultancy Services",
      role: "Systems Engineer",
      duration: "March 2024 – Present",
      details: [
        "Designed and implemented critical APIs for data verification in loan processing.",
        "Utilized Spring Boot for scalable and modular code structure.",
        "Followed MVC architecture for better responsiveness and maintainability.",
        "Built reliable backend services for payment systems with robust error handling.",
      ],
      technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "Git"],
    },
  ];

  const projects = [
    {
      title: "Hunter - Loan Processing Platform",
      description:
        "Designed a scalable backend system for banking APIs using Spring Boot.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      features: [
        "Secure API-based loan initiation and post-disbursement flow",
        "MVC architecture with modular backend services",
        "Integrated error handling and unit tests",
      ],
      demoLink: null,
      githubLink: "https://github.com/sasikanthkanigolla",
    },
    {
      title: "Breast Cancer Detection",
      description:
        "ML model with 97.7% accuracy using PCA, SVM, logistic regression, and ensemble methods.",
      technologies: ["Python", "Scikit-learn", "TensorFlow"],
      features: [
        "Used PCA and kernel methods for dimensionality reduction",
        "Trained models using multiple classifiers",
        "Evaluated with F1-score and k-fold cross validation",
      ],
      demoLink: null,
      githubLink: "https://github.com/sasikanthkanigolla",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Sasikanth
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "skills",
              "education",
              "experience",
              "projects",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-blue-400 ${
                  activeSection === item ? "text-blue-400" : "text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {[
              "home",
              "about",
              "skills",
              "education",
              "experience",
              "projects",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 capitalize hover:text-blue-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Subtle background gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>

        {/* Foreground content */}
        <div className="relative z-10 text-center mt-24 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.3] pb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Kanigolla Sasikanth
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Systems Engineer at TCS
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            I'm deeply passionate about Machine Learning, and I also enjoy
            building reliable and scalable web systems using Spring Boot and
            Java. Experienced in RESTful APIs, backend architecture, and
            problem-solving.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <Button
              onClick={() => scrollToSection("experience")}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2 rounded-md text-sm sm:text-base"
            >
              View My Work
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-2 rounded-md text-sm sm:text-base"
            >
              Get In Touch
            </Button>

            <a
              href={resume}
              download
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-md text-sm sm:text-base transition-all"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About */}
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm a Systems Engineer at Tata Consultancy Services and a B.Tech
                graduate in Information Technology from Sir C R Reddy College of
                Engineering.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My strengths include Java, Spring Boot, REST APIs, and machine
                learning using tools like TensorFlow and Scikit-learn. I'm
                passionate about backend development and building scalable,
                secure, and maintainable systems.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-md hover:shadow-blue-500/40 transition-shadow cursor-default">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-blue-400">
                      <GraduationCap size={24} />
                    </span>
                    <div className="text-2xl font-bold">8.6</div>
                  </div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-md hover:shadow-indigo-500/40 transition-shadow cursor-default">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-indigo-400">
                      <Code size={24} />
                    </span>
                    <div className="text-2xl font-bold">2+</div>
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>
            </div>

            {/* Right - Initials Circle */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-6xl font-bold text-white">
                SK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="bg-white/5 p-6 border-white/10 rounded-2xl hover:bg-white/10 transition"
              >
                <CardHeader>
                  <h3 className="text-blue-300 text-lg font-semibold flex items-center gap-2">
                    <Code size={20} /> {category}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5"
                        />
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Education
          </h2>
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div>
                  <CardTitle className="text-white">
                    B.Tech - Information Technology
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Sir C R Reddy College of Engineering
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-gray-400 flex items-center gap-2">
                <Calendar size={16} />
                <span>2019 - 2023</span>
              </div>
              <div className="text-blue-400 text-xl font-bold">CGPA: 8.6</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      {/* Experience */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="grid gap-8">
            {experience.map((exp, idx) => (
              <Card
                key={idx}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-white">{exp.role}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {exp.company} &mdash; {exp.duration}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Responsibilities */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {exp.details.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies (add a technologies array to each exp object if desired) */}
                  {exp.technologies && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/10 text-white"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/10 text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 text-center bg-black/20">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Feel free to reach out via email or connect on LinkedIn!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="mailto:sasikanthkanigolla@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:underline"
          >
            <Mail /> sasikanthkanigolla@gmail.com
          </a>
          <a
            href="tel:+918466972871"
            className="flex items-center gap-2 text-green-400 hover:underline"
          >
            📞 +91 8466972871
          </a>
        </div>
        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href="https://linkedin.com/in/sasikanth-kanigolla-8527ab195"
            target="_blank"
          >
            <Linkedin size={32} />
          </a>
          <a href="https://github.com/sasikanthkanigolla" target="_blank">
            <Github size={32} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} Sasikanth Kanigolla. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
