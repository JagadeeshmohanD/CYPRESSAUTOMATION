/// <reference types="Cypress"/>
import HomePage from '../../../../support/PageObjects/HomePage'
import ProductsPage from '../../../../support/PageObjects/ProductsPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage=new HomePage()
const productspage=new ProductsPage()

Given('I Open Ecommerce Page',()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

//When I add items to cart
When('I add items to Cart',function()
{
    homePage.getShopTab().click()

    
    this.data.ProductName.forEach(function(element){
      cy.selectproduct(element)

    });
    
    productspage.checkOutButton().click()
})

//And Validate The Total Prices
And('Validate The Total Prices',()=>
{
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
    //java script is assychronious so we need to make sync
      const amount=$el.text()
    var res=amount.split(" ")
    res=res[1].trim()
    sum=Number(sum)+Number(res)

    cy.log(res)
    })
    .then(function(){
      cy.log(sum)
    })
    cy.get('h3 strong').then(function(element){
      const amount=element.text()
      var res=amount.split(" ")
      var total=res[1].trim()
     expect(Number(total)).to.equal(sum)
    }) 
})

//Then Select The Country Submit and Verufy ThankYou Message
Then('Select The Country Submit and Verufy ThankYou Message',()=>
{
    cy.contains('Checkout').click()
    cy.get('#country').type('India').wait(1000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','×Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
      const actualTest=element.text()

      
     expect(actualTest.includes("Success!")).to.be.true
    })

})
