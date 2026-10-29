import Link from "next/link";

const skills = [
  { title: "Programming", items: ["C", "Java", "Python", "JavaScript"] },
  { title: "Web Development", items: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "PHP"] },
  { title: "Database & Tools", items: ["SQL", "MongoDB", "Git", "GitHub"] },
  { title: "AI & Machine Learning", items: ["Scikit-learn", "TensorFlow", "PyTorch"] },
];

const projects = [
  {
    title: "Bazar Dor",
    type: "Web Application",
    description:
      "A grocery shopping application featuring product categories and product information with a responsive interface.",
    stack: "Next.js · React · TypeScript · Tailwind CSS",
    slug: "bazar-dor",
    github: "https://github.com/tamanna141101/Bazar_Dor",
    live: "https://bazar-dor-dusky.vercel.app/",
  },
  {
    title: "Weather App",
    type: "Frontend Development",
    description:
      "A weather application that retrieves weather information for a searched location using a weather API.",
    stack: "HTML · CSS · JavaScript · Bootstrap",
    slug: "weather-app",
    github: "https://github.com/tamanna141101/Weather-App",
    live: "https://tamanna141101.github.io/Weather-App/",
  },
  {
    title: "Facial Emotion Detection",
    type: "AI / Machine Learning",
    description:
      "An academic machine learning project focused on facial emotion detection.",
    stack: "Python · Machine Learning",
    slug: "facial-emotion-detection",
    github: "https://github.com/tamanna141101/Facial_Emotion_Detection",
    live: "",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b16] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#home" className="text-xl font-black tracking-wide">
            Tamanna<span className="text-purple-400">.</span>
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300 sm:gap-6">
            <a className="hover:text-purple-300" href="#about">About</a>
            <a className="hover:text-purple-300" href="#skills">Skills</a>
            <a className="hover:text-purple-300" href="#education">Education</a>
            <a className="hover:text-purple-300" href="#experience">Experience</a>
            <a className="hover:text-purple-300" href="#projects">Projects</a>
            <a className="hover:text-purple-300" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="mb-5 font-semibold tracking-[0.25em] text-purple-300">
            HELLO, WORLD! I'M
          </p>
          <h1 className="text-5xl font-black leading-tight sm:text-7xl">
            Tamanna <span className="text-purple-400">Islam</span>
          </h1>
          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Software Engineer
          </h2>
          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            Computer Science and Engineering graduate passionate about web
            development, software engineering, and Artificial Intelligence.
            I enjoy solving problems, learning new technologies, and building
            useful digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500">
              Explore My Work ↘
            </a>
            <a href="#contact" className="rounded-xl border border-slate-600 px-6 py-3 font-semibold hover:border-purple-400">
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
            <a href="https://github.com/tamanna141101" target="_blank" rel="noreferrer" className="hover:text-purple-300">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/tamannaislam14" target="_blank" rel="noreferrer" className="hover:text-purple-300">LinkedIn ↗</a>
          </div>
        </div>

        <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-transparent shadow-2xl shadow-purple-900/30 sm:h-80 sm:w-80">
          <div className="flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-[#111629] text-7xl font-black text-purple-300 sm:h-64 sm:w-64 sm:text-8xl">
            TI
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-white/5 bg-white/[0.025] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">Get to know me</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mt-6 leading-8 text-slate-400">
            I completed my B.Sc. in Computer Science and Engineering from
            R. P. Shaha University with a CGPA of 3.60 out of 4.00. My interests
            include software development, web technologies, machine learning,
            and research. I also enjoy teaching programming and helping learners
            understand technical concepts.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Education", "CSE Graduate"],
              ["Interests", "Software & AI/ML"],
              ["Currently", "Learning & Building"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-[#111629] p-5">
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-2 font-bold text-purple-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">What I work with</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Technical Skills</h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-bold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-3 py-2 text-sm text-purple-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="scroll-mt-24 border-y border-white/5 bg-white/[0.025] px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">My background</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Education</h2>
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#111629] p-6 sm:p-8">
            <p className="text-sm text-purple-300">2023</p>
            <h3 className="mt-2 text-xl font-bold">B.Sc. in Computer Science and Engineering</h3>
            <p className="mt-2 text-slate-400">R. P. Shaha University</p>
            <p className="mt-4 font-semibold">CGPA: 3.60 / 4.00</p>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 mx-auto max-w-4xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">What I've done</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Experience</h2>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-sm text-purple-300">2022 – Present</p>
          <h3 className="mt-2 text-xl font-bold">Programming Tutor</h3>
          <p className="mt-1 text-slate-400">Self-employed</p>
          <p className="mt-4 leading-7 text-slate-400">
            Teach programming and computing concepts, including C, Java, Python,
            ICT, and web development. Help learners strengthen their programming
            fundamentals and problem-solving skills.
          </p>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-y border-white/5 bg-white/[0.025] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.slug} className="flex flex-col rounded-2xl border border-white/10 bg-[#111629] p-6 transition hover:-translate-y-1 hover:border-purple-400/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-xl font-black text-purple-300">
                  0{index + 1}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-purple-300">{project.type}</p>
                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
                <p className="mt-5 text-xs leading-6 text-slate-300">{project.stack}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <Link href={`/projects/${project.slug}`} className="font-semibold text-purple-300 hover:text-white">Details ↗</Link>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-purple-300">GitHub ↗</a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-purple-300">Live Demo ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 mx-auto max-w-4xl px-5 py-20">
        <div className="rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-indigo-500/5 p-7 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-300">Let's connect</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Contact Me</h2>
          <p className="mt-5 leading-8 text-slate-400">
            Interested in working together, discussing a project, or connecting
            about software development and AI research? Feel free to reach out.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="https://github.com/tamanna141101" target="_blank" rel="noreferrer" className="rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/tamannaislam14" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-600 px-5 py-3 font-semibold hover:border-purple-400">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
        ©  Tamanna Islam · Software Engineer
      </footer>
    </main>
  );
}