/// <reference types="Cypress"/>
import HomePage from '../../support/PageObjects/HomePage'
import ProductsPage from '../../support/PageObjects/ProductsPage'
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
      Cypress.config('defaultCommandTimeout', 8000)
      const homePage=new HomePage()
      const productspage=new ProductsPage()
      //check boxes
      cy.visit(Cypress.env('url')+"/angularpractice/")
    //cy.get('input[name="name"]:nth-child(2)').type("bob")
    //calling data from fixtures
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEnterpreneaur().should('be.disabled')
    //use to pause the program
    // cy.pause()
    Cypress.config('defaultCommandTimeout', 10000)
    homePage.getShopTab().click()

    
    this.data.ProductName.forEach(function(element){
      cy.selectproduct(element)

    });
    
    productspage.checkOutButton().click()
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


    //simplified version in single line
    // this.data.ProductName.forEach(element => cy.selectproduct(element));
     })

  
})
