// projects.js
import MindspacePNG from "../images/mindspace.png"
import KeepupPNG from "../images/keepup.png"
import PpPNG from "../images/pp.png"
import AiasPNG from "../images/aias.png"
import FlimPNG from "../images/flim.png"
import EggbenefitPNG from "../images/Eggbenefit.png"
import BrommaPNG from "../images/bromma.png"
import BookiePNG from "../images/bookie.png"
import NordfjallPNG from "../images/nordfjall.png"

const projects = [
    {
      project: "Photographer Portal",
      info: "Electron.js/React.js/Node.js/SQLite",
      year: "2024",
      description: "This in-house desktop application for Mac and Windows is used by around 150 photographers at Express-Bild. It has 10 tables in an SQLite database and currently features two admin interfaces to manage the Knowledge Base and News. The Photographer Portal streamlines and digitalizes their work and simplifies large image/file uploads from photographers to the company via an FTP server. The software runs both online and offline.",
      src: PpPNG,
      domain: "https://youtu.be/8zDcvNOYkak",
    },
    {
      project: "Mindspace",
      info: "React.js/C#.NET",
      description: "Mindspace is a platform where users can listen to their favorite meditation audio clips and escape from a stressful bubble. Built with React.js and SQLite as a school project, it features an admin interface made in C# .NET for uploading meditations.",
      year: "2023",
      src: MindspacePNG,
      domain: "https://mindspaceapp.vercel.app/",
    },
    // {
    //   project: "KeepUp",
    //   info: "Vue.js/PHP/Laravel",
    //   description: "KeepUp is a stock handling web application allowing users to manage and track items or products.",
    //   year: "2023",
    //   src: KeepupPNG,
    //   domain: "",
    // },
    {
      project: "AIAS",
      info: "React.js/C#.NET",
      description: "An unfinished accounting system that currently supports basic accounting functionalities. Initially designed to utilize ChatGPT's API for support and accounting help, this feature has been removed due to pricing concerns. I personally use this for my photography company.",
      year: "2022",
      src: AiasPNG,
      domain: "https://youtu.be/kUW_k_ok0_E",
    },
    {
      project: "Flim",
      info: "PHP",
      description: "Flim is a simple application where user can create an account and add film, series & documnetaries tips to other users.",
      year: "2022",
      src: FlimPNG,
      domain: "http://minafiler.miun.se/~luha2200/writeable/Webbutveckling_II/Flim/index.php",
    },
    {
      project: "Bookie",
      info: "C#.NET Entity Framework Core",
      description: "A small school project where I created a web application for friends to lend books.",
      year: "2022",
      src: BookiePNG,
      domain: "https://bookieapp.azurewebsites.net/",
    },
    {
      project: "Egg Benedict",
      info: "React.js/C#.NET",
      description: "Egg Benedict is a fictitious resturant. The different dishes is handled from an admin interface and fetched in this web application from an API.",
      year: "2022",
      src: EggbenefitPNG,
      domain: "https://studenter.miun.se/~luha2200/writeable/Webbutveckling_III/Egg%20benefit/klient/pub/index.html",
    },
    {
      project: "Bromma Färdtjänst",
      info: "Vue.js/C#.NET",
      description: "A small demo and school project where I created a web application for Bromma travel serive. Warning, a lot of the functionality does not work and was not either inteded to work. It serves more as a shell for what could potentially be something more complex.",
      year: "2022",
      src: BrommaPNG,
      domain: "https://studenter.miun.se/~luha2200/WEBBANV%c3%84NDBARHET/fardtjanst_projekt_kod/index.html",
    },
    {
      project: "Nordfjäll",
      info: "JavaScript",
      description: "Nordfjäll is a simple E-commerse web application.",
      year: "2022",
      src: NordfjallPNG,
      domain: "https://studenter.miun.se/~luha2200/DATATEKNIK/projekt_datateknik/index.html",
    },
  ] 

  export default projects;