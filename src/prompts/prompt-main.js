import chalk from "chalk";


const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow.bold("Escolha uma feramenta (1 - QRCODES ou (2 - Gerador de Senhas"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Selecione uma opção válida (1 ou 2)"),
        required: true, 
    }
]

export default mainPrompt;