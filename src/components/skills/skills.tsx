import { Skill } from "../skill/skill";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Skill name="HTML" />
      <Skill name="CSS" />
      <Skill name="JavaScript" />
      <Skill name="React Js" />
      <Skill name="Vue Js" />
      <Skill name="TypeScript" />
      <Skill name="Sass" />
      <Skill name="Bootstrap" />
      <Skill name="Tailwind" />
      <Skill name="Styled Components" />
      <Skill name="Jest" />
      <Skill name="Git" />
      <Skill name="GitHub" />
      <Skill name="Prisma" />
      <Skill name="Node Js" />
      <Skill name="MySQL" />
      <Skill name="PostgreSQL" />
    </section>
  );
};

export { Skills };
