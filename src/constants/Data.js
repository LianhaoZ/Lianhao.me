import { Mask } from "../../public/assets";
// import { Mask } from "/assets/Mask.png";

const projects = [
  {
    name: "Mask Up",
    description:
      "Face tracker Website that models face coordinates using trained machine learning model integrated with FaceMesh ",
    tags: [
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "P5.js",
        color: "pink-text-gradient",
      }, 
    ],
    image: Mask,
    source_code_link: "https://mask-up.glitch.me",
  },
  {
    name: "Cell Tracker",
    description:
      "To classify cells during imaging, it is hypothesized that changes in the shape and size of the nucleus can be used to train a model using deep learning. This project aims to develop/incorporate a deep learning algorithm to be used for optimizing a pipeline that classifies cells and track their movements during infection to enable a better understanding of Salmonella enterica Serovar Typhimurium infections of macrophages over a long time course. ",
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "Bash Script",
        color: "green-text-gradient",
      }, 
    ],
    image: "https://pbs.twimg.com/media/De4YQ_fV4AAqyGf.jpg",
    source_code_link: "https://github.com/LaneLab/ImageAnalysisPipeline",
  }, 
];

export { projects };