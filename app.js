// 2. import your filter here
import { grayscale } from './filters/grayscale.js';
import { negative } from './filters/negative.js';
import { brighter } from './filters/brighter.js';

const app = {
  imageWidth: 640,
  imageHeight: 480,
  filters: {
    // 3. add your filter here
    brighter,
    grayscale,
    negative,
  }
};

app.init = function() {
  const body = document.querySelector('body');

  this.errorBox = document.createElement('p');
  body.append(this.errorBox);

  if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
    this.enabledFilters = [];
    const filtersContainer = document.createElement('div');

    for (let filter in this.filters) {
      const filterCheckbox = document.createElement('input');
      filterCheckbox.setAttribute('type', 'checkbox');
      filterCheckbox.setAttribute('id', filter);
      filterCheckbox.setAttribute('name', filter);
      filtersContainer.append(filterCheckbox);

      const filterLabel = document.createElement('label');
      filterLabel.setAttribute('for', filter);
      filterLabel.innerText = filter;
      filtersContainer.append(filterLabel);
      
      filterCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
          this.enabledFilters.push(filter);
        } else {
          const index = this.enabledFilters.indexOf(filter);
          if (index >= 0) {
            this.enabledFilters.splice(index, 1);
          }
        }
      });
    }

    body.append(filtersContainer);

    this.video = document.createElement('video');
    this.video.setAttribute('autoplay', true);
    this.video.setAttribute('muted', true);
    this.video.setAttribute('width', this.imageWidth);
    this.video.setAttribute('height', this.imageHeight);
    body.append(this.video);

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('width', this.imageWidth);
    this.canvas.setAttribute('height', this.imageHeight);
    body.append(this.canvas);

    this.ctx = this.canvas.getContext('2d');

    this.enableCamera();
  } else {
    this.error('getUserMedia() is not supported by your browser');
  }
}

app.error = function(message) {
  this.errorBox.innerText = message;
}

app.enableCamera = function() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      this.video.srcObject = stream;
      this.video.addEventListener('loadeddata', () => this.transformImage());
    })
    .catch((error) => this.error(error));
}

app.transformImage = function() {
  this.ctx.drawImage(this.video, 0, 0, this.imageWidth, this.imageHeight);
  let imageData = this.decodeImageData(this.ctx.getImageData(0, 0, 640, 480).data);

  for (let filter of this.enabledFilters) {
    imageData = this.filters[filter](imageData, this.imageWidth, this.imageHeight);
  }
  
  this.ctx.putImageData(this.encodeImageData(imageData), 0, 0);
  window.requestAnimationFrame(() => this.transformImage());
}

app.decodeImageData = function(imageData) {
  let imageDataDecoded = [];
  let rowData = [];
  let pixelData = [];

  for (let i = 1; i <= imageData.length; i++) {
    pixelData.push(imageData[i - 1]);

    if (i % 4 === 0) {
      rowData.push(pixelData);
      pixelData = [];
    }

    if (i % (this.imageWidth * 4) === 0) {
      imageDataDecoded.push(rowData);
      rowData = [];
    }
  }

  return imageDataDecoded;
}

app.encodeImageData = function(imageData) {
  let imageDataEncoded = [];

  for (let y = 0; y < imageData.length; y++) {
    for (let x = 0; x < imageData[y].length; x++) {
      imageDataEncoded.push(...imageData[y][x]);
    }
  }

  return new ImageData(new Uint8ClampedArray(imageDataEncoded), this.imageWidth, this.imageHeight);
}

app.init();