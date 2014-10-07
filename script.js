function bold() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "**", area.value.slice(area.selectionStart, area.selectionEnd), "**", area.value.slice(area.selectionEnd)].join('');
}

function italics() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "*", area.value.slice(area.selectionStart, area.selectionEnd), "*", area.value.slice(area.selectionEnd)].join('');
}

function hr() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "-----", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}

function blockquote() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "> ", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}

function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function list() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "* ", replaceAll("\n","\n* ",area.value.slice(area.selectionStart, area.selectionEnd)), area.value.slice(area.selectionEnd)].join('');
}

function orderedList() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "1. ", replaceAll("\n","\n1. ",area.value.slice(area.selectionStart, area.selectionEnd)), area.value.slice(area.selectionEnd)].join('');
}

function link() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "<", area.value.slice(area.selectionStart, area.selectionEnd), ">", area.value.slice(area.selectionEnd)].join('');
}

function H1() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "# ", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}

function H2() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "## ", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}

function H3() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "### ", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}

function H4() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "#### ", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}

function H5() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "##### ", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}

function H6() {
    var area = document.getElementById("editor");
    area.value = [area.value.slice(0, area.selectionStart), "###### ", area.value.slice(area.selectionStart, area.selectionEnd), area.value.slice(area.selectionEnd)].join('');
}