import promptSync from "prompt-sync";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const prompt = promptSync({ sigint: true });
let isRunning = true;
console.log("Enter #111# to show the menu : ");
while (isRunning) {
    const ask = prompt("> ");
    switch (ask) {
        case "#111#":
            console.log("Welcome to the menu");
            console.log(`Enter "exit" to quit`);
            break;
        case "exit":
            console.log("Good Bye");
            isRunning = false;
            break;
        default:
            console.log("Wrong, actually only #111# works");
            break;
    }
}
