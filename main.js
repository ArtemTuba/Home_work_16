function reversal(argument){
    if(!(typeof argument === 'number')){
        console.log("Аргумент не число");
        return  argument = 0;
    }
    argument = argument + '';
    return argument.split('').reverse().join('');
}

console.log(reversal(12345));