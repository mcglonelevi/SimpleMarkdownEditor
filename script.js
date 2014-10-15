"use strict";

function insert(div, insertBefore, insertAfter) {
    var area = document.getElementById(div);
    area.value = [area.value.slice(0, area.selectionStart), insertBefore, area.value.slice(area.selectionStart, area.selectionEnd), insertAfter, area.value.slice(area.selectionEnd)].join('');
}

function bold() {
    insert("editor", "**", "**");
}

function italics() {
    insert("editor", "*", "*");
}

function hr() {
    insert("editor", "-----", "");
}


function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function blockquote() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "> ", replaceAll("\n", "\n> " , area.value.slice(area.selectionStart, area.selectionEnd)), area.value.slice(area.selectionEnd)].join('');
}

function list() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "* ", replaceAll("\n", "\n* " , area.value.slice(area.selectionStart, area.selectionEnd)), area.value.slice(area.selectionEnd)].join('');
}

function orderedList() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "1. ", replaceAll("\n","\n1. ", area.value.slice(area.selectionStart, area.selectionEnd)), area.value.slice(area.selectionEnd)].join('');
}

function link() {
    insert("editor", "<", ">");
}

function H1() {
    insert("editor", "#", "");
}

function H2() {
    insert("editor", "##", "");
}

function H3() {
    insert("editor", "###", "");
}

function H4() {
    insert("editor", "####", "");
}

function H5() {
    insert("editor", "#####", "");
}

function H6() {
    insert("editor", "######", "");
}