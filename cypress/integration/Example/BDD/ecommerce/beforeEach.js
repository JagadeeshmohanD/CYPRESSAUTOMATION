beforeEach(function()
{
       //runs once before all tests in the bloack
       cy.fixture('example').then(function(data)
       {
this.data=data
       })  
})