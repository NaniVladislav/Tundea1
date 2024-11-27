
//console.log("privet");
// Получаем все изображения по их id
const image1 = document.getElementById('foto1').src;


// Массив с изображениями для удобства
//const images = [image1, image2, image3];

// Индекс текущего изображения
let currentImageIndex = 0;

// Функция для смены изображения
function changeImage() {
  

  // Переключаем на следующее изображение
  currentImageIndex = (currentImageIndex + 1);
  //console.log(currentImageIndex);

  if (currentImageIndex == 1) {
    //document.getElementById('foto1').style.visibility = 'visible';
    document.getElementById('foto1').src = "/img/image1.jpg";
    //document.getElementById('foto2').style.visibility = 'hidden';
    //document.getElementById('foto3').style.visibility = 'hidden';
  }

  if (currentImageIndex == 2)
  {
    document.getElementById('foto1').src = "/img/image2.jpg";
    //document.getElementById('foto1').style.visibility = 'hidden';
    //document.getElementById('foto2').style.visibility = 'visible';
    //document.getElementById('foto3').style.visibility = 'hidden';
  }

  if (currentImageIndex == 3)
  {
    document.getElementById('foto1').style.animation="".src = "/img/image3.jpg";
    //document.getElementById('foto1').style.visibility = 'hidden';
    //document.getElementById('foto2').style.visibility = 'hidden';
    //document.getElementById('foto3').style.visibility = 'visible';
  }
  

  if (currentImageIndex == 3) {
    currentImageIndex=0;
  }

 
}

// Запускаем смену изображений каждые 5 секунд
setInterval(changeImage, 2000);




