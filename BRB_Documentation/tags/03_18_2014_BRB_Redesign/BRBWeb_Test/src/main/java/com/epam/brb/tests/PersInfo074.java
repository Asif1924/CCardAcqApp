package com.epam.brb.tests;

import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo074 extends BaseTest {

	@Test
	public void persInfo074() throws Exception {
		Calendar cal = (Calendar) Calendar.getInstance();
		cal.add(Calendar.MONTH, 1);
		cal.add(Calendar.YEAR, -2);
		String getNextMonth = new SimpleDateFormat("MMMM").format(cal.getTime());
		String getTwoYearsBefore = new SimpleDateFormat("YYYY").format(cal.getTime());
		System.out.println(getNextMonth +"       "+  getTwoYearsBefore );
		
		WebElement atThisAddressSinceMonth = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceMonthDropdown;
		WebElement atThisAddressSinceYear = PersInfoPageTellUsAboutYourself.get().AtThisAddressSinceYearTextField;
		
		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> exceptionsList = new ArrayList<>();
		exceptionsList.add(atThisAddressSinceMonth);
		exceptionsList.add(atThisAddressSinceYear);
		
		
		OverviewPage.get().goToPersonalInfoPage("YUKON");

		atThisAddressSinceMonth.sendKeys("JANUARY");
		atThisAddressSinceYear.sendKeys("2011");
//		Assert.assertEquals(getSymbolsFromTheField(atThisAddressSinceMonth), "4,567", "symbols in the field are not as should be"); 
		
		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, exceptionsList);
	}

}
