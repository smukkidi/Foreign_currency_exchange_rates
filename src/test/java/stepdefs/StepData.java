package stepdefs;

import org.apache.log4j.Logger;

import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class StepData {
	protected Response response;
	protected ValidatableResponse json;
	protected RequestSpecification request;
	
	protected String ENDPOINT_GET_EXCHANGE_RATES = "https://api.ratesapi.io/api/2011-01-12";
	protected String ENDPOINT_GET_FETURE_EXCHANGE_RATES = "https://api.ratesapi.io/api/2021-01-12";
	protected String ENDPOINT_GET_LETEST_EXCHANGE_RATES = "https://api.ratesapi.io/api/latest";
	protected String ENDPOINT_GET_LETEST_INCOMPLETE_URI_EXCHANGE_RATES = "https://api.ratesapi.io/api";
	
	
	public static Logger log = Logger.getLogger("devpinoyLogger");
	
	 /**
     * Use Streams when you are dealing with raw data
     * @param data
     */
	protected static void writeUsingOutputStream(String data) {
        OutputStream os = null;
        try {
            os = new FileOutputStream(new File("C:\\Users\reddys32\\Documents\\josnresponce.txt"));
            os.write(data.getBytes(), 0, data.length());
        } catch (IOException e) {
            e.printStackTrace();
        }finally{
            try {
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
