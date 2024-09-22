import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

import testbuddy from "public/images/testbuddy.jpg";
import crackyour from "public/images/crackyour.jpg";
import gamef from "public/images/gamef.jpg";
import gans from "public/images/gans.png";
import grpgpt from "public/images/groupgpt.jpg";
export const products = [
  {
    href: "https://testbuddy-frontend.vercel.app/",
    title: "Testbuddy",
    description:
      "TestBuddy is an innovative online platform designed to facilitate the creation, management, and solving of coding questions.",
    thumbnail: testbuddy,
    images: [],
    stack: ["MongoDB", "React", "Nodejs", "Express"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          It offers a seamless and interactive experience for both teachers and students, aiming to enhance the learning and teaching of coding.{" "}
        </p>

      </div>
    ),
  },
  {
    href: "https://game-finder-gules.vercel.app",
    title: "Game Finder",
    description:
      "Developed an online platform that connects sports enthusiasts, allowing users to easily find and participate in local games for sports like football and basketball.",
    thumbnail: gamef,
    images: [],
    stack: ["Nextjs", "MongoDB"],
    slug: "algochurn",
    content: (
      <div>
        {" "}
      </div>
    ),
  },
  {
    href: "https://crackyourplacement.vercel.app",
    title: "Crack your placement",
    description:
      "A platform that helps students prepare for technical interviews by providing a collection of coding questions and solutions.",
    thumbnail: crackyour,
    images: [],
    stack: ["Nextjs", "MongoDB"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          this platform helps students prepare for technical interviews by providing a collection of coding questions and solutions.{" "}
        </p>

      </div>
    ),
  },
  {
    href: "https://grpgpt.vercel.app",
    title: "GroupGPT (Under Development)",
    description:
      "A platform which helps developers to work together with the help of AI generated code snippets.",
    thumbnail: grpgpt,
    images: [],
    stack: ["Nextjs", "MongoDB", "GeminiAPI"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          this platform helps developers to work together with the help of AI generated code snippets. Use roomID - 100 for Demo{" "}
        </p>

      </div>
    ),
  },
];
