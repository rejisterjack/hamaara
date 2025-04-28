import { useState, useEffect } from "react"
import { Link, Events, scrollSpy, scroller } from "react-scroll"
import "./navbar.scss"

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Nav items with corresponding section IDs
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Our Project", id: "our-project" },
    { name: "Invest Now", id: "invest-now" },
  ]

  // Function to handle manual scrolling to section (for buttons)
  const scrollToSection = (id) => {
    setMobileMenuOpen(false) // Close mobile menu when navigating
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: 0,
    })
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Handle navigation item click
  const handleNavItemClick = (name) => {
    setActiveTab(name)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    // Register events for scroll spy to update active tab
    Events.scrollEvent.register("begin", () => {})
    Events.scrollEvent.register("end", () => {})

    // Initialize scrollSpy
    scrollSpy.update()

    // Set active section on page load
    const handleScrollUpdate = () => {
      const scrollPosition = window.scrollY

      navItems.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveTab(item.name)
          }
        }
      })
    }

    // Listen for scroll events
    window.addEventListener("scroll", handleScrollUpdate)
    handleScrollUpdate() // Call once to set initial state

    // Clean up
    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
      window.removeEventListener("scroll", handleScrollUpdate)
    }
  }, [])

  return (
    <div className="navbar">
      <div className="left">
        <img src="/logo.png" alt="Hamaara Logo" />
        <h1>Hamaara</h1>
      </div>

      <div className="middle">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={activeTab === item.name ? "active" : ""}
              onClick={() => setActiveTab(item.name)}
            >
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={800}
                offset={0}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="right">
        <button
          className="get-in-touch"
          onClick={() => scrollToSection("contact-form")}
        >
          Get in Touch
        </button>
        <button
          className="invest"
          onClick={() => scrollToSection("invest-now")}
        >
          Invest
        </button>
      </div>

      {/* Mobile menu button (hamburger) */}
      <div 
        className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={activeTab === item.name ? "active" : ""}
            >
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={800}
                offset={0}
                onClick={() => handleNavItemClick(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-buttons">
          <button
            className="get-in-touch"
            onClick={() => scrollToSection("contact-form")}
          >
            Get in Touch
          </button>
          <button
            className="invest"
            onClick={() => scrollToSection("invest-now")}
          >
            Invest
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
