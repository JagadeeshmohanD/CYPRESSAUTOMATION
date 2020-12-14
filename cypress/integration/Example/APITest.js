/// <reference types="Cypress"/>

const { method } = require("cypress/types/bluebird")

describe('My First Test suite', function()
{
    it('My First Test case', function()
    {
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

                "name":"Learn Appium Automation with Java",
                "isbn":"852bcd",
                "aisle":"227cfgc",
                "author":"John foe"  
        }).then(function(response)
        {
            expect(response.body).to.have.property("msg","successfuly added")
            expect(response.status).to.eq(200)
    })
    })
})
