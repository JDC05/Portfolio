import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import me from "./Me.jpg"

export default function App() {
  return (
    <div>
      <main className=" bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-white">
            <h1 className="text-xl font-mono">josephdacosta27@gmail.com</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-purple-800 text-white px-4 py-2 border-none rounded-md"
                  href="Joseph Da Costa - CV.pdf" 
                  download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 font-medium text-purple-800 md:text-6xl">
              JOSEPH DA COSTA - BASMATI PEBBLE - OW
            </h2>
            <h3 className="text-2xl py-2 text-white md:text-3xl">
              University Student
            </h3>
            <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
            Student within the School of Electronic Engineering and Computer Science at Queen Mary University of London.
            A motivated, adaptable, and responsible student who can swiftly master new abilities on their own. 
            Looking for a demanding and creative career in the technology/gaming industry right now.
            </p>
            <div className="text-5xl flex justify-center gap-5 py-3 text-gray-400">
              <a href="https://github.com/JDC05"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/josephdacosta/"><AiFillLinkedin /></a>
            </div>
            <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20">
              <img src={me} alt="" layout="fill" objectFit="cover"/>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h1 className="text-center text-5xl py-1 text-white ">ABOUT ME</h1>
          </div>
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
                Hobbies
              </h3>
              <p className="py-2 text-white">
              Spend my free time going to the gym or playing football to look after my physical and mental health. 
              I am passionate about gaming outside of work and playing competitive games (I am in the top 0.3% of 
              online Rocket League players worldwide). Because of this, I work on game engines such as UE4 and Unity. 
              In my spare time, I read and watch the latest news about Astronomy and Quantum Computing,  on top of that, 
              I am learning to play the guitar.
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-auto ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
                Education
              </h3>
              <p className="py-2 text-white">
              QMUL Undergraduate (BSc) Computer Science - Graduating 2024 First Year Cumulative (Grade Average: 86%)
              </p>
              <p className="py-2 text-white">
              A-Levels - Economics (A*), Mathematics (A*), Physics (A), EPQ (B)
              </p>
              <p className="py-2 text-white">
              GCSEs - 11 GCSEs ranging from grade 9-5 including 8 in Mathematics and Science, 7 in Computer Science
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              Programming skills
              </h3>
              <p className="py-2 text-white">
              Python, Java, HTML, CSS, JavaScript, React, SQL, C#, C++, Php, Typescript, Django, Git, Bootstrap
              </p>
              <p className="py-2 text-white">
              Visual Studio, Eclipse, Microsoft Office, Visual Paradigm, Adobe, Intellij, Wireshark
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              Skills
              </h3>
              <p className="py-2 text-white">
              Excellent time management and organisational skills with experience adhering to strict deadlines for 
              educational assignments, work experience, and game development projects.
              </p>
              <p className="py-2 text-white">
              Been a member of evaluating teams with industry professionals selected by independent game 
              developers to give insight and feedback on early game builds such as ‘You suck at parking’ and several 
              other pre-release titles.
              </p>
              <p className="py-2 text-white">
              Experience in game/level development through playing video games and learning how to operate game engines 
              where I have practiced environment and level building.
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              Achievements / Extracurricular
              </h3>
              <p className="py-2 text-white">
              Acquired in-depth understanding of desktop hardware gained from constructing and 
              upgrading/customising desktop PCs.
              </p>
              <p className="py-2 text-white">
              Member of the QMUL Game development Society in my University.
              </p>
              <p className="py-2 text-white">
              Led a small team to present and pitch a plan to develop a new system for tackling smartphone waste, 
              demonstrating leadership and team working skills.
              </p>
              <p className="py-2 text-white">
              Achieved silver in the United Kingdom Mathematics Trust (UKMT) Maths Challenge in 2018.
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              University Modules
              </h3>
              <p className="py-2 text-white">
              1st Year: Logic and Discrete Structures (89%), Procedural Programming (80%), Computer Systems and Networks (85%),
               Professional and Research Practise (88%) , Automata and Formal Languages (84%), Fundamentals of Web technology 
               (99%), Information Systems Analysis (74%), Object Oriented Programming (88%)
              </p>
              <p className="py-2 text-white">
              2nd Year: Algorithms and Data Structures, Database Systems, Probability and Matrices, Software Engineering, Graphical User Interface, 
              Operating Systems, Internet Protocols and Applications
              </p>
            </div>
            </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h1 className="text-center text-5xl py-1 text-white ">PORTFOLIO</h1>
          </div>
          <div className="flex flex-col gap-5 py-5 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
                Todo List
              </h3>
              <p className="py-2 pb-5 text-white ">
              Using React, I learned to create a todo list using React hooks such as useEffect, useState, and useRef. Therefore
              allowing the user to add, remove, edit todo items. This project has built my confidence in using
              React hooks, event listerners, handlers as well state management
              </p>
              <a className="rounded-full py-2 px-3 text-xs font-bold text-primary border-primary border-2 text-white" href="https://github.com/JDC05/Todo-list">
                GITHUB
              </a>
            </div>           
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
                Unreal Engine
              </h3>
              <p className="py-2 pb-5 text-white ">
              I learned to produce a simple shooter game using blueprints. The aim of the game: hit all the targets 
              in the world using a gun before the time limit and allow the user to restart the game if need be. 
              This project involves level creation, showing the score and time using widget blueprints, 
              and using the modeling mode to create my unique map.
              </p>
              <a className="rounded-full py-2 px-3 text-xs font-bold text-primary border-primary border-2 text-white" href="https://github.com/JDC05/FirstPersonShooterGame">
                GITHUB
              </a>
            </div>           
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              Discord Bot
              </h3>
              <p className="py-2 pb-5 text-white">
              I Learned how to create a Discord Bot using Node and Typescript to automate tasks. I created commands 
              such as auto welcome messages, embeds, and menu roles. On top of that, I learned how to create my own 
              server using MongoDB and connected my Discord Bot to it. Using the database allowed me to add specific 
              features to my bot such as storing data.
              </p>
              <a className="rounded-full py-2 px-3 text-xs font-bold text-primary border-primary border-2 text-white" href="https://github.com/JDC05/DiscordBot">
                GITHUB
              </a>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              Chat Bot Program
              </h3>
              <p className="py-2 pb-5 text-white">
              Through Procedural Programming I created a chatbot whereby a user can have a real conversation about a 
              specific topic. Through the use of file input I/O, the responses output from the user is saved in an 
              external file. Multiple algorithms such as merge and sort were used to optimise the efficiency of the code. 
              Procedural Programming is achieved through abstract data types.
              </p>
              <a className="rounded-full py-2 px-3 text-xs font-bold text-primary border-primary border-2 text-white" href="https://github.com/JDC05/ChatBot5">
                GITHUB
              </a>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              Old Portfolio Website
              </h3>
              <p className="py-2 pb-5 text-white">
              Created an online portfolio that allows users registered against a database to log in and post feedback/comments 
              on my portfolio. This developed my JavaScript, Php, and SQL technical skills and also introduced me to the basic 
              concepts of Bootstrap.
              </p>
              <a className="rounded-full py-2 px-3 text-xs font-bold text-primary border-primary border-2 text-white" href="https://github.com/JDC05/OldWebsite">
                GITHUB
              </a>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 pb-2 text-purple-800 font-bold">
              Trading App Simulator
              </h3>
              <p className="py-2 pb-5 text-white">
              Through Object-Oriented Programming, I created a Trading App Simulator whereby a user can buy/sell stocks via a 
              GUI window using Swing. Other fundamental features used include ArrayLists, Exception handling, Inheritance/interfaces, 
              Polymorphism, File Input/output (using Excel), Overriding, and Encapsulation.
              </p>
              <a className="rounded-full py-2 px-3 text-xs font-bold text-primary border-primary border-2 text-white" href="https://github.com/JDC05/TradingAppSimulator">
                GITHUB
              </a>
            </div>
            </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h1 className="text-center text-5xl py-1 text-white ">WORK EXPERIENCES / COURSES</h1>
          </div>
          <div className="flex flex-col gap-5 py-5 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 text-purple-800 font-bold">
              Roman Catholic Diocese of Southwark and Westminster
              </h3>
              <h6 className="text-sm text-purple-800">
              JUNE 2022 - SEPTEMBER 2022
              </h6>
              <p className="py-2 text-white">
              Member of the ICT team to provide phone support and customer service for over 500 parishes such as resolving computer issues.
              </p>
              <p className="py-2 text-white">
              Developed imaging skills and learned to image laptops and computers by installing internal encryption software used by the parishes.
              </p>
              <p className="py-2 text-white">
              Acquired an understanding of the operation of Domain and active directories in a corporate environment.
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 text-purple-800 font-bold">
              TATA Consultancy services 
              </h3>
              <h6 className="text-sm text-purple-800">
              AUGUST 2019 (2 WEEKS)
              </h6>
              <p className="py-2 text-white">
              Worked on large-scale team projects, sharing ideas with project leads, involving app design, and creating ‘FitBuddy’ 
              via Adobe Illustrator, UX Design, and Wireframing to help users plan and track their fitness progress.
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 text-purple-800 font-bold">
              Barclays Bank 
              </h3>
              <h6 className="text-sm text-purple-800">
              MARCH 2017 (2 WEEKS)
              </h6>
              <p className="py-2 text-white">
              Provided customer assistance gaining excellent verbal communication and problem-solving skills, receiving customer 
              compliments for delivering outstanding service.
              </p>
              <p className="py-2 text-white">
              Demonstrated multitasking ability by using the ASC (Assistant Service Counter) system to aid customers in carrying 
              out different banking queries such as money transfers and paying bills.
              </p>
              <p className="py-2 text-white">
              Responsible for maintaining detailed and sensitive financial records and files.
              </p>
            </div>
            </div>
            </div>
            <div className="basis-1/4 flex-1 ">
            <div className="lg:flex gap-10">
            <div className="text-center p-5 my-10 flex-1">
              <h3 className="text-3xl font-medium pt-8 text-purple-800 font-bold">
              CS50 Web Programming Course by Harvard University
              </h3>
              <h6 className="text-sm text-purple-800">
              SEPTEMBER 2022 - DECEMBER 2022
              </h6>
              <p className="py-2 text-white">
              Enrolled in a CS50’s Web Programming course by Harvard University. The course covers Python, Git, 
              Django, HTML, CSS, SQL, Models and Migrations, and JavaScript.
              </p>
            </div>
            </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

