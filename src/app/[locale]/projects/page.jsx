"use client";

import ProjectCard from "../../../components/ProjectCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("MyProjects");

  const projectData = [
    {
      image: "/work/owl.png",
      category: "wordpress",
      name: `${t("project_name6")}`,
      description: `${t("project_desc6")}`,
      link: "https://owlrightkids.com/",
      github: '/',
    },
    {
      image: "/work/mad.png",
      category: "wordpress",
      name: `${t("project_name7")}`,
      description: `${t("project_desc7")}`,
      link: "https://mademoiselledorota.com/",
      github: '/',
    },
    {
      image: "/work/pogotowie.png",
      category: "wordpress",
      name: `${t("project_name8")}`,
      description: `${t("project_desc8")}`,
      link: "https://pogotowietechniczne.eu/",
      github: '/',
    },
    {
      image: "/work/chemlogika.png",
      category: "wordpress",
      name: `${t("project_name9")}`,
      description: `${t("project_desc9")}`,
      link: "https://chemlogika.pl/",
      github: '/',
    },
    {
      image: "/work/jjr.png",
      category: "wordpress",
      name: `${t("project_name10")}`,
      description: `${t("project_desc10")}`,
      link: "https://jjrwindowsandgutters.co.uk/",
      github: '/',
    },
    {
      image: "/work/5.png",
      category: "fullstack",
      name: `${t("project_name5")}`,
      description: `${t("project_desc5")}`,
      link: "https://www.bwearing.pl/",
      github: "/",
    },
    {
      image: "/work/1.png",
      category: "fullstack",
      name: `${t("project_name1")}`,
      description: `${t("project_desc1")}`,
      link: "https://e-shop-example.vercel.app/",
      github: "/",
    },
    {
      image: "/work/2.png",
      category: "react js",
      name: `${t("project_name2")}`,
      description: `${t("project_desc2")}`,
      link: "https://3dportfolio-liard.vercel.app/",
      github: "https://github.com/Cinamon88/my_portfolio",
    },
    {
      image: "/work/3.png",
      category: `fullstack`,
      name: `${t("project_name3")}`,
      description: `${t("project_desc3")}`,
      link: "https://furnitureshop.cinamon88.repl.co",
      github: "https://github.com/Cinamon88/FurnitureShop",
    },
    {
      image: "/work/4.png",
      category: "next js",
      name: `${t("project_name4")}`,
      description: `${t("project_desc4")}`,
      link: "https://ecopudelka-ecommerce.vercel.app/",
      github: "/",
    }
  ];

  const uniqueCategories = [
    `${t("category")}`,
    ...new Set(projectData.map((item) => item.category)),
  ];

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState(`${t("category")}`);

  const filteredProjects = projectData.filter((project) => {
    return category === `${t("category")}`
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {t("subheading")}
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 md:max-w-[840px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px]"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
