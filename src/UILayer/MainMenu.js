const { askQuestion } = require("./CommonFunctions");

module.exports = async function mainMenu() {
    console.log("Welcome to the Student-Teacher Database Service.")
    let shouldLoop = true;
    while (shouldLoop) {
        console.log("MAIN MENU");
        console.log("[1] Student Menu");
        console.log("[2] Teacher Menu");
        console.log("[3] Exit");
        let answer = await askQuestion("Please select an option from above: ");
        console.log();
        switch (answer) {
            case "1":
                // Call studentMenu
                break;
            case "2":
                // Call teacherMenu
                break;
            case "3":
                shouldLoop = false;
                break;
            default:
                console.log("Please enter a number from 1 to 3");
                console.log();
                break;
        }
    }
    console.log("Thank you for using the Student-Teacher Database Service.");
}