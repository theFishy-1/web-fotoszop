# Web Fotoszop
## Co to jest?
Web Fotoszop to aplikacja tworzona przez klasę 3A w ramach lekcji Programowania Komputerowego w ALO PJATK w roku szkolnym 2022/23.

## Jak to uruchomić?
Aby uruchomić aplikację Web Fotoszop, należy uruchomić plik `index.html` w wybranej przeglądarce internetowej.

## Zadania
### Zadanie 1
Zaimplementuj transformację obrazu z kamery, która jest do ciebie przypisana. W tym celu skopiuj plik `filter/myFilter.js`, zmień jego nazwę oraz nazwę eksportowanej z niego funkcji, zaimplementuj w nim zadaną transformację, a następnie dodaj ją do listy dostępnych filtrów w pliku `app.js`.

Funkcja transformująca przyjmuje trzy parametry:
- `imageData` - wielowymiarowa tablica, zawierające informacje na temat każdego piksela na obrazku.
```
[ // whole image
  [ // first row of the image
    [255, 0, 0, 0], // first pixel of first row of the image
    [0, 255, 0, 0], // second pixel of first row of the image
    // subsequent pixels of the first row of the image
  ],
  [ // second row of the image
    [0, 255, 0, 0], // first pixel of second row of the image
    [0, 0, 255, 0], // second pixel of second row of the image
    // subsequent pixels of the first row of the image
  ],
  // subsequent rows of the image
]
```
- `imageWidth` - szerokość obrazka.
- `imageHeight` - wysokość obrazka.

Posłuż się istniejącymi filtrami `filters/grayscale.js` i `filters/negative.js` jako przykładami.