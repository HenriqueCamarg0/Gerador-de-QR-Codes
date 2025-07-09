# Gerador de QR Codes e Senhas

Projeto em Node.js para terminal, que permite ao usuário escolher entre:
- **Gerador de QR Codes** (em desenvolvimento)
- **Gerador de Senhas seguras**

---

## ✨ Funcionalidades

- **Menu interativo:** escolha da ferramenta via terminal.
- **Gerador de Senhas:** personalizável via `.env`.
- **Configuração flexível:** escolha de tipos de caracteres e tamanho da senha.

---

## 🚀 Como usar

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com, por exemplo:
```env
UPPERCASE_LETTERS=true         # Incluir letras maiúsculas
LOWERCASE_LETTERS=true         # Incluir letras minúsculas
NUMBERS=true                   # Incluir números
SPECIAL_CHARACTERS=true        # Incluir caracteres especiais
PASSWORD_LENGTH=12             # Tamanho da senha gerada
```

### 3. Execute o projeto

```bash
npm start
```

### 4. Escolha a ferramenta

Ao rodar, será exibido um menu:
```
Escolha uma feramenta (1 - QRCODES ou (2 - Gerador de Senhas)
```
Digite `1` para QR Codes (em desenvolvimento) ou `2` para Gerador de Senhas.

---

## 📁 Estrutura do Projeto

```
├── src
│   ├── index.js                # Arquivo principal, exibe o menu
│   ├── prompts
│   │   └── prompt-main.js      # Configuração do prompt inicial
│   └── services
│       ├── password
│       │   ├── creat.js        # Lógica para gerar senha
│       │   └── hendle.js       # Função que monta e gera a senha
│       └── qr-code
│           └── ...             # (em desenvolvimento)
├── package.json
└── .env                        # Arquivo de configuração do usuário
```

---

## ℹ️ Observações

- O Gerador de QR Codes está em desenvolvimento.
- Utiliza as bibliotecas [`prompt`](https://www.npmjs.com/package/prompt) e [`chalk`](https://www.npmjs.com/package/chalk).

---

Projeto criado para fins de estudo e prática com Node.js e interação via terminal.
