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
      url: "https://www.linkedin.com/in/romain-baert/",
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
    "Mon nom est Romain Baert. Je suis étudiant en licence professionnelle métiers de l’informatique : conception, développement et test de logiciels spécialité développement web et mobile ainsi qu'en alternance à Canon." +
     " Je suis passionné des technologies liées aux développement web et mobile et mon objectif est de poursuivre cette passion en apprenant un peu plus tous les jours. "+
     "Je suis actuellement à la recherche d'une alternance dans ce domaine à partir de septembre 2021 jusqu'à août 2023.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projets récents",
  gitHubUsername: "Ampersander", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["chatbot-ai", "forum_histoire","react-native-movie", "portfolio"],
};

// Experience SECTION

const experience = {
    show: true,
    heading: "Expériences",
    navlink: "experience",
    parts: [
      { name: "Stage à Renault Le Mans", description: "Développement web pour mobile (Memor 10), création d'une application qui communique avec une API REST pour la gestion du stocks en temps réel avec des AGV. Technologies utilisées Symfony et React.",
      pdf_img:'', date:'2019 (5 mois)', pdf_url:require('../editable-stuff/formation/Observation_stage.pdf')
      , sec_url:'https://group.renault.com/groupe/implantations/usine-le-mans-aci/',
      sec_url_name:'Site Renault Le Mans',
      pdf_url_name:'Observation Stage',},
      { name: "Alternance à Canon Bretagne", description: "Développement d'applications web, l'une d'entre elle utilisait une API REST qui a été fait conjoitement avec des collégues en Inde dans le but de communiquer avec un ERP SAP pour la gestion des tâches de maintenance. "+
      "Un autre projet consister à la gestion des contrôles d’accès en communiquant avec des ESP32 afin de vérifier un répertoire LDAP.",
      pdf_img:'', date:'2020 - 2021', pdf_url:''
      , sec_url:'https://www.canon-bretagne.fr/',
      sec_url_name:'Site Canon Bretagne',
      pdf_url_name:'', },    
    ],
};

// Formation SECTION
const formation = {
  show: true,
  heading: "Formations",
  navlink: "formation",
  parts: [
    { name: "DUT Informatique à Laval", description: "", 
    pdf_img:'', date:'2017 - 2019',
     pdf_url:require('../editable-stuff/formation/DUT_INFO_2017_2019.pdf')
    , sec_url:'http://www.univ-lemans.fr/fr/formation/catalogue-des-formations/diplome-universitaire-de-technologie-dut-DUT/sciences-technologies-sante-0004/dut-informatique-ADTIXXX_202.html',
    sec_url_name:'Site formation',
    pdf_url_name:'Pdf Formation', },
    { name: "Licence Informatique (Non obtenue) à Angers", description: "",
    pdf_img:'', date:'2019 - 2020', pdf_url:require('../editable-stuff/formation/L3_INFO_2019-2020.pdf')
    ,sec_url:'http://formations.univ-angers.fr/fr/offre-de-formation/licence-lmd-LILMD/sciences-technologies-sante-STS/licence-informatique-IYLBKEAQ.html',
    sec_url_name:'Site formation',
    pdf_url_name:'Pdf Formation',},
    { name: "Licence professionnelle métiers de l’informatique : conception, développement et test de logiciels spécialité développement web et mobile à Orléans"
    , description: "", pdf_img:'', date:'2020 - 2021',
     pdf_url:require('../editable-stuff/formation/LP3_INFO_2020-2021.pdf')
    ,sec_url:'https://www.univ-orleans.fr/fr/iut-orleans/formation/informatique/licence-pro',
    sec_url_name:'Site Formation',
    pdf_url_name:'Pdf Formation', },
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
    "Je suis actuellement à la recherche d'opportunités pour une alternance dans le développement web et mobile. Si vous connaissez des postes disponibles, si vous avez des questions, n'hésitez pas à m'envoyer un courriel.",
  email: "",
};


export { navBar, mainBody, about, repos, skills, experience, formation, getInTouch };
