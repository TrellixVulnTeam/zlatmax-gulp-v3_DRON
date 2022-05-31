// Подключение из node_modules
import * as noUiSlider from "nouislider";

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import "nouislider/dist/nouislider.css";

export function rangeInit() {
  console.log("222");
  const rangeItems = document.querySelectorAll("[data-range]");
  if (rangeItems.length) {
    rangeItems.forEach((rangeItem) => {
      const fromValue = rangeItem.querySelector("[data-range-from]");
      const toValue = rangeItem.querySelector("[data-range-to]");
      const item = rangeItem.querySelector("[data-range-item]");
      const inputs = [fromValue, toValue];
      console.log("111");
      noUiSlider.create(item, {
        start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
        connect: true,
        tooltips: [true, true],
        range: {
          min: [Number(fromValue.dataset.rangeFrom)],
          max: [Number(toValue.dataset.rangeTo)],
        },
      });
      item.noUiSlider.on("update", function (values, handle) {
        inputs[handle].value = values[handle];
      });

      // Listen to keydown events on the input field.
      inputs.forEach(function (input, handle) {
        input.addEventListener("change", function () {
          item.noUiSlider.setHandle(handle, this.value);
        });
      });
    });
  }
  //   const priceSlider = document.querySelector("#range");
  //   if (priceSlider) {
  //     let textFrom = priceSlider.getAttribute("data-from");
  //     let textTo = priceSlider.getAttribute("data-to");
  //     noUiSlider.create(priceSlider, {
  //       start: 0, // [0,200000]
  //       connect: [true, false],
  //       range: {
  //         min: [0],
  //         max: [200000],
  //       },
  //     });
  //     /*
  // 		const priceStart = document.getElementById('price-start');
  // 		const priceEnd = document.getElementById('price-end');
  // 		priceStart.addEventListener('change', setPriceValues);
  // 		priceEnd.addEventListener('change', setPriceValues);
  // 		*/
  //     function setPriceValues() {
  //       let priceStartValue;
  //       let priceEndValue;
  //       if (priceStart.value != "") {
  //         priceStartValue = priceStart.value;
  //       }
  //       if (priceEnd.value != "") {
  //         priceEndValue = priceEnd.value;
  //       }
  //       priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
  //     }
  //   }
}
rangeInit();
