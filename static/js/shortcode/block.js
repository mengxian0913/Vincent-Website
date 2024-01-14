let block = document.querySelectorAll("#block");

let StyleOfBlock = {
  success: {
    Bg: "#dff0d8",
    Font: "#3c763d",
  },
  info: {
    Font: "#31708f",
    Bg: "#d9edf7",
  },
  warning: {
    Font: "#8a6d3b",
    Bg: "#fcf8e3",
  },
  danger: {
    Font: "#a94442",
    Bg: "#f2dede",
  },
};

block.forEach((element) => {
  let blockClass = Array.from(element.classList)[0];
  element.setAttribute(
    "style",
    `width: 100%; height: auto; color: ${StyleOfBlock[blockClass]["Font"]}; background-color: ${StyleOfBlock[blockClass]["Bg"]}; padding: 10px 8px;`,
  );
});
