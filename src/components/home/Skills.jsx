// components/home/Skills.jsx
import { skills } from '../../data/skills'
import SkillCard from '../cards/SkillCard'
import SectionTitle from '../ui/SectionTitle'

export default function Skills() {
  return (
    <section id="skills">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
      </div>
    </section>
  )
}