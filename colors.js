const myColorArray = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < myColorArray.length) {
  console.log(myColorArray[i]);
  i++;
}

for (let i = 0; i < myColorArray.length; i++) {
  console.log(myColorArray[i]);
}


myColorArray.forEach((color) => console.log(color));

const myColors = {
  colorWall: "blue",
  colorFruit: "orange",
  colorCar: "red",
  colorHair: "white",
  colorGras: "green",
};

for (x in myColors) {
  console.log(myColors[x]);
}