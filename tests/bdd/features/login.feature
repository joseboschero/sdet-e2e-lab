Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I login with valid credentials
    Then I should see a success message

  Scenario: Invalid login
    Given I am on the login page
    When I login with an invalid password
    Then I should see an error message