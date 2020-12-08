/// <reference types="Cypress"/>

describe('My First Test suite', function()
{
   before(function(){
       //runs once before all tests in the bloack
       cy.fixture('example').then(function(data)
       {
this.data=data
       })

   })
   
    it('My First Test case', function()
    {
      //check boxes
      cy.visit("https://rahulshettyacademy.com/angularpractice/")

    //cy.get('input[name="name"]:nth-child(2)').type("bob")
    //calling data from fixtures
    cy.get(':nth-child(1) > .form-control').type(this.data.name)
    cy.get('select').select(this.data.gender)
    cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    cy.get('#inlineRadio3').should('be.disabled')
    //use to pause the program
    // cy.pause()
    cy.get(':nth-child(2) > .nav-link').click()

    
    this.data.ProductName.forEach(function(element){
      cy.selectproduct(element)

    });
    //simplified version in single line
    // this.data.ProductName.forEach(element => cy.selectproduct(element));
     })

  
})
