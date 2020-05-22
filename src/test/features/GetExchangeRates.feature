Feature: Get exchange rates in EUR

  Scenario: Test cases 1 & 2 User calls web service to get Latest Foreign Exchange rates and assert the success status of the response
    When a user get Latest exchange rates
    Then the status code is 200
    And rate for "rates.HKD" is "8.5298"

  Scenario: tc 3 User calls web service to get Latest Foreign Exchange rates assert the correct response supplied by the call
    When a user get incomplete url exchange rates
    Then the status code is 400

  Scenario: TC 4 & 5 User calls web service to get exchange rates success status of the response
    When an user get exchange rates for "2011-01-12"
    Then the status code is 200
    And rate for "rates.INR" is "58.505"

  Scenario: TC 6 User calls web service to get exchange rates success status of the response
    When an user get exchange rates for "2021-01-12"
    Then the status code is 200
    And rate for "rates.INR" is "83.0545"
    And "date" is "2020-05-21"
