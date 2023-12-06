import { NavItems } from "@/models/Header";
import { UserObject } from "@/models/User";


export const userInfo: UserObject = {
    // picture : 'https://avatarfiles.alphacoders.com/896/89615.png'
    name: 'Neeraj Gupta',
    picture1: 'https://i.ibb.co/VDgGKb9/IMG20230319135926-01.jpg',
    picture2: 'https://i.ibb.co/4tRB1Gs/IMG-20221212-215802-958.webp',
    heading: 'I&#39;m  an undergraduate student currently pursuing a Bachelor of Technology (B.Tech) at the <strong style="color: #FF5733">Indian Institute of Information Technology, Allahabad</strong>, with a strong passion for designing elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve developed websites, gained expertise in full-stack web development using cutting-edge technologies to drive innovation, and actively engaged in competitive coding on various platforms.',
    about: `
            <p>Starting in 2020 when I joined the college, I began my journey of exploring different domains within the world of technology, from problem-solving to web development. Currently, I'm actively learning data science. As a creative problem solver with a passion for computer software technologies, I thrive in collaborative environments where I can apply my diverse skillset to tackle complex challenges. I find joy in continuously expanding my horizons.</p>
            <p>When I'm not coding, you can find me exploring the latest trends in tech, experimenting with new programming languages, or enjoying a good book.</p>
            <p>Beyond the digital realm, I'm an enthusiastic football player and enjoy friendly matches with friends whenever I get the chance. I'm also a devoted documentary enthusiast and love diving into captivating stories from around the world. These hobbies help me find balance and inspiration in my life.</p>
            <p>Feel free to drop me a line if you're up for a cool collaboration, have awesome project ideas, or just want to chat about freelance projects. I'm always excited to take on new challenges, turning innovative ideas into reality. Let's achieve the goals together.</p>
            `,
    skills: ['ReactJS', 'NextJS', 'NodeJS', 'ExpressJS', 'AngularJS', 'FireBase', 'RESTful APIs', 'CI/CD', 'Data Structure', 'Algorithm', 'JavaScript', 'Spring Boot', 'C/C++', 'Python', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'Git', 'Github', 'DataBase Management System', 'Operating System', 'Computer Networks'],
}

export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home' },
    about: { label: 'About', page: 'about' },
    projects: { label: 'Projects', page: 'project' },
    resume : {label : 'Resume', page : 'about'},
    contact : {label: 'Contact', page : 'contact'}
}

export const projects = {
    project1: {
        title: "College-In-House-Mailing-System",
        image: "https://i.ibb.co/Yf4skmD/Screenshot-144.png",
        description: "ReactJS, MongoDB, SmtpJS, ExpressJS, NodeJS",
        liveLink: "https://gentle-peplum-moth.cyclic.app/emails/",
        githubLink: "https://github.com/codelord09/College-InHouse-Mailing-System",
    },
    project2: {
        title: "Covid-Dashboard",
        image: "https://i.ibb.co/PFFFtxf/Screenshot-141.png",
        description: "HTML,CSS,Javascript",
        liveLink: "https://codelord09.github.io/WebD-Selection/",
        githubLink: "https://github.com/codelord09/WebD-Selection",
    },
    project3: {
        title: "E-Commerce-Website",
        image: "https://i.ibb.co/KNtfM7b/Screenshot-142.png",
        description: "HTML, CSS, JavaScript, MaterialUI, Bootstrap",
        liveLink: "https://codelord09.github.io/E_Commerce-Website/",
        githubLink: "https://github.com/codelord09/E_Commerce-Website",
    },
    project4: {
        title: "Quiz-React-App",
        image: "https://i.ibb.co/N6Hk22t/Screenshot-143.png",
        description: "ReactJS, Firebase",
        liveLink: "https://codesandbox.io/p/github/codelord09/Quiz-React-App",
        githubLink: "https://codesandbox.io/p/github/codelord09/Quiz-React-App",
    },
    project5: {
        title: "NodeSphere-Social-Backend",
        image: "https://i.ibb.co/MVrZdR0/Screenshot-344.png",
        description: "NodeJS, MongoDB, ExpressJS, JWT, Javascript, RESTful APIs",
        liveLink: "https://github.com/codelord09/Neeraj-Gupta-NodeJs-Backend-Project",
        githubLink: "https://github.com/codelord09/Neeraj-Gupta-NodeJs-Backend-Project",
    },
    project6: {
        title: "Frontend-SQL-Editor-App",
        image: "https://i.ibb.co/cCnY8D0/Screenshot-346.png",
        description: "ReactJS, Tailwind CSS, React Codemirror",
        liveLink: "https://atlan-frontend-sql-app.vercel.app/",
        githubLink: "https://github.com/codelord09/Atlan-frontend-SQL-App",
    }
};




// <img src="https://i.ibb.co/NLtLM3K/IMG-20201226-004827-280.jpg" alt="IMG-20201226-004827-280" border="0">
// <img src="https://i.ibb.co/4tRB1Gs/IMG-20221212-215802-958.webp" alt="IMG-20221212-215802-958" border="0">
// <img src="https://i.ibb.co/QKftQNN/IMG-20221212-215802-704.webp" alt="IMG-20221212-215802-704" border="0">
// <img src="https://i.ibb.co/MVrZdR0/Screenshot-344.png" alt="Screenshot-344" border="0">
// <img src="https://i.ibb.co/cCnY8D0/Screenshot-346.png" alt="Screenshot-346" border="0">