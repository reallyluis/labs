// Page Title Template
const PageTitleTemplate = document.createElement('template');
PageTitleTemplate.innerHTML = `
  <style>
    h2 {
      color: #565656;
    }
  </style>
  <h2></h2>
`;

// Page Section Template
const PageSectionTemplate = document.createElement('template');
PageSectionTemplate.innerHTML = `
  <style>
    section {
      margin: 10px 0;
      padding: 15px;
      color: #ffffff;
      background-color: #454545;
      border-radius: 15px;
    }
  </style>
  <section></section>
`;

// Dragable Element Template
const DragElementTemplate = document.createElement('template');
DragElementTemplate.innerHTML = `
  <style>
    div {
      position: absolute;
      width: fit-content;
      border: 1px solid black;
      padding: 5px;
      color: white;
      background-color: black;
      z-index: 2;
    }
  </style>
  <div></div>
`;

// Dropable Element Template
const DropContainerTemplate = document.createElement('template');
DropContainerTemplate.innerHTML = `
  <style>
    div {
      position: relative;
      width: 100%;
      height: 200px;
      border: 1px dashed black;
      margin: 50px 0;
      padding: 10% 0 0 0;
      text-align: center;
      vertical-align: middle;
      background-color: transparent;
      z-index: 1;
    }
  </style>
  <div></div>
`;

// Export templates
export {
  PageTitleTemplate,
  PageSectionTemplate,
  DragElementTemplate,
  DropContainerTemplate,
};
