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
    cy.get(':nth-child(1) > .form-control').type(this.data.name)
    cy.get('select').select(this.data.gender)

     })

  
})