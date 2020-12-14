Feature: End to End Ecommerce Validation

    application Regression
    @Regression
    Scenario: Ecommerce products Delivery
    Given I Open Ecommerce Page
    When I add items to Cart
    And Validate The Total Prices
    Then Select The Country Submit and Verify ThankYou Message

    @Smoke
    Scenario: Filling the form to shop
    Given I Open Ecommerce Page
    When I fill the form details
    |name   |gender |
    |pam jenna   |Female |
    Then validate the form behaviour
    And select the shop page
