import promptSync from "prompt-sync";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const prompt = promptSync({ sigint: true });
class Menu {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }
}
const mainMenu = [
    new Menu("-----", "-----"),
    new Menu(1, "Acheter Credit ou Offre Yas"),
    new Menu("00", "Page suivante"),
    new Menu("#", "Quitter l'application"),
    new Menu("-----", "-----"),
];
const nextMainMenu = [
    new Menu("-----", "-----"),
    new Menu(2, "Transfert argent"),
    new Menu(0, "Page precedente"),
    new Menu("**", "Menu Principal"),
    new Menu("#", "Quitter l'application"),
    new Menu("-----", "-----"),
];
const mainMenuOne = [
    new Menu("-----", "-----"),
    new Menu(1, "Credit pour mon numero"),
    new Menu(2, "Credit pour autre numero"),
    new Menu(3, "Offre pour mon numero"),
    new Menu(4, "Offre pour autre numero"),
    new Menu("**", "Menu Principal"),
    new Menu("#", "Quitter l'application"),
    new Menu("-----", "-----"),
];
let isRunning = true;
let currentMenu = "main";
function switchDefaultText() {
    console.log("Erreur, verifiez votre choix");
}
function showMenu(menuToDisplay, menuString) {
    menuToDisplay.forEach((m) => console.log(`${m.id} - ${m.description}`));
    currentMenu = menuString;
}
showMenu(mainMenu, "mainMenu");
while (isRunning) {
    const ask = prompt("> ");
    if (currentMenu === "mainMenu") {
        switch (ask) {
            case "1":
                showMenu(mainMenuOne, "mainMenuOne");
                break;
            case "00":
                showMenu(nextMainMenu, "nextMainMenu");
                break;
            case "**":
                showMenu(mainMenu, "mainMenu");
                break;
            case "#":
                console.log("Merci d'avoir utiliser YAS");
                isRunning = false;
                break;
            default:
                switchDefaultText();
                break;
        }
    }
    else if (currentMenu === "nextMainMenu") {
        switch (ask) {
            case "2":
                console.log(nextMainMenu[0].description);
                break;
                break;
            case "0":
                showMenu(mainMenu, "mainMenu");
                break;
            case "**":
                showMenu(mainMenu, "mainMenu");
                break;
            case "#":
                console.log("Merci d'avoir utiliser YAS");
                isRunning = false;
                break;
            default:
                break;
        }
    }
    else if (currentMenu === "mainMenuOne") {
        function textToDisplayJustForthis(x) {
            const text = `vous avez choisis : ${mainMenuOne[x].description}`;
            console.log(text);
            showMenu(mainMenuOne, "mainMenuOne");
        }
        switch (ask) {
            case "1":
                textToDisplayJustForthis(1);
                break;
            case "2":
                textToDisplayJustForthis(2);
                break;
            case "3":
                textToDisplayJustForthis(3);
                break;
            case "4":
                textToDisplayJustForthis(4);
                break;
            case "**":
                showMenu(mainMenu, "mainMenu");
                break;
            case "#":
                console.log("Merci d'avoir utiliser YAS");
                isRunning = false;
                break;
            default:
                switchDefaultText();
                break;
        }
    }
}
