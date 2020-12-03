/// <reference types="Cypress"/>

describe('My First Test suite', function()
{
    it('My second Test case', function()
    {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      //selenium get hit url in browser, cypress get acts like findelement of selenium

      //parent child chaining
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      
       const textveg= $el.find('h4.product-name').text()
       if(textveg.includes('Cashews'))
       {
       $el.find('button').click()
       }
      })
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('place order').click()
    

    })
})