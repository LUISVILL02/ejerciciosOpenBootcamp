
import {suma, multiply} from "./moduls/controller.js"
import chalk from "chalk";

const sum = suma(1,2);
const mul = multiply(4,5);

console.log(chalk.green(`La suma es: ${sum} \n La multiplicacion es: ${mul}`));

