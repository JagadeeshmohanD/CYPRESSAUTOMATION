describe('My First Test suite', function()
{
    it('My FirstTest case', function()
    {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      expect(true).to.equal(true)
    })
})