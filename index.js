const json = require('./data.json');

const calculate = data => {
    const output = [];

    for (element in data) {
        
        if (data[element].operation === "add") {
            output.push(data[element].arg1 + data[element].arg2)
        }
        if (data[element].operation === "substract") {
            output.push(data[element].arg1 - data[element].arg2)
        }
        if (data[element].operation === "multiply") {
            output.push(data[element].arg1 * data[element].arg2)
        }
        if (data[element].operation === "divide") {
            output.push(data[element].arg1 / data[element].arg2)
        }
    }
    return output;

}

const outp = calculate(json);
console.log(outp);