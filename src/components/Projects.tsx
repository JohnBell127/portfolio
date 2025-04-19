'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    imagePlaceholder: 'w-full h-64 bg-gray-200 flex items-center justify-center',
    githubLink: 'https://github.com/JohnBell127',
    liveLink: 'https://example.com',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities.',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    imagePlaceholder: 'w-full h-64 bg-gray-200 flex items-center justify-center',
    githubLink: 'https://github.com/JohnBell127',
    liveLink: 'https://example.com',
    category: 'Frontend',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that provides detailed forecasts, historical data, and interactive maps with location-based weather information.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
    imagePlaceholder: 'w-full h-64 bg-gray-200 flex items-center justify-center',
    githubLink: 'https://github.com/JohnBell127',
    liveLink: 'https://example.com',
    category: 'Frontend',
    featured: true,
  },
  {
    title: 'AI Image Generator',
    description: 'An application that generates images using AI, with custom prompts and style presets.',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    imagePlaceholder: 'w-full h-64 bg-gray-200 flex items-center justify-center',
    githubLink: 'https://github.com/JohnBell127',
    liveLink: 'https://example.com',
    category: 'AI/ML',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

const Projects = () => {
  const [_selectedCategory, _setSelectedCategory] = useState('All');
  const [_selectedProject, _setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = _selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === _selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => _setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                _selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={project.imagePlaceholder}>
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 