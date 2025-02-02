const input = document.querySelector("input");
const dragArea = document.querySelector(".dragArea");
const bold = document.querySelector(".bold");
const image = document.querySelector(".img-preview img");

["dragenter", "dragover", "drop"].forEach((eventName) => {
  dragArea.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});

["dragenter", "dragover"].forEach((eventName) => {
  dragArea.addEventListener(
    eventName,
    () => {
      bold.innerHTML = "Release Your Image";
    },
    false
  );
});
dragArea.addEventListener("dragleave", () => {
  bold.innerHTML = `Drag & Drop files`;
});

dragArea.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  console.log(e);
  if (files.length > 0) {
    const file = files[0];
    image.src = URL.createObjectURL(file);
  }
});

input.addEventListener("change", (e) => {
  image.src = URL.createObjectURL(input.files[0]);
  
});

// document.addEventListener("keydown", function (event) {
//   console.log("Key pressed: " + event.key);
// });
