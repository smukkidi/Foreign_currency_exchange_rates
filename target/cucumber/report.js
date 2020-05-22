$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetExchangeRates.feature");
formatter.feature({
  "line": 1,
  "name": "Get exchange rates in EUR",
  "description": "",
  "id": "get-exchange-rates-in-eur",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test cases 1 \u0026 2 User calls web service to get Latest Foreign Exchange rates and assert the success status of the response",
  "description": "",
  "id": "get-exchange-rates-in-eur;test-cases-1-\u0026-2-user-calls-web-service-to-get-latest-foreign-exchange-rates-and-assert-the-success-status-of-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a user get Latest exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "rate for \"rates.HKD\" is \"8.5298\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExchangeratesStepDefinitions.a_user_get_letest_exchange_rates()"
});
formatter.result({
  "duration": 2574176900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "ExchangeratesStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 40029200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rates.HKD",
      "offset": 10
    },
    {
      "val": "8.5298",
      "offset": 25
    }
  ],
  "location": "ExchangeratesStepDefinitions.rate_verify(String,String)"
});
formatter.result({
  "duration": 492404500,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "tc 3 User calls web service to get Latest Foreign Exchange rates assert the correct response supplied by the call",
  "description": "",
  "id": "get-exchange-rates-in-eur;tc-3-user-calls-web-service-to-get-latest-foreign-exchange-rates-assert-the-correct-response-supplied-by-the-call",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "a user get incomplete url exchange rates",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeratesStepDefinitions.a_user_get_incomplete_exchange_rates()"
});
formatter.result({
  "duration": 886864800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 19
    }
  ],
  "location": "ExchangeratesStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 494200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "TC 4 \u0026 5 User calls web service to get exchange rates success status of the response",
  "description": "",
  "id": "get-exchange-rates-in-eur;tc-4-\u0026-5-user-calls-web-service-to-get-exchange-rates-success-status-of-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "an user get exchange rates for \"2011-01-12\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "rate for \"rates.INR\" is \"58.505\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2011-01-12",
      "offset": 32
    }
  ],
  "location": "ExchangeratesStepDefinitions.an_user_gerrates(String)"
});
formatter.result({
  "duration": 723531000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "ExchangeratesStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 474300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rates.INR",
      "offset": 10
    },
    {
      "val": "58.505",
      "offset": 25
    }
  ],
  "location": "ExchangeratesStepDefinitions.rate_verify(String,String)"
});
formatter.result({
  "duration": 14564600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "TC 6 User calls web service to get exchange rates success status of the response",
  "description": "",
  "id": "get-exchange-rates-in-eur;tc-6-user-calls-web-service-to-get-exchange-rates-success-status-of-the-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "an user get exchange rates for \"2021-01-12\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "rate for \"rates.INR\" is \"83.0545\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "\"date\" is \"2020-05-21\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2021-01-12",
      "offset": 32
    }
  ],
  "location": "ExchangeratesStepDefinitions.an_user_gerrates(String)"
});
formatter.result({
  "duration": 616205700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "ExchangeratesStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "duration": 816800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rates.INR",
      "offset": 10
    },
    {
      "val": "83.0545",
      "offset": 25
    }
  ],
  "location": "ExchangeratesStepDefinitions.rate_verify(String,String)"
});
formatter.result({
  "duration": 15863300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "date",
      "offset": 1
    },
    {
      "val": "2020-05-21",
      "offset": 11
    }
  ],
  "location": "ExchangeratesStepDefinitions.date_verify(String,String)"
});
formatter.result({
  "duration": 9386100,
  "status": "passed"
});
});