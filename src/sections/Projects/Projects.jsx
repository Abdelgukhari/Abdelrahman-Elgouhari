import styles from './ProjectsStyles.module.css';
import to_do from '../../assets/to_do.png';
import dogcat from '../../assets/dogcat.png';
import portofolio from '../../assets/portofolioapp.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={to_do}
          link="https://github.com/Abdelgukhari/To-Do-List-New"
          h3="Action"
          p="To do Web App"
        />
        <ProjectCard
          src={dogcat}
          link="https://github.com/Abdelgukhari/Cat-Vs-Dog-Image-Classification-CNN-Project"
          h3="Ai pet classifier"
          p="Dog & Cat classifier using AI"
        />
        <ProjectCard
          src={portofolio}
          link="https://github.com/Abdelgukhari/Abdelrahman-Elgouhari"
          h3="Abdelrahman Elgouhari"
          p="Personal portfolio website"
        />
       
      </div>
    </section>
  );
}

export default Projects;
