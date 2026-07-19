array=["apple","man","Women","ROBOT"];
array.forEach(cap)
array.forEach(display)

function display(element){
console.log(element);
}
function cap(element,index,array){
array[index]=element.charAt(0).toUpperCase()+element.slice(1).toLowerCase();
}