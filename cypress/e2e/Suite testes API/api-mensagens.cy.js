describe('API Adopet', () => {
    //const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTE0ZjFmYy1iZDY1LTQ5Y2MtYmIyNS02MzM3MDQ3MTI5MDQiLCJhZG9wdGVyTmFtZSI6IlRlc3RlIFNpc3RlbWEiLCJpYXQiOjE3NDA0MjQzOTQsImV4cCI6MTc0MDY4MzU5NH0.nzk1ET9PjM8yBJYWWPpvBNxHhsOfwT5H-Eg8EdUHAcM'
    
    it.only('Mensagens da API', () => {
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