package options;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber"},
		glue = {"stepdefs"},
		//dryRun = true,
		features = {"src/test/features"})
public class RunnerTests {}
	