const mainMenu = require("./UILayer/MainMenu");

async function Program(){
    await mainMenu();
}

Program().then(() => {
    process.exit();
});
