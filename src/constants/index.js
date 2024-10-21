import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate software engineer specializing in full stack development and creating high-performance, scalable web applications. My skills include front-end technologies such as React and Next.js, as well as back-end development with Node.js, MySQL, and PHP. I also have proficiency in several programming languages, including C, C++, Java, JavaScript, along with tools such as HTML, CSS, Tailwind CSS, SQL, and UML.

In addition to my technical expertise, I have strong design and creative video skills, with proficiency in software like After Effects, Illustrator, Figma, and Photoshop. This allows me to bring a visual and creative dimension to my technical projects. Currently, I am seeking a final year project (PFA) to apply my diverse skill set and contribute to ambitious and innovative initiative`;

export const ABOUT_TEXT = `I am a software engineering student in my 4th year, passionate about creating efficient and user-friendly web applications. Although I am still studying, I have gained practical skills by working with various technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity about how things work, and I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.

`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "National School of Applied Sciences of Agadir ",
    company: "ENSAA",
    description: `Second year in the engineering program in Computer Engineering.`,
  },
  {
    year: "2023 - 2024",
    role: "National School of Applied Sciences of Agadir ",
    company: "ENSAA",
    description: ` First year in the engineering program in Computer Engineering.`,

  },
  {
    year: "2021 -2023",
    role: "National School of Applied Sciences of Agadir ",
    company: "ENSAA",
    description: `2021-2022: First year in integrated preparatory classes.
    2022-2023:Second year in integrated preparatory classes`,
    
  },
  {
    year: "2020 -2021",
    role: "Institute of Mines of Marrakech ",
    company: "IMM",
    description: `Field of Study: Industrial Chemistry`,
    
  },
  {
    year: "2020 ",
    role: "French Scientific Baccalaureate ",
    company: "Bac SMF",
    description: `Obtained: 2020
Institution: EL-Bakkali
Location: Ait Melloul-Agadir`,
    
  },
];

export const PROJECTS = [
  {
    title: "Antheor - Plateforme Basique d'Achat d'Or et de Bijoux",
    image: project1,
    description:(
      <>
        Antheor est une plateforme sécurisée pour l'achat d'or de qualité, incluant lingots et bijoux authentiques. Elle garantit des produits certifiés et une expérience d'achat fiable et transparente.<br/> <span className="text-[#A6A9AE]">Découvrez le projet sur GitHub :</span>{" "}
        <a href="https://medazd0.github.io/antheor/" target="_blank" rel="noopener noreferrer" className="text-[#638ED5]">
          Antheor
        </a>
      </>
    ),
    technologies: ["REACT", "TailwingCss", "CSS/HTML", "JavaScript"],
  },
  {
    title: "Pharmacy Management",
    image: project2,
    description:(
    <>
      Ce projet propose le développement d'une application de gestion de pharmacie en Java, automatisant la gestion des médicaments et des stocks tout en assurant la conformité avec les réglementations. L'objectif est d'optimiser les opérations et de réduire les erreurs pour améliorer la rentabilité et la satisfaction des clients.<br />
      Découvrez le projet sur GitHub : 
        <a href="https://github.com/medazd0/parapharmacyProject  " target="_blank" rel="noopener noreferrer" className="text-[#638ED5]">
        parapharmacyProject.
        </a>
      </> ),
    technologies: ["JAVAFX", "JAVA", "MYSQL"],
  },
  {
    title: "Web Developement for exam monitoring management",
    image: project3,
    description:(
      <>
        Ce projet consiste en une application web destinée à la gestion et au suivi des examens. Il permet d'organiser les examens, de surveiller les candidats<br />
        Découvrez le projet sur GitHub : 
          <a href="https://github.com/medazd0/ProfExam" className="text-[#638ED5]">
          ProfProject.
          </a>
        </> ),
    technologies: ["HTML", "CSS", "PHP", "SQL"],
  },
  {
    title: " Basic Web Development for ENSA Agadir",
    image: project4,
    description:(
    <>
    Ce projet présente une procédure d'accès à l'école ainsi qu'une description des clubs et des partenaires de l'institution. Il vise à fournir des informations claires et organisées sur ces aspects essentiels.<br />
    Découvrez le projet sur GitHub : 
      <a href="https://github.com/medazd0/ensaaProj" className="text-[#638ED5]">
      ensaaProj
      </a>
    </> ),
    technologies: ["REACT", "javaScript", "TailwingCSS", "PHP", "SQL"],
  },
];

export const CONTACT = {
  address: "Agadir ",
  phoneNo: "+212637284194 ",
  email: "m.azoud01@gmail.com",
};
