// Copied from here: https://codepen.io/shaikmaqsood/pen/XmydxJ
function copyPassword(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}