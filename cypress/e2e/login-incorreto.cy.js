describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        
        //INTERCEPT
        cy.intercept(
            'POST',
            'https://adopet-api-i8qu.onrender.com/adotante/login',
            {statusCode:400.}
        ).as('stubPost')
        
    });

    it('Verificar mensagem de falha no login', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    });

    it('Deve falhar mesmo inseridno dados corretos - usando MOCK', () => {
        cy.login('teste@teste.com', 'Senha123');
        
        //ESPERA PELO INTERCEPT MOCKADO
        cy.wait('@stubPost');
        
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
       //cy.contains('É necessário informar um endereço de email').should('be.visible');
        //cy.contains('Insira sua senha').should('be.visible');
    });
});