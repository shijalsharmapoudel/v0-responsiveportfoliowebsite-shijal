"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  Trophy,
  User,
  Code,
  Award,
  BookOpen,
  Github,
  ExternalLink,
  Heart,
  Users,
  Calendar,
  Camera,
  Play,
  Pause,
  TrendingUp,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(1) // Start with center card (profile)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showAboutMe, setShowAboutMe] = useState(false)
  const [expandedEducation, setExpandedEducation] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isPhotoPlaying, setIsPhotoPlaying] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      id: "education",
      type: "education",
      title: "Education",
      icon: <GraduationCap className="w-6 h-6" />,
      content: {
        degree: "Bachelor of Science",
        field: "Computer Application",
        university: "Tribhuvan University, Nepal",
        duration: "2019 — 2023",
        gpa: "GPA: 3.20/4.00",
        coursework: [
          "Machine Learning",
          "Algorithms & Complexity",
          "Data Structures",
          "Database Management Systems",
          "Artificial Intelligence",
          "Probability & Statistics",
          "Web Technologies",
        ],
        capstone: "Credit Card Fraud Detection using Random Forest — awarded Best Final Year Project",
      },
    },
    {
      id: "profile",
      type: "profile",
      title: "Profile",
      content: {
        greeting: "Hello, I'm",
        name: "Shijal Sharma Poudel",
        title: "Data Engineer",
        location: "Kathmandu, Nepal",
        email: "shijalsharmapoudel@gmail.com",
        phone: "(+977)9860566",
        image: "/responsive-portfolio-website-Ansel-main/assets/img/perfil.png",
        about:
          "Passionate Data Engineer with expertise in cloud migration, ETL development, and machine learning. I specialize in leveraging data for AI, optimization modeling, and human-centered system design. My experience spans across cloud technologies, data pipelines, and behavioral analytics with a focus on data-driven decision systems.",
        researchInterests:
          "Leveraging Data for AI, optimization modeling, human-centered system design, behavioral analytics, Data Analysis, machine learning, data-driven decision systems.",
      },
    },
    {
      id: "experience",
      type: "experience",
      title: "Experience",
      icon: <Briefcase className="w-6 h-6" />,
      content: {
        positions: [
          {
            title: "Data Engineer",
            company: "Fusemachines",
            location: "Kathmandu, Nepal",
            duration: "Aug 2022 – Present",
            achievements: [
              "Cloud Migration & Cost Optimization: Migrated data pipelines from Azure Synapse to Databricks, implementing Medallion Architecture. Reduced monthly cloud costs by 90% and peak costs by 85%.",
              "ETL Framework Development: Extracted and ingested data from APIs, Google Sheets, MongoDB, and HubSpot. Created automated data pipelines using Airbyte and Glue Jobs.",
              "Instructor & Mentor: Conducted training sessions on SQL, Apache Spark, Azure technologies, Apache Kafka, and MongoDB.",
            ],
          },
          {
            title: "Teaching Assistant",
            company: "Asian School of Management and Technology",
            location: "Nepal",
            duration: "Jan 2021 – Apr 2021",
            achievements: [
              "Assisted in teaching undergraduate courses on Algorithms and Database Management Systems.",
              "Led lab sessions and tutoring, providing hands-on guidance in problem-solving and SQL programming.",
              "Helped design assignments and assess coding submissions.",
            ],
          },
        ],
      },
    },
  ]

  const achievements = [
    { icon: <Trophy className="w-4 h-4" />, text: "AI Hackathon Winner" },
    { icon: <Award className="w-4 h-4" />, text: "Best Final Year Project" },
    { icon: <Trophy className="w-4 h-4" />, text: "Merit-Based Scholarship" },
    { icon: <Award className="w-4 h-4" />, text: "Outstanding Intern Award" },
    { icon: <Trophy className="w-4 h-4" />, text: "Student Excellence Recognition" },
    { icon: <Award className="w-4 h-4" />, text: "Community Leadership Award" },
  ]

  const skills = {
    programming: ["SQL (3+ years)", "Python (2+ years)"],
    databases: ["PostgreSQL", "SQL Server", "MSSQL", "MySQL"],
    cloud: ["AWS (S3, AWS Glue, Athena, MWAA)"],
    tools: ["Apache Airflow", "Git", "Postman", "GitHub"],
    frameworks: ["PySpark", "Pandas", "Matplotlib", "NumPy", "Scikit-learn", "OpenCV"],
  }

  const projects = [
    {
      title: "Risk Detection Framework for Advanced Nuclear Reactors",
      year: "2024 – Present",
      description:
        "Built a risk detection framework analyzing geopolitical news and policy updates using web scraping, clustering, and automation.",
      technologies: ["Python", "Selenium", "K-Means/DBSCAN", "Data Visualization"],
      status: "In Progress",
    },
    {
      title: "Credit Card Fraud Detection using Random Forest",
      year: "2023",
      description:
        "Developed a Random Forest classifier to identify fraudulent credit card transactions with improved accuracy and interpretability.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      status: "Completed",
    },
    {
      title: "Internal Analytics System – Fusemachines",
      year: "2022 – 2023",
      description:
        "Designed scalable ELT framework for CRM, API, and NoSQL data sources using Airbyte, AWS Glue, and S3.",
      technologies: ["Python", "Airbyte", "AWS", "Superset"],
      status: "Completed",
    },
    {
      title: "Full Stack E-commerce and Booking System",
      year: "2022",
      description:
        "Developed web application with integrated payment processing using React, Node.js, Express.js, and MongoDB.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      status: "Completed",
    },
  ]

  const detailedSkills = {
    "Programming Languages": ["SQL (3+ years)", "Python (2+ years)"],
    "Databases & Tools": ["PostgreSQL", "SQL Server", "MSSQL", "MySQL", "Git", "Postman", "GitHub"],
    "Cloud Technologies": ["AWS S3", "AWS Glue", "Athena", "MWAA"],
    "Orchestration Tools": ["Apache Airflow"],
    "Frameworks & Libraries": ["PySpark", "Pandas", "Matplotlib", "NumPy", "Scikit-learn", "OpenCV"],
    Languages: ["Nepali", "Hindi", "English"],
  }

  const awardsAndCertifications = [
    {
      title: "Winner – AI Hackathon",
      description:
        "Recognized for developing 'Fuse Compliance Monitor', an NLP-based chatbot for compliance monitoring.",
      year: "2024",
      type: "Award",
    },
    {
      title: "Best Final Year Project",
      description:
        "Honored for building a machine learning model for credit card fraud detection using Random Forest algorithm.",
      year: "2023",
      type: "Award",
    },
    {
      title: "Merit-Based Scholarship",
      description: "Awarded academic scholarship during undergraduate studies based on GPA performance.",
      year: "2019-2023",
      type: "Scholarship",
    },
    {
      title: "Outstanding Intern Award",
      description: "Commended by Fusemachines for innovation and performance during the Machine Learning internship.",
      year: "2022",
      type: "Award",
    },
    {
      title: "Student Excellence Recognition",
      description:
        "Recognized by faculty for outstanding academic performance and contribution to research and mentorship.",
      year: "2022",
      type: "Recognition",
    },
    {
      title: "Community Leadership Award",
      description: "Acknowledged for organizing tech meetups and leading workshops on data engineering tools.",
      year: "2023",
      type: "Award",
    },
  ]

  const volunteerWork = [
    {
      title: "Tech Meetup Organizer",
      organization: "Local Tech Community",
      duration: "2022 – Present",
      description:
        "Organize monthly tech meetups focusing on data engineering, machine learning, and cloud technologies. Led workshops for 100+ participants.",
      impact: "Trained 100+ participants",
    },
    {
      title: "Mentor & Instructor",
      organization: "Fusemachines Training Program",
      duration: "2022 – Present",
      description:
        "Conducted training sessions on SQL, Apache Spark, Azure technologies, Apache Kafka, and MongoDB for new data engineering trainees.",
      impact: "Mentored 50+ trainees",
    },
    {
      title: "Workshop Leader",
      organization: "University Tech Club",
      duration: "2021 – 2023",
      description:
        "Led workshops on data engineering tools and platforms, helping students understand practical applications of theoretical concepts.",
      impact: "Educated 200+ students",
    },
  ]

  const photoGallery = [
    {
      id: 1,
      title: "AI Hackathon Winner",
      description: "Winning the AI Hackathon with our NLP-based compliance monitoring solution",
      category: "Hackathon",
      image: "/team-celebrating-hackathon-victory-with-trophy.jpg",
    },
    {
      id: 2,
      title: "Data Engineering Workshop",
      description: "Leading a hands-on workshop on Apache Spark and data pipelines",
      category: "Teaching",
      image: "/instructor-teaching-data-engineering-to-students.jpg",
    },
    {
      id: 3,
      title: "Tech Meetup Presentation",
      description: "Presenting cloud migration strategies at local tech community meetup",
      category: "Community",
      image: "/professional-presenting-at-tech-meetup.jpg",
    },
    {
      id: 4,
      title: "Volunteer Teaching Session",
      description: "Teaching database management systems to undergraduate students",
      category: "Volunteer",
      image: "/volunteer-teaching-computer-science-students.jpg",
    },
    {
      id: 5,
      title: "Project Development",
      description: "Working on the credit card fraud detection machine learning model",
      category: "Project",
      image: "/developer-coding-machine-learning-project.jpg",
    },
    {
      id: 6,
      title: "Team Collaboration",
      description: "Collaborating with the Fusemachines team on cloud migration project",
      category: "Work",
      image: "/team-collaborating-on-data-engineering-project.jpg",
    },
  ]

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(slideIndex)
    setExpandedEducation(slideIndex === 0)
    setExpandedExperience(slideIndex === 2)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    const nextSlide = (currentSlide + 1) % 3
    goToSlide(nextSlide)
  }

  const goToPrevious = () => {
    const prevSlide = (currentSlide - 1 + 3) % 3
    goToSlide(prevSlide)
  }

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photoGallery.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photoGallery.length) % photoGallery.length)
  }

  const goToPhoto = (index: number) => {
    setCurrentPhoto(index)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let lastWheelTime = 0
    const wheelThrottle = 100 // Reduced throttle time for more responsive navigation

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastWheelTime < wheelThrottle) return

      // Detect horizontal scrolling (trackpad swipe)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
        e.preventDefault()
        lastWheelTime = now

        if (e.deltaX > 0) {
          goToNext()
        } else {
          goToPrevious()
        }
      }
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => container.removeEventListener("wheel", handleWheel)
  }, [currentSlide, isTransitioning])

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Attempting to scroll to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      console.log("[v0] Element found, scrolling to:", element)

      // Close mobile menu immediately
      setIsMobileMenuOpen(false)

      // Use getBoundingClientRect to get actual position relative to viewport
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.scrollY || window.pageYOffset
      const targetPosition = rect.top + currentScrollY - 80 // 80px offset for header

      console.log("[v0] Element rect.top:", rect.top)
      console.log("[v0] Current scroll position:", currentScrollY)
      console.log("[v0] Target position:", targetPosition)

      // Ensure we don't scroll to negative positions
      const finalPosition = Math.max(0, targetPosition)

      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      })

      console.log("[v0] Scrolled to position:", finalPosition)
    } else {
      console.log("[v0] Element not found with ID:", sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Shijal Sharma Poudel</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience-section")}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education-section")}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("awards")}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Awards
              </button>
              <button
                onClick={() => scrollToSection("volunteer")}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Volunteer
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-md rounded-lg mt-2">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 w-full text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 w-full text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience-section")}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 w-full text-left"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("education-section")}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 w-full text-left"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 w-full text-left"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("awards")}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 w-full text-left"
                >
                  Awards
                </button>
                <button
                  onClick={() => scrollToSection("volunteer")}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors duration-200 w-full text-left"
                >
                  Volunteer
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - 3D Card Carousel */}
      <section id="hero" className="min-h-screen relative">
        {/* First Page - 3D Card Carousel */}
        <div className="min-h-screen relative pt-16">
          <div className="min-h-screen relative">
            <div
              ref={containerRef}
              className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative z-10"
              style={{ perspective: "1000px" }}
            >
              {/* Navigation */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={goToPrevious} className="text-white/70 hover:text-white">
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="ghost" size="sm" onClick={goToNext} className="text-white/70 hover:text-white">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Main Portfolio Section */}
              <section className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-indigo-900/80" />

                {/* Cards */}
                <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-center">
                  {slides.map((slide, index) => {
                    const isActive = index === currentSlide
                    const isPrev = index === (currentSlide - 1 + 3) % 3
                    const isNext = index === (currentSlide + 1) % 3

                    let transform = ""
                    let zIndex = 1
                    let opacity = 0.3
                    let cardDimensions = ""

                    if (isActive) {
                      transform = "translateX(0) translateZ(0) scale(1)"
                      zIndex = 10
                      opacity = 1
                      cardDimensions = slide.type === "profile" ? "w-[700px] h-[650px]" : "w-[600px] h-[600px]"
                    } else if (isPrev) {
                      transform = "translateX(-100%) translateZ(-200px) scale(0.85) rotateY(25deg)"
                      zIndex = 5
                      opacity = 0.95
                      cardDimensions = "w-[420px] h-[520px]"
                    } else if (isNext) {
                      transform = "translateX(100%) translateZ(-200px) scale(0.85) rotateY(-25deg)"
                      zIndex = 5
                      opacity = 0.95
                      cardDimensions = "w-[420px] h-[520px]"
                    } else {
                      transform = "translateX(0) translateZ(-400px) scale(0.3)"
                      zIndex = 1
                      opacity = 0
                      cardDimensions = "w-[200px] h-[350px]"
                    }

                    return (
                      <div
                        key={slide.id}
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${cardDimensions} transition-all duration-600 ease-in-out`}
                        style={{
                          transform,
                          zIndex,
                          opacity,
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <Card
                          className={`w-full h-full bg-black/20 backdrop-blur-sm border-white/10 text-white flex flex-col shadow-2xl transition-all duration-600 ${
                            isActive ? "overflow-y-auto" : "overflow-hidden"
                          }`}
                        >
                          {/* Education Card */}
                          {slide.type === "education" && (
                            <div className="p-6 flex flex-col h-full">
                              <div className="flex items-center gap-3 mb-4">
                                {slide.icon}
                                <h2 className="text-xl font-bold">{slide.title}</h2>
                              </div>

                              {!isActive ? (
                                <div className="flex-1 space-y-3">
                                  <div>
                                    <h3 className="text-lg font-bold">{slide.content.degree}</h3>
                                    <p className="text-white/80">{slide.content.field}</p>
                                    <p className="text-white/60 text-sm">{slide.content.university}</p>
                                    <p className="text-white/60 text-sm">{slide.content.duration}</p>
                                  </div>

                                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Award className="w-4 h-4" />
                                      <span className="text-sm font-semibold">Highlight</span>
                                    </div>
                                    <p className="text-xs text-white/80">Best Final Year Project Award</p>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex-1 space-y-4 overflow-y-auto">
                                  <div>
                                    <h3 className="text-2xl font-bold mb-2">{slide.content.degree}</h3>
                                    <p className="text-lg text-white/80 mb-1">{slide.content.field}</p>
                                    <p className="text-white/60 mb-2">{slide.content.university}</p>
                                    <p className="text-white/60 text-sm">
                                      {slide.content.duration} • {slide.content.gpa}
                                    </p>
                                  </div>

                                  <div className="mt-4">
                                    <div className="flex items-center gap-2 mb-3">
                                      <BookOpen className="w-4 h-4" />
                                      <h4 className="text-sm font-semibold">Relevant Coursework</h4>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1 text-xs text-white/70">
                                      {slide.content.coursework.map((course, idx) => (
                                        <div key={idx} className="flex items-center gap-1">
                                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                          <span>{course}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Code className="w-4 h-4" />
                                      <h4 className="text-sm font-semibold">Capstone Project</h4>
                                    </div>
                                    <p className="text-xs text-white/80 leading-relaxed">{slide.content.capstone}</p>
                                  </div>

                                  <div className="mt-4">
                                    <div className="flex items-center gap-2 mb-3">
                                      <Trophy className="w-4 h-4" />
                                      <h4 className="text-sm font-semibold">Achievements</h4>
                                    </div>
                                    <div className="space-y-1">
                                      {achievements.slice(0, 4).map((achievement, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-white/80 text-xs">
                                          {achievement.icon}
                                          <span>{achievement.text}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                          {slide.type === "profile" && (
                            <div className="p-6 flex flex-col items-center text-center h-full justify-center">
                              <p className="text-white/80 mb-3">{slide.content.greeting}</p>
                              <h1 className="text-4xl font-bold mb-3 text-balance">{slide.content.name}</h1>
                              <p className="text-xl text-white/90 mb-4">{slide.content.title}</p>

                              <div className="flex items-center gap-2 text-white/70 mb-6">
                                <MapPin className="w-4 h-4" />
                                <span>{slide.content.location}</span>
                              </div>

                              <div className="flex gap-3 mb-6">
                                <Button
                                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                                  size="default"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download CV
                                </Button>
                                <Button
                                  onClick={() => setShowAboutMe(!showAboutMe)}
                                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                                  size="default"
                                >
                                  <User className="w-4 h-4 mr-2" />
                                  About Me
                                </Button>
                              </div>

                              {showAboutMe && (
                                <div className="w-full max-w-md mx-auto mb-6 p-4 bg-white/5 rounded-lg border border-white/10 animate-in slide-in-from-top duration-300">
                                  <div className="flex flex-col items-center gap-4">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                                      <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                                        <img
                                          src={
                                            slide.content.image ||
                                            "/placeholder.svg?height=96&width=96&query=professional headshot" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg" ||
                                            "/placeholder.svg"
                                          }
                                          alt="About Me"
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    </div>

                                    <div className="text-center">
                                      <h3 className="text-lg font-semibold mb-3 text-white">About Me</h3>
                                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                                        {slide.content.about}
                                      </p>

                                      <div className="text-left">
                                        <h4 className="text-sm font-semibold text-white/90 mb-2">Research Interests</h4>
                                        <p className="text-xs text-white/70 leading-relaxed">
                                          {slide.content.researchInterests}
                                        </p>
                                      </div>

                                      <div className="mt-3 pt-3 border-t border-white/10 text-xs text-white/60">
                                        <p>{slide.content.email}</p>
                                        <p>{slide.content.phone}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              <div className="relative">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                                  <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                                    <img
                                      src={
                                        slide.content.image ||
                                        "/placeholder.svg?height=128&width=128&query=professional headshot" ||
                                        "/placeholder.svg"
                                      }
                                      alt="Profile"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-4 mt-4">
                                <a
                                  href="mailto:shijalsharmapoudel@gmail.com"
                                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                  title="Email"
                                >
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                  </svg>
                                </a>
                                <a
                                  href="https://github.com/shijalsharmapoudel"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                  title="GitHub"
                                >
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                                <a
                                  href="https://linkedin.com/in/shijalsharmapoudel"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                  title="LinkedIn"
                                >
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                                <a
                                  href="tel:+9779860560000"
                                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                  title="Phone"
                                >
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}

                          {/* Experience Card */}
                          {slide.type === "experience" && (
                            <div className="p-6 flex flex-col h-full">
                              <div className="flex items-center gap-3 mb-4">
                                {slide.icon}
                                <h2 className="text-xl font-bold">{slide.title}</h2>
                              </div>

                              {!isActive ? (
                                <div className="flex-1 space-y-3">
                                  <div>
                                    <h3 className="text-lg font-bold">Data Engineer</h3>
                                    <p className="text-white/80">Fusemachines</p>
                                    <p className="text-white/60 text-sm">Aug 2022 – Present</p>
                                  </div>

                                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                                    <div className="flex items-center gap-2 mb-2">
                                      <TrendingUp className="w-4 h-4" />
                                      <span className="text-sm font-semibold">Key Achievement</span>
                                    </div>
                                    <p className="text-xs text-white/80">Reduced cloud costs by 90%</p>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex-1 space-y-4 overflow-y-auto">
                                  <div>
                                    <h3 className="text-2xl font-bold mb-2">Data Engineer</h3>
                                    <p className="text-lg text-white/80 mb-1">Fusemachines</p>
                                    <p className="text-white/60 text-sm mb-4">Kathmandu, Nepal • Aug 2022 – Present</p>
                                  </div>

                                  <div className="space-y-6">
                                    {slide.content.positions.map((position, idx) => (
                                      <div
                                        key={idx}
                                        className="space-y-3 pb-4 border-b border-white/10 last:border-b-0"
                                      >
                                        <div>
                                          <h3 className="text-lg font-bold">{position.title}</h3>
                                          <div className="text-white/80 text-sm">
                                            <p className="font-semibold">{position.company}</p>
                                            <p className="text-white/60">
                                              {position.location} • {position.duration}
                                            </p>
                                          </div>
                                        </div>

                                        <div className="space-y-2">
                                          {position.achievements.map((achievement, achievementIdx) => (
                                            <div key={achievementIdx} className="flex items-start gap-2">
                                              <div className="w-1 h-1 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                                              <p className="text-white/70 text-xs leading-relaxed">{achievement}</p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="mt-4 space-y-3">
                                    <div className="flex items-center gap-2 mb-3">
                                      <Code className="w-4 h-4" />
                                      <h3 className="text-sm font-semibold">Key Skills</h3>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 text-xs">
                                      <div>
                                        <span className="text-white/90 font-medium">Programming: </span>
                                        <span className="text-white/70">{skills.programming.join(", ")}</span>
                                      </div>
                                      <div>
                                        <span className="text-white/90 font-medium">Cloud: </span>
                                        <span className="text-white/70">{skills.cloud.join(", ")}</span>
                                      </div>
                                      <div>
                                        <span className="text-white/90 font-medium">Tools: </span>
                                        <span className="text-white/70">{skills.tools.slice(0, 3).join(", ")}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mt-4 space-y-2">
                                    <div className="flex items-center gap-2 mb-3">
                                      <Trophy className="w-4 h-4" />
                                      <h3 className="text-sm font-semibold">Recent Projects</h3>
                                    </div>

                                    {projects.slice(0, 2).map((project, idx) => (
                                      <div key={idx} className="p-2 bg-white/5 rounded border border-white/10">
                                        <h4 className="text-xs font-medium text-white/90">{project.title}</h4>
                                        <p className="text-xs text-white/60 mb-1">{project.year}</p>
                                        <p className="text-xs text-white/70 leading-relaxed">{project.description}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Second Page - Projects and Skills */}
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900">
        <div className="min-h-screen p-8 space-y-16">
          {/* My Projects Section */}
          <section id="projects" className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
              <p className="text-white/70 text-lg">Showcasing my technical expertise through innovative solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <Card
                  key={idx}
                  className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-6 hover:bg-black/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-400" />
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          project.status === "In Progress"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-green-500/20 text-green-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{project.year}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Photo Gallery</h2>
              <p className="text-white/70 text-lg">Moments from hackathons, projects, and volunteer work</p>
            </div>

            <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-8">
              <div className="relative">
                {/* Main Photo Display */}
                <div className="relative h-96 rounded-lg overflow-hidden mb-6">
                  <img
                    src={photoGallery[currentPhoto].image || "/placeholder.svg"}
                    alt={photoGallery[currentPhoto].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Photo Navigation */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsPhotoPlaying(!isPhotoPlaying)}
                      className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
                    >
                      {isPhotoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                  </div>

                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevPhoto}
                      className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextPhoto}
                      className="bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 rounded-full"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Photo Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-4 h-4 text-purple-400" />
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        {photoGallery[currentPhoto].category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{photoGallery[currentPhoto].title}</h3>
                    <p className="text-white/80 text-sm">{photoGallery[currentPhoto].description}</p>
                  </div>
                </div>

                {/* Photo Thumbnails */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {photoGallery.map((photo, idx) => (
                    <button
                      key={photo.id}
                      onClick={() => goToPhoto(idx)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === currentPhoto ? "border-purple-400 scale-105" : "border-white/20 hover:border-white/40"
                      }`}
                    >
                      <img
                        src={photo.image || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Photo Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {photoGallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToPhoto(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentPhoto ? "bg-purple-400" : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </section>

          <section id="experience-section" className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">My Experience</h2>
              <p className="text-white/70 text-lg">Professional journey and key achievements</p>
            </div>

            <div className="space-y-8">
              <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Data Engineer</h3>
                        <p className="text-xl text-purple-300 mb-1">Fusemachines</p>
                        <p className="text-white/60">Kathmandu, Nepal • Aug 2022 – Present</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                          Current Position
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-purple-300 mb-3">Key Achievements</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-white/90">Cloud Migration & Cost Optimization</p>
                              <p className="text-white/70 text-sm leading-relaxed">
                                Played a pivotal role in migrating data pipelines from Azure Synapse to Databricks,
                                implementing the Medallion Architecture (bronze, silver, gold). Reduced monthly cloud
                                costs by 90% and peak costs by 85%. Simplified business logic, automated pipeline
                                triggers using Terraform.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Code className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-white/90">ETL Framework Development</p>
                              <p className="text-white/70 text-sm leading-relaxed">
                                Extracted and ingested data from APIs, Google Sheets, MongoDB, and HubSpot. Created
                                automated data pipelines using Airbyte and Glue Jobs for data transformation and metric
                                generation, integrating AWS S3 with Athena and Superset.
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-white/90">Instructor & Mentor</p>
                              <p className="text-white/70 text-sm leading-relaxed">
                                Conducted training sessions on SQL, Apache Spark, Azure technologies, Apache Kafka, and
                                MongoDB. Mentored new data engineering trainees in advanced topics and practical
                                implementation techniques.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-purple-300 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Python",
                            "SQL",
                            "Apache Spark",
                            "Azure",
                            "Databricks",
                            "AWS",
                            "Terraform",
                            "Apache Kafka",
                            "MongoDB",
                            "Airbyte",
                          ].map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Teaching Assistant</h3>
                        <p className="text-xl text-blue-300 mb-1">Asian School of Management and Technology</p>
                        <p className="text-white/60">Nepal • Jan 2021 – Apr 2021</p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          Previous Role
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-3">Responsibilities</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white/70 text-sm">
                              Assisted in teaching undergraduate courses on Algorithms and Database Management Systems
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white/70 text-sm">
                              Led lab sessions and tutoring, providing hands-on guidance in problem-solving and SQL
                              programming
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-white/70 text-sm">
                              Helped design assignments and assess coding submissions, contributing to collaborative
                              learning environment
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="education-section" className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">My Education</h2>
              <p className="text-white/70 text-lg">Academic foundation and achievements</p>
            </div>

            <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Bachelor of Science in Computer Application</h3>
                      <p className="text-xl text-green-300 mb-1">Tribhuvan University, Nepal</p>
                      <p className="text-white/60">2019 – 2023 • GPA: 3.20/4.00</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Graduated</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-green-300 mb-4">Relevant Coursework</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          "Machine Learning",
                          "Algorithms & Complexity",
                          "Data Structures",
                          "Database Management Systems",
                          "Artificial Intelligence",
                          "Probability & Statistics",
                          "Web Technologies",
                        ].map((course, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-white/80 text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-green-300 mb-4">Academic Achievements</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span className="font-medium text-white/90">Best Final Year Project</span>
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Credit Card Fraud Detection using Random Forest — awarded for outstanding implementation and
                            results
                          </p>
                        </div>

                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-4 h-4 text-blue-400" />
                            <span className="font-medium text-white/90">Merit-Based Scholarship</span>
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Awarded academic scholarship based on GPA performance throughout undergraduate studies
                          </p>
                        </div>

                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-purple-400" />
                            <span className="font-medium text-white/90">Student Excellence Recognition</span>
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Recognized by faculty for outstanding academic performance and contribution to research
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-green-300 mb-4">Research Interests</h4>
                    <p className="text-white/80 leading-relaxed">
                      Leveraging Data for AI, optimization modeling, human-centered system design, behavioral analytics,
                      Data Analysis, machine learning, data-driven decision systems.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
              <p className="text-white/70 text-lg">Technical expertise across multiple domains</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(detailedSkills).map(([category, skillList], idx) => (
                <Card key={idx} className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-bold">{category}</h3>
                  </div>

                  <div className="space-y-2">
                    {skillList.map((skill, skillIdx) => (
                      <div key={skillIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-white/80 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Awards and Certifications Section */}
          <section id="awards" className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Awards & Certifications</h2>
              <p className="text-white/70 text-lg">Recognition for excellence and achievement</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awardsAndCertifications.map((award, idx) => (
                <Card
                  key={idx}
                  className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-6 hover:bg-black/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          award.type === "Award"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : award.type === "Scholarship"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {award.type}
                      </span>
                    </div>
                    <span className="text-white/60 text-sm">{award.year}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{award.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Volunteer Work Section */}
          <section id="volunteer" className="max-w-6xl mx-auto pb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Volunteer Work</h2>
              <p className="text-white/70 text-lg">Giving back to the community through knowledge sharing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerWork.map((work, idx) => (
                <Card
                  key={idx}
                  className="bg-black/20 backdrop-blur-sm border-white/10 text-white p-6 hover:bg-black/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">Volunteer</span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{work.title}</h3>
                  <p className="text-white/70 text-sm mb-1">{work.organization}</p>
                  <p className="text-white/60 text-xs mb-3 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {work.duration}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-3">{work.description}</p>

                  <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 text-sm font-medium">{work.impact}</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
