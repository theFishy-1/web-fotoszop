export function meanRemoval(imageData) {
  // Calculate the mean RGB values
  let meanR = 0, meanG = 0, meanB = 0;
  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      meanR += imageData[y][x][0];
      meanG += imageData[y][x][1];
      meanB += imageData[y][x][2];
    }
  }
  let pixelCount = imageData.length * imageData[0].length;
  meanR /= pixelCount;
  meanG /= pixelCount;
  meanB /= pixelCount;

  // Subtract the mean RGB values from each pixel
  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      imageData[y][x][0] -= meanR;
      imageData[y][x][1] -= meanG;
      imageData[y][x][2] -= meanB;
    }
  }

  return imageData;
}
