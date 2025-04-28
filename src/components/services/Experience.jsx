import ExperienceCard from '../cards/ExperienceCard'
import "./experience.scss"


const Experience = () => {
  return (
    <div>
    <section >
      <h1 className='header'>Work Experience</h1>

      <h2>Internship Experience</h2>
      <ExperienceCard
        title="Frontend Developer Intern"
        company="Ubulu Africa"
        startDate="May 2024"
        endDate="July 2024"
        description="Worked on improving the user interface and experience using React and Tailwind CSS. Assisted the team in implementing new features and testing."
      />

      <h2>Full-time Experience</h2>
      <ExperienceCard
        title="Frontend Developer"
        company="Ubulu Africa"
        startDate="August 2024"
        endDate="December 2024"
        description="Full-time role focusing on building and scaling frontend solutions for the company, including a major redesign of the website using Next.js and SCSS."
      />
    </section>
  </div>
  )
}

export default Experience