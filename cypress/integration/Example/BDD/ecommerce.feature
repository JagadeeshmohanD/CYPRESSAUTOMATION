Feature: End to End Ecommerce Validation

    application Regression
    @Regression
    Scenario: Ecommerce products Delivery
    Given I Open Ecommerce Page
    When I add items to Cart
    And Validate The Total Prices
    Then Select The Country Submit and Verufy ThankYou Message