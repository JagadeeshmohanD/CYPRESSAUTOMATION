/// <reference types="Cypress"/>

describe('My First Test suite', function()
{
    it('My second Test case', function()
    {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()
      //window:alert 
      cy.on('window:alert',(Str)=>
      {
        //mocha
        expect(Str).to.equal('Hello , share this practice page and share your knowledge')

      })
      //confirm window alert
      cy.on('window:confirm',(Str)=>
      {
        //mocha
        expect(Str).to.equal('Hello , Are you sure you want to confirm?')

      })
//code to run open new tab in same window by removing target (child tabs)
      cy.get('#opentab').invoke('removeAttr','target').click()
      cy.url().should('include','.com')
//code to navigate back page
      cy.go('back')
      

    })
})