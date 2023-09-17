/// <reference types= "cypress" />
Cypress.on('uncaught:exception',(err,runnable)=>{
  return false
}
)
describe('Aspire test cases', () => {
  it('randomly enter the website arabic or english', () => {
    let website = ["https://global.almosafer.com/ar" , "https://global.almosafer.com/en"];
    let randomindex = Math.floor(Math.random()*website.length)
    cy.visit(website[randomindex]);

    let ArabiCities =["جدة","دبي"]
    let ArabicRAndoomIndex = Math.floor(Math.random()*ArabiCities.length)
    let EngCities =["riyadh","dubai","jeddah"]
    let EngRAndoomIndex = Math.floor(Math.random()*EngCities.length)
    
  cy.get('.cta__saudi').click()
  cy.get('#uncontrolled-tab-example-tab-hotels').click()

  if (randomindex==0) {
cy.get('[data-testid="AutoCompleteInput"]').type(ArabiCities[ArabicRAndoomIndex])
}
  else {
  cy.get('[data-testid="AutoCompleteInput"]').type(EngCities[EngRAndoomIndex])
  }
  })
})