export function removeBlue(imageData) {
  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      imageData[y][x][2] = 0;
    }
  }
  return imageData;
}