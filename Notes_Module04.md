## Intro to the DOM

Document Object Model is created from your html

Window - global scope in the browser - Everything about the currently open window

window.location has a bunch of info about the current page

document - actual page - opening to closing html

navigator - higher level than the window - device level stuff

## Selecting elements

Script in the head will run first

Putting it before closing body tag ensures that it loads after the dom

querySelector - first matching element

querySelectorAll - node list of all elements

they take css selectors

can use child selectors etc - items =  document.querySelectorAll('.item img')

can also use on other stored elements - items.querySelector('img')

## Elements, Properties, and Methods

console.dir() - shows properties on an element - can be used as getters and setters

heading.textContent like heading.innerText but also returns for <script> and <style> elements, also returns hidden element

Inner text is aware of styling

outerHtml - returns html tag too

insertAdjacentText - method that will add text to front or back of text without redrawing existing text

Elements are wrapped in a tag - nodes are everything else including elements

## Working with classes
the-dom.js

.classList will log all classes on an element

prototype has methods for working with classes

.classList.add('myclass'), .classList.remove('myclass'), .classList.toggle('myclass'), classList.contains('myclass')

.className will give a list of classes as well, but doesn't have the methods above

## Attributes

setAttribute('alt', 'Some alt text'); - lets you use non-standard attributes ie. you can make your own - but don't do it

data-myattribute - this is a better way to make your own attribute
.dataset returns all custom data attributes in an object

## Creating elements

see creating.js

## Html from strings and xss




