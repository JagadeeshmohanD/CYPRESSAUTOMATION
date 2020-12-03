/// <reference types="Cypress"/>

describe('My First Test suite', function()
{
    it('My FirstTest case', function()
    {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      //selenium get hit url in browser, cypress get acts like findelement of selenium
      cy.get('.product').should('have.length',5)
      cy.get('.product:visible').should('have.length',4)
      //parent child chaining
      cy.get('.products').find('.product').should('have.length',4)
      cy.get(':nth-child(3) > .product-action > button').click()
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      console.log('sf')
      cy.get('.products').find('.product').each(($el, index, $list) => {
      
       const textveg= $el.find('h4.product-name').text()
       if(textveg.includes('Cashews'))
       {
       $el.find('button').click()
       }
      })
      cy.get('.brand').then(function(logoelement)
     {
       cy.log(logoelement.text())
     } )
      // cy.log(logo.text())

    })
})