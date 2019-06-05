window.onload = function() {
  var notification = document.getElementById('notification');
  /* Converts randomly generated HSV values into RGB */
  function HSVtoRGB() {
    if (finalFilters.includes("entireFamily") || finalFilters.length === 0) {
      var h = Math.random() * (1 - 0) + 0;
      var s = Math.random() * (1 - 0) + 0;
      var v = Math.random() * (1 - 0) + 0;
    } else if (finalFilters.length === 1 && finalFilters.includes("redFamily")) {
      h = Math.random() * (0.1 - 0) + 0;
      s = Math.random() * (1 - 0) + 0;
      v = Math.random() * (1 - 0) + 0;
    } else if (finalFilters.length === 1 && finalFilters.includes("blueFamily")) {
      h = Math.random() * (0.8 - 0.6) + 0.6;
      s = Math.random() * (1 - 0) + 0;
      v = Math.random() * (1 - 0) + 0;
    } else if (finalFilters.length === 1 && finalFilters.includes("greenFamily")) {
      h = Math.random() * (0.5 - 0.3) + 0.3;
      s = Math.random() * (1 - 0) + 0;
      v = Math.random() * (1 - 0) + 0;
    } else {
      var h = Math.random() * (1 - 0) + 0;
      var s = Math.random() * (1 - 0) + 0;
      var v = Math.random() * (1 - 0) + 0;
    }
    console.log(h, s, v)

    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
      s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;
      case 1:
        r = q, g = v, b = p;
        break;
      case 2:
        r = p, g = v, b = t;
        break;
      case 3:
        r = p, g = q, b = v;
        break;
      case 4:
        r = t, g = p, b = v;
        break;
      case 5:
        r = v, g = p, b = q;
        break;
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  }

  /* Convert RGB to Hex */

  function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  function fullColorHex(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
  };

  /* Passes Color and Creates DIV */

  function drawColor(idValue, colorValue) {
    var color = document.createElement('div');
    var colorContainer = document.getElementById('colorContainer');
    color.className = 'color';
    color.id = 'color_' + idValue
    color.style.background = colorValue;
    colorContainer.appendChild(color);
  }

  /* RETIRED CODE */

  /* Generates Random Whole Number Between 0 and 255 */

  /* function randomColorNumber() {
    return Math.floor(Math.random() * 256)
    return Math.random() * (255 - 0) + 0;
  } */

  /* Erases Savables */

  function eraseSavables() {
    var savables = document.getElementsByTagName('canvas');
    while (savables.length > 0) {
      savables[0].parentNode.removeChild(savables[0]);
    }
  }

  /* Erases Colors */

  function eraseColors() {
    var colors = document.getElementsByClassName('color');
    while (colors.length > 0) {
      colors[0].parentNode.removeChild(colors[0]);
    }
    eraseSavables();
  }

  /* Generates Hexes and Pushes Into Hex Queue */

  function generateHexes(amount) {
    for (var i = 0; i < amount; i = i + 1) {
      var rgb = HSVtoRGB()
      var hex = fullColorHex(rgb.r, rgb.g, rgb.b)
      queuedHexes.push(hex)
    }
  }

  /* Takes Queued Hexes, Checks Against Used Hexes, and Generates Unique Colors with drawColor Function */

  function makeColors() {
    for (i = 0; i < queuedHexes.length; i++) {
      var hexTested = queuedHexes[i]
      while (usedHexes.includes(hexTested)) {

        let rgb = HSVtoRGB()
        let hex = fullColorHex(rgb.r, rgb.g, rgb.b)
        notification.innerHTML = `Found a duplicate hex: ${hexTested}. New hex: ${hex}`
        hexTested = hex
      }
      idNumber++
      drawColor(idNumber, `#${hexTested}`)
      usedHexes.push(hexTested)
    }
    // eraseSavables();
  }

  /* Generates Savable Colors */

  function createSavable() {
    var savables = document.getElementsByTagName('canvas')
    var savablesContainer = document.getElementById('savablesContainer')
    if (idNumber != savables.length) {
      for (i = 1; i < idNumber + 1; i++) {
        html2canvas(document.getElementById('color_' + i), {
          onrendered: function(canvas) {
            savablesContainer.appendChild(canvas);
          }
        });
      }
    } else {
      notification.innerHTML = "Please create more colors!"
    }
  }

  function filterCheck(filters) {
    for (i = 0; i < filters.length; i++) {
      if (filters[i].checked === true) {
        finalFilters.push(filters[i].value)
      }
    }
  }

  /* Variables */

  var usedHexes = []
  var queuedHexes = []
  var clicks = 0
  var amount = 0
  var totalColors = 0
  var idNumber = 0
  var finalFilters = []

  /* On Click Functions*/

  document.getElementById('a').onclick = function() {
    var filters = document.getElementsByClassName('filter');
    filterCheck(filters)
    amount = document.getElementById('amount').value
    totalColors = totalColors + parseInt(amount)
    clicks++
    generateHexes(amount)
    makeColors()
    queuedHexes.length = 0
    finalFilters = []
  }

  document.getElementById('b').onclick = function() {
    eraseColors()
    idNumber = 0
    usedHexes.length = 0
    queuedHexes.length = 0
    clicks = 0
    totalColors = 0
  }

  document.getElementById('c').onclick = function() {
    alert(`Clicked create ${clicks} times for a total of ${totalColors} colors with final ID being ${idNumber}. Total hexes used: ${usedHexes.length}.`)
  }

  document.getElementById('d').onclick = function() {
    createSavable()
  }

}