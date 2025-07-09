import qr from  "qrcode-terminal"
import chalk  from "chalk";

async function handle(err, result) {
    if (err){
        console.error("Error:", err);
        return;
    }

    const isSmall = result.size == 2; 
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
    console.log(chalk.green.bold("\nQR Code gerado com sucesso!\n"));
    console.log(chalk.blue.bold(qrcode)); 
    });
}

export default handle;