/*!
 * Popover CSS Inspector v1.0.0-beta2
 * Copyright 2023 C.Oliff
 * Licensed under MIT (https://github.com/coliff/popover-css-inspector/blob/main/LICENSE)
 */

var PopoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-custom-class="popover-css-inspector"]'));
var popoverList = PopoverTriggerList.map(function (popoverTriggerEl) {
  var styles = window.getComputedStyle(popoverTriggerEl);
  var bgColor = styles.getPropertyValue("background-color");
  var Color = styles.getPropertyValue("color");
  var content = '<table class="table table-sm table-borderless small m-0 p-0">';
  if (
    styles.getPropertyValue("appearance") &&
    styles.getPropertyValue("appearance") !== "" &&
    styles.getPropertyValue("appearance") !== null &&
    /show-a/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>appearance:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("appearance") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("background-color") &&
    styles.getPropertyValue("background-color") !== "none" &&
    styles.getPropertyValue("background-color") !== "" &&
    styles.getPropertyValue("background-color") !== null &&
    !/hide-bc/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>background:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      '<div class="d-inline-block border rounded-circle me-1" style="margin-bottom:-2px;width:12px;height:12px;background-color:' +
      rgbToHex(bgColor) +
      '"></div><span class="opacity-75">' +
      rgbToHex(bgColor) +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("border") &&
    styles.getPropertyValue("border") !== "none" &&
    styles.getPropertyValue("border") !== "" &&
    styles.getPropertyValue("border") !== null &&
    /show-b /.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>border:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("border") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("border-radius") &&
    styles.getPropertyValue("border-radius") !== "none" &&
    styles.getPropertyValue("border-radius") !== "" &&
    styles.getPropertyValue("border-radius") !== null &&
    !/hide-br/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>border-radius:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("border-radius") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("border-width") &&
    styles.getPropertyValue("border-width") !== "none" &&
    styles.getPropertyValue("border-width") !== "" &&
    styles.getPropertyValue("border-width") !== null &&
    /show-bw/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>border-width:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("border-width") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("box-sizing") &&
    styles.getPropertyValue("box-sizing") !== "none" &&
    styles.getPropertyValue("box-sizing") !== "" &&
    styles.getPropertyValue("box-sizing") !== null &&
    /show-bs/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>box-sizing:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("box-sizing") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("color") &&
    styles.getPropertyValue("color") !== "none" &&
    styles.getPropertyValue("color") !== "" &&
    styles.getPropertyValue("color") !== null &&
    !/hide-c/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>color:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      '<div class="d-inline-block border rounded-circle me-1" style="margin-bottom:-2px;width:12px;height:12px;background-color:' +
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
    content +=
      '<tr><td class="h p-0 pe-2"><b>display:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("display") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("font-family") &&
    styles.getPropertyValue("font-family") !== "none" &&
    styles.getPropertyValue("font-family") !== "" &&
    styles.getPropertyValue("font-family") !== null &&
    /show-ff/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>font-family:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("font-family") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("font-size") &&
    styles.getPropertyValue("font-size") !== "none" &&
    styles.getPropertyValue("font-size") !== "" &&
    styles.getPropertyValue("font-size") !== null &&
    !/hide-fs/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>font-size:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("font-size") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("font-weight") &&
    styles.getPropertyValue("font-weight") !== "none" &&
    styles.getPropertyValue("font-weight") !== "400" &&
    styles.getPropertyValue("font-weight") !== "" &&
    styles.getPropertyValue("font-weight") !== null &&
    !/hide-fw/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>font-weight:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("font-weight") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("line-height") &&
    styles.getPropertyValue("line-height") !== "none" &&
    styles.getPropertyValue("line-height") !== "" &&
    styles.getPropertyValue("line-height") !== null &&
    /show-lh/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>line-height:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("line-height") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("height") &&
    styles.getPropertyValue("height") !== "none" &&
    styles.getPropertyValue("height") !== "" &&
    styles.getPropertyValue("height") !== null &&
    !/hide-h/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>height:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("height") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("margin") &&
    styles.getPropertyValue("margin") !== "none" &&
    styles.getPropertyValue("margin") !== "0px" &&
    styles.getPropertyValue("margin") !== "" &&
    styles.getPropertyValue("margin") !== null &&
    !/hide-m/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="m p-0 pe-2"><b>margin:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("margin") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("opacity") &&
    styles.getPropertyValue("opacity") !== "none" &&
    styles.getPropertyValue("opacity") !== "1" &&
    styles.getPropertyValue("opacity") !== "" &&
    styles.getPropertyValue("opacity") !== null &&
    !styles.getPropertyValue("opacity").includes(".") &&
    !/hide-o/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>opacity:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("opacity") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("padding") &&
    styles.getPropertyValue("padding") !== "none" &&
    styles.getPropertyValue("padding") !== "" &&
    styles.getPropertyValue("padding") !== null &&
    !styles.getPropertyValue("padding").includes(".") &&
    !/hide-p/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>padding:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("padding") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-align") &&
    styles.getPropertyValue("text-align") !== "none" &&
    styles.getPropertyValue("text-align") !== "start" &&
    styles.getPropertyValue("text-align") !== "" &&
    styles.getPropertyValue("text-align") !== null &&
    !/hide-ta/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>text-align:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("text-align") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-decoration") &&
    styles.getPropertyValue("text-decoration") !== "none" &&
    styles.getPropertyValue("text-decoration") !== "start" &&
    styles.getPropertyValue("text-decoration") !== "" &&
    styles.getPropertyValue("text-decoration") !== null &&
    /show-td/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>text-decoration:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("text-decoration") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-transform") &&
    styles.getPropertyValue("text-transform") !== "none" &&
    styles.getPropertyValue("text-transform") !== "" &&
    styles.getPropertyValue("text-transform") !== null &&
    !/hide-tt/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>text-transform:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("text-transform") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("transition") &&
    styles.getPropertyValue("transition") !== "none" &&
    styles.getPropertyValue("transition") !== "" &&
    styles.getPropertyValue("transition") !== null &&
    /show-tr/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>transition:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("transition") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("user-select") &&
    styles.getPropertyValue("user-select") !== "none" &&
    styles.getPropertyValue("user-select") !== "" &&
    styles.getPropertyValue("user-select") !== null &&
    !/hide-us/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>user-select:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("user-select") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("vertical-align") &&
    styles.getPropertyValue("vertical-align") !== "none" &&
    styles.getPropertyValue("vertical-align") !== "" &&
    styles.getPropertyValue("vertical-align") !== null &&
    /show-va/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>vertical-align:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("vertical-align") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("white-space") &&
    styles.getPropertyValue("white-space") !== "none" &&
    styles.getPropertyValue("white-space") !== "normal" &&
    styles.getPropertyValue("white-space") !== "" &&
    styles.getPropertyValue("white-space") !== null &&
    !styles.getPropertyValue("white-space").includes(".") &&
    !/hide-ws/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>white-space:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("white-space") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("width") &&
    styles.getPropertyValue("width") !== "none" &&
    styles.getPropertyValue("width") !== "" &&
    styles.getPropertyValue("width") !== null &&
    !styles.getPropertyValue("width").includes(".") &&
    !/hide-w/.test(popoverTriggerEl.getAttribute("data-css-inspector"))
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>width:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("width") +
      "</td></tr>";
  }
  content += "</table><style>.popover-body{padding:0.75rem}.popover-body td{height:1.1rem}</style>";
  var customClass = "css-inspector " + popoverTriggerEl.getAttribute("id");
  var popover = new bootstrap.Popover(popoverTriggerEl, {
    content: content,
    html: true,
    offset: [0, 8],
    sanitize: false,
    customClass: customClass,
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
