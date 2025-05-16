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

let isRunning: boolean = true;
let currentMenu: string = "main";

const menuHistory: string[] = [];

const mainMenu: Menu[] = [
    new Menu(1, "Acheter Credit ou Offre Yas"),
    new Menu(2, "Transfert argent"),
    new Menu(3, "Mvola Credit ou Epargne"),
    new Menu(4, "Retrait d'argent"),
    new Menu("00", "Page suivante"),
    new Menu("#", "Quitter")
];

const nextMainMenu: Menu[] = [
    new Menu(6, "Acheter Credit ou Offre Yas"),
    new Menu(7, "Transfert argent"),
    new Menu(8, "Mvola Credit ou Epargne"),
    new Menu(0, "Page precedente"),
    new Menu("**", "Menu Principal"),
    new Menu("#", "Quiter"),
];

const mainMenuOne: Menu[] = [new Menu(1, "Test 1"), new Menu(2, "Test 2")];

function switchDefaultText(): void {
    console.log("Erreur, verifiez votre choix");
}

function displayMenu(menuToDisplay: Menu[], menuString: string): void{
    menuToDisplay.forEach((m) => console.log(`${m.id} - ${m.description}`));
    currentMenu = menuString;
}

displayMenu(mainMenu, "main");

while (isRunning) {
    const ask = prompt("> ");

    if (currentMenu === "main") {
        switch (ask) {
            case "1":
                displayMenu(mainMenuOne, "menu1");
                break;
            case "00":
                displayMenu(nextMainMenu, "menu000");
                break;
            case "**":
                while (menuHistory.length > 0)
                    menuHistory.splice(0, menuHistory.length);
                displayMenu(mainMenu, "main");
                break;
            case "#":
                console.log("Merci d'avoir utiliser YAS");
                isRunning = false;
                break;
            default:
                switchDefaultText();
                break;
        }
    } else if (currentMenu === "second") {
        switch (ask) {
            case "1":
                console.log("You selected option 1 from second menu");
                break;
            case "0":
                console.log("Going back to previous menu");
                break;
            case "00":
                console.log("Going to next menu");
                break;
            case "**":
                while (menuHistory.length > 0)
                    menuHistory.splice(0, menuHistory.length);
                displayMenu(mainMenu, "main");
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
