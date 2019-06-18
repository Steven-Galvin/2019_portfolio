  window.onload = function() {
    var body = document.body

    /* Set Root Variable to modify CSS Variables */

    var root = document.documentElement;

    function changeSliderThumb(color) {
      root.style.setProperty('--selected-color', color);
    }

    /* Defines step, hue, saturation, and brightness sliders */
    var stepCount = document.getElementById("stepCount")
    var hueSlider = document.getElementById("hue");
    var satSlider = document.getElementById("saturation");
    var briSlider = document.getElementById("brightness");
    var stepSlider = document.getElementById("stepCount");
    var classicHSV = document.getElementById("classicHSV");

    /* Sets Slider Step Default to 15 floating points */
    hueSlider.step = 1 / Math.pow(10, 15);
    satSlider.step = 1 / Math.pow(10, 15);
    briSlider.step = 1 / Math.pow(10, 15);

    classicHSV.onclick = function() {
      if (classicHSV.checked === true) {
        stepSlider.disabled = true
        stepSlider.style.background = "black"
        root.style.setProperty('--step-selected-color', 'grey')
      } else {
        stepSlider.disabled = false
        stepSlider.style.background = "#d3d3d3"
        root.style.setProperty('--step-selected-color', '#4CAF50')
      }
      if (stepSlider.disabled === true) {
        var classicStep = 1 / 6
        /* Assigns classic step count to other sliders*/
        hueSlider.step = classicStep
        satSlider.step = classicStep
        briSlider.step = classicStep
      } else {
        var steps = document.getElementById("stepCount").value
        var sliderStep = 1 / Math.pow(10, steps)
        hueSlider.step = sliderStep
        satSlider.step = sliderStep
        briSlider.step = sliderStep
      }
    }


    /* Adjusts Sliders according to step slider */
    stepCount.oninput = function() {
      stepValue.innerHTML = this.value;
      var steps = document.getElementById('stepCount').value;
      var sliderStep = 1 / Math.pow(10, steps)
      /* Assigns step count to other sliders*/
      hueSlider.step = sliderStep
      satSlider.step = sliderStep
      briSlider.step = sliderStep
    }

    /* Creates Variables for HTML Elements */
    var testColor = document.getElementById("color")
    var HSVValues = document.getElementById("HSVValues")
    var RGBValues = document.getElementById("RGBValues")

    /* Creates Variables for Values and displays values in HTML*/
    var stepCount = document.getElementById("stepValue");
    stepCount.innerHTML = stepSlider.value;
    var outputHue = document.getElementById("hueValue");
    outputHue.innerHTML = hueSlider.value;
    var outputSat = document.getElementById("satValue");
    outputSat.innerHTML = satSlider.value;
    var outputBri = document.getElementById("briValue");
    outputBri.innerHTML = briSlider.value;

    /* Update the hue slider value, the RGB/HSV values, the background color, and the slider thumb color (each time you drag the slider handle) */
    hueSlider.oninput = function() {
      outputHue.innerHTML = this.value;
      var h = document.getElementById('hue').value;
      var s = document.getElementById('saturation').value;
      var v = document.getElementById('brightness').value;
      var result = HSVtoRGB(h, s, v)

      var bgH;
      if (h < 0.5) {
        bgH = parseFloat(h) + 0.5;
      } else {
        bgH = parseFloat(h) - 0.5;
      }
      var bgS;
      if (s < 0.5) {
        bgS = parseFloat(s) + 0.5;
      } else {
        bgS = parseFloat(s) - 0.5;
      }
      var bgV;
      if (v < 0.5) {
        bgV = parseFloat(v) + 0.5;
      } else {
        bgV = parseFloat(v) - 0.5;
      }
      var bgResult = HSVtoRGB(bgH, bgS, bgV)

      var backgroundValue = `rgb(${result.r}, ${result.g}, ${result.b})`
      HSVValues.innerHTML = `H: ${h} S: ${s} V: ${v}`
      RGBValues.innerHTML = `RGB(${result.r}, ${result.g}, ${result.b})`
      testColor.style.background = backgroundValue

      changeSliderThumb(backgroundValue)

      var bgColor = `rgb(${bgResult.r}, ${bgResult.g}, ${bgResult.b})`
      HSVValues.style.color = bgColor
      RGBValues.style.color = bgColor
      body.style.color = backgroundValue
      body.style.backgroundColor = bgColor


      var headerBG = HSVtoRGB(h, 0.1, 0.9)
      var headerFont = HSVtoRGB(bgH, 0.8, 0.2)
      var headerFontColor = `rgb(${headerFont.r}, ${headerFont.g}, ${headerFont.b})`
      var header = document.getElementById('header')
      header.style.backgroundColor = `rgb(${headerBG.r}, ${headerBG.g}, ${headerBG.b})`
      root.style.setProperty('--header-font', headerFontColor);
    }

    /* Update the saturation slider value, the RGB/HSV values, the background color, and the slider thumb color (each time you drag the slider handle) */
    satSlider.oninput = function() {
      outputSat.innerHTML = this.value;
      var h = document.getElementById('hue').value;
      var s = document.getElementById('saturation').value;
      var v = document.getElementById('brightness').value;
      var result = HSVtoRGB(h, s, v)

      var bgH;
      if (h < 0.5) {
        bgH = parseFloat(h) + 0.5;
      } else {
        bgH = parseFloat(h) - 0.5;
      }
      var bgS;
      if (s < 0.5) {
        bgS = parseFloat(s) + 0.5;
      } else {
        bgS = parseFloat(s) - 0.5;
      }
      var bgV;
      if (v < 0.5) {
        bgV = parseFloat(v) + 0.5;
      } else {
        bgV = parseFloat(v) - 0.5;
      }
      var bgResult = HSVtoRGB(bgH, bgS, bgV)

      var backgroundValue = `rgb(${result.r}, ${result.g}, ${result.b})`
      HSVValues.innerHTML = `H: ${h} S: ${s} V: ${v}`
      RGBValues.innerHTML = `RGB(${result.r}, ${result.g}, ${result.b})`
      testColor.style.background = backgroundValue

      changeSliderThumb(backgroundValue)

      var bgColor = `rgb(${bgResult.r}, ${bgResult.g}, ${bgResult.b})`
      HSVValues.style.color = bgColor
      RGBValues.style.color = bgColor
      body.style.color = backgroundValue
      body.style.backgroundColor = bgColor
    }

    /* Update the brightness slider value, the RGB/HSV values, the background color, and the slider thumb color (each time you drag the slider handle) */
    briSlider.oninput = function() {
      outputBri.innerHTML = this.value;
      var h = document.getElementById('hue').value;
      var s = document.getElementById('saturation').value;
      var v = document.getElementById('brightness').value;
      var result = HSVtoRGB(h, s, v)

      var bgH;
      if (h < 0.5) {
        bgH = parseFloat(h) + 0.5;
      } else {
        bgH = parseFloat(h) - 0.5;
      }
      var bgS;
      if (s < 0.5) {
        bgS = parseFloat(s) + 0.5;
      } else {
        bgS = parseFloat(s) - 0.5;
      }
      var bgV;
      if (v < 0.5) {
        bgV = parseFloat(v) + 0.5;
      } else {
        bgV = parseFloat(v) - 0.5;
      }
      var bgResult = HSVtoRGB(bgH, bgS, bgV)

      var backgroundValue = `rgb(${result.r}, ${result.g}, ${result.b})`
      HSVValues.innerHTML = `H: ${h} S: ${s} V: ${v}`
      RGBValues.innerHTML = `RGB(${result.r}, ${result.g}, ${result.b})`
      testColor.style.background = backgroundValue

      changeSliderThumb(backgroundValue)

      var bgColor = `rgb(${bgResult.r}, ${bgResult.g}, ${bgResult.b})`
      HSVValues.style.color = bgColor
      RGBValues.style.color = bgColor
      body.style.color = backgroundValue
      body.style.backgroundColor = bgColor
    }

    /* Converts HSV values to RGB and returns them */
    function HSVtoRGB(h, s, v) {
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

  }