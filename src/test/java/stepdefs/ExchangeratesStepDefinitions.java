package stepdefs;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ExchangeratesStepDefinitions {


	private StepData stepData;
	
	
	public ExchangeratesStepDefinitions(StepData stepData){
		this.stepData = stepData;
	}


	/*
	 * This method will get the Specific date Foreign Exchange rates
	 */
	
	@When("a user get exchange rates")
	public void a_user_get_exchange_rates() {
		stepData.log.info("Exchange Rates.");
		stepData.response = stepData.request.when().get(stepData.ENDPOINT_GET_EXCHANGE_RATES);
		System.out.println("response: " +stepData.response.prettyPrint());
		stepData.log.info("response: " +stepData.response.prettyPrint());
	}

	
	/*
	 * This method will get the future exchange rates based on given date in end
	 * URI
	 */

	@When("a user get future exchange rates")
	public void a_user_get_future_exchange_rates() {
		stepData.log.info("get future exchange rates.");
		stepData.response = stepData.request.when().get(stepData.ENDPOINT_GET_FETURE_EXCHANGE_RATES);
		System.out.println("response: " + stepData.response.prettyPrint());
		stepData.log.info("response: " + stepData.response.prettyPrint());
	}

	/*
	 * This method will get latest exchange rates
	 */
	@When("a user get Latest exchange rates")
	public void a_user_get_letest_exchange_rates() {
		stepData.response = given().get(stepData.ENDPOINT_GET_LETEST_EXCHANGE_RATES);
		System.out.println("response: " + stepData.response.prettyPrint());
	}

	@When("an user get exchange rates for \"([^\"]*)\"$")
	public void an_user_gerrates(String speDate) {
		System.out.println("Test_*****************");
		String url = "https://api.ratesapi.io/api/"+speDate;
		System.out.println(url);
		stepData.response = given().get(url);
		System.out.println("response: " + stepData.response.prettyPrint());
	}

		
	/*
	 * This method calls the incomplete exchange rates URI
	 */
	@When("a user get incomplete url exchange rates")
	public void a_user_get_incomplete_exchange_rates() {
		stepData.response = given().get(stepData.ENDPOINT_GET_LETEST_INCOMPLETE_URI_EXCHANGE_RATES);
		System.out.println("response: " + stepData.response.prettyPrint());
	}

	@Then("the status code is (\\d+)")
	public void verify_status_code(int statusCode){
		stepData.response.then().statusCode(statusCode);
		
		
	}
	
	@And("rate for \"([^\"]*)\" is \"([^\"]*)\"$")
	public void rate_verify(String curency, String curencyValue){
		String actulRate = stepData.response.path(curency).toString();
		Assert.assertEquals(curencyValue, actulRate);
	}
	
	@And("\"([^\"]*)\" is \"([^\"]*)\"$")
	public void date_verify(String jsonkey, String jsonValue){
		String actulRate = stepData.response.path(jsonkey).toString();
		Assert.assertEquals(jsonValue, actulRate);
	}
	
	
	@And("response includes the following$")
	public void response_equals(Map<String,String> responseFields){
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				stepData.json.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			}
			else{
				stepData.json.body(field.getKey(), equalTo(field.getValue()));
			}
		}
	}
	
	/*
	 * asserts on json arrays
	 */
	@And("response includes the following in any order")
	public void response_contains_in_any_order(Map<String,String> responseFields){
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				stepData.json.body(field.getKey(), containsInAnyOrder(Integer.parseInt(field.getValue())));
			}
			else{
				stepData.json.body(field.getKey(), containsInAnyOrder(field.getValue()));
			}
		}
	}
	
	
}
