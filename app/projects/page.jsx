'use client'

import ProjectCard from "../../components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
      image: '/work/1.png',
      category: 'fullstack',
      name: 'E-Commerce Shop',
      description: 'Fullstack official ecommerce shop where you can buy boxes :) TypeScript & NextJS 14 used. Connected with Stripe & MongoDB.',
      link: 'https://www.ecopudelka.pl/',
      github: '/',
  },
  {
      image: '/work/2.png',
      category: 'react js',
      name: 'Portfolio',
      description: 'Personal Portfolio with cool 3d animations. Built with React & Vite. EmailJS connected.',
      link: 'https://3dportfolio-liard.vercel.app/',
      github: 'https://github.com/Cinamon88/my_portfolio',
  },
  {
      image: '/work/3.png',
      category: 'team projects',
      name: 'Furniture Shop',
      description: 'This team project is a furniture store website, in accordance with the guidelines from the client. Used React, Redux and Bootstrap.',
      link: 'https://furnitureshop.cinamon88.repl.co',
      github: 'https://github.com/Cinamon88/FurnitureShop',
  },
  {
      image: '/work/4.png',
      category: 'next js',
      name: 'Online Shop',
      description: 'Online shop where you can buy boxes :) React & NextJS 12 used. Connected with Stripe & Sanity.',
      link: 'https://ecopudelka-ecommerce.vercel.app/',
      github: '/',
  },
  // {
  //     image: '/work/3.png',
  //     category: 'fullstack',
  //     name: '',
  //     description: 'Lorem ipsum',
  //     link: '/',
  //     github: '/',
  // },
]

const uniqueCategories = ['all projects', ...new Set(projectData.map((item) => item.category))];

const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');
  
  const filteredProjects = projectData.filter(project => {
    return category === 'all projects' ? project : project.category === category;
  });



  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger 
                  onClick={() => setCategory(category)}
                  value={category} 
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                    {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects