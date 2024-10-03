import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGit } from 'react-icons/fa';

const Skills = () => (
  <section className="p-8">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="flex space-x-6 text-5xl">
      <FaReact className="text-blue-500" />
      <FaNodeJs className="text-green-500" />
      <FaCss3Alt className="text-blue-700" />
      <FaHtml5 className="text-orange-500" />
      <FaGit className="text-red-500" />
    </div>
  </section>
);

export default Skills;
