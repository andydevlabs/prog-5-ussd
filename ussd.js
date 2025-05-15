"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync({ sigint: true });
var running = true;
console.log("Enter #111# to show the menu : ");
while (running) {
    var ask = prompt("> ");
    switch (ask) {
        case "#111#":
            console.log("Welcome to the menu");
            console.log("Enter \"exit\" to quit");
            break;
        case "exit":
            console.log("Good Bye");
            running = false;
            break;
        default:
            console.log("Wrong, actually only #111# works");
            break;
    }
}
