export function transparent(imageData, width, height) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4;
        imageData[y][x][3] = imageData[y][x][3] / 2; // set the alpha channel to half
      }
    }
  
    return imageData;
}
  