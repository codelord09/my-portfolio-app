'use client'
import React from "react";
import { headerItems, projects } from "@/constants/constant"; // Import headerItems from your constant file
import Image from "next/image";

const Projects: React.FC = () => {
    return (
        <section
            id={headerItems.projects.page}
            className="flex flex-col text-center justify-center items-center my-40"
        >
            <h1 className={"text-6xl my-6"}>Projects</h1>
            <div className="flex break-words flex-wrap text-center justify-center items-center">
                {Object.keys(projects).map((projectKey: string, index) => {
                    const projectData = projects[projectKey as keyof typeof projects];
                    return (
                        <div key={index} className="mt-4 md:m-4 cursor-pointer text-center">
                            <a href={projectData.liveLink} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={projectData.image}
                                    alt=""
                                    width={350}
                                    height={300}
                                />
                            </a>
                            <h2 className="text-xl font-semibold mt-2 mb-2">{projectData.title}</h2>
                            <p>{projectData.description}</p>
                            <div className="mt-2">
                                <a href={projectData.liveLink} target="_blank" rel="noopener noreferrer">
                                    Live Link
                                </a>{" "}
                                |{" "}
                                <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;


