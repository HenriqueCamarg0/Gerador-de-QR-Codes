import chalk from "chalk";
import hendle from "./hendle.js";

async function creatPassaword() {
    console.log(chalk.green.bold("\nGerador de Senhas\n"));
    const password = await hendle();
    console.log(chalk.blue.bold("Senha gerada: " , password), chalk.yellow.bold(password));
    console.log(chalk.green.bold("\nSenha gerada com sucesso!"));
}

export default creatPassaword;