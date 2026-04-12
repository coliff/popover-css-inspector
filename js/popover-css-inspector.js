/*!
 * Popover CSS Inspector v1.0.0-beta19
 * Copyright 2023-2026 C.Oliff
 * Licensed under MIT (https://github.com/coliff/popover-css-inspector/blob/main/LICENSE)
 */

let popoverList = [];
const popoverSelector = '[data-bs-custom-class*="popover-css-inspector"]';

function createPopovers() {
  if (typeof bootstrap === "undefined" || typeof bootstrap.Popover !== "function") {
    return;
  }

  const popoverTriggerList = [].slice.call(document.querySelectorAll(popoverSelector));

  // Dispose of existing popovers
  popoverList.forEach((popover) => {
    popover.dispose();
  });

  // Clear the list
  popoverList = [];

  // Create new popovers
  popoverList = popoverTriggerList.map((popoverTriggerEl) => {
    const styles = window.getComputedStyle(popoverTriggerEl);
    const showProperties = popoverTriggerEl.getAttribute("data-css-inspector-show") || "";
    const hideProperties = popoverTriggerEl.getAttribute("data-css-inspector-hide") || "";
    const bgColor = styles.getPropertyValue("background-color");
    const borderColor = styles.getPropertyValue("border-color");
    const borderBottomColor = styles.getPropertyValue("border-bottom-color");
    const color = styles.getPropertyValue("color");
    let content = '<table class="small" style="margin: 0; padding: 0;" aria-label="CSS properties">';
    if (
      styles.getPropertyValue("accent-color") &&
      styles.getPropertyValue("accent-color") !== "" &&
      styles.getPropertyValue("accent-color") !== null &&
      /accent-color/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-accent-color"><td>accent-color:</td>` + `<td>${styles.getPropertyValue("accent-color")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("align-content") &&
      styles.getPropertyValue("align-content") !== "normal" &&
      styles.getPropertyValue("align-content") !== "stretch" &&
      styles.getPropertyValue("align-content") !== "" &&
      styles.getPropertyValue("align-content") !== null &&
      /align-content/.test(showProperties)
    ) {
      content +=
        `<tr class="css-align-content"><td>align-content:</td>` + `<td>${styles.getPropertyValue("align-content")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("align-items") &&
      styles.getPropertyValue("align-items") !== "normal" &&
      styles.getPropertyValue("align-items") !== "stretch" &&
      styles.getPropertyValue("align-items") !== "" &&
      styles.getPropertyValue("align-items") !== null &&
      /align-items/.test(showProperties)
    ) {
      content +=
        `<tr class="css-align-items"><td>align-items:</td>` + `<td>${styles.getPropertyValue("align-items")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("align-self") &&
      styles.getPropertyValue("align-self") !== "auto" &&
      styles.getPropertyValue("align-self") !== "normal" &&
      styles.getPropertyValue("align-self") !== "" &&
      styles.getPropertyValue("align-self") !== null &&
      /align-self/.test(showProperties)
    ) {
      content += `<tr class="css-align-self"><td>align-self:</td>` + `<td>${styles.getPropertyValue("align-self")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("animation") &&
      styles.getPropertyValue("animation") !== "" &&
      styles.getPropertyValue("animation") !== null &&
      /(?<!-)\banimation\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-animation"><td>animation:</td>` + `<td>${styles.getPropertyValue("animation")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("animation-name") &&
      styles.getPropertyValue("animation-name") !== "none" &&
      styles.getPropertyValue("animation-name") !== "" &&
      styles.getPropertyValue("animation-name") !== null &&
      !/animation-name/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content +=
        `<tr class="css-animation-name"><td>animation-name:</td>` +
        `<td>${styles.getPropertyValue("animation-name")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("animation-duration") &&
      styles.getPropertyValue("animation-duration") !== "0s" &&
      styles.getPropertyValue("animation-duration") !== "" &&
      styles.getPropertyValue("animation-duration") !== null &&
      !/animation-duration/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content +=
        `<tr class="css-animation-duration"><td>animation-duration:</td>` +
        `<td>${styles.getPropertyValue("animation-duration")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("appearance") &&
      styles.getPropertyValue("appearance") !== "none" &&
      styles.getPropertyValue("appearance") !== "" &&
      styles.getPropertyValue("appearance") !== null &&
      /appearance/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-appearance"><td>appearance:</td>` + `<td>${styles.getPropertyValue("appearance")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("aspect-ratio") &&
      styles.getPropertyValue("aspect-ratio") !== "" &&
      styles.getPropertyValue("aspect-ratio") !== null &&
      /aspect-ratio/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-aspect-ratio"><td>aspect-ratio:</td>` + `<td>${styles.getPropertyValue("aspect-ratio")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("background-color") &&
      styles.getPropertyValue("background-color") !== "none" &&
      styles.getPropertyValue("background-color") !== "" &&
      styles.getPropertyValue("background-color") !== null &&
      !/bg-color/.test(hideProperties)
    ) {
      content +=
        `<tr class="css-background-color"><td>background-color:</td>` +
        `<td>` +
        `<div class="css-swatch" style="background-color:${rgbToHex(bgColor)}"></div><code>${rgbToHex(bgColor)}</code></td></tr>`;
    }
    if (
      styles.getPropertyValue("background-image") &&
      styles.getPropertyValue("background-image") !== "none" &&
      styles.getPropertyValue("background-image") !== "" &&
      styles.getPropertyValue("background-image") !== null &&
      /bg-image/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-background-image"><td>background-image:</td>` +
        `<td>${styles.getPropertyValue("background-image")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("background-position") &&
      styles.getPropertyValue("background-position") !== "none" &&
      styles.getPropertyValue("background-position") !== "" &&
      styles.getPropertyValue("background-position") !== null &&
      /bg-position/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-background-position"><td>background-position:</td>` +
        `<td>${styles.getPropertyValue("background-position")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("background-repeat") &&
      styles.getPropertyValue("background-repeat") !== "none" &&
      styles.getPropertyValue("background-repeat") !== "" &&
      styles.getPropertyValue("background-repeat") !== null &&
      /bg-repeat/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-background-repeat"><td>background-repeat:</td>` +
        `<td>${styles.getPropertyValue("background-repeat")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("background-size") &&
      styles.getPropertyValue("background-size") !== "none" &&
      styles.getPropertyValue("background-size") !== "" &&
      styles.getPropertyValue("background-size") !== null &&
      /bg-size/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-background-size"><td>background-size:</td>` +
        `<td>${styles.getPropertyValue("background-size")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("border") &&
      styles.getPropertyValue("border") !== "none" &&
      styles.getPropertyValue("border") !== "" &&
      styles.getPropertyValue("border") !== null &&
      /(?<!-)\bborder\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-border"><td>border:</td>` + `<td>${styles.getPropertyValue("border")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("border-bottom-color") &&
      styles.getPropertyValue("border-bottom-color") !== "none" &&
      styles.getPropertyValue("border-bottom-color") !== "" &&
      styles.getPropertyValue("border-bottom-color") !== null &&
      /b-bottom-color/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-border-bottom-color"><td>border-bottom-color:</td>` +
        `<td>` +
        `<div class="css-swatch" style="background-color:${rgbToHex(borderBottomColor)}"></div><code>${rgbToHex(
          borderBottomColor,
        )}</code></td></tr>`;
    }
    if (
      styles.getPropertyValue("border-bottom-width") &&
      styles.getPropertyValue("border-bottom-width") !== "none" &&
      styles.getPropertyValue("border-bottom-width") !== "" &&
      styles.getPropertyValue("border-bottom-width") !== null &&
      /b-bottom-width/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-border-bottom-width"><td>border-bottom-width:</td>` +
        `<td>${styles.getPropertyValue("border-bottom-width")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("border-color") &&
      styles.getPropertyValue("border-color") !== "none" &&
      styles.getPropertyValue("border-color") !== "" &&
      styles.getPropertyValue("border-color") !== null &&
      /b-color/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-border-color"><td>border-color:</td>` +
        `<td>` +
        `<div class="css-swatch" style="background-color:${rgbToHex(borderColor)}"></div><code>${rgbToHex(borderColor)}</code></td></tr>`;
    }
    if (
      styles.getPropertyValue("border-left-width") &&
      styles.getPropertyValue("border-left-width") !== "none" &&
      styles.getPropertyValue("border-left-width") !== "" &&
      styles.getPropertyValue("border-left-width") !== null &&
      /b-left-width/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-border-left-width"><td>border-left-width:</td>` +
        `<td>${styles.getPropertyValue("border-left-width")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("border-radius") &&
      styles.getPropertyValue("border-radius") !== "none" &&
      styles.getPropertyValue("border-radius") !== "" &&
      styles.getPropertyValue("border-radius") !== null &&
      !/b-radius/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content +=
        `<tr class="css-border-radius"><td>border-radius:</td>` + `<td>${styles.getPropertyValue("border-radius")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("border-style") &&
      styles.getPropertyValue("border-style") !== "" &&
      styles.getPropertyValue("border-style") !== null &&
      /b-style/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-border-style"><td>border-style:</td>` + `<td>${styles.getPropertyValue("border-style")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("border-width") &&
      styles.getPropertyValue("border-width") !== "none" &&
      styles.getPropertyValue("border-width") !== "0px" &&
      styles.getPropertyValue("border-width") !== "" &&
      styles.getPropertyValue("border-width") !== null &&
      /b-width/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-border-width"><td>border-width:</td>` + `<td>${styles.getPropertyValue("border-width")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("box-shadow") &&
      styles.getPropertyValue("box-shadow") !== "none" &&
      styles.getPropertyValue("box-shadow") !== "" &&
      styles.getPropertyValue("box-shadow") !== null &&
      /box-shadow/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-box-shadow"><td>box-shadow:</td>` + `<td>${styles.getPropertyValue("box-shadow")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("box-sizing") &&
      styles.getPropertyValue("box-sizing") !== "none" &&
      styles.getPropertyValue("box-sizing") !== "" &&
      styles.getPropertyValue("box-sizing") !== null &&
      /box-sizing/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-box-sizing"><td>box-sizing:</td>` + `<td>${styles.getPropertyValue("box-sizing")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("color") &&
      styles.getPropertyValue("color") !== "none" &&
      styles.getPropertyValue("color") !== "" &&
      styles.getPropertyValue("color") !== null &&
      !/(?<!-)\bcolor\b(?!-)/.test(hideProperties)
    ) {
      content +=
        `<tr class="css-color"><td>color:</td>` +
        `<td>` +
        `<div class="css-swatch" style="background-color:${rgbToHex(color)}"></div><code>${rgbToHex(color)}</code></td></tr>`;
    }
    if (
      styles.getPropertyValue("column-gap") &&
      styles.getPropertyValue("column-gap") !== "normal" &&
      styles.getPropertyValue("column-gap") !== "0px" &&
      styles.getPropertyValue("column-gap") !== "" &&
      styles.getPropertyValue("column-gap") !== null &&
      /column-gap/.test(showProperties)
    ) {
      content += `<tr class="css-column-gap"><td>column-gap:</td>` + `<td>${styles.getPropertyValue("column-gap")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("color-scheme") &&
      styles.getPropertyValue("color-scheme") !== "none" &&
      styles.getPropertyValue("color-scheme") !== "" &&
      styles.getPropertyValue("color-scheme") !== null &&
      /color-scheme/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-color-scheme"><td>color-scheme:</td>` + `<td>${styles.getPropertyValue("color-scheme")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("cursor") &&
      styles.getPropertyValue("cursor") !== "none" &&
      styles.getPropertyValue("cursor") !== "" &&
      styles.getPropertyValue("cursor") !== null &&
      /cursor/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-cursor"><td>cursor:</td>` + `<td>${styles.getPropertyValue("cursor")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("display") &&
      styles.getPropertyValue("display") !== "none" &&
      styles.getPropertyValue("display") !== "" &&
      styles.getPropertyValue("display") !== null &&
      /display/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-display"><td>display:</td>` + `<td>${styles.getPropertyValue("display")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("float") &&
      styles.getPropertyValue("float") !== "none" &&
      styles.getPropertyValue("float") !== "" &&
      styles.getPropertyValue("float") !== null &&
      /float/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-float"><td>float:</td>` + `<td>${styles.getPropertyValue("float")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("flex-direction") &&
      styles.getPropertyValue("flex-direction") !== "row" &&
      styles.getPropertyValue("flex-direction") !== "" &&
      styles.getPropertyValue("flex-direction") !== null &&
      /flex-direction/.test(showProperties)
    ) {
      content +=
        `<tr class="css-flex-direction"><td>flex-direction:</td>` +
        `<td>${styles.getPropertyValue("flex-direction")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("flex-wrap") &&
      styles.getPropertyValue("flex-wrap") !== "nowrap" &&
      styles.getPropertyValue("flex-wrap") !== "" &&
      styles.getPropertyValue("flex-wrap") !== null &&
      /flex-wrap/.test(showProperties)
    ) {
      content += `<tr class="css-flex-wrap"><td>flex-wrap:</td>` + `<td>${styles.getPropertyValue("flex-wrap")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("font-family") &&
      styles.getPropertyValue("font-family") !== "none" &&
      styles.getPropertyValue("font-family") !== "" &&
      styles.getPropertyValue("font-family") !== null &&
      /font-family/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-font-family"><td>font-family:</td>` + `<td>${styles.getPropertyValue("font-family")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("font-size") &&
      styles.getPropertyValue("font-size") !== "none" &&
      styles.getPropertyValue("font-size") !== "" &&
      styles.getPropertyValue("font-size") !== null &&
      !/font-size/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-font-size"><td>font-size:</td>` + `<td>${styles.getPropertyValue("font-size")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("font-style") &&
      styles.getPropertyValue("font-style") !== "none" &&
      styles.getPropertyValue("font-style") !== "normal" &&
      styles.getPropertyValue("font-style") !== "" &&
      styles.getPropertyValue("font-style") !== null &&
      !/font-style/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-font-style"><td>font-style:</td>` + `<td>${styles.getPropertyValue("font-style")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("font-weight") &&
      styles.getPropertyValue("font-weight") !== "none" &&
      styles.getPropertyValue("font-weight") !== "400" &&
      styles.getPropertyValue("font-weight") !== "" &&
      styles.getPropertyValue("font-weight") !== null &&
      !/font-weight/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content +=
        `<tr class="css-font-weight"><td>font-weight:</td>` + `<td>${styles.getPropertyValue("font-weight")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("gap") &&
      styles.getPropertyValue("gap") !== "normal" &&
      styles.getPropertyValue("gap") !== "0px" &&
      styles.getPropertyValue("gap") !== "" &&
      styles.getPropertyValue("gap") !== null &&
      /(?<!-)\bgap\b(?!-)/.test(showProperties)
    ) {
      content += `<tr class="css-gap"><td>gap:</td>` + `<td>${styles.getPropertyValue("gap")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("grid-auto-flow") &&
      styles.getPropertyValue("grid-auto-flow") !== "row" &&
      styles.getPropertyValue("grid-auto-flow") !== "" &&
      styles.getPropertyValue("grid-auto-flow") !== null &&
      /grid-auto-flow/.test(showProperties)
    ) {
      content +=
        `<tr class="css-grid-auto-flow"><td>grid-auto-flow:</td>` +
        `<td>${styles.getPropertyValue("grid-auto-flow")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("grid-column") &&
      styles.getPropertyValue("grid-column") !== "auto" &&
      styles.getPropertyValue("grid-column") !== "" &&
      styles.getPropertyValue("grid-column") !== null &&
      /grid-column/.test(showProperties)
    ) {
      content +=
        `<tr class="css-grid-column"><td>grid-column:</td>` + `<td>${styles.getPropertyValue("grid-column")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("grid-row") &&
      styles.getPropertyValue("grid-row") !== "auto" &&
      styles.getPropertyValue("grid-row") !== "" &&
      styles.getPropertyValue("grid-row") !== null &&
      /grid-row/.test(showProperties)
    ) {
      content += `<tr class="css-grid-row"><td>grid-row:</td>` + `<td>${styles.getPropertyValue("grid-row")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("grid-template-columns") &&
      styles.getPropertyValue("grid-template-columns") !== "none" &&
      styles.getPropertyValue("grid-template-columns") !== "" &&
      styles.getPropertyValue("grid-template-columns") !== null &&
      /grid-template-columns/.test(showProperties)
    ) {
      content +=
        `<tr class="css-grid-template-columns"><td>grid-template-columns:</td>` +
        `<td>${styles.getPropertyValue("grid-template-columns")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("grid-template-rows") &&
      styles.getPropertyValue("grid-template-rows") !== "none" &&
      styles.getPropertyValue("grid-template-rows") !== "" &&
      styles.getPropertyValue("grid-template-rows") !== null &&
      /grid-template-rows/.test(showProperties)
    ) {
      content +=
        `<tr class="css-grid-template-rows"><td>grid-template-rows:</td>` +
        `<td>${styles.getPropertyValue("grid-template-rows")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("height") &&
      styles.getPropertyValue("height") !== "none" &&
      styles.getPropertyValue("height") !== "" &&
      styles.getPropertyValue("height") !== null &&
      !/(?<!-)\bheight\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-height"><td>height:</td>` + `<td>${styles.getPropertyValue("height")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("justify-content") &&
      styles.getPropertyValue("justify-content") !== "none" &&
      styles.getPropertyValue("justify-content") !== "normal" &&
      styles.getPropertyValue("justify-content") !== "start" &&
      styles.getPropertyValue("justify-content") !== "" &&
      styles.getPropertyValue("justify-content") !== null &&
      /justify-content/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-justify-content"><td>justify-content:</td>` +
        `<td>${styles.getPropertyValue("justify-content")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("justify-items") &&
      styles.getPropertyValue("justify-items") !== "normal" &&
      styles.getPropertyValue("justify-items") !== "stretch" &&
      styles.getPropertyValue("justify-items") !== "" &&
      styles.getPropertyValue("justify-items") !== null &&
      /justify-items/.test(showProperties)
    ) {
      content +=
        `<tr class="css-justify-items"><td>justify-items:</td>` + `<td>${styles.getPropertyValue("justify-items")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("justify-self") &&
      styles.getPropertyValue("justify-self") !== "auto" &&
      styles.getPropertyValue("justify-self") !== "normal" &&
      styles.getPropertyValue("justify-self") !== "" &&
      styles.getPropertyValue("justify-self") !== null &&
      /justify-self/.test(showProperties)
    ) {
      content +=
        `<tr class="css-justify-self"><td>justify-self:</td>` + `<td>${styles.getPropertyValue("justify-self")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("letter-spacing") &&
      styles.getPropertyValue("letter-spacing") !== "none" &&
      styles.getPropertyValue("letter-spacing") !== "" &&
      styles.getPropertyValue("letter-spacing") !== null &&
      /letter-spacing/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-letter-spacing"><td>letter-spacing:</td>` +
        `<td>${styles.getPropertyValue("letter-spacing")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("line-break") &&
      styles.getPropertyValue("line-break") !== "none" &&
      styles.getPropertyValue("line-break") !== "" &&
      styles.getPropertyValue("line-break") !== null &&
      /line-break/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-line-break"><td>line-break:</td>` + `<td>${styles.getPropertyValue("line-break")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("line-height") &&
      styles.getPropertyValue("line-height") !== "none" &&
      styles.getPropertyValue("line-height") !== "" &&
      styles.getPropertyValue("line-height") !== null &&
      /line-height/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-line-height"><td>line-height:</td>` + `<td>${styles.getPropertyValue("line-height")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("list-style") &&
      styles.getPropertyValue("list-style") !== "none" &&
      styles.getPropertyValue("list-style") !== "" &&
      styles.getPropertyValue("list-style") !== null &&
      /list-style/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-list-style"><td>list-style:</td>` + `<td>${styles.getPropertyValue("list-style")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("margin") &&
      styles.getPropertyValue("margin") !== "none" &&
      styles.getPropertyValue("margin") !== "0px" &&
      styles.getPropertyValue("margin") !== "" &&
      styles.getPropertyValue("margin") !== null &&
      !/(?<!-)\bmargin\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-margin"><td>margin:</td>` + `<td>${styles.getPropertyValue("margin")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("margin-bottom") &&
      styles.getPropertyValue("margin-bottom") !== "none" &&
      styles.getPropertyValue("margin-bottom") !== "0px" &&
      styles.getPropertyValue("margin-bottom") !== "" &&
      styles.getPropertyValue("margin-bottom") !== null &&
      /margin-bottom/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-margin-bottom"><td>margin-bottom:</td>` + `<td>${styles.getPropertyValue("margin-bottom")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("margin-left") &&
      styles.getPropertyValue("margin-left") !== "none" &&
      styles.getPropertyValue("margin-left") !== "0px" &&
      styles.getPropertyValue("margin-left") !== "" &&
      styles.getPropertyValue("margin-left") !== null &&
      /margin-left/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-margin-left"><td>margin-left:</td>` + `<td>${styles.getPropertyValue("margin-left")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("margin-right") &&
      styles.getPropertyValue("margin-right") !== "none" &&
      styles.getPropertyValue("margin-right") !== "0px" &&
      styles.getPropertyValue("margin-right") !== "" &&
      styles.getPropertyValue("margin-right") !== null &&
      /margin-right/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-margin-right"><td>margin-right:</td>` + `<td>${styles.getPropertyValue("margin-right")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("margin-top") &&
      styles.getPropertyValue("margin-top") !== "none" &&
      styles.getPropertyValue("margin-top") !== "0px" &&
      styles.getPropertyValue("margin-top") !== "" &&
      styles.getPropertyValue("margin-top") !== null &&
      /margin-top/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-margin-top"><td>margin-top:</td>` + `<td>${styles.getPropertyValue("margin-top")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("max-height") &&
      styles.getPropertyValue("max-height") !== "none" &&
      styles.getPropertyValue("max-height") !== "" &&
      styles.getPropertyValue("max-height") !== null &&
      !/max-height/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-max-height"><td>max-height:</td>` + `<td>${styles.getPropertyValue("max-height")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("max-width") &&
      styles.getPropertyValue("max-width") !== "none" &&
      styles.getPropertyValue("max-width") !== "" &&
      styles.getPropertyValue("max-width") !== null &&
      !/max-width/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-max-width"><td>max-width:</td>` + `<td>${styles.getPropertyValue("max-width")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("min-height") &&
      styles.getPropertyValue("min-height") !== "none" &&
      styles.getPropertyValue("min-height") !== "0px" &&
      styles.getPropertyValue("min-height") !== "" &&
      styles.getPropertyValue("min-height") !== null &&
      /min-height/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-min-height"><td>min-height:</td>` + `<td>${styles.getPropertyValue("min-height")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("min-width") &&
      styles.getPropertyValue("min-width") !== "none" &&
      styles.getPropertyValue("min-width") !== "0px" &&
      styles.getPropertyValue("min-width") !== "" &&
      styles.getPropertyValue("min-width") !== null &&
      /min-width/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-min-width"><td>min-width:</td>` + `<td>${styles.getPropertyValue("min-width")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("opacity") &&
      styles.getPropertyValue("opacity") !== "none" &&
      styles.getPropertyValue("opacity") !== "1" &&
      styles.getPropertyValue("opacity") !== "" &&
      styles.getPropertyValue("opacity") !== null &&
      !/opacity/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-opacity"><td>opacity:</td>` + `<td>${styles.getPropertyValue("opacity")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("overflow") &&
      styles.getPropertyValue("overflow") !== "" &&
      styles.getPropertyValue("overflow") !== null &&
      /(?<!-)\boverflow\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-overflow"><td>overflow:</td>` + `<td>${styles.getPropertyValue("overflow")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("overflow-x") &&
      styles.getPropertyValue("overflow-x") !== "" &&
      styles.getPropertyValue("overflow-x") !== null &&
      /(?<!-)\boverflow-x\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-overflow-x"><td>overflow-x:</td>` + `<td>${styles.getPropertyValue("overflow-x")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("overflow-y") &&
      styles.getPropertyValue("overflow-y") !== "" &&
      styles.getPropertyValue("overflow-y") !== null &&
      /(?<!-)\boverflow-y\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-overflow-y"><td>overflow-y:</td>` + `<td>${styles.getPropertyValue("overflow-y")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("padding") &&
      styles.getPropertyValue("padding") !== "none" &&
      styles.getPropertyValue("padding") !== "" &&
      styles.getPropertyValue("padding") !== null &&
      /(?<!-)\bpadding\b(?!-)/.test(showProperties)
    ) {
      content += `<tr class="css-padding"><td>padding:</td>` + `<td>${styles.getPropertyValue("padding")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("place-content") &&
      styles.getPropertyValue("place-content") !== "normal" &&
      styles.getPropertyValue("place-content") !== "stretch" &&
      styles.getPropertyValue("place-content") !== "" &&
      styles.getPropertyValue("place-content") !== null &&
      /place-content/.test(showProperties)
    ) {
      content +=
        `<tr class="css-place-content"><td>place-content:</td>` + `<td>${styles.getPropertyValue("place-content")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("place-items") &&
      styles.getPropertyValue("place-items") !== "normal" &&
      styles.getPropertyValue("place-items") !== "stretch" &&
      styles.getPropertyValue("place-items") !== "" &&
      styles.getPropertyValue("place-items") !== null &&
      /place-items/.test(showProperties)
    ) {
      content +=
        `<tr class="css-place-items"><td>place-items:</td>` + `<td>${styles.getPropertyValue("place-items")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("position") &&
      styles.getPropertyValue("position") !== "" &&
      styles.getPropertyValue("position") !== null &&
      /(?<!-)\bposition\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-position"><td>position:</td>` + `<td>${styles.getPropertyValue("position")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("row-gap") &&
      styles.getPropertyValue("row-gap") !== "normal" &&
      styles.getPropertyValue("row-gap") !== "0px" &&
      styles.getPropertyValue("row-gap") !== "" &&
      styles.getPropertyValue("row-gap") !== null &&
      /row-gap/.test(showProperties)
    ) {
      content += `<tr class="css-row-gap"><td>row-gap:</td>` + `<td>${styles.getPropertyValue("row-gap")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("text-align") &&
      styles.getPropertyValue("text-align") !== "none" &&
      styles.getPropertyValue("text-align") !== "start" &&
      styles.getPropertyValue("text-align") !== "" &&
      styles.getPropertyValue("text-align") !== null &&
      /text-align/.test(showProperties)
    ) {
      content += `<tr class="css-text-align"><td>text-align:</td>` + `<td>${styles.getPropertyValue("text-align")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("text-decoration") &&
      styles.getPropertyValue("text-decoration") !== "none" &&
      styles.getPropertyValue("text-decoration") !== "start" &&
      styles.getPropertyValue("text-decoration") !== "" &&
      styles.getPropertyValue("text-decoration") !== null &&
      /text-decoration/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-text-decoration"><td>text-decoration:</td>` +
        `<td>${styles.getPropertyValue("text-decoration")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("text-indent") &&
      styles.getPropertyValue("text-indent") !== "none" &&
      styles.getPropertyValue("text-indent") !== "" &&
      styles.getPropertyValue("text-indent") !== null &&
      /text-indent/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-text-indent"><td>text-indent:</td>` + `<td>${styles.getPropertyValue("text-indent")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("text-shadow") &&
      styles.getPropertyValue("text-shadow") !== "none" &&
      styles.getPropertyValue("text-shadow") !== "" &&
      styles.getPropertyValue("text-shadow") !== null &&
      /text-shadow/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-text-shadow"><td>text-shadow:</td>` + `<td>${styles.getPropertyValue("text-shadow")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("text-transform") &&
      styles.getPropertyValue("text-transform") !== "none" &&
      styles.getPropertyValue("text-transform") !== "" &&
      styles.getPropertyValue("text-transform") !== null &&
      /text-transform/.test(showProperties)
    ) {
      content +=
        `<tr class="css-text-transform"><td>text-transform:</td>` +
        `<td>${styles.getPropertyValue("text-transform")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("text-wrap") &&
      styles.getPropertyValue("text-wrap") !== "none" &&
      styles.getPropertyValue("text-wrap") !== "" &&
      styles.getPropertyValue("text-wrap") !== null &&
      /text-wrap/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-text-wrap"><td>text-wrap:</td>` + `<td>${styles.getPropertyValue("text-wrap")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("transform") &&
      styles.getPropertyValue("transform") !== "none" &&
      styles.getPropertyValue("transform") !== "" &&
      styles.getPropertyValue("transform") !== null &&
      /transform/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-transform"><td>transform:</td>` + `<td>${styles.getPropertyValue("transform")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("transition") &&
      styles.getPropertyValue("transition") !== "none" &&
      styles.getPropertyValue("transition") !== "" &&
      styles.getPropertyValue("transition") !== null &&
      /(?<!-)\btransition\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-transition"><td>transition:</td>` + `<td>${styles.getPropertyValue("transition")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("user-select") &&
      styles.getPropertyValue("user-select") !== "" &&
      styles.getPropertyValue("user-select") !== null &&
      /user-select/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-user-select"><td>user-select:</td>` + `<td>${styles.getPropertyValue("user-select")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("vertical-align") &&
      styles.getPropertyValue("vertical-align") !== "none" &&
      styles.getPropertyValue("vertical-align") !== "" &&
      styles.getPropertyValue("vertical-align") !== null &&
      /vertical-align/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-vertical-align"><td>vertical-align:</td>` +
        `<td>${styles.getPropertyValue("vertical-align")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("white-space") &&
      styles.getPropertyValue("white-space") !== "none" &&
      styles.getPropertyValue("white-space") !== "normal" &&
      styles.getPropertyValue("white-space") !== "" &&
      styles.getPropertyValue("white-space") !== null &&
      /white-space/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-white-space"><td>white-space:</td>` + `<td>${styles.getPropertyValue("white-space")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("width") &&
      styles.getPropertyValue("width") !== "none" &&
      styles.getPropertyValue("width") !== "" &&
      styles.getPropertyValue("width") !== null &&
      !/(?<!-)\bwidth\b(?!-)/.test(popoverTriggerEl.getAttribute("data-css-inspector-hide"))
    ) {
      content += `<tr class="css-width"><td>width:</td>` + `<td>${styles.getPropertyValue("width")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("word-break") &&
      styles.getPropertyValue("word-break") !== "none" &&
      styles.getPropertyValue("word-break") !== "" &&
      styles.getPropertyValue("word-break") !== null &&
      /word-break/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-word-break"><td>word-break:</td>` + `<td>${styles.getPropertyValue("word-break")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("word-spacing") &&
      styles.getPropertyValue("word-spacing") !== "none" &&
      styles.getPropertyValue("word-spacing") !== "" &&
      styles.getPropertyValue("word-spacing") !== null &&
      /word-spacing/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content +=
        `<tr class="css-word-spacing"><td>word-spacing:</td>` + `<td>${styles.getPropertyValue("word-spacing")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("word-wrap") &&
      styles.getPropertyValue("word-wrap") !== "none" &&
      styles.getPropertyValue("word-wrap") !== "" &&
      styles.getPropertyValue("word-wrap") !== null &&
      /word-wrap/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-word-wrap"><td>word-wrap:</td>` + `<td>${styles.getPropertyValue("word-wrap")}</td></tr>`;
    }
    if (
      styles.getPropertyValue("z-index") &&
      styles.getPropertyValue("z-index") !== "none" &&
      styles.getPropertyValue("z-index") !== "" &&
      styles.getPropertyValue("z-index") !== null &&
      /z-index/.test(popoverTriggerEl.getAttribute("data-css-inspector-show"))
    ) {
      content += `<tr class="css-z-index"><td>z-index:</td>` + `<td>${styles.getPropertyValue("z-index")}</td></tr>`;
    }
    content +=
      "</table>" +
      "<style>" +
      ".popover-css-inspector {z-index: 1010; display: block; max-width: 285px; text-shadow: none; text-transform: none; letter-spacing: normal; word-break: normal; white-space: normal; word-spacing: normal; line-break: auto; font-size: 0.875rem; border: 1px solid rgba(133, 133, 133, .3); border-radius: .5rem} " +
      ".popover-css-inspector .popover-body {padding: .5rem .75rem; line-height: 1.5; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif; } " +
      ".popover-css-inspector .popover-body td {height: 1.1rem; padding: 0; font-style: normal; text-align: left; text-decoration: none;} " +
      ".popover-css-inspector .popover-body td:nth-child(1) {font-weight: bold; padding-right: .5rem; text-wrap: nowrap !important}" +
      ".popover-css-inspector .popover-body td:nth-child(2) {font-weight: 400 !important; font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace !important; padding-top: 1px;}" +
      ".popover-css-inspector .popover-body td:nth-child(2):not(:has(div)) {opacity: .7;}" +
      ".popover-css-inspector .popover-body td:nth-child(2) code {padding-top: 1px; filter: grayscale(1);}" +
      ".popover-css-inspector .popover-header {padding: 4px; padding-left: 12px; font-size: .875em; border: 0;}" +
      ".popover-css-inspector .css-swatch {border: 1px solid rgba(133, 133, 133, .3); border-radius: 50%; display: inline-block; height: 12px; width: 12px; margin-bottom: -2px; margin-right: .25rem; forced-color-adjust: none;}" +
      ".popover-css-inspector[data-popper-placement='left'] {margin-right: 10px !important;}" +
      ".popover-css-inspector[data-popper-placement='right'] {margin-left: 10px !important;}" +
      ".popover-css-inspector[data-popper-placement='left'] .popover-arrow {position: fixed; top: 50%; transform: translateY(-50%);}" +
      ".popover-css-inspector[data-popper-placement='right'] .popover-arrow {position: fixed; top: 50%; transform: translateY(-50%);}" +
      ".popover-css-inspector[data-popper-placement='top'] {margin-bottom: 10px !important;}" +
      ".popover-css-inspector[data-popper-placement='top'] .popover-arrow {position: fixed; left: 48%; transform: translateY(-40%); bottom: -12px;}" +
      ".popover-css-inspector[data-popper-placement='bottom'] {margin-top: 10px !important;}" +
      ".popover-css-inspector[data-popper-placement='bottom'] .popover-arrow {position: fixed; left: 48%; transform: translateY(-40%); top: -5px;}" +
      "</style>";

    const popover = new bootstrap.Popover(popoverTriggerEl, {
      content,
      boundary: "window",
      html: true,
      sanitize: false,
      popperConfig: {
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              rootBoundary: "document",
            },
          },
        ],
      },
    });
    popover.show();
    popover._config.keyboard = false;
    popover._config.backdrop = "static";
    return popover;

    function rgbToHex(rgb) {
      const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      if (!match) {
        return rgb;
      }
      return `#${hex(match[1])}${hex(match[2])}${hex(match[3])}`;
    }

    function hex(x) {
      return `0${parseInt(x).toString(16)}`.slice(-2);
    }
  });
}

// Initial creation of popovers
createPopovers();

function shouldRefreshPopovers(mutation) {
  if (mutation.type === "attributes") {
    const { target } = mutation;
    return mutation.attributeName === "data-bs-theme" || target.matches(popoverSelector);
  }

  const hasMatchingNode = (node) =>
    node.nodeType === Node.ELEMENT_NODE && (node.matches(popoverSelector) || node.querySelector(popoverSelector));

  return Array.from(mutation.addedNodes).some(hasMatchingNode) || Array.from(mutation.removedNodes).some(hasMatchingNode);
}

// Recreate popovers when the theme changes or matching nodes are added/updated
const popoverObserver = new MutationObserver((mutations) => {
  if (!mutations.some(shouldRefreshPopovers)) {
    return;
  }

  createPopovers();
});

// Start observing theme and DOM changes
popoverObserver.observe(document.documentElement, {
  attributeFilter: ["data-bs-theme", "data-bs-custom-class", "data-css-inspector-show", "data-css-inspector-hide"],
  attributes: true,
  childList: true,
  subtree: true,
});
