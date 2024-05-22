import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your Todo?:"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    console.log(answers);
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Please Enter valid Todos");
    }
}
console.log(todos);
if (todos.length > 0) {
    console.log("Your todo list is");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("Your todo list is empty!");
}
