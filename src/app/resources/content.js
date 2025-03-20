import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "David",
  lastName: "Hammond",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  location: "Brooklyn, New York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DavidCHammond",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/david-hammond-c/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hammond.david.c@gmail.com",
  },
  {
  name: "Sketchfab",
  icon: "sketchfab",
  link: "https://sketchfab.com/hammond.david.c",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@davidhammond6933",
  },
  {
    name: "Itch.io",
    icon: "itch",
    link: "https://davidhammond.itch.io/",
  },
];

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Brooklyn-based software engineer versed in Game Development and Web App Development with Full Stack experience
        across multiple robotics companies.  At Refraction AI I built a complex simulator from the ground up, working on both
        Front-End and Back-End development.  At Serve Robotics I modeled the 3D scenes for their simulator built in 
        NVIDIA's Isaac Sim.  Alongside modeling I also wrote python scripts many actors in the scene bringing the virtual world to life.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Serve Robotics",
        timeframe: "2024 - 2025",
        role: "Software Engineer",
        achievements: [
          <>
            Developing new assets to make 1:1 recreations of 
            Los Angeles city areas using Blender and the Omniverse 
            Platform referencing OSM and Point Cloud data.
          </>,
          <>
            Optimizing workflow and implementing best practices while 
            working on large USD projects in a collaborative environment.
          </>,
          <>
            Creating actor scripts using the NVIDIA Isaac Sim Python API to bring the simulated world to life.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Refraction AI",
        timeframe: "2023 - 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Led the design and development of a new training simulator, enabling parallel training of multiple operators, reducing 
            training time by over 50%. Successfully trained 10+ new operators simultaneously, improving efficiency from 1 operator to 
            3-4 operators trained at a time.
          </>,
          <>
            Developed the client side using Python, C++, QML, Uvicorn, and NiceGUI, and built the server using Unreal Engine and 
            Carla, seamlessly integrating with the existing teleoperation environment.
          </>,
          <>
            Designed and implemented a versioning system with 
            developer-friendly tools to streamline iteration and testing.
          </>,
          <>
            Conducted demonstrations and training sessions to showcase new features and updates to operators.
          </>,
          <>
            Integrated CI/CD pipelines, managed pull requests, performed code reviews, and led load/stress testing.
          </>
        ],
        images: [],
      },
      {
        company: "Refraction AI",
        timeframe: "2023 - 2023",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Created a prototype for a training simulator for new robot operators.
          </>,
          <>
            Created custom slack bots to assist in company organization and improve our workflow for operations.
          </>,
          <>
            Participated in engineering standup meetings, sharing feedback 
            and demonstrating new features I implemented in my projects.
          </>,
          <>
            Designed and implemented a new touchscreen user interface across a fleet of 20+ robots that improved customer   
            experience and ease of use.  Also using webhooks to open the robot's side door remotely and receive signals letting
            operators know the door is locked as well.
          </>,
        ],
        images: [],
      },
      {
        company: "Refraction AI",
        timeframe: "2022 - 2023",
        role: "Operations Supervisor/Training Lead",
        achievements: [
          <>
            Managed and assisted 10+ employees across multiple locations at the same time.
          </>,
          <>
            Addressed mechanical and employee issues on a daily basis, 
            in addition to ensuring that operations ran smoothly.
          </>,
          <>
            Constantly maintained contact with our different teams across the country, 
            via slack huddles and google meetings, to 
            ensure that we would have a fix to any problem that came up.
          </>,
          <>
            Assisted in the creation of a new training curriculum for new hires, 
            and trained 20+ employees with that new curriculum.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Texas San Antonio",
        description: <>Studied Computer Science, decided not to finish and pursue engineering roles since I had the chance.</>,
      },
      {
        name: "University of Texas Arlington",
        description: <>Studied nursing, but transfered to San Antonio to pursue a Computer Science degree.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Unreal Engine",
        description: <>I have built multiple complex simulators in my time at Refraction AI, 
        as well as personal small games using Unreal Engine 4/5.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "NVIDIA Omniverse",
        description: <>At Serve Robotics I used Isaac Sim and USD Composer to 
        construct a large 3D scene that was used to train their AI model!</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Blender",
        description: <>At both Refraction AI and Serve Robotics I made many models including 
        robots, street lights, sidewalks, roads, buildings, billboards, etc.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Python",
        description: <>For both simulators I have worked on I have used 
        Python for the Back-End.  I also have experience using
        libraries like NiceGUI for Front-End work.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "C++",
        description: <>Experience working on C++ code at Refraction AI including 
        video encoding, robot control, and robot telemetry.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "QML",
        description: <>I added to the QML programs at Refraction when integrating
         the simulator into the teleoperations platform.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Unity/C#",
        description: <>I have been using Unity alongside C# for 8 years now, and have published a full game!</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Javascript, React, Next.js",
        description: <>My time at Refraction AI I used Javascript to create 
        docs that could be accessed within the simulator(e.g. Patch Notes and How To Guides).
        This site was also made using React and Next.js!</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "AWS, Balena, Docker, Git",
        description: <>Across all my engineering roles I have used these services as part of the development
        ecosystems and I am very familiar with them!</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

export { person, social, about };
