import { suma, multiplica } from './controller.js';
import chalk from 'chalk';

const resulSuma1 = suma(1, 2);
const resulSuma2 = suma(4, 5);
const resulMulti = multiplica(resulSuma1, resulSuma2);
console.log(chalk.green(resulMulti));