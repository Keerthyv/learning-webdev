/* jshint esversion: 6 */

function hello(name) {
    let phrase = `Hello,${name}!`;

    say(phrase);
}

function say(phrase) {
    alert(`**${phrase}**`);
}