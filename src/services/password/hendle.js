async function permittedCharacters() {
    let permitted = [];

    const useUpper = process.env.UPPERCASE_LETTERS === "true";
    const useLower = process.env.LOWERCASE_LETTERS === "true";
    const useNumbers = process.env.NUMBERS === "true";
    const useSpecial = process.env.SPECIAL_CHARACTERS === "true";

    if (typeof process.env.UPPERCASE_LETTERS === 'undefined') console.warn("UPPERCASE_LETTERS não definida no .env, usando false");
    if (typeof process.env.LOWERCASE_LETTERS === 'undefined') console.warn("LOWERCASE_LETTERS não definida no .env, usando false");
    if (typeof process.env.NUMBERS === 'undefined') console.warn("NUMBERS não definida no .env, usando false");
    if (typeof process.env.SPECIAL_CHARACTERS === 'undefined') console.warn("SPECIAL_CHARACTERS não definida no .env, usando false");

    if (useUpper) permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (useLower) permitted.push(..."abcdefghijklmnopqrstuvwxyz");
    if (useNumbers) permitted.push(..."0123456789");
    if (useSpecial) permitted.push(..."!@#$%^&*()_+");

    return permitted;
}

async function hendle() {
    let caracteres = [];
    let password = "";

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH) || 12;
    if (typeof process.env.PASSWORD_LENGTH === 'undefined') console.warn("PASSWORD_LENGTH não definida no .env, usando 12");
    caracteres = await permittedCharacters();

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        password += caracteres[index];
    }

    return password;
}

export default hendle;