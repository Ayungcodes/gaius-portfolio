// components imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="selection:bg-zinc-300 dark:selection:bg-zinc-700 selection:text-stone-900 dark:selection:text-stone-200">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;

// db.employees.insertMany([
//   {
//     name: "John Carter",
//     age: 28,
//     skills: [
//       { name: "JavaScript", level: 9 },
//       { name: "React", level: 8 },
//       { name: "Node.js", level: 8 }
//     ],
//     hobbies: ["Gaming", "Photography", "Traveling"],
//     isDeveloper: true
//   },
//   {
//     name: "Sophia Williams",
//     age: 31,
//     skills: [
//       { name: "Python", level: 10 },
//       { name: "Django", level: 9 },
//       { name: "PostgreSQL", level: 8 }
//     ],
//     hobbies: ["Reading", "Chess", "Hiking"],
//     isDeveloper: true
//   },
//   {
//     name: "Michael Brown",
//     age: 25,
//     skills: [
//       { name: "TypeScript", level: 8 },
//       { name: "Angular", level: 7 },
//       { name: "RxJS", level: 7 }
//     ],
//     hobbies: ["Cycling", "Movies", "Cooking"],
//     isDeveloper: true
//   },
//   {
//     name: "Emma Johnson",
//     age: 29,
//     skills: [
//       { name: "Java", level: 9 },
//       { name: "Spring Boot", level: 8 },
//       { name: "MySQL", level: 8 }
//     ],
//     hobbies: ["Painting", "Yoga", "Traveling"],
//     isDeveloper: true
//   },
//   {
//     name: "Daniel Smith",
//     age: 35,
//     skills: [
//       { name: "C#", level: 9 },
//       { name: ".NET", level: 9 },
//       { name: "Azure", level: 8 }
//     ],
//     hobbies: ["Fishing", "Reading", "Football"],
//     isDeveloper: true
//   },
//   {
//     name: "Olivia Davis",
//     age: 27,
//     skills: [
//       { name: "HTML", level: 10 },
//       { name: "CSS", level: 9 },
//       { name: "Tailwind CSS", level: 9 }
//     ],
//     hobbies: ["Fashion", "Photography", "Music"],
//     isDeveloper: true
//   },
//   {
//     name: "James Wilson",
//     age: 33,
//     skills: [
//       { name: "Go", level: 8 },
//       { name: "Docker", level: 9 },
//       { name: "Kubernetes", level: 8 }
//     ],
//     hobbies: ["Running", "Camping", "Gaming"],
//     isDeveloper: true
//   },
//   {
//     name: "Ava Martinez",
//     age: 24,
//     skills: [
//       { name: "Vue.js", level: 8 },
//       { name: "JavaScript", level: 9 },
//       { name: "Firebase", level: 7 }
//     ],
//     hobbies: ["Drawing", "Swimming", "Blogging"],
//     isDeveloper: true
//   },
//   {
//     name: "Ethan Taylor",
//     age: 30,
//     skills: [
//       { name: "PHP", level: 8 },
//       { name: "Laravel", level: 9 },
//       { name: "Redis", level: 7 }
//     ],
//     hobbies: ["Cooking", "Traveling", "Music"],
//     isDeveloper: true
//   },
//   {
//     name: "Mia Anderson",
//     age: 26,
//     skills: [
//       { name: "Swift", level: 8 },
//       { name: "iOS", level: 9 },
//       { name: "Xcode", level: 8 }
//     ],
//     hobbies: ["Photography", "Running", "Dancing"],
//     isDeveloper: true
//   },
//   {
//     name: "William Thomas",
//     age: 38,
//     skills: [
//       { name: "Rust", level: 8 },
//       { name: "Linux", level: 10 },
//       { name: "Git", level: 9 }
//     ],
//     hobbies: ["Woodworking", "Chess", "Cycling"],
//     isDeveloper: true
//   },
//   {
//     name: "Charlotte Moore",
//     age: 29,
//     skills: [
//       { name: "Kotlin", level: 9 },
//       { name: "Android", level: 9 },
//       { name: "SQLite", level: 8 }
//     ],
//     hobbies: ["Hiking", "Cooking", "Movies"],
//     isDeveloper: true
//   },
//   {
//     name: "Benjamin Harris",
//     age: 34,
//     skills: [
//       { name: "MongoDB", level: 9 },
//       { name: "Express.js", level: 8 },
//       { name: "Node.js", level: 9 }
//     ],
//     hobbies: ["Traveling", "Basketball", "Music"],
//     isDeveloper: true
//   },
//   {
//     name: "Amelia Clark",
//     age: 23,
//     skills: [
//       { name: "Next.js", level: 8 },
//       { name: "React", level: 9 },
//       { name: "GraphQL", level: 7 }
//     ],
//     hobbies: ["Reading", "Yoga", "Painting"],
//     isDeveloper: true
//   },
//   {
//     name: "Lucas Walker",
//     age: 32,
//     skills: [
//       { name: "AWS", level: 9 },
//       { name: "Terraform", level: 8 },
//       { name: "CI/CD", level: 9 }
//     ],
//     hobbies: ["Hiking", "Gaming", "Podcasts"],
//     isDeveloper: true
//   }
// ])

// db.employees.updateMany(
//   {
//     skills: {
//       $elemMatch: { name: "JavaScript", level: { $gt: 7 } },
//     },
//   },
//   {
//     $set: { "skills.$.expert": true },
//   },
// );

// db.employees.find({
//   skills: {
//     $elemMatch: { name: "JavaScript", level: { $gt: 7 } },
//   },
// });

// db.employees.updateOne(
//   {name: "William Thomas"},
//   {
//     $addToSet: {
//       skills: { name: "Python", level: 8, expert: true }
//     }
//   }
// )
