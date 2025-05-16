import promptSync from "prompt-sync";

// class MainMenu implements Menu {
//     id: number;
//     description: string;

//     constructor(id: number, description: string) {
//         this.id = id;
//         this.description = description;
//     }
// }

// class NextMenu implements Menu {
//     id: number;
//     description: string;

//     constructor(id: number, description: string) {
//         this.id = id;
//         this.description = description;
//     }
// }

// class PreviousMenu implements Menu {
//     id: number;
//     description: string;

//     constructor(id: number, description: string) {
//         this.id = id;
//         this.description = description;
//     }
// }

class Menu {
    id: number;
    description: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }
}

const mainMenu: Menu[] = [
    new Menu(1, "Acheter Credit ou Offre Yas"),
    new Menu(2, "Transfert argent"),
];

const secondeMenu: Menu[] = [new Menu(1, "Test 1"), new Menu(2, "Test 2")];

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const prompt = promptSync({ sigint: true }) as (question?: string) => string;

let isRunning: boolean = true;
let currentMenu: string = "main";
const menuHistory: string[] = [];

function showMainMenu(): void {
    console.log("MVola Menu");
    mainMenu.forEach((m) => {
        console.log(`${m.id} - ${m.description}`);
    });
    currentMenu = "main";
}

function showSecondMenu(): void {
    secondeMenu.forEach((m) => {
        console.log(`${m.id} - ${m.description}`);
    });
    currentMenu = "second";
}

showMainMenu();

while (isRunning) {
    const ask = prompt("> ");

    if (currentMenu === "main") {
        switch (ask) {
            case "1":
                showSecondMenu();
                break;
            case "exit":
                console.log("Good Bye");
                isRunning = false;
                break;
            default:
                console.log("Unknown, please try again");
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
                showMainMenu();
                break;
            case "exit":
                console.log("See you!");
                isRunning = false;
                break;
            default:
                console.log("Unknown, please try again");
                break;
        }
    }
}
