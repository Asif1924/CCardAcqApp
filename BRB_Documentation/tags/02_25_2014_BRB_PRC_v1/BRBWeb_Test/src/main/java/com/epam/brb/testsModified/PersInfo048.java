package com.epam.brb.testsModified;

import static com.epam.brb.fieldsMethods.FieldsMethods.getSymbolsFromTheField;
import static com.epam.brb.fieldsMethods.FieldsMethods.howManySymbolsInTheFieldCheck;
import static com.epam.brb.fieldsMethods.FieldsMethods.verifyFieldsAreHighlighted;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

import com.epam.brb.core.BaseTest;
import com.epam.brb.ui_objects.OverviewPage;
import com.epam.brb.ui_objects.PersInfoPage;
import com.epam.brb.ui_objects.PersInfoPageTellUsAboutYourself;

public class PersInfo048 extends BaseTest {

	@Test
	public void persInfo048() throws Exception {
		WebElement primaryPhone1 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone1TextField;
		WebElement primaryPhone2 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone2TextField;
		WebElement primaryPhone3 = PersInfoPageTellUsAboutYourself.get().PrimaryPhone3TextField;
		WebElement primaryPhoneArea = PersInfoPageTellUsAboutYourself.get().PrimaryPhoneControl;

		List<WebElement> mandatoryFieldsList = PersInfoPage.get()
				.mandatoryFieldsListPersInfoPage();

		List<WebElement> ExceptionsList = new ArrayList<>();
		ExceptionsList.add(primaryPhoneArea);

		OverviewPage.get().goToPersonalInfoPage("YUKON");

		primaryPhone1.sendKeys("123456");
		howManySymbolsInTheFieldCheck(primaryPhone1, 3);
		Assert.assertEquals(getSymbolsFromTheField(primaryPhone1), "123");
		primaryPhone2.sendKeys("123456");
		howManySymbolsInTheFieldCheck(primaryPhone2, 3);
		Assert.assertEquals(getSymbolsFromTheField(primaryPhone2), "123");
		primaryPhone3.sendKeys("123456");
		howManySymbolsInTheFieldCheck(primaryPhone3, 4);
		Assert.assertEquals(getSymbolsFromTheField(primaryPhone3), "1234");

		PersInfoPageTellUsAboutYourself.get().continueButton.click();
		verifyFieldsAreHighlighted(mandatoryFieldsList, ExceptionsList);
	}

}
