import './App.css'
import Card from './Card'

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
  return (
    <div className="app">
      <header className="header">
        <h1>💻 Tech Resources Board</h1>
        <p>Curated links to help you learn coding & software engineering</p>
      </header>
      <main className="grid">
        {resources.map((resource) => (
          <Card
            key={resource.id}
            title={resource.title}
            category={resource.category}
            description={resource.description}
            link={resource.link}
            difficulty={resource.difficulty}
          />
        ))}
      </main>
    </div>
  )
}

export default App