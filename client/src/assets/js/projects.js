// projects.js
import MindspacePNG from "../images/mindspace.png"
import KeepupPNG from "../images/keepup.png"
import PpPNG from "../images/pp.png"
import AiasPNG from "../images/aias.png"
import FlimPNG from "../images/flim.png"
import EggbenefitPNG from "../images/Eggbenefit.png"
import BrommaPNG from "../images/bromma.png"

const projects = [
    {
      project: "Photographer Portal Desktop Application",
      info: "Electron.js/React.js/Node.js/SQLite",
      year: "2024",
      description: "This in-house desktop application for Mac and Windows is used by around 150 photographers at Express-Bild. It has 10 tables in an SQLite database and currently features two admin interfaces to manage the Knowledge Base and News. The Photographer Portal streamlines and digitalizes their work and simplifies large image/file uploads from photographers to the company via an FTP server. The software runs both online and offline.",
      src: PpPNG,
      domain: "",
    },
    {
      project: "Mindspace Web Application",
      info: "React.js/C#.NET",
      description: "Mindspace is a platform where users can listen to their favorite meditation audio clips and escape from a stressful bubble. Built with React.js and SQLite as a school project, it features an admin interface made in C# .NET for uploading meditations.",
      year: "2023",
      src: MindspacePNG,
      domain: "https://mindspaceapp.vercel.app/",
    },
    {
      project: "KeepUp Web Application",
      info: "Vue.js/PHP/Laravel",
      description: "KeepUp is a stock handling web application allowing users to manage and track items or products.",
      year: "2023",
      src: KeepupPNG,
      domain: "",
    },
    {
      project: "AIAS Artificial Intelligence Accounting System",
      info: "React.js/C#.NET",
      description: "An unfinished accounting system that currently supports basic accounting functionalities. Initially designed to utilize ChatGPT's API for support and accounting help, this feature has been removed due to pricing concerns. I personally use this for my photography company.",
      year: "2022",
      src: AiasPNG,
      domain: "",
    },
    {
      project: "Flim Web Application",
      info: "PHP",
      description: "Flim is a simple application where user can create an account and add film, series & documnetaries tips to other users.",
      year: "2022",
      src: FlimPNG,
      domain: "http://minafiler.miun.se/~luha2200/writeable/Webbutveckling_II/Flim/index.php",
    },
    {
      project: "Restaurant Egg Benedict Application",
      info: "React.js/C#.NET",
      description: "",
      year: "2022",
      src: EggbenefitPNG,
      domain: "https://studenter.miun.se/~luha2200/writeable/Webbutveckling_III/Egg%20benefit/klient/pub/index.html",
    },
    {
      project: "Bookie Web Application",
      info: "Blazor/C#.NET",
      description: "A small school project where I created a web application for friends to lend books.",
      year: "2022",
      src: "",
      domain: "",
    },
    {
      project: "Bromma Färdtjänst Web Application",
      info: "Vue.js/C#.NET",
      description: "",
      year: "2022",
      src: BrommaPNG,
      domain: "https://studenter.miun.se/~luha2200/WEBBANV%c3%84NDBARHET/fardtjanst_projekt_kod/index.html",
    },
    {
      project: "Nordfjäll E-commmerse Web Application",
      info: "JavaScript",
      description: "Nordfjäll is a simple E-commerse web application.",
      year: "2022",
      src: FlimPNG,
      domain: "https://studenter.miun.se/~luha2200/DATATEKNIK/projekt_datateknik/index.html",
    },
  ] 

  export default projects;