const ui = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

ui.question('Hi there! What is your name?\n\n', input => {
    const message = sayHello(input)
    console.log(message)
    console.log('This is an edit to the code :)')
    ui.close();
})

function sayHello(name){
    return `\tHello, ${name}!\n`
}