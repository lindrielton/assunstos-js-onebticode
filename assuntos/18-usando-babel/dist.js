"use strict";

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, lista = new Array(_len), _key = 0; _key < _len; _key++) {
    lista[_key] = arguments[_key];
  }
  var soma = lista.reduce(function (acumula, list) {
    return acumula + list;
  }, 0);
  var quantidade = lista.length;
  return soma / quantidade;
};
console.log(mediaSimples(2, 6, 3, 7, 4));

// media Aritimética Ponderada

var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, media = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    media[_key2] = arguments[_key2];
  }
  var destru = media.reduce(function (acumulado, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return acumulado + n * (p !== null && p !== void 0 ? p : 1);
  }, 0); // se p não exitir elesoma  com 1
  var weightsum = media.reduce(function (accum, entry) {
    var _entry$p;
    return accum + ((_entry$p = entry.p) !== null && _entry$p !== void 0 ? _entry$p : 1);
  }, 0); // se peso não exitir é somado com 1
  return destru / weightsum;
};
console.log(mediaPonderada({
  n: 7,
  p: 2
}, {
  n: 9
}, {
  n: 3,
  p: 1
}));

// mediana

var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var ordereNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var midle = Math.floor(ordereNumbers.length / 2);
  if (ordereNumbers.length % 2 !== 0) {
    return ordereNumbers[midle];
  }
  var firstMedian = ordereNumbers[midle - 1];
  var seconMedian = ordereNumbers[midle];
  return mediaSimples(firstMedian, seconMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));

// moda 

var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  console.log(quantities);
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3)));
