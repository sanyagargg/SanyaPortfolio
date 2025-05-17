import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding-top: 70px; // Add padding for navbar
  min-height: 100vh;
  padding: 4rem 2rem;
  background: url('/projectsbg.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
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
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  a {
    color: #1e90ff;
    font-size: 0.9rem;
    text-decoration: underline;

    &:hover {
      color: #63b3ed;
    }
  }
`;

const projects = [
  {
    title: "Charismatic Electronics",
    description: "A full-stack custom e-commerce platform for Charismatic Electronics, a company specializing in transformers and custom electrical products.",
    image: "/project1.png",
    tech: ["React", "Express.js","Node.js", "MongoDB", "NodeMailer"],
    link: "https://github.com/sanyagargg/ecommerce-website",
    live: "https://charismaticelectronics.vercel.app/"
  },
  {
    title: "DesignGenie",
    description: "An AI-powered full-stack web application that allows users to generate and visualize stunning interior designs based on their preferences.",
    image: "/project2.png",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "Neon Postgres SQL", "Drizzle ORM","Replicate.com for API","Stripe","Clerk" ],
    link: "https://github.com/sanyagargg/DesignGenie",
    live: "https://taskapp.example.com"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React",
    image: "/project3.png",
    tech: ["React", "Styled Components"],
    link: "https://github.com/sanyagargg/SanyaPortfolio",
    live: "https://portfolio.example.com"
  },
  {
    title: "EmotiCare",
    description: "It provides ease-of-use to potential viewers who wish to learn about mental health, help themselves in their mental struggles, help others, or support campaigns promoting mental health awareness.",
    image: "/project4.png",
    tech: ["HTML", "CSS", "Javascript", "Node.js", "Express"],
    link: "https://github.com/sanyagargg/EmotiCare",
    live: "https://emoticare.onrender.com/"
  },
  {
    title: "Severity Classification of Code Smells",
    description: "This project focuses on classifying the severity of code smells using various machine learning models, helping developers prioritize refactoring efforts. It uses techniques like regression, multinomial, and ordinal classification to measure code quality. Additionally, the LIME algorithm is used for model interpretability, making predictions easier to understand.",
    image: "/project5.png",
    tech: ["Python", "Scikit-learn", "XGBoost", "Naïve Bayes", "LIME", "SMOTE", "Pandas", "NumPy", "Jupyter Notebooks"],
    link: "https://github.com/sanyagargg/Severity-Classification-of-Code-Smells",
  }
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>My Projects</Title>
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
