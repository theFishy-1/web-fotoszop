export function rotateCCW(imageData) {
  // Get the dimensions of the original image
  let width = imageData[0].length;
  let height = imageData.length;

  // Create a new array to hold the rotated image data
  let rotatedImageData = new Array(width);
  for (let x = 0; x < width; x++) {
    rotatedImageData[x] = new Array(height);
  }

  // Rotate the image
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      rotatedImageData[width - x - 1][y] = imageData[y][x];
    }
  }

  // Transpose the rotated image data
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      imageData[y][x] = rotatedImageData[x][y];
    }
  }

  // Flip the image vertically
  for (let y = 0; y < height / 2; y++) {
    for (let x = 0; x < width; x++) {
      let temp = imageData[y][x];
      imageData[y][x] = imageData[height - y - 1][x];
      imageData[height - y - 1][x] = temp;
    }
  }

  return imageData;
}

