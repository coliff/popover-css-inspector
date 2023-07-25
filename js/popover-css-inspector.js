/*!
 * Popover CSS Inspector v1.0.0-beta5
 * Copyright 2023 C.Oliff
 * Licensed under MIT (https://github.com/coliff/popover-css-inspector/blob/main/LICENSE)
 */

var PopoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-custom-class*="popover-css-inspector"]'));
var popoverList = PopoverTriggerList.map(function (popoverTriggerEl) {
  var styles = window.getComputedStyle(popoverTriggerEl);
  var bgColor = styles.getPropertyValue("background-color");
  var borderColor = styles.getPropertyValue("border-color");
  var Color = styles.getPropertyValue("color");
  var content = '<table class="small" style="margin: 0 !important; padding: 0">';
  if (
    styles.getPropertyValue("accent-color") &&
    styles.getPropertyValue("accent-color") !== "" &&
    styles.getPropertyValue("accent-color") !== null &&
    /show-ac/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-accent-color"><td>accent-color:</td>' + "<td>" + styles.getPropertyValue("accent-color") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("appearance") &&
    styles.getPropertyValue("appearance") !== "" &&
    styles.getPropertyValue("appearance") !== null &&
    /show-ap/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-appearance"><td>appearance:</td>' + "<td>" + styles.getPropertyValue("appearance") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("background-color") &&
    styles.getPropertyValue("background-color") !== "none" &&
    styles.getPropertyValue("background-color") !== "" &&
    styles.getPropertyValue("background-color") !== null &&
    !/hide-bc/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-background-color"><td>background:</td>' +
      "<td>" +
      '<div class="css-swatch border" style="background-color:' +
      rgbToHex(bgColor) +
      '"></div><span class="opacity-75">' +
      rgbToHex(bgColor) +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("background-image") &&
    styles.getPropertyValue("background-image") !== "none" &&
    styles.getPropertyValue("background-image") !== "" &&
    styles.getPropertyValue("background-image") !== null &&
    /show-bi/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-background-image"><td>background-image:</td>' + "<td>" + styles.getPropertyValue("background-image") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("border") &&
    styles.getPropertyValue("border") !== "none" &&
    styles.getPropertyValue("border") !== "" &&
    styles.getPropertyValue("border") !== null &&
    /show-bo/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-border"><td>border:</td>' + "<td>" + styles.getPropertyValue("border") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("border-color") &&
    styles.getPropertyValue("border-color") !== "none" &&
    styles.getPropertyValue("border-color") !== "" &&
    styles.getPropertyValue("border-color") !== null &&
    /show-b-c/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-border-color"><td>border-color:</td>' +
      "<td>" +
      '<div class="css-swatch border" style="background-color:' +
      rgbToHex(borderColor) +
      '"></div><span class="opacity-75">' +
      rgbToHex(borderColor) +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("border-left-width") &&
    styles.getPropertyValue("border-left-width") !== "none" &&
    styles.getPropertyValue("border-left-width") !== "" &&
    styles.getPropertyValue("border-left-width") !== null &&
    /show-border-left-width/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-border-left-width"><td>border-left-width:</td>' +
      "<td>" +
      styles.getPropertyValue("border-left-width") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("border-radius") &&
    styles.getPropertyValue("border-radius") !== "none" &&
    styles.getPropertyValue("border-radius") !== "" &&
    styles.getPropertyValue("border-radius") !== null &&
    !/hide-br/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-border-radius"><td>border-radius:</td>' + "<td>" + styles.getPropertyValue("border-radius") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("border-width") &&
    styles.getPropertyValue("border-width") !== "none" &&
    styles.getPropertyValue("border-width") !== "" &&
    styles.getPropertyValue("border-width") !== null &&
    /show-bw/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-border-width"><td>border-width:</td>' + "<td>" + styles.getPropertyValue("border-width") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("box-shadow") &&
    styles.getPropertyValue("box-shadow") !== "none" &&
    styles.getPropertyValue("box-shadow") !== "" &&
    styles.getPropertyValue("box-shadow") !== null &&
    /show-box-shadow/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-box-sizing"><td>box-shadow:</td>' + "<td>" + styles.getPropertyValue("box-shadow") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("box-sizing") &&
    styles.getPropertyValue("box-sizing") !== "none" &&
    styles.getPropertyValue("box-sizing") !== "" &&
    styles.getPropertyValue("box-sizing") !== null &&
    /show-box-sizing/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-box-sizing"><td>box-sizing:</td>' + "<td>" + styles.getPropertyValue("box-sizing") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("color") &&
    styles.getPropertyValue("color") !== "none" &&
    styles.getPropertyValue("color") !== "" &&
    styles.getPropertyValue("color") !== null &&
    !/hide-c/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-color"><td>color:</td>' +
      "<td>" +
      '<div class="css-swatch border" style="background-color:' +
      rgbToHex(Color) +
      '"></div><span class="opacity-75">' +
      rgbToHex(Color) +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("display") &&
    styles.getPropertyValue("display") !== "none" &&
    styles.getPropertyValue("display") !== "" &&
    styles.getPropertyValue("display") !== null &&
    /show-d/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-display"><td>display:</td>' + "<td>" + styles.getPropertyValue("display") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("float") &&
    styles.getPropertyValue("float") !== "none" &&
    styles.getPropertyValue("float") !== "" &&
    styles.getPropertyValue("float") !== null &&
    /show-float/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-float"><td>float:</td>' + "<td>" + styles.getPropertyValue("float") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("font-family") &&
    styles.getPropertyValue("font-family") !== "none" &&
    styles.getPropertyValue("font-family") !== "" &&
    styles.getPropertyValue("font-family") !== null &&
    /show-ff/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-font-family"><td>font-family:</td>' + "<td>" + styles.getPropertyValue("font-family") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("font-size") &&
    styles.getPropertyValue("font-size") !== "none" &&
    styles.getPropertyValue("font-size") !== "" &&
    styles.getPropertyValue("font-size") !== null &&
    !/hide-fs/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-font-size"><td>font-size:</td>' + "<td>" + styles.getPropertyValue("font-size") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("font-weight") &&
    styles.getPropertyValue("font-weight") !== "none" &&
    styles.getPropertyValue("font-weight") !== "400" &&
    styles.getPropertyValue("font-weight") !== "" &&
    styles.getPropertyValue("font-weight") !== null &&
    !/hide-fw/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-font-weight"><td>font-weight:</td>' + "<td>" + styles.getPropertyValue("font-weight") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("line-break") &&
    styles.getPropertyValue("line-break") !== "none" &&
    styles.getPropertyValue("line-break") !== "" &&
    styles.getPropertyValue("line-break") !== null &&
    /show-lb/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-line-break"><td>line-break:</td>' + "<td>" + styles.getPropertyValue("line-break") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("line-height") &&
    styles.getPropertyValue("line-height") !== "none" &&
    styles.getPropertyValue("line-height") !== "" &&
    styles.getPropertyValue("line-height") !== null &&
    /show-lh/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-line-height"><td>line-height:</td>' + "<td>" + styles.getPropertyValue("line-height") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("list-style") &&
    styles.getPropertyValue("list-style") !== "none" &&
    styles.getPropertyValue("list-style") !== "" &&
    styles.getPropertyValue("list-style") !== null &&
    /show-list-style/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-list-style"><td>list-style:</td>' + "<td>" + styles.getPropertyValue("list-style") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("letter-spacing") &&
    styles.getPropertyValue("letter-spacing") !== "none" &&
    styles.getPropertyValue("letter-spacing") !== "" &&
    styles.getPropertyValue("letter-spacing") !== null &&
    /show-letter-spacing/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-letter-spacing"><td>letter-spacing:</td>' + "<td>" + styles.getPropertyValue("letter-spacing") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("height") &&
    styles.getPropertyValue("height") !== "none" &&
    styles.getPropertyValue("height") !== "" &&
    styles.getPropertyValue("height") !== null &&
    !/hide-h/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-height"><td>height:</td>' + "<td>" + styles.getPropertyValue("height") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("margin") &&
    styles.getPropertyValue("margin") !== "none" &&
    styles.getPropertyValue("margin") !== "0px" &&
    styles.getPropertyValue("margin") !== "" &&
    styles.getPropertyValue("margin") !== null &&
    !/hide-m/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-margin"><td>margin:</td>' + "<td>" + styles.getPropertyValue("margin") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("margin-bottom") &&
    styles.getPropertyValue("margin-bottom") !== "none" &&
    styles.getPropertyValue("margin-bottom") !== "0px" &&
    styles.getPropertyValue("margin-bottom") !== "" &&
    styles.getPropertyValue("margin-bottom") !== null &&
    /show-margin-bottom/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-margin-bottom"><td>margin-bottom:</td>' + "<td>" + styles.getPropertyValue("margin-bottom") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("margin-left") &&
    styles.getPropertyValue("margin-left") !== "none" &&
    styles.getPropertyValue("margin-left") !== "0px" &&
    styles.getPropertyValue("margin-left") !== "" &&
    styles.getPropertyValue("margin-left") !== null &&
    /show-margin-top/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-margin-left"><td>margin-left:</td>' + "<td>" + styles.getPropertyValue("margin-left") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("margin-right") &&
    styles.getPropertyValue("margin-right") !== "none" &&
    styles.getPropertyValue("margin-right") !== "0px" &&
    styles.getPropertyValue("margin-right") !== "" &&
    styles.getPropertyValue("margin-right") !== null &&
    /show-margin-right/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-margin-right"><td>margin-right:</td>' + "<td>" + styles.getPropertyValue("margin-right") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("margin-top") &&
    styles.getPropertyValue("margin-top") !== "none" &&
    styles.getPropertyValue("margin-top") !== "0px" &&
    styles.getPropertyValue("margin-top") !== "" &&
    styles.getPropertyValue("margin-top") !== null &&
    /show-margin-top/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-margin-top"><td>margin-top:</td>' + "<td>" + styles.getPropertyValue("margin-top") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("max-width") &&
    styles.getPropertyValue("max-width") !== "none" &&
    styles.getPropertyValue("max-width") !== "" &&
    styles.getPropertyValue("max-width") !== null &&
    !/hide-max-w/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-max-width"><td>max-width:</td>' + "<td>" + styles.getPropertyValue("max-width") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("min-width") &&
    styles.getPropertyValue("min-width") !== "none" &&
    styles.getPropertyValue("min-width") !== "0px" &&
    styles.getPropertyValue("min-width") !== "" &&
    styles.getPropertyValue("min-width") !== null &&
    !/hide-min-w/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-min-width"><td>min-width:</td>' + "<td>" + styles.getPropertyValue("min-width") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("opacity") &&
    styles.getPropertyValue("opacity") !== "none" &&
    styles.getPropertyValue("opacity") !== "1" &&
    styles.getPropertyValue("opacity") !== "" &&
    styles.getPropertyValue("opacity") !== null &&
    !/hide-o/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-opacity"><td>opacity:</td>' + "<td>" + styles.getPropertyValue("opacity") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("padding") &&
    styles.getPropertyValue("padding") !== "none" &&
    styles.getPropertyValue("padding") !== "" &&
    styles.getPropertyValue("padding") !== null &&
    !styles.getPropertyValue("padding").includes(".") &&
    !/hide-p/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-padding"><td>padding:</td>' + "<td>" + styles.getPropertyValue("padding") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("position") &&
    styles.getPropertyValue("position") !== "none" &&
    styles.getPropertyValue("position") !== "" &&
    styles.getPropertyValue("position") !== null &&
    /show-position/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-position"><td>position:</td>' + "<td>" + styles.getPropertyValue("position") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-align") &&
    styles.getPropertyValue("text-align") !== "none" &&
    styles.getPropertyValue("text-align") !== "start" &&
    styles.getPropertyValue("text-align") !== "" &&
    styles.getPropertyValue("text-align") !== null &&
    !/hide-ta/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-text-align"><td>text-align:</td>' + "<td>" + styles.getPropertyValue("text-align") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-decoration") &&
    styles.getPropertyValue("text-decoration") !== "none" &&
    styles.getPropertyValue("text-decoration") !== "start" &&
    styles.getPropertyValue("text-decoration") !== "" &&
    styles.getPropertyValue("text-decoration") !== null &&
    /show-text-decoration/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-text-decoration"><td>text-decoration:</td>' + "<td>" + styles.getPropertyValue("text-decoration") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-shadow") &&
    styles.getPropertyValue("text-shadow") !== "none" &&
    styles.getPropertyValue("text-shadow") !== "" &&
    styles.getPropertyValue("text-shadow") !== null &&
    /show-text-shadow/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-text-shadow"><td>text-shadow:</td>' + "<td>" + styles.getPropertyValue("text-shadow") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-transform") &&
    styles.getPropertyValue("text-transform") !== "none" &&
    styles.getPropertyValue("text-transform") !== "" &&
    styles.getPropertyValue("text-transform") !== null &&
    !/hide-tt/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-text-transform"><td>text-transform:</td>' + "<td>" + styles.getPropertyValue("text-transform") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("transition") &&
    styles.getPropertyValue("transition") !== "none" &&
    styles.getPropertyValue("transition") !== "" &&
    styles.getPropertyValue("transition") !== null &&
    /show-tr/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-transition"><td>transition:</td>' + "<td>" + styles.getPropertyValue("transition") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("user-select") &&
    styles.getPropertyValue("user-select") !== "none" &&
    styles.getPropertyValue("user-select") !== "" &&
    styles.getPropertyValue("user-select") !== null &&
    !/hide-us/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-user-select"><td>user-select:</td>' + "<td>" + styles.getPropertyValue("user-select") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("vertical-align") &&
    styles.getPropertyValue("vertical-align") !== "none" &&
    styles.getPropertyValue("vertical-align") !== "" &&
    styles.getPropertyValue("vertical-align") !== null &&
    /show-va/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr class="css-vertical-align"><td>vertical-align:</td>' + "<td>" + styles.getPropertyValue("vertical-align") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("white-space") &&
    styles.getPropertyValue("white-space") !== "none" &&
    styles.getPropertyValue("white-space") !== "normal" &&
    styles.getPropertyValue("white-space") !== "" &&
    styles.getPropertyValue("white-space") !== null &&
    !styles.getPropertyValue("white-space").includes(".") &&
    /show-ws/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-white-space"><td>white-space:</td>' + "<td>" + styles.getPropertyValue("white-space") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("width") &&
    styles.getPropertyValue("width") !== "none" &&
    styles.getPropertyValue("width") !== "" &&
    styles.getPropertyValue("width") !== null &&
    !styles.getPropertyValue("width").includes(".") &&
    !/hide-w/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-width"><td>width:</td>' + "<td>" + styles.getPropertyValue("width") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("word-break") &&
    styles.getPropertyValue("word-break") !== "none" &&
    styles.getPropertyValue("word-break") !== "" &&
    styles.getPropertyValue("word-break") !== null &&
    !styles.getPropertyValue("word-break").includes(".") &&
    /show-wb/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-word-break"><td>word-break:</td>' + "<td>" + styles.getPropertyValue("word-break") + "</td></tr>";
  }
  if (
    styles.getPropertyValue("z-index") &&
    styles.getPropertyValue("z-index") !== "none" &&
    styles.getPropertyValue("z-index") !== "" &&
    styles.getPropertyValue("z-index") !== null &&
    !styles.getPropertyValue("z-index").includes(".") &&
    /show-zi/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content += '<tr class="css-z-index"><td>z-index:</td>' + "<td>" + styles.getPropertyValue("z-index") + "</td></tr>";
  }
  content +=
    "</table>" +
    "<style>" +
    ".popover-css-inspector .popover-body {padding: 0.75rem;} " +
    ".popover-css-inspector .popover-body td {height: 1.1rem; padding: 0;} " +
    ".popover-css-inspector .popover-body td:nth-child(1) {font-weight: bold; padding-right: .5rem;}" +
    ".popover-css-inspector .popover-body td:nth-child(2) {opacity: 0.75; font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;}" +
    ".popover-css-inspector .css-swatch {border-width: 1px; border-radius: 50%; display: inline-block; height: 12px; width: 12px; margin-bottom: -2px; margin-right: .25rem}" +
    "</style>";
  var popover = new bootstrap.Popover(popoverTriggerEl, {
    content: content,
    html: true,
    offset: [0, 8],
    sanitize: false,
  });
  popover.show();
  popover._config.keyboard = false;
  popover._config.backdrop = "static";
  return popover;
});

function rgbToHex(rgb) {
  var match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    return rgb;
  }
  return "#" + hex(match[1]) + hex(match[2]) + hex(match[3]);
}

function hex(x) {
  return ("0" + parseInt(x).toString(16)).slice(-2);
}
