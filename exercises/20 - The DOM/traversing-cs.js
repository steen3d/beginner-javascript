console.log('it works');

const wes = document.querySelector('.wes');
console.log(wes.children); // All of the child elements
console.log(wes.firstElementChild); // First child element
console.log(wes.lastElementChild); // Last child element
console.log(wes.previousElementSibling); // Element before this element
console.log(wes.nextElementSibling); // Element after this element
console.log(wes.parentElement); // Parent element of this element

// Similar to above but for all nodes
console.log(wes.childNodes); // All of the nodes, including text etc
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

// .remove() removes nodes
