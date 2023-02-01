export function negative(imageData) {
  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      imageData[y][x][0] = 255 - imageData[y][x][0];
      imageData[y][x][1] = 255 - imageData[y][x][1];
      imageData[y][x][2] = 255 - imageData[y][x][2];
    }
  }
  return imageData;
}
