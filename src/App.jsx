import './App.css'
import Card from './Card'
import { useState } from 'react'

const resources = [
  {
    id: 1,
    title: "freeCodeCamp",
    category: "Full Stack",
    description: "Free interactive coding lessons covering HTML, CSS, JavaScript, and more. Earn certifications as you go.",
    link: "https://www.freecodecamp.org",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "The Odin Project",
    category: "Web Dev",
    description: "A free full-stack curriculum covering web development from scratch, including real projects.",
    link: "https://www.theodinproject.com",
    difficulty: "Beginner"
  },
  {
    id: 3,
    title: "MDN Web Docs",
    category: "Reference",
    description: "Mozilla's comprehensive documentation for HTML, CSS, and JavaScript. The go-to reference for web devs.",
    link: "https://developer.mozilla.org",
    difficulty: "All Levels"
  },
  {
    id: 4,
    title: "CS50 by Harvard",
    category: "Computer Science",
    description: "Harvard's legendary intro to CS. Covers C, Python, SQL, and web dev. Free to audit on edX.",
    link: "https://cs50.harvard.edu",
    difficulty: "Beginner"
  },
  {
    id: 5,
    title: "JavaScript.info",
    category: "JavaScript",
    description: "The most thorough modern JavaScript tutorial on the web. Covers basics to advanced topics.",
    link: "https://javascript.info",
    difficulty: "Beginner–Intermediate"
  },
  {
    id: 6,
    title: "React Docs (Official)",
    category: "React",
    description: "The official React documentation, rebuilt with interactive examples. Best place to learn React properly.",
    link: "https://react.dev",
    difficulty: "Intermediate"
  },
  {
    id: 7,
    title: "CSS Tricks",
    category: "CSS",
    description: "Articles, guides, and a legendary flexbox/grid reference. Great for CSS deep dives.",
    link: "https://css-tricks.com",
    difficulty: "All Levels"
  },
  {
    id: 8,
    title: "LeetCode",
    category: "DSA / Interviews",
    description: "Practice coding interview problems. Great for sharpening algorithm and data structure skills.",
    link: "https://leetcode.com",
    difficulty: "Intermediate–Advanced"
  },
  {
    id: 9,
    title: "Git & GitHub Docs",
    category: "Version Control",
    description: "Official Git and GitHub documentation. Learn version control, branching, and collaboration workflows.",
    link: "https://docs.github.com",
    difficulty: "Beginner"
  },
  {
    id: 10,
    title: "Roadmap.sh",
    category: "Career Paths",
    description: "Visual roadmaps for becoming a frontend, backend, DevOps, or full-stack developer. Know what to learn next.",
    link: "https://roadmap.sh",
    difficulty: "All Levels"
  }
]

function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sort, setSort] = useState('default')
  const [darkMode, setDarkMode] = useState(true)
  const [favorites, setFavorites] = useState([])

  const categories = ['All', ...new Set(resources.map((r) => r.category))]  // ← ADDED

  const difficultyOrder = {
    'Beginner': 1,
    'Beginner–Intermediate': 2,
    'Intermediate': 3,
    'Intermediate–Advanced': 4,
    'Advanced': 5,
    'All Levels': 6
  }

  const filtered = resources                                                  // ← ONLY ONE
    .filter((r) =>
      activeCategory === 'All' || r.category === activeCategory
    )
    .filter((r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'easiest') return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
      if (sort === 'hardest') return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]
      return 0
    })

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>💻 Tech Resources Board</h1>
        <p>Curated links to help you learn coding & software engineering</p>
        <input
          className="search-bar"
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <div className="toolbar">
        <span className="results-count">{filtered.length} resource{filtered.length !== 1 ? 's' : ''} found</span>
        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort: Default</option>
          <option value="easiest">Sort: Easiest first</option>
          <option value="hardest">Sort: Hardest first</option>
        </select>
      </div>
      <main className="grid">
        {filtered.map((resource) => (
          <Card
            key={resource.id}
            title={resource.title}
            category={resource.category}
            description={resource.description}
            link={resource.link}
            difficulty={resource.difficulty}
            isFavorited={favorites.includes(resource.id)}
            onFavorite={() => toggleFavorite(resource.id)}
          />
        ))}
      </main>
    </div>
  )
}

export default App