import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/creat.js';
import creatPassaword from './services/password/creat.js';

async function main(params) {
    prompt.start();
    const choose = await prompt.get(mainPrompt);
    const select = Number(choose.select);
    if (select === 1) await createQRCode();
    if (select === 2) await creatPassaword();
}

main();