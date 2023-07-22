/*!
 * Popover CSS Inspector v1.0.0-alpha1
 * Copyright 2023 C.Oliff
 * Licensed under MIT (https://github.com/coliff/bootstrap-show-password-toggle/blob/main/LICENSE)
 */

var PopoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-custom-class="popover-css-inspector"]'));
var popoverList = PopoverTriggerList.map(function (popoverTriggerEl) {
  var styles = window.getComputedStyle(popoverTriggerEl);
  var bgColor = styles.getPropertyValue("background-color");
  var Color = styles.getPropertyValue("color");
  var content = '<table class="table table-sm table-borderless small m-0 p-0">';
  if (
    styles.getPropertyValue("background-color") &&
    styles.getPropertyValue("background-color") !== "none" &&
    styles.getPropertyValue("background-color") !== "" &&
    styles.getPropertyValue("background-color") !== null
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
    popoverTriggerEl.getAttribute("data-css-inspector") == "show-b"
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
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-br"
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>border-radius:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("border-radius") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("color") &&
    styles.getPropertyValue("color") !== "none" &&
    styles.getPropertyValue("color") !== "" &&
    styles.getPropertyValue("color") !== null &&
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-c"
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
    styles.getPropertyValue("font-size") &&
    styles.getPropertyValue("font-size") !== "none" &&
    styles.getPropertyValue("font-size") !== "" &&
    styles.getPropertyValue("font-size") !== null &&
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-fs"
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
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-fw"
  ) {
    content +=
      '<tr><td class="h p-0 pe-2"><b>font-weight:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("font-weight") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("height") &&
    styles.getPropertyValue("height") !== "none" &&
    styles.getPropertyValue("height") !== "" &&
    styles.getPropertyValue("height") !== null &&
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-h"
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
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-m"
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
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-o"
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
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-p"
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
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-ta"
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>text-align:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("text-align") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("text-transform") &&
    styles.getPropertyValue("text-transform") !== "none" &&
    styles.getPropertyValue("text-transform") !== "" &&
    styles.getPropertyValue("text-transform") !== null &&
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-tt"
  ) {
    content +=
      '<tr><td class="p p-0 pe-2"><b>text-transform:</b></td>' +
      '<td class="font-monospace p-0 opacity-75">' +
      styles.getPropertyValue("text-transform") +
      "</td></tr>";
  }
  if (
    styles.getPropertyValue("width") &&
    styles.getPropertyValue("width") !== "none" &&
    styles.getPropertyValue("width") !== "" &&
    styles.getPropertyValue("width") !== null &&
    !styles.getPropertyValue("width").includes(".") &&
    popoverTriggerEl.getAttribute("data-css-inspector") !== "hide-w"
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
