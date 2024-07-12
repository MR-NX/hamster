$(document).ready(function () {
  // Плавная прокрутка при клике на ссылку
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

$(document).ready(function () {

  if(window.Telegram)
  {
    const tele = window.Telegram.WebApp;
    tele.ready();
    tele.expand();
  }

  // курс валюты (1 рубль = 0.016 евро)
  var exchangeRate = 0.00010023;

  // установка значения по умолчанию в #input-hams
  $('#input-hams').val(100000);

  // функция конвертации валюты
  function convertCurrency() {
    var amount = parseFloat($('#input-hams').val()); // значение из input в рублях
    var convertedAmount = amount * exchangeRate; // конвертируем в евро

    if(isNaN(convertedAmount)) convertedAmount = 0;

    $('#input-usdt').val(convertedAmount.toFixed(2)); // выводим результат в input в евро
  }

  // привязываем функцию к событию изменения значения в input в рублях
  $('#input-hams').on('input', convertCurrency);

  // вызываем функцию конвертации валюты сразу после загрузки страницы
  convertCurrency();
});
