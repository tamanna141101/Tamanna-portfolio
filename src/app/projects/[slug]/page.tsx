
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    category: "Web Application",
    description:
      "A grocery shopping web application with product categories and product information, built with a responsive interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://bazar-dor-dusky.vercel.app/",
    github: "https://github.com/tamanna141101/Bazar_Dor",
    challenges: [
      "Creating a responsive layout for different screen sizes.",
      "Fetching and displaying product information from an API.",
      "Organizing the interface into reusable components and pages.",
    ],
    improvements: [
      "Improve product search and filtering.",
      "Enhance accessibility and mobile usability.",
      "Continue improving account and authentication features.",
    ],
  },
  {
    slug: "weather-app",
    title: "Weather App",
    category: "Frontend Project",
    description:
      "A weather application that uses a weather API to display information for a searched location.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Weather API"],
    live: "https://tamanna141101.github.io/Weather-App/",
    github: "https://github.com/tamanna141101/Weather-App",
    challenges: [
      "Connecting the application to an external API.",
      "Presenting weather information clearly.",
      "Building a responsive layout.",
    ],
    improvements: [
      "Improve loading and error messages.",
      "Display additional weather details where supported.",
      "Refine the mobile experience.",
    ],
  },
  {
    slug: "facial-emotion-detection",
    title: "Facial Emotion Detection",
    category: "AI / Machine Learning",
    description:
      "An academic AI/ML project focused on facial emotion detection. Visit the repository for the project's implementation details.",
    technologies: ["Python", "Machine Learning", "AI/ML"],
    live: "",
    github: "https://github.com/tamanna141101/Facial_Emotion_Detection",
    challenges: [
      "Preparing data for model development.",
      "Evaluating classification performance.",
      "Organizing and documenting the project workflow.",
    ],
    improvements: [
      "Document the model and evaluation results.",
      "Improve testing and model evaluation.",
      "Explore a user-friendly demonstration interface.",
    ],
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080b16] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white"
        >
          ← Back to portfolio
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
          {project.category}
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-purple-600 px-5 py-3 font-semibold hover:bg-purple-500"
            >
              Live Demo ↗
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:border-purple-400"
          >
            View Source Code ↗
          </a>
        </div>

        <section className="mt-12 rounded-2xl border border-slate-800 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Technology Stack</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm text-purple-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <section className="rounded-2xl border border-slate-800 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold">Development Challenges</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-300">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold">Future Improvements</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-300">
              {project.improvements.map((improvement) => (
                <li key={improvement}>{improvement}</li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400">
          Tamanna Islam · Software Engineer
        </footer>
      </div>
    </main>
  );
}
