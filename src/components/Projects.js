import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    name: 'Project 1',
    description: 'Description of project 1.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/yourusername/project1'
  },
  {
    name: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Python', 'Django'],
    githubLink: 'https://github.com/yourusername/project2'
  },
  {
    name: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Python', 'Django'],
    githubLink: 'https://github.com/yourusername/project2'
  },
  {
    name: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Python', 'Django'],
    githubLink: 'https://github.com/yourusername/project2'
  },
  {
    name: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Python', 'Django'],
    githubLink: 'https://github.com/yourusername/project2'
  },
  {
    name: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Python', 'Django'],
    githubLink: 'https://github.com/yourusername/project2'
  },

  {
    name: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Python', 'Django'],
    githubLink: 'https://github.com/yourusername/project2'
  },
  {
    name: 'Project 2',
    description: 'Description of project 2.',
    technologies: ['Python', 'Django'],
    githubLink: 'https://github.com/yourusername/project2'
  },
  
  // More projects...
];

function Projects() {
  return (
    <Container id="projects">
      <h1>Projects</h1>
      <br>
      </br>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    Technologies used: {project.technologies.join(', ')}
                  </small>
                </Card.Text>
                <Card.Link href={project.githubLink} target="_blank">
                  View on GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
