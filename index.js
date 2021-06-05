import { h, render, Component } from "./lib/preact.js";
import ripplet from "./lib/ripplet.js";
/** @jsx h */

document.addEventListener("DOMContentLoaded", () => {
  // const searchButton = document.getElementById("search-button");
  // searchButton.onclick = (e) => {
  //   ripplet(e);
  //   e.preventDefault();
  // };
  const nav = document.querySelector("nav");
  const icon = document.querySelector(".navbarBrand");

  class ModeSwitcher extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dark: true
      };
      /*
      false - Light mode
      true - Dark mode
      */
    }

    renderTheme(dark) {
      if (dark) {
        document.body.classList.remove("bg-light");
        document.body.classList.add("bg-black");
        document.body.classList.remove("text-dark");
        document.body.classList.add("text-light");
        nav.classList.remove("navbar-light");
        nav.classList.add("navbar-dark");
        icon.classList.remove("text-dark");
        icon.classList.add("text-light");
      } else {
        document.body.classList.remove("bg-black");
        document.body.classList.add("bg-light");
        document.body.classList.remove("text-light");
        document.body.classList.add("text-dark");
        nav.classList.remove("navbar-dark");
        nav.classList.add("navbar-light");
        icon.classList.remove("text-light");
        icon.classList.add("text-dark");
      }
    }

    render() {
      return h("button", {
        className: `rounded-circle m-0 border-0 p-3 shadow mode-switcher ${this.state.dark ? "bg-dark text-light" : "bg-light text-dark"}`,
        onPointerEnter: e => ripplet(e),
        onClick: () => {
          this.setState(state => ({
            dark: !state.dark
          }));
          this.renderTheme(this.state.dark);
        }
      }, !this.state.dark ? h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-sun"
      }, h("circle", {
        cx: "12",
        cy: "12",
        r: "5"
      }), h("line", {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "3"
      }), h("line", {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }), h("line", {
        x1: "4.22",
        y1: "4.22",
        x2: "5.64",
        y2: "5.64"
      }), h("line", {
        x1: "18.36",
        y1: "18.36",
        x2: "19.78",
        y2: "19.78"
      }), h("line", {
        x1: "1",
        y1: "12",
        x2: "3",
        y2: "12"
      }), h("line", {
        x1: "21",
        y1: "12",
        x2: "23",
        y2: "12"
      }), h("line", {
        x1: "4.22",
        y1: "19.78",
        x2: "5.64",
        y2: "18.36"
      }), h("line", {
        x1: "18.36",
        y1: "5.64",
        x2: "19.78",
        y2: "4.22"
      })) : h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-moon"
      }, h("path", {
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      })));
    }

  }

  class Search extends Component {
    render() {
      return h("input", {
        className: "form-control border-bottom border-dark border-1 d-flex me-2",
        type: "search",
        placeholder: "Search something!",
        "aria-label": "Search"
      });
    }

  }

  const searchContainer = document.getElementById("search-container");
  render(h(ModeSwitcher, null), document.body);
  render(h(Search, null), searchContainer);
  /* function createParticle(particlesElement) {
  const ranges = [
    {
      min: 3,
      max: 20,
    },
    {
      min: 80,
      max: 97,
    },
  ];
   const randomNumbers = ranges.map((e) =>
    Math.floor(Math.random() * (e.max - e.min + 1) + e.min)
  );
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.classList.add("bg-secondary");
  const randomNumber =
    randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
  console.log(randomNumber);
  particle.style.left = `${randomNumber}vw`;
  particlesElement.appendChild(particle);
  setTimeout(() => {
    particle.style.animation = "particle 12s linear 1, fade 5s linear 1";
    setTimeout(() => {
      particle.remove();
    }, 5000);
  }, Math.floor(Math.random() * 6000));
  }
  */
});