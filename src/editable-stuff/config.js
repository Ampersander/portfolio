// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Romain",
  middleName: "",
  lastName: "Baert",
  message: "Développeur Full Stack",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Ampersander",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/romain-baert-768542184/",
    },
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "À propos de moi",
  imageLink: require("../editable-stuff/baertromain.jpg"),
  imageSize: 375,
  message:
    "Mon nom est Romain Baert. Je suis étudiant en Licence professionnelle métiers de l’informatique : conception, développement et test de logiciels spécialité développement web et mobile ainsi qu'en alternance à Canon." +
     " Je suis passionné des technologies liées aux développement web et mobile et mon objectif est de poursuivre cette passion en apprenant un peu plus tout les jours."+
     "Je suis actuellement à la recherche d'une alternance dans ce domaine à partir de septembre 2021 à août 2023.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projets récent",
  gitHubUsername: "Ampersander", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Experience SECTION

const experience = {
    show: true,
    heading: "Expériences",
    navlink: "experience",
    parts: [
      { name: "Renault aux Mans", description: "Développement web mobile, pour la gestion du stocks en temps réel avec les AGV. Technologie utilisé Symfony et React.",
       img:'test', date:'2019'},
      { name: "Canon à Liffré", description: "Développement d’applications web, pour la gestion des tâches de maintenance et pour la gestion des contrôles d’accès. ",
       img:'test', date:'2020 - 2021' },    
    ],
};

// Diplomes SECTION
const diplome = {
  show: true,
  heading: "Formations",
  navlink: "formation",
  parts: [
    { name: "DUT Informatique à Laval", description: "fdgsdqfdfdsf", 
    img:'test', date:'2017 - 2019', pdfInfo:'', },
    { name: "Licence Informatique (Non obtenue) à Angers", description: "qdsffddfsqsffsdfsd",
     img:'test', date:'2019 - 2020', pdfInfo:'',},
    { name: "Licence professionnelle Licence professionnelle métiers de l’informatique : conception, développement et test de logiciels spécialité développement web et mobile à Orléans"
    , description: "QSDFDFQSQFSDFD", img:'test', date:'2020 - 2021', pdfInfo:'', },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Compétences",
  hardSkills: [
    { name: "JavaScript", value: 85 },
    { name: "HTML/CSS", value: 80 },
    { name: "SQL", value: 75 },
    { name: "PHP", value: 75 },
    { name: "Git", value: 75 },
    { name: "JQUERY", value: 75 },
    { name: "Bootstrap", value: 70 },
    { name: "Python", value: 65 },
    { name: "Java", value: 65 },
    { name: "XML", value: 65 },
    { name: "Docker", value: 65 },
    { name: "React", value: 60 },
    { name: "Symfony", value: 60 },
    { name: "Django", value: 55 },
    { name: "C#", value: 55 },
    { name: "SvelteJS", value: 50 },
    { name: "Wordpress", value: 50 },
    { name: "C/C++", value: 40 },
    { name: "AngularJS", value: 40 },
    { name: "Unity", value: 40 },
  ],
  softSkills: [
    { name: "Collaboration", value: 90 },
    { name: "Positivité", value: 85 },
    { name: "Adaptabilité", value: 80 },
    { name: "Résolution de problème", value: 75 },
    { name: "UML", value: 75 },
    { name: "Organisation", value: 75 },
    { name: "Anglais", value: 66 },
    { name: "Espagnol", value: 33 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact",
  message:
    "Je suis actuellement à la recherche d'opportunités pour une alternance dans le développement web et mobile. Si vous connaissez des postes disponibles, si vous avez des questions ou si vous voulez simplement dire bonjour, n'hésitez pas à m'envoyer un courriel.",
  email: "",
};


export { navBar, mainBody, about, repos, skills, experience, diplome, getInTouch };
