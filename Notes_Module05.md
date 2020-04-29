## Events

events-cs.js

DOM Elements emit events

You can add listeners to elements to listen for these events

Callback function - a normal function that we pass to a method that gets called by the browser when it needs to

Binding - Taking a function and listening for a specific click against that element - your handler function is bound to the element looking for the click

Taking listener off is unbinding

Can't unbind a listener that is using an anonymous function

## Event Object

Event.target - item that fired the event
Event.currentTarget - the actual ittem that was clicked

propagation - event bubbles up from first thing that was clicked to all parents above
Event.stopPropagation() = prevents bubbling

Capture phase - click goes down through the document
Bubbling phase - events are triggered on the way back up from the lowest child

You can set listener to trigger events on the way down in the capture phase
Used to pass true or false to the listener as a third argument to set useCapture
Now you pass an options object

## Prevent Default, Forms

see forms.js

If checking for an interaction that leaves the page you can click the cog icon in dev tools and check preserve log

event.preventDefault(); stops the default action from executing

window.location = event.currentTarget.href; Sends browser to url stored in event target

best way to access a form is via the name attribute
get via attribute selector document.querySelector('[name="signup"]')

Set value attribute on form fields for convenience while building

required addtribute

Using valid semantic html on a form keeps you from needing to use querySelector

Don't use links as buttons. Buttons are for actions in your applications. Links are for going to new places.

Don't make things clickable that aren't keyboard accessible.

If you have to use an element as a button that isn't the button element, add role="button" tabindex="0"
