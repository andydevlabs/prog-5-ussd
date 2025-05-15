import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

let running: boolean = true;
let menuShown: boolean = false;

console.log("Enter #111# to show the menu : ");
while (running) {
    const ask = prompt("> ");
    switch (ask) {
        case "#111#":
            console.log("Welcome to the menu");
            console.log(`Enter "exit" to quit`);

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
