export function grayscale(imageData) {
  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      const avg = Math.round((imageData[y][x][0] + imageData[y][x][1] + imageData[y][x][2]) / 3);
      imageData[y][x][0] = avg;
      imageData[y][x][1] = avg;
      imageData[y][x][2] = avg;
    }
  }
  return imageData;
}
