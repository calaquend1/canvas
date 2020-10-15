const img = document.getElementById("eeveelutions");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const output = document.getElementById("output");
let loaded = 0;

img.onload = function () {
  loaded++;
  img.crossOrigin = "anonymous";
  ctx.drawImage(img, 0, 0, 100, 100);

  if (loaded > 1) {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let j = 0;
    for (i = 0; i < imgData.data.length; i += 4) {
      let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];

      let _break = document.createElement("br");

      let checkbox = document.createElement("INPUT");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = true;
      if (count > 383) checkbox.checked = false;

      output.appendChild(checkbox);
      j++;
      if (j === 100) {
        j = 0;
        output.appendChild(_break);
      }
    }
  }
};
