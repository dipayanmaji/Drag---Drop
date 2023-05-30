function allowDrop(e){
    e.preventDefault();
}
function denyDrop(e){
    e.stopPropagation();
}
function drag(e){
    e.dataTransfer.setData("item", e.target.id);
}
function drop(e){
    e.preventDefault();
    const elementId = e.dataTransfer.getData("item");
    e.target.appendChild(document.getElementById(elementId));
}