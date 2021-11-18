main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';

var text = document.createTextNode("Dominique is the champion");
newHeader.appendChild(text);