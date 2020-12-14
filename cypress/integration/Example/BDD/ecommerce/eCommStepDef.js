/// <reference types="Cypress" />
import HomePage from '../../../../support/PageObjects/HomePage'
import ProductsPage from '../../../../support/PageObjects/ProductsPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
//npm run test -- --spec cypress\integration\Example\BDD\ecommerce.feature --headed --browser chrome
//add cucumber report option in package.json ->output.json
//use html report plugin /create js file (pass the details of output.json )
//run js file it will create new report file
const homePage=new HomePage()
const productspage=new ProductsPage()
let name
Given('I Open Ecommerce Page',()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
  
})

//When I add items to cart
When('I add items to Cart',function ()
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
Then('Select The Country Submit and Verify ThankYou Message',()=>
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
//When I fill the form details
When('I fill the form details',function(dataTable)
{
  //[bobz ,Female]
  name = dataTable.rawTable[1][0]
  homePage.getEditBox().type(name)
  homePage.getGender().select(dataTable.rawTable[1][1])
})
//Then validate the form behaviour
Then('validate the form behaviour',function()
{
  homePage.getTwoWayDataBinding().should('have.value',name)
  homePage.getEditBox().should('have.attr','minlength','2')
  homePage.getEnterpreneaur().should('be.disabled')
  //use to pause the program
  // cy.pause()
  Cypress.config('defaultCommandTimeout', 10000)
})
//And select the shop page
And('select the shop page',()=>
{
  homePage.getShopTab().click()
})
