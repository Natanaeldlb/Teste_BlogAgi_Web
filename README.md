# Teste Técnico QA - Blog do Agi

## Descrição
Este projeto contém a automação de testes end-to-end do Blog do Agi utilizando **Playwright** com **TypeScript**.

O objetivo foi validar fluxos importantes da aplicação com foco em comportamento do usuário, navegação e consistência das informações exibidas na interface.

## Cenários automatizados

### 1. Navegação para a página Pix
Valida o fluxo de navegação pelo menu principal até a página de **Pix**, verificando:
- redirecionamento correto
- URL correspondente
- título da página
- conteúdo relacionado ao tema

### 2. Cadastro na newsletter com e-mail válido
Valida o fluxo de inscrição na newsletter, verificando:
- presença da seção de newsletter
- preenchimento do e-mail
- envio do formulário
- mensagem de sucesso após a inscrição

---

## Tecnologias utilizadas
- **Node.js**
- **Playwright**
- **TypeScript**
- **Visual Studio Code**
- **Git**

---

## Estrutura do projeto

```bash
.
├── src
│   └── pages
│       └── blogAgi.page.ts
├── tests
│   └── blog-agi.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
````

### Organização

* **src/pages**: contém a Page Object com os elementos e métodos da aplicação
* **tests**: contém os cenários de teste automatizados
* **playwright.config.ts**: arquivo de configuração do Playwright

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* **Node.js** versão LTS
* **npm**
* **Git**

Para validar se está tudo instalado, rode no terminal:

```bash
node -v
npm -v
git --version
```

---

## Instalação do projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acessar a pasta do projeto

```bash
cd <NOME_DO_PROJETO>
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Instalar os navegadores do Playwright

```bash
npx playwright install
```

---

## Como executar os testes

### Rodar todos os testes

```bash
npx playwright test
```

### Rodar todos os testes com navegador visível

```bash
npx playwright test --headed
```

### Rodar um arquivo específico

```bash
npx playwright test tests/blog-agi.spec.ts --headed
```

### Rodar um teste específico pelo nome

```bash
npx playwright test -g "deve permitir cadastro na newsletter com um e-mail válido" --headed
```

### Rodar com apenas 1 worker

Útil para acompanhar melhor a execução:

```bash
npx playwright test --headed --workers=1
```

---

## Relatórios

### Abrir o relatório HTML após a execução

```bash
npx playwright show-report
```

O relatório exibe:

* testes executados
* tempo de execução
* etapas do fluxo
* falhas e sucessos
* evidências quando configuradas

---

## Comandos úteis no terminal

### Executar todos os testes

```bash
npx playwright test
```

### Executar com navegador aberto

```bash
npx playwright test --headed
```

### Executar um único arquivo

```bash
npx playwright test tests/blog-agi.spec.ts
```

### Abrir relatório

```bash
npx playwright show-report
```

### Instalar navegadores novamente

```bash
npx playwright install
```

### Abrir o codegen do Playwright

Útil para mapear elementos:

```bash
npx playwright codegen https://blog.agibank.com.br/
```

---

## Boas práticas aplicadas

* utilização de **Page Object Model**
* separação entre **ações** e **validações**
* cenários com foco em fluxos reais do usuário
* estrutura organizada para manutenção e escalabilidade
* validações de:

  * URL
  * título
  * conteúdo
  * visibilidade de elementos
  * feedback de sucesso

---

## Observações

Os testes foram desenvolvidos com foco em clareza, organização e facilidade de execução, permitindo que qualquer avaliador consiga rodar o projeto localmente com poucos passos.

---

## Melhorias futuras

* parametrização de dados
* geração de massa dinâmica para formulários
* melhoria dos seletores para torná-los mais estáveis
* integração com pipeline CI
* screenshots e vídeos automáticos em todas as execuções

---

## Autor

Projeto desenvolvido por **Natanael Lima** para fins de teste técnico de QA.
