/// <reference types="Cypress"/>

describe('My First Test suite', function()
{
    it('My second Test case', function()
    {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type="checkbox"]').check(['option2','option3'])
      cy.get('input[type="checkbox"]').uncheck(['option2','option3'])
     
      //static Dropdown
      cy.get('select').select('option2').should('have.value','option2')
      cy.get('select').select('option1').should('have.value','option1')
      cy.get('select').select('option3').should('have.value','option3')

      //Dynamic Dropdown
      cy.get('#autocomplete').type('ind')

      cy.get('.ui-menu-item div').each(($el, index, $list) => {

        if($el.text()==="India")
        {
          $el.click()
        }


      })
      //autocomplete
      cy.get('#autocomplete').should('have.value',"India")

      //handling visible and invisible
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      //radio button
      cy.get('input[value="radio2"]').check().should('be.checked')
      cy.get('[value="radio3"]').check().should('be.checked')
      cy.get('[value="radio1"]').check().should('be.checked')

    })
})