'use client';

import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    institution: 'St. Francis Xavier University',
    degree: 'Bachelor of Science in Computer Science',
    minor: 'Mathematics',
    year: '2020 - 2024',
    relevantCourses: [
      'Data Structures and Algorithms',
      'Software Development',
      'Database Management Systems',
      'Operating Systems',
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            My academic journey and continuous learning
          </p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                      <FaGraduationCap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                    <p className="mt-1 text-lg text-indigo-600">{edu.degree}</p>
                    <p className="mt-1 text-sm text-indigo-500">Minor in {edu.minor}</p>
                    <p className="mt-1 text-sm text-gray-500">{edu.year}</p>
                  </div>
                </div>

                {edu.relevantCourses && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900">Relevant Courses:</h4>
                    <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-center">
                          <svg className="h-4 w-4 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 