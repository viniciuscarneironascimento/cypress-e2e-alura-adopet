describe('API Adopet', () => {
    
    it.skip('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/2514f1fc-bd65-49cc-bb25-633704712904',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.eql(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')        
        });
    });
});
