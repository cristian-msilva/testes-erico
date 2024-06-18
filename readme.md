# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login).

## Funcionalidades Testadas

1. **Login:**
   - Realiza o login com as credenciais do administrador.
   - Assert: Verifica se o login é bem-sucedido e a página inicial é carregada.

2. **Troca de Senha:**
   - Navega até a opção de trocar senha no menu do usuário.
   - Insere a senha atual, nova senha e confirmação de nova senha.
   - Assert: Confirma se a troca de senha é realizada com sucesso.

3. **Navegação entre Páginas:**
   - Navega para diferentes páginas dentro da aplicação.
   - Assert: Verifica se cada página é carregada corretamente após a navegação.

4. **Atualização de Nome do Funcionário:**
   - Acessa o perfil pessoal de um funcionário específico para atualizar o nome.
   - Assert: Confirma se o nome é atualizado corretamente após salvar as alterações.

5. **Logout:**
   - Realiza o logout da aplicação.
   - Assert: Verifica se o logout é feito com sucesso e retorna à página de login.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/cristian-msilva/testes-erico.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
