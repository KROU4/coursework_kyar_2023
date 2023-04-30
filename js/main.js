// Плавная прокрутка
$("#navbar a, .btn").on("click", function (event) {

  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({ scrollTop: $(hash).offset().top - 100}, 800); //плавная прокрутка путём анимации. По итогу по нажатии на кнопку мы переносимся на 100px выше элемента для удобства.
  }
});

// Создаем новый объект XMLHttpRequest
var xhttp = new XMLHttpRequest();
// Открываем файл footer.xml
xhttp.open("GET", "./XML/footer.xml", true);
// Когда файл загружен
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Заменяем пустой футер данными из XML файла
    document.getElementById("myFooter").innerHTML = this.responseText;
  }
};
// Загружаем файл
xhttp.send();

//гамбургер для мобильных устройств по нажатию
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
  navbar.classList.toggle('active');
});