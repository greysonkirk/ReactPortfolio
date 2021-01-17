
import bgex from "../repos/BurgerExpress.PNG";
import ct from "../repos/ct.PNG";
import cq from "../repos/codeQuiz.png";
import ed from "../repos/EmpDirec.png";
import nt from "../repos/nt.PNG";
import wa from "../repos/wa.PNG";

export const  repos = [
  {
    id: 1,
    name: "Burger Express",
    link: "https://github.com/greysonkirk/BurgerExpress",
    deployed: "https://arcane-everglades-71244.herokuapp.com/",
    desc:
      "This fun handlebars exercise allows users to input a burger, devour it, throw it up, or delete it. ",
    img: bgex 
  },
  {
    id: 2,
    name: "Chicken Tinder",
    link: "https://github.com/greysonkirk/ChickenTinder",
    deployed: "https://fierce-headland-63080.herokuapp.com/",
    desc:
      "This app uses express, node, handlebars, sequelize, and a MySql db. This app allows a set of users go through a list of restaurants in their area, and once both choose the same restaurants, they are notified.",
    img: ct
  },
  {
    id: 3,
    name: "Code Quiz",
    link: "https://github.com/greysonkirk/CodeQuiz",
    deployed: "https://greysonkirk.github.io/CodeQuiz",
    desc:
      "A fun coding quiz that decrements the time left if the answer is wrong!",
    img: cq 
  },
  {
    id: 4,
    name: "Employee Directory",
    link: "https://github.com/greysonkirk/EmployeeDirectory",
    deployed: "https://safe-bastion-44814.herokuapp.com/",
    desc:
      "React app that pulls 100 random employees from randomuser.me. User is able to search and sort. ",
    img: ed
  },
  {
    id: 5,
    name: "Note Taker",
    link: "https://github.com/greysonkirk/NoteTaker",
    deployed: "https://desolate-wildwood-97708.herokuapp.com/",
    desc:
      "This app helps users take, keep, and delete notes easily. User will input a note and click to the save icon to save a note and if they decide to delete the note, they can click the trashcan icon.",
    img: nt
  },
  {
    id: 6,
    name: "Weather App",
    link: "https://github.com/greysonkirk/WeatherApp",
    deployed: "https://greysonkirk.github.io/WeatherApp/",
    desc:
      "A weather app that allows users to search for a city and see the current weather as well as a five day forcast.",
    img: wa 
  },
];
