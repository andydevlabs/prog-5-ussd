import promptSync from "prompt-sync";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const prompt = promptSync({ sigint: true }) as (question?: string) => string;

class Menu {
    id: string | number;
    description: string;

    constructor(id: string | number, description: string) {
        this.id = id;
        this.description = description;
    }
}

const mainMenu: Menu[] = [
    new Menu("-----", "-----"),
    new Menu(1, "Acheter Credit ou Offre Yas"),
    new Menu("00", "Page suivante"),
    new Menu("#", "Quitter l'application"),
    new Menu("-----", "-----"),
];

const nextMainMenu: Menu[] = [
    new Menu("-----", "-----"),
    new Menu(2, "Transfert argent"),
    new Menu(0, "Page precedente"),
    new Menu("**", "Menu Principal"),
    new Menu("#", "Quitter l'application"),
    new Menu("-----", "-----"),
];

const mainMenuOne: Menu[] = [
    new Menu("-----", "-----"),
    new Menu(1, "Credit pour mon numero"),
    new Menu(2, "Credit pour autre numero"),
    new Menu(3, "Offre pour mon numero"),
    new Menu(4, "Offre pour autre numero"),
    new Menu("**", "Menu Principal"),
    new Menu("#", "Quitter l'application"),
    new Menu("-----", "-----"),
];

const mainMenuTwo: Menu[] = [
    new Menu("-----", "-----"),
    new Menu(1, "Sans numero"),
    new Menu(2, "MVola Epargne"),
    new Menu(3, "Rembourser une Avance"),
    new Menu(4, "Repertoire Mvola"),
    new Menu("**", "Menu Principal"),
    new Menu("#", "Quitter l'application"),
    new Menu("-----", "-----"),
];

let isRunning: boolean = true;
let currentMenu: string = "main";

function showTextInDisplayText(): void {
    console.log("Erreur, verifiez votre choix");
}

function showMenu(menuToDisplay: Menu[], menuString: string): void {
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
                showTextInDisplayText();
        }
    } else if (currentMenu === "nextMainMenu") {
        switch (ask) {
            case "2":
                showMenu(mainMenuTwo, "mainMenuTwo")
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
                showTextInDisplayText();
        }
    } else if (currentMenu === "mainMenuOne") {
        function textToDisplayJustForthis(x: number): void {
            const text: string = `vous avez choisis : ${mainMenuOne[x].description}`
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
                showTextInDisplayText();
        }
    } else if (currentMenu === "mainMenuTwo"){
        function textToDisplayJustForthis(x: number): void {
            const text: string = `vous avez choisis : ${mainMenuTwo[x].description}`;
            console.log(text);
            showMenu(mainMenuTwo, "mainMenuTwo");
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
                showTextInDisplayText();
        }
    }
}
