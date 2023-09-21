import React from "react";
import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";

const About: React.FC = () => {
    return (
        <section
            id={headerItems.about.page}
            className="flex flex-col text-center justify-center items-center md:flex-row md:text-start"
        >
            <div>
                <h1 className={"text-6xl my-6"}>About</h1>
                <h2 className="text-3xl my-4" style={{ color: '#FF5733' }}>Get to know me!</h2>
                <div
                    dangerouslySetInnerHTML={{ __html: userInfo.about }}
                    className={"[&>p]:mt-3"}
                ></div>
                <a
                        href="https://drive.google.com/file/d/17asWJPAJKID4-0uudwM-q92ikIwF5yC4/view?usp=sharing" // Replace with the actual path to your resume
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-4 px-10 rounded mt-4 text-xl" // Increased font size using "text-xl" class
                        style={{ display: "inline-block" }}
                    >
                        Resume
                </a>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <Image
                    src={userInfo.picture2}
                    alt=""
                    width={300}
                    height={300}
                    className={"m-auto"}
                />
                <div className="break-words w-4/4 mt-4">
                    {userInfo.skills.map((skill) => (
                        <span
                            className={"bg-gray-200 m-1 p-2 rounded-md inline-block text-sm"}
                            key={skill}
                        >
                            {skill}
                        </span>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default About;



