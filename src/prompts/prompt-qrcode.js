import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link que deseja gerar o QR Code"),
        pattern: /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/[\w.-]*)*\/?$/,
        message: chalk.red.italic("Por favor, insira um link válido (ex: https://www.exemplo.com)"),
        required: true, 
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha o tipo de QR Code (1 - NORMAL, 2 - TERMINAL"),
        required: true,
        message: chalk.red.italic("Por favor, selecione um tipo válido (1 ou 2)"),
        pattern: /^[1-2]+$/
    }
]

export default promptQRCode;