function catMouse(input, movesCount) {
  const rows = map.split("\n").map((row) => row.split(""));
  function findIndex(letter) {
    for (let i = 0; i < rows.length; i++) {
      const index = rows[i].indexOf(letter);
      if (index !== -1) {
        return {
          animalIndex: index + 1,
          arrIndex: i + 1,
        };
      }
    }
  }
  function catchMouse() {
    const { catIndex, arrayIndex } = findIndex("C");
    console.log("hh");
    console.log(catIndex, arrayIndex);
  }
  catchMouse();
}

var map = `.........
...C.....
....m....`;

catMouse(map, 5);
