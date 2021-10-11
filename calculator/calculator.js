function display(val) {
    document.getElementById("textval").value+= value;
}
function evaluate() {
    let x = document.getElementById("textval").value;
    let y = eval(x);
    document.getElementById("textval").value = y;
}
function clear() {
    document.getElementById("textval").value = "";
}