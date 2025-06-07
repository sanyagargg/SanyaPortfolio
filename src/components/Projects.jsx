import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  font-family: 'Press Start 2P', cursive;
  padding-top: 70px;
  min-height: 100vh;
  padding: 4rem 2rem;
  background: url('/projectsbg.png') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;

  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(10, 10, 10, 0.4); /* dark overlay */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 0.85rem;
  margin-bottom: 0.8rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.6rem;
  border-radius: 15px;
  font-size: 0.55rem;
`;

const ProjectLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    color: #1e90ff;
    font-size: 0.6rem;
    text-decoration: underline;

    &:hover {
      color: #63b3ed;
    }
  }
`;

const projects = [
  {
    title: "Charismatic Electronics",
    description: "Full-stack e-commerce platform for transformer & custom electrical products.",
    image: "/project1.png",
    tech: ["React", "Express.js","Node.js", "MongoDB", "NodeMailer"],
    link: "https://github.com/sanyagargg/ecommerce-website",
    live: "https://charismaticelectronics.vercel.app/"
  },
  {
    title: "DesignGenie",
    description: "AI-powered interior design generator based on user preferences.",
    image: "/project2.png",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "Neon SQL", "Drizzle", "Replicate.com", "Stripe", "Clerk"],
    link: "https://github.com/sanyagargg/DesignGenie",
    live: "https://taskapp.example.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React & Styled Components.",
    image: "/project3.png",
    tech: ["React", "Styled Components"],
    link: "https://github.com/sanyagargg/SanyaPortfolio",
    live: "https://portfolio.example.com"
  },
  {
    title: "EmotiCare",
    description: "Mental health awareness platform with self-help and campaign tools.",
    image: "/project4.png",
    tech: ["HTML", "CSS", "Javascript", "Node.js", "Express"],
    link: "https://github.com/sanyagargg/EmotiCare",
    live: "https://emoticare.onrender.com/"
  },
  {
    title: "Severity Classification of Code Smells",
    description: "ML-based severity classifier for code smells using models and LIME.",
    image: "/project5.png",
    tech: ["Python", "Scikit-learn", "XGBoost", "Naïve Bayes", "LIME", "SMOTE", "Pandas", "NumPy"],
    link: "https://github.com/sanyagargg/Severity-Classification-of-Code-Smells",
  }
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>My Recent Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
                  )}
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
