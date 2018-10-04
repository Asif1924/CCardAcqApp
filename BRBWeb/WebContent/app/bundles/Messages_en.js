ensureNamespaceExists();

BRB.dictionary_en = {
	
	// US4281
	version												:	"1",
	//-------------------------------------------Common----------------------------------------------
	app_loading 										:	"Loading...",	
	backButtonPrompt_title 								: 	"Exit Application",
	
	pleaseSelect_Text									:	'Please select...',
	
	monthSelect_Text									:	'Month',
    January												:	'January',
    February											:	'February',
    March												:	'March',
    April												:	'April',
    May													:	'May',
    June												:	'June',
    July												:	'July',
    August												:	'August',
    September											:	'September',
    October												:	'October',
    November											:	'November',
    December											:	'December',
    
	daySelect_Text										:	'Day',
	
	language_English									:	'English',
	language_Franch										:	'Francais',
	language_English_link								:	'Francais',
	Header_NeedHelp										:	'Need help?',
	Header_CallUsAt										:	'Call us at',
		
	connectionError_unableToConnect 					: 	"Unable to connect to backend server. Please try again in a few minutes.",
	connectionError_networkDown 						: 	"Connectivity to the data network is lost. Please try again when a data connection is available.",

	confirmDialog_defaultTitle 							: 	"Confirm",
	confirmDialog_yes 									: 	"Yes",
	confirmDialog_no 									: 	"No",
	settings_defaultTitle								: 	"Settings",
	settings_logOutButton								: 	"Log Out",
	settings_chooseProductButton						: 	"Abandon Application",
	settings_chancelButton								: 	"Cancel",
	settings_printerSetupButton							: 	"Printer Setup",
	
	settings_exitMessage								:   "The information collected on this application will be permanently deleted and cannot be retained. Are you sure you want to continue?",
	
	infoDialog_defaultTitle 							: 	"Info",
	
	errorDialog_defaultTitle 							: 	"Error",
	
	messageDialog_ok 									: 	"Ok",
	messageDialog_yes 									: 	"Yes",
	messageDialog_no 									: 	"No",
	
	breadCrumbItem_Overview								:	"Overview",
	breadCrumbItem_PersonalInformation					:	"Personal Information",
	breadCrumbItem_AdditionalInformation				:	"Optional Products",
	breadCrumbItem_Confirmation							:	"Confirmation",
	// US4591
	breadCrumbItem_Review_and_submit                    :   "Review and Submit",
	breadCrumbItem_IdentityVerification					:	"Identity Verification",
		
	loginScreen_UserID_Label							:	"User ID",
	loginScreen_AgentID_Label 							: 	"Agent ID",
	loginScreen_Password_Label 							: 	"Password (Case Sensitive)",
	loginScreen_Location_Number 						: 	"Location Number (e.g. 324)",
	loginScreen_Button_Label 							: 	"LOG IN",
	
	loginScreen_Dialog_ErrorTitle						:	"Login Error",
	loginScreen_FailureMessage							:	"Login Failed. Please Try Again.",
	
	loginScreen_UserLookupDialog_NormalTitle			:	"Location Details",
	loginScreen_UserLookupDialog_ErrorTitle				:	"Location Error",
	loginScreen_UserLookup_ConfirmMessage				:	"Is this the correct location address?",
	loginScreen_UserLookup_FailedMessage				:	"Location not found, please try again",
	
		
	Generic_Yes											:	"Yes",
	Generic_No											:	"No",
	
	Generic_English_Lang                                :   "English",
	Generic_French_Lang                                 :   "French",
	
	continue_Button_Label								:	"CONTINUE",
	back_Button_Label									:	"<b>BACK</b>",
	continue_Button_PopupMode_SaveChanges_Label			:	"Save Changes",
	continue_Button_PopupMode_CancelChanges_Label		:	"Cancel Changes",
	initiate_BRB_Web_App_ErrorTitle						:	"Get Customer Data Failed",
	initiate_BRB_Web_App_ErrorMsg                       :   "Could not retrieve customer data, please try again",
	tm							                        :   "&trade;",
	r							                        :   "&reg;",
	requiredFieldIndicatorLabel							:	"Indicates Required Field",
	requiredFieldIndicatorLabel_OMP_OMR					:	"Indicates Required Field",
	
	PageHeader_CanadianTireTabLogo						:	'<div class="PageHeader_CanadianTireTabLogo"></div>',
	PageHeader_CanadianTireNeedHelp                     :   '<div class="needHelpImage"></div>',
	pageHeader_CantireBankOrTriangle                    :   '<div class="logoBankOrTriangle"></div>',
	pageHeader_CantireBankOrTriangle_OMP_OMR            :   '<div class="logoBankOrTriangle_OMP_OMR"></div>',
	
	pageHeader_ompCard                                  :   '<div class="OMPCard4percentage"></div>',
	pageHeader_omrCard                                  :   '<div class="OMRCard4percentage"></div>',
	
	session_Expired_ErrorTitle							: 	"Application timed out",
	session_Expired_ErrorMsg							:	"Due to inactivity your application has timed out. \nPlease restart your application to have it properly submitted. \nNote: your application will timeout after 30 minutes of total time or 10 minutes of inactivity.",
	
	// US4653
	session_Expired_PopupMsg							: 	"Your session is about to time out. <br>60 seconds",
	session_Expired_Popup_continueMsg					: 	"Continue",
	
	ProvincesList_null									: 'Please select...',
	ALBERTA												: 'ALBERTA',
	BRITISH_COLUMBIA									: 'BRITISH COLUMBIA',
	MANITOBA											: 'MANITOBA',
	NEW_BRUNSWICK										: 'NEW BRUNSWICK',
	NEWFOUNDLAND_LABRADOR								: 'NEWFOUNDLAND & LABRADOR',
	NOVA_SCOTIA											: 'NOVA SCOTIA',
	NORTHWEST_TERRITORIES								: 'NORTHWEST TERRITORIES',
	NUNAVUT												: 'NUNAVUT',
	ONTARIO												: 'ONTARIO',
	PRINCE_EDWARD_ISLAND								: 'PRINCE EDWARD ISLAND',
	QUEBEC												: 'QUEBEC',
	SASKATCHEWAN										: 'SASKATCHEWAN',
	YUKON												: 'YUKON',
	
	header_Phone										: '<a href="tel:18004596415" style="color: #000;" target="_blank">1-800-459-6415</a>',
	//-----------------------------------------End-Common----------------------------------------------
	//----------------------------------------- Overview section ------------------------------	
	
	overview_PromoCodeError								:	"Please enter a valid 4-5 digit promo code",
	overview_ProvinceError								:	"Please select the Province in which you reside to continue with the application",
	
	overview_PromoCodeHint								:	"Please enter the promo code associated with the promotion you received",
	
	// US3627
	chooseProduct_Title									:	"IT WILL TAKE 3-5 MINUTES TO COMPLETE THIS APPLICATION. IF APPROVED, YOU WILL RECEIVE CORRESPONDENCE IN THE MAIL WITHIN 10 BUSINESS DAYS.",
	//US4541
	chooseProduct_Title1								:	"Apply for Instant Credit on a Canadian Tire Options<sup>&reg;</sup> Mastercard<sup>&reg;</sup>.",
	chooseProduct_Title1_OMX								:	"<span class=\"overviewNSTableRedText\"> Apply for a Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup></span>",
	chooseProduct_Title1_OMZ								:	"<span class=\"overviewNSTableRedText\">Apply for a Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup></span>",
	chooseProduct_Title1_OMP								:	"<span class=\"overviewNSTableRedText\"> Apply for a Gas Advantage<sup>&reg;</sup>  Mastercard<sup>&reg;</sup></span>",
	chooseProduct_Title1_OMR								:	"<span class=\"overviewNSTableRedText\"> Apply for a Cash Advantage<sup>&reg;</sup>  Mastercard<sup>&reg;</sup></span>",
	chooseProduct_Title2								:	"It will take 3-5 minutes to complete this application. If approved, you will receive correspondence in the mail within 7-10 business days.",
	chooseProduct_Title2_OMP_OMR						:	"It will take 3-5 minutes to complete this application. If approved, you will receive correspondence in the mail within 7-10 business days.",
	chooseProduct_Title3								:	"Apply<sup>ƒ</sup>  and use your card today!",
	chooseProduct_Title4								:	"<b>Collect 4% (that's 10X back!) Canadian Tire 'Money'<sup>&reg;</sup></b> every day<sup>&dagger;</sup><br/> in-store and online on qualifying purchases at Canadian Tire,<br/> Sport Chek, Mark's/L'Équipeur and PartSource. ",
	chooseProduct_Title5								:	"<b>Collect Canadian Tire 'Money'</b> at participating Canadian Tire gas bars<sup>2</sup>",
	chooseProduct_Title6								:	"<b>Collect Canadian Tire 'Money' everywhere</b> else you shop, including<br>Atmosphere",
	chooseProduct_Title7								:	"<b>No Fee No Interest Financing Options Available.</b> Learn more at<br>ctfs.com/financing ",
	chooseProduct_Title8								:	"<b>Receive Cardmember Exclusive Offers</b> right in your inbox and<br/> mobile device",
	chooseProduct_LinkText								:	"Choose a different card.",
	chooseProduct_DescriptionTitle						:	"REWARDS AT A GLANCE",
	chooseProduct_Description1_1						:	"Earn Canadian Tire &lsquo;Money&rsquo; rewards",
	chooseProduct_Description1_2						:	"  everywhere you shop.",
	chooseProduct_Description2_1						:	"Redeem Canadian Tire Rewards instantly at any Canadian Tire store",
	chooseProduct_Description3_1						:	"Annual Fee - ",
	chooseProduct_Description3_2						:	"None",
	chooseProduct_Description4_1						:	"Interest Rate - ",
	chooseProduct_Description4_2						:	"19.99%",
	chooseProduct_Description5_1						:	"Cash Advances and Related Fees - ",
	chooseProduct_Description5_2						:	"21.99%",
	// US4591
	overview_page_Title_lets_get_started                :   "Let's get started!",   
	overview_page_Title_it_will_take_few_min            :   "This application only takes a few minutes to complete.",
	overview_Title_Ecomm										:	"Please read the information below, choose the card you’d like to apply for and click 'Start Application' to continue.",
	overview_Title_DEC									:	"Please read the information below and click 'Start Application' to continue.",
	overview_Title_DEC_OMP_OMR							:	"Please read the information below and click 'Start Application' to continue",
	overview_PrintDownload_LinkText						:	"<a href='https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/documents/Cost_of_Borrowing_Disclosure_ENG.pdf' target='_blank'>Print or Download PDF version of disclosure.</a>",
	
	overview_PrintDownload_LinkText_OMP						:	"<a href='https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/documents/Cost_of_Borrowing_Disclosure_ENG.pdf' target='_blank'>Print or Download PDF version of disclosure.</a>",
	
	overview_TopTableLeftColTitle						:	"Which card am I eligible for?",
	overview_TopTableLeftCol1							:	"You must be a Canadian resident",
	overview_TopTableLeftCol2							:	"You must be at least the age of majority in the province where you reside",
	overview_TopTableLeftCol3							:	"You must be currently employed or retired",
	overview_TopTableLeftCol4							:	"You must have a minimum personal income of $80,000",
	overview_TopTableLeftCol5							:	"You must have excellent credit",
	overview_TopTableRightColTitle						:	"What do I need?",
	overview_TopTableLeftColTitle_DEC                   :   "Am I eligible for this card? ",
	overview_TopTableLeftColTitle_OMP_CARD              :   "Am I eligible for this card? ",
	overview_TopTableRightCol1							:	"Previous address (if less than 2 years at current address)",
	overview_TopTableRightCol2							:	"Annual income",
	overview_TopTableRightCol3							:	"Current employer name and address",
	overview_AmIEligibleTable_Mastercard			  	:	"<b>Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup></b>",
	overview_AmIEligibleTable_World_elite_card          :   "<b>Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup></b>",
	
	overview_AmIEligibleTable_OMP_CARD                  :  "<b>Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup></b>",
	overview_AmIEligibleTable_OMR_CARD                  :  "<b>Cash Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	
	overview_OMP_CARD_TopTableLeftCol1					:	"You are a Canadian resident",
	overview_OMP_CARD_TopTableLeftCol2					:	"You are at least the age of majority in the province where you reside",
	overview_OMP_CARD_TopTableLeftCol3					:	"You are currently employed or retired",
	
	overview_OMP_CARD_TopTableRightColTitle			    :	"What do I need?",
	overview_OMP_CARD_TopTableRightCol1                 :   "Previous address (if less than 2 years at current address)",
	overview_OMP_CARD_TopTableRightCol2                 :   "Annual income ",
	overview_OMP_CARD_TopTableRightCol3                 :   "Current employer name and address",
	
	overview_OMR_CARD_TopTableLeftCol1					:	"You are a Canadian resident ",
	overview_OMR_CARD_TopTableLeftCol2					:	"You are at least the age of majority in the province where you reside",
	overview_OMR_CARD_TopTableLeftCol3					:	"You are currently employed or retired ",
	
	overview_OMR_CARD_TopTableRightCol1                 :   "Previous address (if less than 2 years at current address)",
	overview_OMR_CARD_TopTableRightCol2                 :   "Annual income",
	overview_OMR_CARD_TopTableRightCol3                 :   "Current employer name and address",
	
	overview_page_Title_lets_get_started_OMP_CARD       :   "Let's get started!",   
	overview_page_Title_it_will_take_few_min_OMP_CARD   :   "This application only takes a few minutes to complete.",
	
	
	
	overview_compareCards_Masterdard			  	:	"Triangle<sup>&trade;</sup> <br> Mastercard<sup>&reg;</sup>",
	overview_CompareCards_World_elite_card          :   "Triangle<sup>&trade;</sup> World<br> Elite Mastercard<sup>&reg;</sup>",
	

	
	overview_ChooseCard_Masterdard			  	        :	"Triangle Mastercard",
	overview_ChooseCard_World_elite_card          		:   "Triangle World Elite Mastercard",
	overview_AmIEligibleTable_Do_you_alreadyHave        :   "Do you already have a Canadian Tire Options<sup>&reg;</sup> Mastercard<sup>&reg;</sup>? It has been renamed to the Triangle Mastercard, hence you will receive the new look Triangle Mastercard on reissue.",
	overview_ChooseCard_Note          		            :   "Please note that the Triangle World Elite Mastercard can impose higher card acceptance costs on merchants.",
	
	// US4591
	
	overview_CostOfCreditDisclosure_Title				:   "Cost of Credit Disclosure for Credit Card Applications",
	overview_CostOfCreditDisclosure_Row1				:	"Annual Interest Rate",
	overview_CostOfCreditDisclosure_Row1_1				:	"These interest rates will be in effect on the day your account is opened:",
	overview_CostOfCreditDisclosure_Row1_2				:	"All charges to your account (excluding cash advances and related fees) - <span class='fontStyleForBoldTextInOverWievPage'>19.99</span>%",
	overview_CostOfCreditDisclosure_Row1_3				:	"Cash advances and related fees - <span class='fontStyleForBoldTextInOverWievPage'>21.99</span>%",
	overview_CostOfCreditDisclosure_Row1_4				:	"If you are not approved for a card at these rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - <span class='fontStyleForBoldTextInOverWievPage'>25.99</span>% for all charges.",
	
	overview_CostOfCreditDisclosure_Row2				:	"Interest-Free Grace Period",
	overview_CostOfCreditDisclosure_Row2_1				:	"At least <span class='fontStyleForBoldTextInOverWievPage'>21</span> days or, if you are a resident of Quebec, at least <span class='fontStyleForBoldTextInOverWievPage'>26</span> days.",
	overview_CostOfCreditDisclosure_Row2_2				:	"You will benefit from an interest-free grace period of at least <span class='fontStyleForBoldTextInOverWievPage'>21</span> days (at least <span class='fontStyleForBoldTextInOverWievPage'>26</span> days if you are a resident of Quebec) on new purchases if we receive payment in full of the balance due on your current statement by the payment due date.",
	overview_CostOfCreditDisclosure_Row2_3				:	"There is no grace period for cash transactions, such as convenience cheques, balance transfers or cash advances, or for fees for such transactions.",
	
	overview_CostOfCreditDisclosure_Row3				:	"Minimum Payment",
	overview_CostOfCreditDisclosure_Row3_1				:	"The sum of:",
	overview_CostOfCreditDisclosure_Row3_2				:	"(A) Interest and fees shown on your statement, plus",
	overview_CostOfCreditDisclosure_Row3_3				:	"(B) the greater of any amount past due or any balance over your credit limit, plus",
	overview_CostOfCreditDisclosure_Row3_4				:	"(C) the amount of any equal payments plan installments then due, plus",
	overview_CostOfCreditDisclosure_Row3_5				:	"(D)<span class='fontStyleForBoldTextInOverWievPage'> $10.00</span>",
	overview_CostOfCreditDisclosure_Row3_6				:	"Balances under <span class='fontStyleForBoldTextInOverWievPage'>$10.00</span> are due in full.",
	
	overview_CostOfCreditDisclosure_Row4				:	"Foreign Currency Conversion",
	overview_CostOfCreditDisclosure_Row4_1				:	"All transactions made in a foreign currency will be converted to Canadian currency at the then current MasterCard conversion rate plus <span class='fontStyleForBoldTextInOverWievPage'>2.5</span>% (for charges to your account) or minus <span class='fontStyleForBoldTextInOverWievPage'>2.5</span>% (for credits to your account) when the transaction is posted to your account.",
	
	overview_CostOfCreditDisclosure_Row5				:	"Annual Fees",
	overview_CostOfCreditDisclosure_Row5_1				:	"None",
	
	overview_CostOfCreditDisclosure_Row6				:	"Other Fees",
	overview_CostOfCreditDisclosure_Row6_1_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>Cash Advance Fee</span>",
	overview_CostOfCreditDisclosure_Row6_1_2			:	"<span class='fontStyleForBoldTextInOverWievPage'> $4</span> ",
	overview_CostOfCreditDisclosure_Row6_1_3			:	" - Charged when the transaction is posted to your account.",
	overview_CostOfCreditDisclosure_Row6_2_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>NSF/Dishonoured Payment Fee</span>",
	overview_CostOfCreditDisclosure_Row6_2_2			:	"<span class='fontStyleForBoldTextInOverWievPage'> $25 </span>",
	overview_CostOfCreditDisclosure_Row6_2_3			:	" - Charged if a payment you make is dishonoured.",
	overview_CostOfCreditDisclosure_Row6_3_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>Charges for Copies</span>",
	overview_CostOfCreditDisclosure_Row6_3_2			:	"<span class='fontStyleForBoldTextInOverWievPage'> $2 </span>",
	overview_CostOfCreditDisclosure_Row6_3_3			:	" - Charged when you request a copy of a statement or sales slip.",
	overview_CostOfCreditDisclosure_Row6_4_1			:	"<span class='fontStyleForBoldTextInOverWievPage'>Credit Balance Fee</span>",
	overview_CostOfCreditDisclosure_Row6_4_2			:	"The lesser of ",
	overview_CostOfCreditDisclosure_Row6_4_3			:	"<span class='fontStyleForBoldTextInOverWievPage'> $10 </span>",
	overview_CostOfCreditDisclosure_Row6_4_4			:	" or the amount of your credit balance - ",
	overview_CostOfCreditDisclosure_Row6_4_5			:	"Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <span class='fontStyleForBoldTextInOverWievPage'>12</span> billing periods.",
	
	overview_LostOrStolenCards_Title					:	"Lost or Stolen Cards",
	overview_LostOrStolenCards_Text						:	"You must notify Canadian Tire Bank immediately if you think that your Card has been lost or stolen by calling 1-800-459-6415. You are not liable for unauthorized use of a lost or stolen Card, unless your Card is used with a Personal Identification Number to obtain a cash advance at an automated banking machine or to make a purchase, in which case you are liable for the full amount of each unauthorized use until you notify us.",
	
	overview_CustomerServiceDepartment_Title 			:	"Customer Service Department",
	overview_CustomerServiceDepartment_Text1 			:	"In Canada: <b>1-800-459-6415</b>",
	overview_CustomerServiceDepartment_Text2 			:	"Outside Canada (collect): 905-735-7256",
	overview_CustomerServiceDepartment_Text3 			:	"The Triangle<sup>&trade;</sup>  Mastercard<sup>&reg;</sup>  and Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> are issued by Canadian Tire Bank (“CTFS”) pursuant to a licence by Mastercard International. If approved, your card will be sent to you no later than six (6) weeks after application. Address for CTFS:",
	
	overview_CustomerServiceDepartment_Text3_DEC_OMX 			:	"The Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> is issued by Canadian Tire Bank (“CTFS”) pursuant to a licence by Mastercard International. If approved, your card will be sent to you no later than six (6) weeks after application. Address for CTFS:",
	overview_CustomerServiceDepartment_Text3_DEC_OMZ 			:	"The Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> is issued by Canadian Tire Bank (“CTFS”) pursuant to a licence by Mastercard International. If approved, your card will be sent to you no later than six (6) weeks after application. Address for CTFS:",
	overview_CustomerServiceDepartment_PleaseNoteOMX_only       :  "Please note that the Triangle World Elite Mastercard can impose higher card acceptance costs on merchants.",
	// US4997
	// OMP card 
	overview_CustomerServiceDepartment_OMP_CARD_Text1 			:	"In Canada: <b>1-800-459-6415</b>",
	overview_CustomerServiceDepartment_OMP_CARD_Text2 			:	"Outside Canada (collect): 905-735-7256",
	overview_CustomerServiceDepartment_OMP_CARD_Text3 			:	"The Gas Advantage Mastercard is issued by Canadian Tire Bank (\"CTFS\") pursuant to a licence by Mastercard International. If approved, your card will be sent to you no later than 7-10 days after application.",
	overview_CustomerServiceDepartment_OMR_CARD_Text3 			:	"The Cash Advantage Mastercard is issued by Canadian Tire Bank (\"CTFS\") pursuant to a licenceby Mastercard International. If approved, your card will be sent to you no later than 7-10 days after application.",
	overview_CustomerServiceDepartment_OMP_CARD_Text3_address 	:	"Address for CTFS:",
	
	overview_CustomerServiceDepartment_Text4 			:	"P.O. Box 2000,",
	overview_CustomerServiceDepartment_Text5 			:	"Welland, Ontario L3B 5S3",
	overview_CustomerServiceDepartment_Text6 			:	"Fax:  1-888-728-5822",
	
	overview_PromoCode									:	"Promo Code",
	overview_Province									:	"Province",
	
	overview_SecurityMessaging_Title					:	"Security Messaging",
	
	overview_SecurityMessaging_Title_OMP				:	"Security Messaging",
	overview_SecurityMessaging_Content					:	"Canadian Tire takes the security of your personal information very seriously. Find out how we help safeguard the personal information of our customers.",
	overview_SecurityMessaging_Content_OMP					:	"Canadian Tire takes the security of your personal information very seriously. Find out how we help safeguard the personal information of our customers.",
	overview_SecurityMessaging_MoreInfo					:	"For more information, visit our",
	overview_SecurityMessaging_MoreInfo_OMP					:	"For more information, visit our",
	overview_SecurityMessaging_PrivacyCharter			:	"<a href='https://www.ctfs.com/content/ctfs/en/legal_privacy/privacy_charter.html' target='_blank'>Privacy Charter.</a>",
	overview_SecurityMessaging_PrivacyCharter_OMP			:	"<a href='https://www.ctfs.com/content/ctfs/en/legal_privacy/privacy_charter.html' target='_blank'>Privacy Charter.</a>",
	
	overview_AutoTimeout_Title							:	"Auto Timeout",
	overview_AutoTimeout_Title_OMP						:	"Auto Timeout",
	overview_AutoTimeout_Content						:	"For your protection, auto timeout will end your application session 30 minutes of total time or 10 minutes of inactivity.",
	overview_AutoTimeout_Content_OMP					:	"For your protection, auto timeout will end your application session 30 minutes of total time or 10 minutes of inactivity.",
	
	overview_startApplication_Button_Label				:	"Start Application",
	overview_RequiredField_Lable						:	"Indicates Required Field",

	overview_footnoteContentText1						:	"In the form of Canadian Tire &lsquo;Money&rsquo; On The Card<sup>&reg;</sup> awards or Canadian Tire<sup>&reg;</sup> &lsquo;Money&rsquo; Advantage<sup>&reg;</sup> Points, as the case may be. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire &lsquo;Money&rsquo; Rewards Program page at ",
	overview_footnoteContentText1Extended				:	"In the form of Canadian Tire &lsquo;Money&rsquo; On The Card<sup>&reg;</sup> awards. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire &lsquo;Money&rsquo; Rewards Program page. Options MasterCard customers in Nova Scotia participate in a different rewards program, please go to ",
	overview_footnoteContentText1Link					:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	overview_footnoteContentText2						:	"Provided your account is in good standing and it is a redeemable purchase.",	
	overview_footnoteContentTextLinkBack				:	"back",
	overview_footnoteContentText4						:	"<sup>&reg;</sup>/<sup>&trade;</sup>  Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	overview_footnoteContentText5						:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and PayPass is a trademark, of MasterCard International Incorporated.",	
//	overview_footnoteContentText6 						:	"<sup>&reg;</sup> CredIncorporatedit Protector and Credit Protector-Senior are owned by Canadian Tire Financial Services Limited. ",
	overview_Province_TextField							:	'<select class="fieldCellSize100 fieldValuesSelectField" id="overview_Province_TextField" tabindex=2></select>',
	//--------------- END --------------------- Overview section -------------- END -----------	
	
	//----------------------------------------- Overview Nova Scotia section ------------------------------
	
	//--------------------------------------------- <old> ----------------------------------------------------
	overview_NS_Error									:	"Unfortunately due to the rewards program being run in Nova Scotia instant credit services are unavailable at this time.<br>Go to <a href='http://www.ctfs.com/applynow' target='_blank'>www.ctfs.com/applynow</a> to submit a credit card application.",
	
	overview_NS_TableLeftColTitle						:	"Attention Nova Scotia Customers",
	overview_NS_TableLeftColText1						:	"Please review this important information before you start your application.",
	overview_NS_TableLeftColText2						:	"With the ",
	overview_NS_TableLeftColText3						:	"Canadian Tire 'Money' Advantage",
	overview_NS_TableLeftColText4						:	" program and the Options MasterCard, Canadian Tire is more rewarding for you.",
	overview_NS_TableLeftColText5						:	"Get more rewards",
	overview_NS_TableLeftColText6						:	" with the Canadian Tire 'Money' Advantage card...",
	overview_NS_TableLeftColText7						:	"1 point for every $1 you spend at Canadian Tire stores",
	overview_NS_TableLeftColText8						:	"Points with a multiplier when you fill up at Canadian Tire gas bars",
	overview_NS_TableLeftColText9						:	"Exclusive bonus points in-store, in the flyer or sent directly to you",
	overview_NS_TableLeftColText10						:	"The ",
	overview_NS_TableLeftColText10_1					:	"The ",
	overview_NS_TableLeftColText11						:	"most",
	overview_NS_TableLeftColText12						:	" rewards.",
	overview_NS_TableLeftColText13						:	"best",
	overview_NS_TableLeftColText14						:	" way to pay.",
	overview_NS_TableLeftColText15						:	"You'll collect the MOST Canadian Tire 'Money' Advantage",
	overview_NS_TableLeftColText16						:	" points available",
	overview_NS_TableLeftColText17						:	"3 points for every $1",
	overview_NS_TableLeftColText18						:	" you spend at Canadian Tire stores when you use both your Options MasterCard and your Canadian Tire 'Money' Advantage card",
	overview_NS_TableLeftColText19						:	"Exclusive cardmember multiplier",
	overview_NS_TableLeftColText20						:	" for additional points on gas every time you use both cards at Canadian Tire gas bars",
	overview_NS_TableLeftColText21						:	"Collect points",
	overview_NS_TableLeftColText22						:	" everywhere else you shop",
	overview_NS_TableLeftColText23						:	" with your Options MasterCard.",
	overview_NS_TableLeftColText24						:	"Redeem",
	overview_NS_TableLeftColText25						:	"Points for in-store merchandise &mdash; just like Canadian Tire 'Money'",
	overview_NS_TableLeftColText26						:	"100 points = $1",
	overview_NS_TableLeftColText27						:	"There's no minimum - so you can use a few or save your points up for something big &mdash; the choice is yours",
	overview_NS_TableLeftColText28						:	"Points have no expiry date",
	overview_NS_TableLeftColText29						:	"Donate points to a charity or special cause in your community",
	overview_NS_TableLeftColText30						:	"Plus, enjoy great cardmember features:",
	overview_NS_TableLeftColText31						:	"PayPass",
	overview_NS_TableLeftColText32						:	" for faster checkout",
	overview_NS_TableLeftColText33						:	"Chip technology",
	overview_NS_TableLeftColText34						:	"for added security",
	overview_NS_TableLeftColText35						:	"Online account access",
	overview_NS_TableLeftColText36						:	"including exclusive email offers",
	overview_NS_TableLeftColText37						:	"Worldwide acceptance",
	overview_NS_TableLeftColText38						:	" at millions of places that take MasterCard",
	overview_NS_TableLeftColText39						:	"Cash advances",
	overview_NS_TableLeftColText40						:	" at any Automated Bank Machine (ABM) that displays the MasterCard",
	overview_NS_TableLeftColText41						:	" or Cirrus",
	overview_NS_TableLeftColText42						:	" logos.",
	overview_NS_TableLeftColText43						:	"View Contest Rules",
	overview_NS_TableLeftColText44						:	"TM",
	
	overview_NS_SecurityMessaging_Content				:	"Canadian Tire takes the security of your personal information very seriously. Find out how we safeguard the personal information of our customers.",
	
	overview_NS_RightBannerText1						:	"Get up to 2,000 points*",
	overview_NS_RightBannerText2						:	"when you use your Options MasterCard",
	
	overview_NS_FootnotesText1							:	"<sup>1</sup> Terms, conditions and restrictions apply. Fleet cards excluded. Please see program rules at",
	overview_NS_FootnotesText2							:	" moneyadvantage.com",
	overview_NS_FootnotesText3							:	" for more details.",
	overview_NS_FootnotesText4							:	" Cash advance fee: $4.00. Interest is charged on cash advances from the day you receive the advance until the day you repay the advance and all interest accrued.",
	overview_NS_FootnotesText5							:	"<sup>&reg;</sup>/<sup>&trade;</sup> The Canadian Tire Financial Services logo and Canadian Tire Options are registered trademarks, and Canadian Tire 'Money' Advantage is a trademark, of Canadian Tire Corporation, Limited used under license.",
	overview_NS_FootnotesText6							:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and ",
	overview_NS_FootnotesText7							:	" is a trademark, of MasterCard International Incorporated.",
	overview_NS_FootnotesText8							:	"<sup>*</sup> Contest commences February 24, 2012 and ends December 31, 2013. To enter, apply for the Options MasterCard. Eighty-five percent (85%) of all coupons printed in the Contest will have a value of five hundred  (500) Canadian Tire 'Money' Advantage<sup>&trade;</sup> points (retail value $5.00), ten percent (10%) of all coupons printed in the Contest will have a value of one thousand (1,000) Canadian Tire 'Money' Advantage<sup>&trade;</sup> points (retail value $10.00), and five percent (5%) of all coupons printed in the Contest will have a value of two thousand (2,000) Canadian Tire 'Money' Advantage<sup>&trade;</sup> points (retail value $20.00). Only open to residents of Canada who have reached the age of majority. You must make a purchase with your new Options MasterCard prior to the expiry date to use the Coupon. Correct answer to skill-testing question required. For complete Contest Rules, please see the Canadian Tire credit card representative or visit ctfs.com/ncbpc.",

	overview_NS_moneyPlusOMCImage						:	'<a href="#" id="moneyPlusOMCImage" class="moneyPlusOMCImageBlock"></a>',
	//--------------------------------------------- </old> ----------------------------------------------------
	
	overview_NS_LeftProgramAlertText0					:   "Exciting News!",
	overview_NS_LeftProgramSidebarText					:   "A FASTER WAY TO COLLECT YOUR CANADIAN TIRE 'MONEY'",
	overview_NS_LeftProgramAlertText					:	"The Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> rewards program participates in is changing",
	overview_NS_LeftHeadingText2						:   "If you are applying for an Options MasterCard from outside of Nova Scotia:",
	overview_NS_TableLeftColTxt4						:   "The Canadian Tire 'Money' rewards program on your Canadian Tire Options MasterCard is changing on Oct 28<sup>th</sup> to the My Canadian Tire 'Money'<sup>&trade;</sup> Program.",
	overview_NS_TableLeftColTxt5						:   "Instead of collecting Canadian Tire ‘Money’ On The Card<sup>&reg;</sup> awards, you’ll be collecting Canadian Tire ‘Money’<sup>&trade;</sup>.",
	overview_NS_LeftHeadingText1	    				:	"If you are applying for an Options MasterCard from Nova Scotia:",
	overview_NS_TableLeftColTxt1						:   "The Canadian Tire ‘Money’ Advantage<sup>&reg;</sup> program will be changing on October 10<sup>th</sup> to the My Canadian Tire ‘Money’ Program.",
	overview_NS_TableLeftColTxt2						:   "Now collect Canadian Tire ‘Money’ instead of Canadian Tire ‘Money’ Advantage points at our stores including at canadiantire.ca when you purchase qualifying merchandise.",
	overview_NS_TableLeftColTxt3						:   "Please note: The rate at which you’ll collect Canadian Tire ‘Money’ is different than the rate at which Canadian Tire ‘Money’ Advantage points can be collected.<sup>2</sup>",
	overview_NS_LeftHeadingText3						:   "As part of the new program, exclusive to you as an Options MasterCard cardmember:",
	overview_NS_TableLeftColTxt7					    :   "Collect 10X Canadian Tire ‘Money’<sup>1</sup> every day at Canadian Tire stores, including on automotive service, at Partsource<sup>&reg;</sup>, Mark’s<sup>&reg;</sup> and at Sportcheck<sup>&reg;1</sup>.",
	overview_NS_TableLeftColTxt8						:   "Collect 2X Canadian Tire ‘Money’ everywhere else you shop<sup>1</sup>.",
	overview_NS_TableLeftColTxt9						:   "Collect Canadian Tire ‘Money’ at participating Canadian Tire gas bars<sup>3</sup>.",
	overview_NS_TableLeftColTxt10						:   "Redeeming is easy, right at the checkout at Canadian Tire stores or online for gift cards at canadiantire.ca.",
	overview_NS_TableLeftColTxt11						:   "Watch your mail for details about this exciting news!",
						 
	overview_NS_FootnotesTxt1							:   "<sup>1</sup> Canadian Tire Options MasterCard cardmembers collect Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect Canadian Tire ‘Money’ on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions.",
	overview_NS_FootnotesTxt2							:   "<sup>2</sup> Canadian Tire ‘Money’ collected at Canadian Tire stores or online at canadiantire.ca is calculated on the pre-tax amount of the qualifying purchase, and is rounded to the nearest penny. For current rate(s) call 1-800-226-8473.",
	overview_NS_FootnotesTxt3							:   "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	overview_NS_FootnotesTxt5							:   "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire ‘Money’ On The Card, Canadian Tire ‘Money’ Advantage, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
	overview_NS_FootnotesTxt6						    :   "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
	
	//--------------- END --------------------- Overview Nova Scotia section -------------- END -----------	
	
	
	productSelection_Title								:   "Product Selection",
	
	//----------------------------------------- Personal Information section ------------------------------
	
	// US4579 Removal of CT
	personalInformation_CTProfileLabel					:	"Click here to copy available information from My Profile",
	
	personalInformation_LoyaltyMembershipNumberError	:	"Please enter sixteen digits",
	personalInformation_LoyaltyMembershipNumberPreError	:	"Please enter six digits",
	
	personalInformation_TitleError						:	"Please select your title",  
	personalInformation_FirstNameError					:	"Please enter your first name",
	personalInformation_LastNameError					:	"Please enter your last name",
	personalInformation_DateofBirthMonthError			:	"Please enter a valid birth month",
	personalInformation_DateofBirthDateError			:	"Please enter a valid birth date",
	personalInformation_DateofBirthYearError			:	"Please enter a valid birth year",
	personalInformation_EmailAddressError				:	"Please enter a valid email address",
	personalInformation_PreferredLanguageError			:	"Please choose a preferred language",
	personalInformation_PrimaryPhoneError				:	"Please enter a valid phone number",
	personalInformation_SINError						:	"Please enter a valid Social Insurance Number",
	personalInformation_StreetError						:	"Please enter a street number",
	personalInformation_StreetNameError					:	"Please enter your street name",
	personalInformation_AptError						:	"Please enter a valid Apt./Suite #",
	personalInformation_CityError						:	"Please enter your city or town",
	personalInformation_ProvinceError					:	"Please choose a province from the drop down list",
	personalInformation_PostalCodeError					:	"Please enter a valid postal code (e.g. A1A 1A1)",
	personalInformation_ResidentialStatusError			:	"Please choose a residential status from the drop down list",
	personalInformation_MonthlyHousingPaymentError		:	"Please enter your monthly mortgage/rent amount.  Do not include spaces, decimals or commas (e.g. 1500)",
	personalInformation_SinceMonthError					:	"Please enter a valid month",
	personalInformation_SinceYearError					:	"Please enter a valid year",
	
	personalInformation_FutureDateError					:	"Future date can not be entered",
	
	personalInformation_EmploymentTypeError				:	"Please choose an employment type from the drop down list",
	personalInformation_EmployerError				:		"Please enter the name of your current employer",
	personalInformation_EmployerCityError				:	"Please enter the city/town of your current employer",
	personalInformation_JobTitleError					:	"Please choose a job title from the drop down list",
	personalInformation_JobDescriptionError				:	"Please enter your occupation description",
	personalInformation_EmployerSinceMonthError			:	"Please enter a valid month",
	personalInformation_EmployerSinceYearError			:	"Please enter a valid year",
	personalInformation_GrossAnnualIncomeError_OMZ			:	"Eligibility Requirement: a minimum individual income of $80,000.",
	personalInformation_GrossAnnualIncomeError_OMX			:	"Please enter your gross annual personal income.  Do not include spaces, periods or commas (e.g. 35,000 per year)",
	// US3961
	personalInformation_GrossAnnualHouseholdIncomeError	:	"Please enter your gross annual household income.  Do not include spaces, periods or commas (e.g. 35,000 per year)",	
	personalInformation_EmailAddressHint				:	"You must provide your email address so that we can send the terms & conditions, as well as the approval details of your new card upon approval. If you do not provide your email address you will need to apply for a credit card by different means.",
	// US3979
	// personalInformation_EmailAddressNote				:	"Provide us with your email address and you'll receive a coupon for Canadian Tire ‘Money’<sup>&dagger;</sup>",
	
	// US3627
	personalInformation_EmailAddressNote				:	"Provide us with your email address and you'll receive a coupon for bonus Canadian Tire 'Money'<sup>&dagger;</sup>",
	
	personalInformation_SINHint							:	"Providing your SIN allows us to more efficiently process your financial information&#46;",
	personalInformation_SINHint_OMP_OMR					:	"Providing your SIN allows us to more efficiently process your financial information&#46;",
	personalInformation_GrossAnnualIncomeHint			:	"Includes your total income before income tax. This includes income from employment retirement plans, pensions and other sources of income rounded to the nearest dollar. Do not include spaces, periods or commas (e.g. 35,000)",
	// US3961
	personalInformation_GrossAnnualHouseholdIncomeHint	:	"Includes your total income before income tax.  This includes income from employment retirement plans, pensions and other sources of income rounded to the nearest dollar.  Do not include spaces, periods or commas (e.g. 35,000)",
	
	personalInformation_Title							:	"Personal Information",
	personalInformation_liTitle1						:	"More ways to earn rewards on purchases",
	personalInformation_liTitle2						:	"Plus enjoy great cardmember benefits",
	
	personalInformation_makeCorrections					: 	"Please make corrections to all fields highlighted in red.",
	personalInformation_saveMeTime						:	"Yes, save me time by using the information from My CT profile.",
	
	personalInformation_RewardsOnPurchases1				:	"Earn Canadian Tire 'Money' rewards<sup><small>1</small></sup>  EVERYWHERE you shop",
	personalInformation_RewardsOnPurchases2				:	"Get even more rewards at Canadian Tire stores<sup><small>1</small></sup> ",
	personalInformation_RewardsOnPurchases3				:	"Enjoy Bonus Cardmember Exclusives",
	personalInformation_RewardsOnPurchases4				:	"Redeem your rewards for anything at Canadian Tire stores<sup><small>2</small></sup>  and online",
	
	personalInformation_cardmemberBenefits1				:	"PayPass<sup>&trade;</sup>  for faster checkout",
	personalInformation_cardmemberBenefits2				:	"Chip technology for added security",
	personalInformation_cardmemberBenefits3				:	"Online account access including exclusive email offers",
	personalInformation_cardmemberBenefits4				:	"Worldwide acceptance at millions of places that take MasterCard<sup>&reg;</sup>",
	personalInformation_cardmemberBenefits5				:	"Cash advance",
	
	personalInformation_AboutYourself					:	"<b>My Personal Information</b>",
	personalInformation_AboutYourself_OMP_OMR			:	"<b>My Personal Information</b>",
	personalInformation_AboutYourself_OMP				:	"<b>My Information</b>",
	personalInformation_Asterix							:	"*",
	personalInformation_requiredField					:	"Indicates Required Field",
	
	personalInformation_TitleField						:	"Title",
	personalInformation_TitleField_OMP_OMR				:	"Title",
	personalInformation_MoneyAdvantageField				:	"Canadian Tire 'Money' Advantage<sup>&trade;</sup> card number",	
	personalInformation_MoneyAdvantage_MessageField	    :	"If you are already a member, please enter your Canadian Tire 'Money' Advantage<sup>&trade;</sup> account number. If you are approved for the credit card that you are applying for, Canadian Tire 'Money' Advantage points collected with that card will be credited to that account. If left blank, a Canadian Tire 'Money' Advantage number will be assigned to you",	
	personalInformation_NameField							:	"Name",
	personalInformation_FirstName							:	"First Name",
	personalInformation_Initial								:	"Initial",
	personalInformation_LastName							:	"Last Name",
	personalInformation_DateOfBirth							:	"Date of Birth",
	personalInformation_EmailAddress						:	"Email Address",
	//personalInformation_ReceiveEmail						:	"I would like to receive e-mail communications on offers, promotions, contests, and information on products and services, from the Canadian Tire family of companies including Canadian Tire Financial Services Limited and Canadian Tire Bank (``CTFS-CTB``). For details on who the family of companies is, please see our Privacy Charter. The Canadian Tire family of companies and CTFS-CTBs mailing address is: 3475 Superior Crt, Oakville, ON L6L OC6. They can also be reached at 1-800-459-6415 or customerservice@canadiantire.ca . I understand that I may withdraw my consent at any time.",
	personalInformation_ReceiveEmail						:	"I would like to receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to me by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited (&ldquo;CTC&rdquo;), Canadian Tire Financial Services Limited (&ldquo;CTFS&rdquo;), and Canadian Tire Bank (&ldquo;CTB&rdquo;), including from their respective business units operating under the Canadian Tire,  Canadian Tire 'Money' Rewards Program (or Canadian Tire 'Money' Advantage<sup>&reg;</sup> Program if you are a resident of Nova Scotia), Canadian Tire Drivers Academy<sup>&reg;</sup>, Canadian Tire Home Services<sup>&trade;</sup>, and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from other CTC-CTFS-CTB affiliates and/or marketing partners. You may contact CTC-CTFS-CTB, at P.O. Box 2000 Welland, ON L3B 5S3 or customerservice@canadiantire.ca. I understand that I may withdraw my consent at any time.",
	personalInformation_PreferredLanguage					:	"Preferred Language",
	personalInformation_PreferredLanguageEnglish			:	"English",
	personalInformation_PreferredLanguageFrench				:	"French",
	personalInformation_PrimaryPhone						:	"Primary Phone",
	// US3979
	// personalInformation_PrimaryPhoneNote					:	"<sup>*</sup> Please note, we may send you text messages to your mobile phone number for account notices, these messages will be at no cost to you.",
	// US3627
	personalInformation_PrimaryPhoneNote					:	"Please note, we may send you text messages to your mobile phone number for account notices, these messages will be at no cost to you.",
	
	personalInformation_SocialInsurance						:	"Social Insurance #",
	personalInformation_Address								:	"Address",
	personalInformation_StreetName							:	"Street Name",
	personalInformation_StreetNumber						:	"Street Number",
	personalInformation_Suite								:	"Apt / Suite #",
	personalInformation_Suite_OMP_OMR						:	"Apt / Suite #",
	personalInformation_City								:	"City",
	personalInformation_Province							:	"Province",
	personalInformation_PostalCode							:	"Postal Code",
	personalInformation_HousingInformation					:	"Housing Information",
	personalInformation_ResidentialStatus					:	"Residential Status",
	personalInformation_MonthlyHousingPayment				:	"Monthly Housing Payment",
	personalInformation_MonthlyHousingPayment1				:	".00 / Month",
	personalInformation_AddressSince						:	"At This Address Since",
	
	personalInformation_EmploymentInformation				:	"<b>Employment Information</b>",
	personalInformation_EmploymentInformation_OMP_OMR		:	"<b>Employment Information</b>",
	personalInformation_EmploymentType						:	"Employment Status",
	personalInformation_Employer							:	"Employer",
	personalInformation_JobTitle							:	"Job Category",
	personalInformation_JobDescription						:	"Job Title",
	// US3622
	personalInformation_JobDescription_Other				:	"Job Title (Other)",
	personalInformation_EmployerSince						:	"With this employer since", // <br> tag is for proper locating in the table cell
	personalInformation_EmployerSince_OMP_OMR				:	"With this employer since", // <br> tag is for proper locating in the table cell
	
	personalInformation_FinancialInformation				:	"<b>Financial Information</b>",
	// US3961
	// personalInformation_GrossAnnualIncome					:	"Gross Annual Income", // Old
	personalInformation_GrossAnnualIncome					:	"Annual Gross Personal Income",
	personalInformation_GrossAnnualHouseholdIncome			:	"Annual Gross Household Income",	
	personalInformation_GrossAnnualIncome_OMP_OMR			:	"Annual Gross Personal Income",
	personalInformation_GrossAnnualHouseholdIncome_OMP_OMR	:	"Annual Gross Household Income",
	
	personalInformation_BankingProducts						:	"My Banking Products (check all that apply)",
	personalInformation_BankLoan							:	"Bank Loan",
	personalInformation_SavingsAccount						:	"Savings Account",
	personalInformation_ChequingAccount						:	"Chequing Account",
	personalInformation_GasCard								:	"Gas Card",
	personalInformation_StoreCard							:	"Store Card",
	personalInformation_CreditCard							:	"Credit Card",
	personalInformation_Dollar								:	"$",
	personalInformation_prevAddressTitle					:	"Previous address only required if less than 2 years at current address.",
	
	personalInformation_DOB_18YearsError					:	"Must be 18 years of age or older to apply",
	personalInformation_DOB_19YearsError					:	"Must be 19 years of age or older to apply",
	
	//--------------- US4591 START ---------------------
	personalInformation_step_2_of_5_Eomm                         :   "<span class=\"overviewNSTableRedText\">Step 2 of 5:</span> Personal Information",
	personalInformation_step_2_of_5_Decoupled                    :   "<span class=\"overviewNSTableRedText\">Step 2 of 4:</span> Personal Information",
	personalInformation_ApplyForTriangleMastercard			:	"You are applying for the Triangle<span class=\"superscriptsHeader\"><sup>&trade;</sup></span> Mastercard<span class=\"superscriptsHeader\"><sup>&reg;</sup></span>",
	personalInformation_ApplyForWorld_elite_card			:	"You are applying for the Triangle<span class=\"superscriptsHeader\"><sup>&trade;</sup></span> World Elite Mastercard<span class=\"superscriptsHeader\"><sup>&reg;</sup></span>",
	personalInformation_provide_email_to_get_bonus         :   "Provide us with your email address and check the box below to earn a <span class=\"overviewNSTableRedText\">&#36;5 CT Money bonus&#33;<sup>&#8224;</sup></span>",
	//--------------- US4591 ENDS  ---------------------
    
	// --------------US4997 STARTS --------------------
	personalInformation_ApplyFor_OMP_CARD_OIC			:	"You are applying for the Gas Advantage<span class=\"superscriptsHeader\"><sup>&reg;</sup></span> Mastercard<span class=\"superscriptsHeader\"><sup>&reg;</sup></span>",
	// --------------US4997 ENDS   --------------------
	
	// --------------US4997 ENDS   --------------------
	personalInformation_ApplyFor_OMR_CARD_OIC			:	"You are applying for the Cash Advantage<span class=\"superscriptsHeader\"><sup>&reg;</sup></span> Mastercard<span class=\"superscriptsHeader\"><sup>&reg;</sup></span>",
	personalInformation_ApplyFor_OMR_CARD_OIC_personalInfo			:	"You are applying for the Cash Advantage<span class=\"superscriptsHeader\"><sup>&reg;</sup></span> Mastercard<span class=\"superscriptsHeader\"><sup>&reg;</sup></span>",
	
	employmentType_FullTime									:	"Full Time",
	employmentType_Seasonal									:	"Seasonal",
	employmentType_PartTime									:	"Part Time",
	employmentType_Retired									:	"Retired",
	
	residentialStatus_Own									:	"Own",
	residentialStatus_Rent									:	"Rent",
	residentialStatus_Parents								:	"With Parents",
	residentialStatus_Other									:	"Other",
	
	
	//--------------- US3622 START ---------------------
	
	// Job Categories - Start
	
	jobTitlesList_DR                                :   'Driver',
	jobTitlesList_GU                                :   'Guard',
	jobTitlesList_HO                                :   'Homemaker',
	jobTitlesList_LA                                :   'Labourer',
	jobTitlesList_MA                                :   'Manager',
	jobTitlesList_MI                                :   'Military',
	jobTitlesList_OF                                :   'Office Staff',
	jobTitlesList_OW                                :   'Owner',
	jobTitlesList_FA                                :   'Production Worker',
	jobTitlesList_PR                                :   'Professional',
	jobTitlesList_RE                                :   'Repairer',
	jobTitlesList_RT                                :   'Retired',
	jobTitlesList_SA                                :   'Sales',
	jobTitlesList_SE                                :   'Service',
	jobTitlesList_ST                                :   'Student',
	jobTitlesList_TR                                :   'Trades',
	jobTitlesList_UN                                :   'Unemployed',
	jobTitlesList_OT                                :   'Other',
	
	// End
	
	// Job Titles - Start
	
	// TRADERS
	jobDescList_null								 :  "Please select...",
	jobDescList_TR_BD                                : 	'Builder / Developer',
	jobDescList_TR_BL                                : 	'Bricklayer',
	jobDescList_TR_CM                                : 	'Cabinet Maker',
	jobDescList_TR_CP                                : 	'Carpenter',
	jobDescList_TR_CF                                : 	'Concrete Finisher',
	jobDescList_TR_ET                                : 	'Electrician',
	jobDescList_TR_GZ                                : 	'Glazier',
	jobDescList_TR_EO                                : 	'Equipment Operator',
	jobDescList_TR_FC                                : 	'Fencer',
	jobDescList_TR_GF                                : 	'Gasfitter',
	jobDescList_TR_GC                                : 	'General Contractor',
	jobDescList_TR_IS                                : 	'Insulator',
	jobDescList_TR_IW                                : 	'Ironworker',
	jobDescList_TR_LS                                : 	'Landscaper',
	jobDescList_TR_MF                                : 	'Marine Fitter',
	jobDescList_TR_MW                                : 	'Millworker',
	jobDescList_TR_PR                                : 	'Painter',
	jobDescList_TR_PF                                : 	'Pipefitter',
	jobDescList_TR_PT                                : 	'Plasterer',
	jobDescList_TR_PB                                : 	'Plumber',
	jobDescList_TR_PL                                : 	'Power Lineman',
	jobDescList_TR_SM                                : 	'Site Manager',
	jobDescList_TR_TP                                : 	'Taper',
	jobDescList_TR_TS                                : 	'Tile Setter',
	jobDescList_TR_WD                                : 	'Welder ',
	jobDescList_TR_OR                                : 	'Other',

	// DRIVER
	jobDescList_DR_AD                                : 	'Ambulance Driver',
	jobDescList_DR_BD                                : 	'Bus Driver',
	jobDescList_DR_CF                                : 	'Chauffeur',
	jobDescList_DR_CR                                : 	'Courier',
	jobDescList_DR_DI                                : 	'Driving Instructor',
	jobDescList_DR_TO                                : 	'Tow Truck Driver',
	jobDescList_DR_TD                                : 	'Truck Driver',
	jobDescList_DR_OR                                : 	'Other',

	// MILITARY
	jobDescList_MI_AM                                : 	'Army',
	jobDescList_MI_AI                                : 	'Air Force',
	jobDescList_MI_NY                                : 	'Navy',
	jobDescList_MI_AR                                : 	'Armed Forces',
	jobDescList_MI_MR                                : 	'Marines',
	jobDescList_MI_OR                                : 	'Other',

	// PROFESSIONAL
	jobDescList_PR_AT                                : 	'Accountant',
	jobDescList_PR_AY                                : 	'Actuary',
	jobDescList_PR_AD                                : 	'Auditor',
	jobDescList_PR_CR                                : 	'Chiropractor',
	jobDescList_PR_CP                                : 	'Computer Programmer',
	jobDescList_PR_CT                                : 	'Computer Technician',
	jobDescList_PR_CL                                : 	'Controller',
	jobDescList_PR_CO                                : 	'Credit Officer ',
	jobDescList_PR_DH                                : 	'Dental Hygienist',
	jobDescList_PR_DT                                : 	'Dentist',
	jobDescList_PR_DI                                : 	'Dietician',
	jobDescList_PR_DR                                : 	'Doctor',
	jobDescList_PR_EG                                : 	'Engineer',
	jobDescList_PR_EX                                : 	'Executive',
	jobDescList_PR_FA                                : 	'Financial Advisor',
	jobDescList_PR_JD                                : 	'Judge',
	jobDescList_PR_LW                                : 	'Lawyer ',
	jobDescList_PR_MY                                : 	'Mayor',
	jobDescList_PR_NU                                : 	'Nurse',
	jobDescList_PR_OP                                : 	'Optometrist',
	jobDescList_PR_PL                                : 	'Paralegal',
	jobDescList_PR_PR                                : 	'Paramedic',
	jobDescList_PR_PC                                : 	'Pharmacist',
	jobDescList_PR_PT                                : 	'Physiotherapist',
	jobDescList_PR_PI                                : 	'Pilot',
	jobDescList_PR_PO                                : 	'Politician',
	jobDescList_PR_PA                                : 	'Principal',
	jobDescList_PR_PF                                : 	'Professor',
	jobDescList_PR_PM                                : 	'Project Manager',
	jobDescList_PR_RG                                : 	'Radiologist',
	jobDescList_PR_SW                                : 	'Social Worker',
	jobDescList_PR_TC                                : 	'Teacher',
	jobDescList_PR_VN                                : 	'Veterinarian',
	jobDescList_PR_OR                                : 	'Other',

	// PRODUCTION WORKER
	jobDescList_FA_AS                                : 	'Assembler',
	jobDescList_FA_BD                                : 	'Binder',
	jobDescList_FA_BM                                : 	'Boilermaker',
	jobDescList_FA_FC                                : 	'Fabricator',
	jobDescList_FA_FD                                : 	'Fork Lift Driver',
	jobDescList_FA_LH                                : 	'Lead Hand',
	jobDescList_FA_MH                                : 	'Mechanic',
	jobDescList_FA_MO                                : 	'Machine Operator',
	jobDescList_FA_MN                                : 	'Machinist',
	jobDescList_FA_MW                                : 	'Maintenance Worker',
	jobDescList_FA_MG                                : 	'Manager',
	jobDescList_FA_MI                                : 	'Millwright',
	jobDescList_FA_OP                                : 	'Operator',
	jobDescList_FA_PK                                : 	'Packer',
	jobDescList_FA_PT                                : 	'Printer',
	jobDescList_FA_QS                                : 	'Quality Specialist',
	jobDescList_FA_ST                                : 	'Safety Technician',
	jobDescList_FA_SW                                : 	'Sewer',
	jobDescList_FA_SO                                : 	'Sorter',
	jobDescList_FA_SV                                : 	'Supervisor',
	jobDescList_FA_TM                                : 	'Tool and Die Maker',
	jobDescList_FA_WW                                : 	'Warehouse Worker',
	jobDescList_FA_WD                                : 	'Welder',
	jobDescList_FA_OR                                : 	'Other',

	// GUARD
	jobDescList_GU_CO                                : 	'Correctional Officer',
	jobDescList_GU_CS                                : 	'Customs Officer',
	jobDescList_GU_DT                                : 	'Detective',
	jobDescList_GU_FF                                : 	'Firefighter',
	jobDescList_GU_PR                                : 	'Park Ranger',
	jobDescList_GU_SG                                : 	'Security Guard ',
	jobDescList_GU_OR                                : 	'Other',

	// MANAGER
	jobDescList_MA_AE                                : 	'Arts and Entertainment',
	jobDescList_MA_AG                                : 	'Agriculture',
	jobDescList_MA_CO                                : 	'Construction',
	jobDescList_MA_ED                                : 	'Education',
	jobDescList_MA_FB                                : 	'Finance or Banking',
	jobDescList_MA_FS                                : 	'Food Services',
	jobDescList_MA_MH                                : 	'Medical or Healthcare',
	jobDescList_MA_FO                                : 	'Forestry',
	jobDescList_MA_GV                                : 	'Government',
	jobDescList_MA_MF                                : 	'Manufacturing',
	jobDescList_MA_ME                                : 	'Media',
	jobDescList_MA_MI                                : 	'Mining',
	jobDescList_MA_RE                                : 	'Real Estate',
	jobDescList_MA_RT                                : 	'Retail',
	jobDescList_MA_TH                                : 	'Technology',
	jobDescList_MA_WS                                : 	'Wholesale',
	jobDescList_MA_OR                                : 	'Other',

	// OWNER
	jobDescList_OW_AO                                : 	'Apparel Store Owner',
	jobDescList_OW_CT                                : 	'Caterer',
	jobDescList_OW_CO                                : 	'Construction Company Owner',
	jobDescList_OW_FM                                : 	'Farmer',
	jobDescList_OW_FO                                : 	'Franchisee Owner ',
	jobDescList_OW_JO                                : 	'Jewelry Store Owner',
	jobDescList_OW_RO                                : 	'Restaurant Owner',
	jobDescList_OW_SO                                : 	'Salon Owner',
	jobDescList_OW_OR                                : 	'Other',

	// OTHER
	jobDescList_OT_AR                                : 	'Artist',
	jobDescList_OT_AT                                : 	'Athlete',
	jobDescList_OT_CL                                : 	'Clergy',
	jobDescList_OT_CO                                : 	'Coach',
	jobDescList_OT_CM                                : 	'Comedian',
	jobDescList_OT_DC                                : 	'Dancer',
	jobDescList_OT_DS                                : 	'Designer',
	jobDescList_OT_DJ                                : 	'Disc Jockey',
	jobDescList_OT_ED                                : 	'Editor',
	jobDescList_OT_GA                                : 	'Graphic Artist',
	jobDescList_OT_LE                                : 	'Lighting Engineer',
	jobDescList_OT_MS                                : 	'Musician',
	jobDescList_OT_PG                                : 	'Photographer',
	jobDescList_OT_PD                                : 	'Producer / Director',
	jobDescList_OT_RF                                : 	'Referee',
	jobDescList_OT_SE                                : 	'Sound Engineer',
	jobDescList_OT_SH                                : 	'Stagehand',
	jobDescList_OT_WC                                : 	'Wood Carver',
	jobDescList_OT_WR                                : 	'Writer',
	jobDescList_OT_OR                                : 	'Other',

	// SALES
	jobDescList_SA_AT                                : 	'Auctioneer',
	jobDescList_SA_BK                                : 	'Broker',
	jobDescList_SA_BY                                : 	'Buyer',
	jobDescList_SA_DS                                : 	'Direct Sales',
	jobDescList_SA_IA                                : 	'Insurance Agent',
	jobDescList_SA_RT                                : 	'Realtor',
	jobDescList_SA_SA                                : 	'Sales Associate',
	jobDescList_SA_SM                                : 	'Sales Manager',
	jobDescList_SA_SB                                : 	'Stock Broker',
	jobDescList_SA_OR                                : 	'Other',

	// SERVICE
	jobDescList_SE_BT                                : 	'Bartender',
	jobDescList_SE_BP                                : 	'Bellman / Porter',
	jobDescList_SE_BC                                : 	'Butcher',
	jobDescList_SE_BL                                : 	'Butler',
	jobDescList_SE_CH                                : 	'Cashier',
	jobDescList_SE_CW                                : 	'Child Care Worker',
	jobDescList_SE_AT                                : 	'Aesthetician',
	jobDescList_SE_CS                                : 	'Counsellor',
	jobDescList_SE_CJ                                : 	'Custodian / Janitor',
	jobDescList_SE_CR                                : 	'Customer Service Representative',
	jobDescList_SE_FT                                : 	'Fitness Trainer',
	jobDescList_SE_FA                                : 	'Flight Attendant',
	jobDescList_SE_FR                                : 	'Florist',
	jobDescList_SE_FS                                : 	'Funeral Services',
	jobDescList_SE_GM                                : 	'Groomer',
	jobDescList_SE_HB                                : 	'Hairstylist / Barber',
	jobDescList_SE_HC                                : 	'Health Care / PSW',
	jobDescList_SE_HK                                : 	'Housekeeper',
	jobDescList_SE_IE                                : 	'Importer / Exporter',
	jobDescList_SE_MT                                : 	'Massage Therapist',
	jobDescList_SE_PC                                : 	'Pet Care',
	jobDescList_SE_PG                                : 	'Photographer',
	jobDescList_SE_PW                                : 	'Postal Worker',
	jobDescList_SE_SW                                : 	'Sanitation Worker',
	jobDescList_SE_TG                                : 	'Tour Guide ',
	jobDescList_SE_TA                                : 	'Travel Agent',
	jobDescList_SE_WW                                : 	'Waiter / Waitress',
	jobDescList_SE_OR                                : 	'Other',

	// REPAIRER
	jobDescList_RE_AR                                : 	'Appliance Repairer',
	jobDescList_RE_AB                                : 	'Auto Body Repairer',
	jobDescList_RE_CT                                : 	'Computer Repair Technician',
	jobDescList_RE_HM                                : 	'Handyman',
	jobDescList_RE_HP                                : 	'HVAC Repairer',
	jobDescList_RE_MW                                : 	'Maintenance Worker',
	jobDescList_RE_TT                                : 	'Tire Technician',
	jobDescList_RE_MC                                : 	'Mechanic',
	jobDescList_RE_SS                                : 	'Seamstress',
	jobDescList_RE_SR                                : 	'Shoe Repair',
	jobDescList_RE_TR                                : 	'Tailor',
	jobDescList_RE_US                                : 	'Upholsterer',
	jobDescList_RE_OR                                : 	'Other',

	// LABOURER
	jobDescList_LA_BB                                : 	'Busboy',
	jobDescList_LA_CM                                : 	'Concrete Maker',
	jobDescList_LA_CL                                : 	'Construction Labourer',
	jobDescList_LA_DM                                : 	'Delivery Man',
	jobDescList_LA_DL                                : 	'Driller',
	jobDescList_LA_GR                                : 	'Gardener',
	jobDescList_LA_EO                                : 	'Excavator Operator',
	jobDescList_LA_FH                                : 	'Farm Hand',
	jobDescList_LA_FI                                : 	'Fisherman',
	jobDescList_LA_FL                                : 	'Flagman',
	jobDescList_LA_GA                                : 	'Gas Station Attendant',
	jobDescList_LA_GD                                : 	'Grave Digger',
	jobDescList_LA_GK                                : 	'Groundskeeper',
	jobDescList_LA_IS                                : 	'Insulator',
	jobDescList_LA_LG                                : 	'Logger',
	jobDescList_LA_LA                                : 	'Lot Attendant',
	jobDescList_LA_MS                                : 	'Mail Sorter',
	jobDescList_LA_MW                                : 	'Maintenance Worker',
	jobDescList_LA_MI                                : 	'Miner',
	jobDescList_LA_MO                                : 	'Mover',
	jobDescList_LA_OI                                : 	'Oil Rigger',
	jobDescList_LA_PT                                : 	'Painter',
	jobDescList_LA_PV                                : 	'Paver',
	jobDescList_LA_PR                                : 	'Porter',
	jobDescList_LA_RF                                : 	'Roofer',
	jobDescList_LA_SC                                : 	'Scrap Collector',
	jobDescList_LA_SR                                : 	'Shipper / Receiver',
	jobDescList_LA_WW                                : 	'Window Washer',
	jobDescList_LA_OR                                : 	'Other',

	// OFFICE STAFF
	jobDescList_OF_AM                                : 	'Account Manager',
	jobDescList_OF_AR                                : 	'Accounts Receivable Clerk',
	jobDescList_OF_AA                                : 	'Administrative Assistant',
	jobDescList_OF_AP                                : 	'Appraiser',
	jobDescList_OF_BT                                : 	'Bank Teller',
	jobDescList_OF_BI                                : 	'Building Inspector',
	jobDescList_OF_CO                                : 	'Computer Operator',
	jobDescList_OF_CI                                : 	'Civil Servant',
	jobDescList_OF_CA                                : 	'Claims Adjuster',
	jobDescList_OF_CT                                : 	'Collector',
	jobDescList_OF_CS                                : 	'Communications Specialist',
	jobDescList_OF_CR                                : 	'Customer Service Representative',
	jobDescList_OF_DO                                : 	'Data Entry Operator',
	jobDescList_OF_DP                                : 	'Dispatcher',
	jobDescList_OF_ET                                : 	'Editor',
	jobDescList_OF_ES                                : 	'Estimator',
	jobDescList_OF_HR                                : 	'Human Resources',
	jobDescList_OF_IC                                : 	'Inventory Clerk',
	jobDescList_OF_JL                                : 	'Journalist',
	jobDescList_OF_LA                                : 	'Legal Assistant ',
	jobDescList_OF_LB                                : 	'Librarian',
	jobDescList_OF_PM                                : 	'Project Manager',
	jobDescList_OF_RC                                : 	'Receptionist',
	jobDescList_OF_RT                                : 	'Recruiter',
	jobDescList_OF_TS                                : 	'Translator',
	jobDescList_OF_UW                                : 	'Underwriter',
	jobDescList_OF_WD                                : 	'Web Designer',
	jobDescList_OF_OR                                : 	'Other',

	jobDescList_HO									 : 	'Homemaker',
	jobDescList_RT									 : 	'Retired',
	jobDescList_UN									 : 	'Unemployed',
	jobDescList_ST									 : 	'Student',
	
	// End
	
	//--------------- END ---------------------
	
    personalData_MR									:	"Mr.",
    personalData_MRS								:	"Mrs.",
    personalData_MISS								:	"Miss.",
    personalData_MS									:	"Ms.",
	
	// US4579 Removal of CT
	personalInformation_useMyCTProfileButtonText	  			:	'<span class="buttonCTText">USE MY PROFILE INFORMATION</span>',
	personalInformation_Title_TextField							:	'<select class=\"fieldValuesSelectField titleField\" id=\"personalInformation_Title_TextField\" />',
	personalInformation_Month									:	'<select class=\"fieldValuesSelectField dateOfBirthMonthField\" id=\"personalData_DateOfBirth_Month\" placeholder=\"Month\" />',
	personalInformation_Day										:	'<select class=\"fieldValuesSelectField dateOfBirthDayField\" id=\"personalData_DateOfBirth_Day\" placeholder=\"Day\" />',
	personalInformation_Year									:	'Year',
	personalInformation_Province_TextField						:	'<select class="fieldValuesSelectField addressProvinceField" id="personalInformation_Province_TextField"/>',
	personalInformation_ResidentialStatus_TextField				:	'<select class="fieldValuesSelectField residentialStatusField" id="personalInformation_ResidentialStatus_TextField"/>',
	personalInformation_AddressSince_Month						:	'<select class="fieldValuesSelectField dateOfBirthMonthField" id="personalInformation_AddressSince_Month" placeholder="Month" />',
	personalInformation_AddressSince_Year						:	'Year',
	personalInformation_PrevProvince_TextField					:	'<select class="fieldValuesSelectField addressProvinceField" id="personalInformation_PrevProvince_TextField"/>',
	personalInformation_EmploymentType_TextField				:	'<select class="fieldValuesSelectField" id="personalInformation_EmploymentType_TextField" />',
	personalInformation_JobTitle_TextField						:	'<select class="fieldValuesSelectField" id="personalInformation_JobTitle_TextField" />',
	
	// US3622
	personalInformation_JobDesc_SelectField						:	'<select class="fieldValuesSelectField" id="personalInformation_JobDescription_SelectField" />',
	
	personalInformation_EmployerSince_Month						:	'<select class="fieldValuesSelectField dateOfBirthMonthField" id="personalInformation_EmployerSince_Month" placeholder="Month" />',
	personalInformation_EmployerSince_Year						:	'Year',
	
	// US3691
	//personalInformation_grossIncomeError1						:	'The Annual Gross Income entered is $', // old
	personalInformation_grossIncomeError1						:	'The Annual Gross Personal Income entered is $',
	personalInformation_grossIncomeError2						:	'. Is this correct?',
	// US3961
	personalInformation_grossHouseholdIncomeError1				:	'The Annual Gross Household Income entered is $',
	personalInformation_grossHouseholdIncomeError2				:	'. Is this correct?',
	
	//--------------- END --------------------- Personal Information section -------------- END -----------

	//----------------------------------------- OPTIONAL PRODUCTS section ------------------------------
	
	// ----- US4591 Starts --------- //
	additionalInformation_step_3_of_5_Ecomm                         :   "<span class=\"overviewNSTableRedText\">Step 3 of 5:</span> Optional Products",
	additionalInformation_step_3_of_5_Decouple                      :   "<span class=\"overviewNSTableRedText\">Step 3 of 4:</span> Optional Products",
	
	// ----- US4591 Ends -----------//sss
	
	additionalInformation_RelationshipError					:   "Please choose a relationship type from the drop down list",
	additionalInformation_NoRadioSelecedError				:   "Please make a selection",
	additionalInformation_AgreeToTermsError					:   "If you would like to enrol in this product, you must agree to the Terms and Conditions to continue",
	
	additionalInformation_Title								:   "Optional products",
	additionalInformation_GetSuplementaryCard				:	"<b>Get a Supplementary Card</b>",
	additionalInformation_Asterix							:	"*",
	additionalInformation_requiredField						:	"Indicates Required Field",
	
	additionalInformation_TitleField						:	"Title",
	additionalInformation_NameField							:	"Name",
	additionalInformation_FirstName							:	"First Name",
	additionalInformation_Initial							:	"Initial",
	additionalInformation_LastName							:	"Last Name",
	additionalInformation_DateOfBirth						:	"Date of Birth",
	additionalInformation_PrimaryPhone						:	"Primary Phone",
	additionalInformation_Relationship						:	"Relationship",
	additionalInformation_Address							:	"Address",
	additionalInformation_StreetName						:	"Street Name",
	additionalInformation_StreetNumber						:	"Street Number",
	additionalInformation_Suite								:	"Apt / Suite #",
	additionalInformation_City								:	"City",
	additionalInformation_Province							:	"Province",
	additionalInformation_PostalCode						:	"Postal Code",
	additionalInformation_SameAddressAsPrimaryCardholder	:	"Same Address as Primary Cardmember?",
	additionalInformation_SameAddresYes						:	"Yes",
	additionalInformation_SameAddresNo						:	"No",
	additionalInformation_OptionalInsurance					:	"Optional Insurance",
	
	additionalInformation_AuthorizeSupplementaryCardmember	:	"&#33; I would like to add a supplementary cardmember to this account for free&#33;",
	additionalInformation_AuthorizeSupplementaryCardmember_Yes	:	"&#33;  I would like to add an additional cardmember to this account for free&#33;",
	additionalInformation_AuthorizeSupplementaryCardmember_No	:	"&nbsp;- I do not want to add an additional cardmember to this account for free&#33;",
	additionalInformation_AuthorizeSupplementaryCardmember_No_OMP_OMR	:"&#33; I do not want to add an additional cardmember to this account for free&#33;",
	
	// Old code
	// additionalInformation_OptionalInsurance_CreditProtector_enroll	:	"- Enrol me in Credit Protector<sup>&reg;</sup>**/Credit Protector-<i>Senior</i><sup>&reg;</sup>*** ",	
	additionalInformation_OptionalInsurance_CreditProtector_enroll	:	"- Enrol me in Credit Protector<sup>&reg;</sup>",
	additionalInformation_OptionalInsurance_IdentityWatch   		:   "- Enrol me in Identity Watch Classic<sup>&reg;</sup",
	additionalInformation_OptionalInsurance_ProtectionAdvantage   	:   "- Enrol me in Canadian Tire Protection Advantage<sup>&reg;</sup",
	additionalInformation_OptionalInsurance_DoNotEnrolMe 			:   "- Do not Enrol me in Optional Insurance.",
	
	additionalInformation_OptionalInsurance_CreditProtector_enroll_OMP_OMR	:	"- Enrol me in Credit Protector<sup>&reg;</sup>",
	additionalInformation_OptionalInsurance_IdentityWatch_OMP_OMR   		:   "- Enrol me in Identity Watch Classic<sup>&reg;</sup",
	additionalInformation_OptionalInsurance_ProtectionAdvantage_OMP_OMR   	:   "- Enrol me in Canadian Tire Protection Advantage<sup>&reg;</sup",
		 
	additionalInformation_Final_Details                     :   "A Few Final Details",
	additionalInformation_Final_Details_Language            :   "Preferred Language",
	additionalInformation_Final_Details_Statement           :   "Statement Preference",
	additionalInformation_Final_Details_Subscription        :   "Yes, please send me emails on product offers and exclusives cardmember details",
	
	additionalInformation_Spouse							:	"Spouse",
	additionalInformation_Son								:	"Son",
	additionalInformation_Daughter							:	"Daughter",
	additionalInformation_Relative							:	"Relative",
	additionalInformation_Other								:	"Other",
	// Old line
	// 	additionalInformation_Credit_Protector_Text             :   "I have read and fully agree to the <a href='https://customer.ctfs.com/Products/Insurance/CreditProtector/CreditProtectorTandC/' target='_blank'>Terms and Conditions</a> of the Credit Protector/Credit Protector Senior.",
	additionalInformation_Credit_Protector_Text             :   "<span class=\"overviewNSTableRedText\">&#42;</span>I have read, understood and fully agree to the <U><b><a href='https://www.ctfs.com/content/ctfs/en/optional-products/credit_protector_terms.html' target='_blank'>Summary of Coverage and Declarations</a></b></U> of Credit Protector Insurance.",
	additionalInformation_Credit_Protector_Text_OMP_OMR     :   "<span class=\"overviewNSTableRedText\">&#42;</span>I have read, understood and fully agree to the <U><b><a href='https://www.ctfs.com/content/ctfs/en/optional-products/credit_protector_terms.html' target='_blank'>Summary of Coverage and Declarations</a></b></U> of Credit Protector Insurance.",
	additionalInformation_Identity_Watch_Text               :   "<span class=\"overviewNSTableRedText\">&#42;</span>I have read, understood and fully agree to the <U><b><a href='https://www.ctfs.com/content/ctfs/en/optional-products/identity_watch_terms.html' target='_blank'>Terms and Conditions</a></b></U>  of Identity Watch Classic.",	
	additionalInformation_ProtectionAdvantage_Text          :   "<span class=\"overviewNSTableRedText\">&#42;</span>I have read, understood and fully agree to the <U><b><a href='https://www.ctfs.com/content/ctfs/en/optional-products/protection_advantage_terms.html' target='_blank'>Summary of Coverage and Declarations and Terms and Conditions</a></b></U>  included with  Canadian Tire Protection Advantage.",
	
	// US4591 Newline for Quebec
	additionalInformation_Quebec_new_lineProtectionAdvantage :  "For residents of Quebec, I have read and understood the Credit Protector<sup>&reg;</sup> Insurance  <U><a href= 'https://canadiantire.scene7.com/is/content/CanadianTire/ctfs/optional_products_documents/K022_DG_MCC894124E%20FINAL.pdf' target='_blank'>Distribution Guide</a></U>",
	
	additionalInformation_IdentityWatch_Terms				: " ",
	additionalInformation_ProtectionAdvantage_Terms			: " ",
	additionalInformation_EarnReward						: '<div class="additionalInformation_EarnReward" />',
	additionalInformation_Title_TextField					: '<select class="fieldValuesSelectField titleField" id="additionalInformation_Title_TextField" />',
	additionalInformation_DateOfBirth_Month					: '<select class="fieldValuesSelectField dateOfBirthMonthField" id="additionalInformation_DateOfBirth_Month" placeholder="Month" />',
	additionalInformation_DateOfBirth_Day					: '<select class="fieldValuesSelectField dateOfBirthDayField" id="additionalInformation_DateOfBirth_Day" placeholder="Day" />',
	additionalInformation_DateOfBirth_Year					: 'Year',
	additionalInformation_Relationship_TextField			: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Relationship_TextField"/>',
	additionalInformation_Province_TextField				: '<select class="fieldValuesSelectField addressProvinceField" id="additionalInformation_Province_TextField"/>',
	
	// Starting of US3307 changes
	additionalInformation_OptionalProducts					:	"<b>Optional Products<sup>&#8224;</sup><sup>&#8224;</sup></b>",
	additionalInformation_OptionalInsurance_CreditProtector :	"Credit Protector<sup>&reg;</sup>**/Credit Protector-<i>Senior</i><sup>&reg;</sup>*** ",
	additionalInformation_OptionalInsurance_CreditProtector_subtle	:	"<i>(not available for residents of Saskatchewan)</i>",
	
	//additionalInformation_OptionalInsurance_Details3		:   "<i>(not available in Saskatchewan)</i> <br>Receive comprehensive coverage with the combination of Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>** and Identity Watch Classic<sup>&trade;</sup>."
	//															+ "<ul><li>$1.10 per $100* of your monthly statement balance in any month with a statement balance of $10 or more for Credit Protector/Credit Protector Senior** and $4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card for Identity Watch Classic.</li></ul>"
	//															+ "<br>For example if your balance is $200 at the time your statement prints you would pay just $2.20 plus applicable taxes for Credit Protector<sup>&reg;</sup>/Credit Protector-Senior<sup>&reg;</sup>.",
	
	additionalInformation_OptionalInsurance_Details			:	"<i>(not available for residents of Saskatchewan)</i><ul><li>$1.10 per $100* of your monthly statement balance, less any amount of insurance premium charged, in any month with a statement balance of $10 or more charged to the <i>Canadian Tire</i><sup>&reg;</sup> MasterCard<sup>&reg;</sup>.</li></ul><br>For example if your balance is $200 at the time your statement prints you would pay just $2.20 plus applicable taxes.",
	additionalInformation_OptionalInsurance_Details1		:   " ",
	/*additionalInformation_OptionalInsurance_Details2		:   "Help protect your and your family’s private and valuable information with Identity Watch Classic."
															+ "<ul><li>Online monitoring  of your registered personal information</li>"
															+ "<li>Rebound<sup>&reg;</sup> Asset Return Service*** which may help you recover lost or stolen items</li>"
															+ "<li>Computer Tune-Up Reimbursement*** of up to $75 CDN, inclusive of taxes, per subscription year.</li>"
															+ "<li>Plus Card Protection, Online Data Backup, Credit Card Theft Reward Service*** a $3,000 CDN reward.</li>"
															+ "<li>$4.99*** payable in advance monthly after the first transaction is made on your Canadian Tire branded credit card.</li></ul>"
															+ "<br>If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter which is included in your Identity Watch Classic Welcome Package.",*/
	
	// DE1549
	/* 2016-02-17 chrch: changing floatLeft to leftList for responsive */
	additionalInformation_OptionalInsurance_Details2		:   "Help safeguard you and your family’s private and valuable information."
															+ "<ul class=\"leftList simpleHyphenList\"><li>&#45; Online monitoring of your registered personal information**</li>"
															+ "<li>&#45; Card Protection, Online Data Backup and Credit Theft Reward Service of up to $3,000**</li>"
															+ "<li>&#45; A Computer Tune-Up Reimbursement of up to $75, inclusive of taxes, per subscription year**</li>"
															+ "<li>&#45; Rebound<sup>&reg;</sup> Asset Return Service** which may help you recover lost or stolen items</li>"
															+ "<li>&#45; Costs $4.99** payable in advance monthly after the first transaction is made on your Canadian Tire Bank issued credit card.</li></ul>"
															+ "<br>If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter, which is included in the Welcome Package."
															+ "<br><br>Enrolment in Identity Watch Classic is voluntary and can be cancelled at any time. If you cancel within the first 30 days of your enrolment date, Canadian Tire Bank will refund your paid subscription fees, after the first transaction is made on your card. If you cancel after the initial 30 days, your cancellation will be effective as of the last day of your billing cycle, or 30 days after the cancellation is received, whichever is earlier. If you cancel you are responsible for any fees or changes incurred as a result of the services offered through an internet provider or their party service provider.",
	
	additionalInformation_OptionalInsurance_Details3		:   "Enrollment in both Credit Protector<sup>&reg;</sup> Insurance and Identity Watch Classic<sup>&reg;</sup> includes the coverage and benefits of both products, as listed above.",
	additionalInformation_OptionalInsurance_Details4		:   "Credit Protector (cardmembers aged 18-65 years) can:",
	additionalInformation_OptionalInsurance_Details5_Bullet1	:   "&#45; pay a monthly benefit of 3% of the outstanding balance on a Canadian Tire branded credit card (not including Special Payment Plans) subject to a monthly maximum of $1,000 and a maximum benefit payment of $20,000 should you lose your job through no fault of your own or become totally disabled*;",
	additionalInformation_OptionalInsurance_Details5_Bullet2	:	"&#45; pay the outstanding balance on your Canadian Tire branded credit card if you or your spouse pass away or are diagnosed with a terminal illness*, to a maximum of $20,000.",
	additionalInformation_OptionalInsurance_Details6		:   "Credit Protector-<i>Senior</i> (cardmembers aged 66-75 years) can: ",
	additionalInformation_OptionalInsurance_Details7_Bullet1	:	"&#45; pay the outstanding balance on your Canadian Tire branded credit card if you or your spouse pass away or are diagnosed with a terminal illness*, to a maximum of $20,000.",
	additionalInformation_OptionalInsurance_Details8		:	"CreditProtector/Credit Protector-<i>Senior</i> costs $1.10* per $100 of the current month’s outstanding balance, less any amount of insurance premium charged that month and any Special Payment Plans, plus applicable taxes. No premium will be charged in any month where the outstanding balance is less than $10 at the time the statement prints. For example, if your balance is $200 at the time your statement prints, you would pay just $2.20* plus applicable taxes.",
	
	additionalInformation_OptionalInsurance_Details9		:   "Enrolment in Credit Protector/Credit Protector-<i>Senior</i> is voluntary and can be cancelled at any time. If you enrol in Credit Protector/Credit Protector-<i>Senior</i>, your coverage is effective upon enrolment.  You will receive a welcome package to confirm your enrolment.  It contains a Certificate of Insurance (Quebec residents also receive a copy of the Distribution Guide) and the complete details of the coverage such as benefits, limitations, exclusions and information on how to cancel or make a claim.",
	additionalInformation_OptionalInsurance_Details10		:   "There exists other insurance products on the market that may include coverage similar to those offered by Credit Protector/Credit Protector-<i>Senior</i>.  You may want to verify whether or not you already have insurance that provides similar coverage.",
	additionalInformation_OptionalInsurance_Details11		:   "Canadian Tire Bank receives compensation when you purchase Credit Protector/Credit Protector-<i>Senior</i>.",
	
	additionalInformation_OptionalInsurance_Details13		:   "Identity Watch Classic<sup>&reg;</sup>",
	additionalInformation_OptionalInsurance_Details14		:   "Help safeguard you and your family’s private and valuable information.",
	additionalInformation_OptionalInsurance_Details14_Bullet1	:	"&#45; <b>Lost/Stolen Card Assistance</b> ",
	additionalInformation_OptionalInsurance_Details14_Bullet2	:	"&#45; <b>Online Data Backup</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet3	:	"&#45; <b>Credit Card Theft Reward Service</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet4	:	"&#45; <b>Identity Fraud Prevention/Online Monitoring Service</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet5	:	"&#45; <b>Computer Maintenance Reimbursement</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet6	:	"&#45; <b>Rebound<sup>&reg;</sup> Asset Return Service</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet7	:	"&#45; <b>Costs $4.99** payable in advance monthly after the first transaction is made on your Canadian Tire Bank issued credit card.</b>",
	additionalInformation_OptionalInsurance_Details14_OMP_OMR		:   "Help safeguard you and your family’s private and valuable information.",
	additionalInformation_OptionalInsurance_Details14_Bullet1_OMP_OMR	:	"&#45; <b>Lost/Stolen Card Assistance</b> ",
	additionalInformation_OptionalInsurance_Details14_Bullet2_OMP_OMR	:	"&#45; <b>Online Data Backup</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet3_OMP_OMR	:	"&#45; <b>Credit Card Theft Reward Service</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet4_OMP_OMR	:	"&#45; <b>Identity Fraud Prevention/Online Monitoring Service</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet5_OMP_OMR	:	"&#45; <b>Computer Maintenance Reimbursement</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet6_OMP_OMR	:	"&#45; <b>Rebound<sup>&reg;</sup> Asset Return Service</b>",
	additionalInformation_OptionalInsurance_Details14_Bullet7_OMP_OMR	:	"&#45; <b>Costs $4.99** payable in advance monthly after the first transaction is made on your Canadian Tire Bank issued credit card.</b>",
	additionalInformation_OptionalInsurance_Details14_1		:   "If you enrol in Identity Watch Classic, your subscription will be effective as of the enrolment date indicated on your Welcome Letter, which is included in the Welcome Package, which you should receive within 15 days of enrollment.",
	additionalInformation_OptionalInsurance_Details14_2		:   "Enrolment in Identity Watch Classic is voluntary and can be cancelled at any time. If you cancel within the first 30 days of your enrolment date, Canadian Tire Bank will refund your paid subscription fees, after the first transaction is made on your card. If you cancel after the initial 30 days, your cancellation will be effective as of the last day of your billing cycle, or 30 days after the cancellation is received, whichever is earlier. If you cancel you are responsible for any fees or changes incurred as a result of the services offered through an internet provider or its third party service provider.",
																
	additionalInformation_OptionalInsurance_Details15		:   "YES, PLEASE ENROL ME IN THE FOLLOWING OPTIONAL PRODUCT(S):",
	additionalInformation_OptionalInsurance_Details15_OMP_OMR		:   "YES, PLEASE ENROL ME IN THE FOLLOWING OPTIONAL PRODUCT(S):",
	
	// US4997
	additionalInformation_OptionalInsurance_Details15_NewLine1		:   "Before you enroll, it is important that you read and understand the Summary of Coverage above, which outlines the terms, benefits, limitations and exclusions. ",
	additionalInformation_OptionalInsurance_Details15_NewLine2		:   "By clicking the one of the first two boxes below I consent and agree to enroll In the optional Credit Protector® Insruance, and accept the terms and conditions and costs disclosed. ",
	
	// US3382
	additionalInformation_OptionalInsurance_Details16		:	"Credit Protector<sup>&reg;</sup> Insurance (available for cardmembers age 18 to under 76)",
	additionalInformation_OptionalInsurance_Details16_Bullet1		:	"This optional group creditor balance insurance on your Canadian Tire Bank issued credit card can help pay your outstanding credit card balance or make monthly payments, up to the policy maximum of $20,000, when you and your family may need it most.",
	additionalInformation_OptionalInsurance_Details16_Bullet2		:	"Credit Protector can:",
	additionalInformation_OptionalInsurance_Details16_Bullet3		:	"&#45; pay a monthly benefit of 5% of the outstanding balance (not including Special Payment Plans) as of the statement date   coinciding with or immediately before the date of loss on a Canadian Tire Bank issued credit card subject to a monthly maximum of $1,000 and a maximum benefit payment of $20,000 should you lose your job through no fault of your own or become totally disabled*;",
	additionalInformation_OptionalInsurance_Details16_Bullet3_OMP_OMR	:	"&#45; pay a monthly benefit of 5% of the outstanding balance (not including Special Payment Plans) as of the statement date   coinciding with or immediately before the date of loss on a Canadian Tire Bank issued credit card subject to a monthly maximum of $1,000 and a maximum benefit payment of $20,000 should you lose your job through no fault of your own or become totally disabled*;",
	additionalInformation_OptionalInsurance_Details16_Bullet4		:	"&#45; pay the outstanding balance on your Canadian Tire Bank issued credit card if you or your spouse pass away, suffer a dismemberment, or are diagnosed with a terminal illness*, to a maximum of $20,000.",
	additionalInformation_OptionalInsurance_Details16_Bullet4_OMP_OMR	:	"&#45; pay the outstanding balance on your Canadian Tire Bank issued credit card if you or your spouse pass away, suffer a dismemberment, or are diagnosed with a terminal illness*, to a maximum of $20,000.",
	additionalInformation_OptionalInsurance_Details16_Bullet5		:	"Credit Protector Insurance costs $1.10 per $100<sup>&Dagger;</sup>  of your average daily balance (less the outstanding amount of any Special Payment Plan) in any month with an average daily balance of $10 or more. For example, if your average daily balance is $350, you would pay just $3.85 plus applicable taxes. At age 80, the premium rate reduces to $0.59 per $100<sup>&Dagger;</sup>  of the average daily balance, less any the outstanding amount of any Special Payment Plan.",
	additionalInformation_OptionalInsurance_Details16_Bullet5_OMP_OMR	:	"Credit Protector Insurance costs $1.10 per $100<sup>&Dagger;</sup>  of your average daily balance (less the outstanding amount of any Special Payment Plan) in any month with an average daily balance of $10 or more. For example, if your average daily balance is $350, you would pay just $3.85 plus applicable taxes. At age 80, the premium rate reduces to $0.59 per $100<sup>&Dagger;</sup>  of the average daily balance, less any the outstanding amount of any Special Payment Plan.",
	additionalInformation_OptionalInsurance_Details16_Bullet6		:	"Enrolment in Credit Protector Insurance is voluntary and can be cancelled at any time. If you cancel within the first 45 days of issuance of the Certificate of Insurance, you will receive a full refund of premiums paid. If you enrol in Credit Protector Insurance, your coverage is effective upon enrollment. You will receive a welcome package to confirm your enrolment. It contains a Certificate of Insurance (Quebec residents also receive a copy of the Distribution Guide) and the complete details of the coverage such as definitions, benefits, limitations, restrictions and exclusions and information on how to cancel or make a claim.",
	additionalInformation_OptionalInsurance_Details16_Bullet6_OMP_OMR	:	"Enrolment in Credit Protector Insurance is voluntary and can be cancelled at any time. If you cancel within the first 45 days of issuance of the Certificate of Insurance, you will receive a full refund of premiums paid. If you enrol in Credit Protector Insurance, your coverage is effective upon enrollment. You will receive a welcome package to confirm your enrolment. It contains a Certificate of Insurance (Quebec residents also receive a copy of the Distribution Guide) and the complete details of the coverage such as definitions, benefits, limitations, restrictions and exclusions and information on how to cancel or make a claim.",
	additionalInformation_OptionalInsurance_Details16_Bullet7		:	"There exists other insurance products on the market that may include coverage similar to those offered by Credit Protector Insurance. You may want to verify whether or not you already have insurance that provides similar coverage.",
	additionalInformation_OptionalInsurance_Details16_Bullet8		:	"Canadian Tire Bank has a financial interest in the sale of this insurance.",
	additionalInformation_OptionalInsurance_Details16_Bullet8_OMP_OMR	:	"Canadian Tire Bank has a financial interest in the sale of this insurance.",
	additionalInformation_OptionalInsurance_Details16_Bullet9		:	"<sup>*</sup>  See your Certificate of Insurance for all terms, conditions, restrictions, exclusions and limitations. At age 80, the Life and Dismemberment coverage changes to Accidental Death and Accidental Dismemberment coverage.",
	additionalInformation_OptionalInsurance_Details16_Bullet91		:	"<sup>&Dagger;</sup> Plus applicable taxes, payable monthly.",
	additionalInformation_OptionalInsurance_Details16_Bullet10		:	"Credit Protector insurance is group creditor insurance underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and American Bankers Insurance Company of Florida (ABIC). ABLAC and ABIC, their subsidiaries and affiliates, carry on business in Canada under the name Assurant<sup>&reg;</sup>.",
	additionalInformation_OptionalInsurance_Details16_Bullet91_OMP_OMR	:	"<sup>&Dagger;</sup> Plus applicable taxes, payable monthly.",
	additionalInformation_OptionalInsurance_Details16_Bullet10_OMP_OMR	:	"Credit Protector insurance is group creditor insurance underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and American Bankers Insurance Company of Florida (ABIC). ABLAC and ABIC, their subsidiaries and affiliates, carry on business in Canada under the name Assurant<sup>&reg;</sup>.",
/*	additionalInformation_OptionalInsurance_Details16_Bullet11		:	"<sup>&reg;</sup> Assurant Solutions is a registered trademark of Assurant, Inc.",
	additionalInformation_OptionalInsurance_Details16_Bullet12		:	"<sup>&reg;</sup> Credit Protector is a registered trademark of Canadian Tire Bank.",
	additionalInformation_OptionalInsurance_Details16_Bullet13		:	"<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited.",
*/	
	
	additionalInformation_OptionalProducts_Title1			:	"Canadian Tire Protection Advantage<sup>&reg;</sup>",
	additionalInformation_OptionalProducts_Title1_1			:	"<i>(not available for residents of Saskatchewan)</i>",
	// Old code
	//	additionalInformation_OptionalProducts_Title1_2			:	"Enrolment in both Credit Protector<sup>&reg;</sup>**/Credit Protector-<i>Senior</i><sup>&reg;</sup>** and Identity Watch Classic<sup>&trade;</sup>. Includes the coverage and benefits of both optional products, as listed above.. ",
	//	additionalInformation_OptionalProducts_Title2			:	"Credit Protector<sup>&reg;</sup>**/Credit Protector-<i>Senior</i><sup>&reg;</sup>** ",
	additionalInformation_OptionalProducts_Title1_2			:	"Enrolment in both Credit Protector<sup>&reg;</sup> Insurance and Identity Watch Classic<sup>&reg;</sup>&#46; Includes the coverage and benefits of both optional products, as listed above&#46;",
	additionalInformation_OptionalProducts_Title2			:	"Credit Protector<sup>&reg;</sup> Insurance",
	additionalInformation_OptionalProducts_Title2_1			:	"<i>(not available for residents of Saskatchewan)</i>",
	additionalInformation_OptionalProducts_Title3			:	"Identity Watch Classic<sup>&reg;</sup>",
	additionalInformation_OptionalProducts_Title4			:	"Not at this time",
	additionalInformation_OptionalProducts_Title4_OMP_OMR	:	"Not at this time",
	
	// US4133
	additionalInformation_OptionalInsurance_PostalDistImpact_Title		:	"POSSIBLE POSTAL DISRUPTION IMPACT ON MAIL DELIVERY",
	additionalInformation_OptionalInsurance_PostalDistImpact_Para1		:	"A postal disruption may occur on or after July 8, 2016. As a new Canadian Tire Bank<sup>&reg;</sup> issued credit card cardmember ",
	additionalInformation_OptionalInsurance_PostalDistImpact_Para11		:	"— your credit card Welcome Package may arrive within several weeks following the resolution of the postal disruption.",
	additionalInformation_OptionalInsurance_PostalDistImpact_Para2		:	"Additionally, if you enrolled in an optional product such as Credit Protector<sup>&reg;</sup> Insurance and/or Identity Watch Classic<sup>&reg;</sup>, please be advised that:",
	additionalInformation_OptionalInsurance_PostalDistImpact_Bullet1	:	"&#45; Your optional product Welcome Package(s) may arrive within several weeks following the resolution of the postal service disruption",
	additionalInformation_OptionalInsurance_PostalDistImpact_Bullet2	:	"&#45; Your Review Period will be extended",	
	additionalInformation_OptionalInsurance_PostalDistImpact_Para3		:	"In the meantime, for Credit Protector<sup>&reg;</sup> Insurance you can download a copy of the Certificate of Insurance ",
	additionalInformation_OptionalInsurance_PostalDistImpact_Para31		:	"(<i>Distribution Guide</i> for residents of Quebec) and/or the Terms and Conditions for <i>Identity Watch Classic</i> ",
	additionalInformation_OptionalInsurance_PostalDistImpact_Para32		:	"at <a href='https://www.ctfs.com/en/optional-products.html' target='_blank'>ctfs.com/optionalproducts</a>.",
	additionalInformation_OptionalInsurance_PostalDistImpact_Para4		:	"If you have any questions please call 1-800-459-6415.",
		
	//additionalInformation_footnoteContentText3				:	"Plus applicable taxes, payable monthly. See the Legal Information handout or your Certificate of Insurance for all terms, conditions, limitations and exclusions. Terms and conditions apply.",
	//additionalInformation_footnoteContentText4				:	"If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector-Senior. Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida.  Credit Protector - Senior is underwritten by American Bankers Life Assurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name of Assurant Solutions<sup>&reg;</sup>.",
	//additionalInformation_footnoteContentText5				:	"Plus applicable taxes. Subscription Fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	//additionalInformation_footnoteContentText1				:	"<sup>1</sup> In the form of Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details.  ",
	additionalInformation_footnoteContentText1Link			:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	//additionalInformation_footnoteContentText2				:	"<sup>2</sup> Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect Canadian Tire ‘Money’<sup>&trade;</sup> on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions."+
	//															"<br><sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details. ",
	
	//additionalInformation_footnoteContentText6				:	"<sup>&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire MasterCard. The information on this application is used to determine eligibility for a Canadian Tire MasterCard and not for the optional products, which are offered to all Canadian Tire MasterCard holders.<br>" +
	//                                                            "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
	//additionalInformation_footnoteContentText7				:   "<sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector and Credit Protector-Senior are registered trademarks of Canadian Tire Financial Services Limited and used under licence.<br>The Identity Watch Classic program is sponsored by Canadian Tire Financial Services Limited and provided by Aimia Proprietary Loyalty Canada Inc.<br>" +
	//															"Rebound<sup>&reg;</sup> is a registered trademark of Aimia Proprietary Loyalty Canada Inc.<br>"+
	//															"<sup>&reg;</sup> Assurant Solutions is a trademark of Assurant, Inc.<br>" +	
	//															"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
	
	additionalInformation_footnoteContentText1				:	"* Plus applicable taxes, payable monthly. See the Legal Information handout and your Certificate of Insurance for all exclusions,  restrictions,  limitations, terms and conditions.",
	additionalInformation_footnoteContentText2				:	"** If you are less then age 66, you will be enroled in Credit Protector.  At age 66, the Life and Dismemberment coverage becomes Accidental Death and Dismemberment coverage. ",
	additionalInformation_footnoteContentText3				:	"*** If you are between the ages of 66-75 you will be enroled in Credit Protector-<i>Senior</i>. Please note: Involuntary Unemployment and Total Disability coverage is not included in  Credit Protector – <i>Senior</i>.  At age 76, the Life and Dismemberment coverage becomes Accidental Death and Dismemberment coverage.",
	additionalInformation_footnoteContentText4				:	"Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida. Credit Protector-<i>Senior</i> is underwritten by American Bankers Life Assurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name Assurant Solutions<sup>&reg;</sup>.",
	additionalInformation_footnoteContentText5				:	"<span class=\"postalStrikeContentText\">&#42;&#42;</span>  Plus applicable taxes. Subscription fees will commence after the first transaction is made on your Canadian Tire Bank issued credit card. Thereafter, Subscription Fees will be charged in advance monthly to your Canadian Tire Bank issued credit card. See the Legal Information handout for all terms, conditions, limitations, restrictions and exclusions. The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Sigma Loyalty Group Inc.",
	// additionalInformation_footnoteContentText6				:	"The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Aimia Proprietary Loyalty Canada Inc.",
	
/*	additionalInformation_footnoteContentText7				:	"<sup>&#8224;</sup><sup>&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire MasterCard. The information on this application is used to determine eligibility for a Canadian Tire MasterCard and not for the optional products, which are offered to all Canadian Tire MasterCard holders.",
	additionalInformation_footnoteContentText8				:	"<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	additionalInformation_footnoteContentText9				:	"<sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector is a registered trademarks of Canadian Tire Bank.",
	additionalInformation_footnoteContentText10				:	"Rebound<sup>&reg;</sup> is a registered trademark of by Aimia Proprietary Loyalty Canada Inc.",
	additionalInformation_footnoteContentText11				:	"<sup>&reg;</sup> Assurant Solutions is a trademark of Assurant, Inc.",
	additionalInformation_footnoteContentText12				:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks <i/>of MasterCard International Incorporated.",
*/
	// Ending of US3307 changes
	// US3979
	additionalInformation_footnoteContentText6_1			:	"Canadian Tire Financial Services is a business name of Canadian Tire Bank.",
	additionalInformation_footnoteContentText7				:	"<sup>&dagger;&dagger;</sup> These are optional products offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional products. Canadian Tire Bank has a financial interest in the sale of these products.",
	additionalInformation_footnoteContentText7_AddedLineOMX	:	"<sup>1</sup> In the form of electronic Canadian Tire Money<sup>&reg;</sup> &#40;CT Money<sup>&reg;</sup>&#41;. Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm for more information. Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup>  cardmembers paying with their Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup>  collect Canadian Tire Money at the rate that is 10X (equates to 4%) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	additionalInformation_footnoteContentText7_AddedLineOMZ	:	"<sup>1</sup> In the form of electronic Canadian Tire Money<sup>&reg;</sup> &#40;CT Money<sup>&reg;</sup>&#41;. Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm for more information. Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup>  cardmembers paying with their Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup>  collect Canadian Tire Money at the rate that is 10X (equates to 4%) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	additionalInformation_footnoteContentText8				:	"<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",		
	additionalInformation_footnoteContentText9				:	"<sup>&reg;/&trade;</sup> Mastercard and World Elite Mastercard are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
	additionalInformation_footnoteContentText10				:	"<sup>&reg;</sup> Assurant is a registered trademark of Assurant Inc.",
	additionalInformation_footnoteContentText11				:	"<sup>&reg;/&trade;</sup> Credit Protector is a registered trademark of Canadian Tire Bank.",
	additionalInformation_footnoteContentText12				:	"<sup>&reg;/&trade;</sup> Rebound is a registered trademark of Sigma Loyalty Group Inc.",
	
	// US4997 OMP CARD -------------------
	
	additionalInformation_footnoteContent_OMP_Text1				:	"<sup>&#8224;&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional products, which are offered to all Canadian Tire Bank issued Mastercard cardmembers.",
	additionalInformation_footnoteContent_OMP_Text2				:	"<sup>&reg;/&trade;</sup> Credit Protector is a registered trademark of Canadian Tire Bank.",
	additionalInformation_footnoteContent_OMP_Text3				:	"The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Aimia Proprietary Loyalty Canada Inc. Rebound<span class=\"superscripts\"><sup>&reg;</sup></span> is a registered trademark of by Aimia Proprietary Loyalty Canada Inc.",
	additionalInformation_footnoteContent_OMP_Text4				:	"<sup>&reg;</sup> Assurant Solutions is a registered trademark of Assurant, Inc.",
	additionalInformation_footnoteContent_OMP_Text5				:	"<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	additionalInformation_footnoteContent_OMP_Text6				:	"<sup>&reg;/&trade;</sup>  Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",
	
	// US4997 OMP CARD -------------------
	//--------------- END --------------------- OPTIONAL PRODUCTS section -------------- END -----------
	
	//----------------------------------------- Confirmation section ------------------------------
	
	//-------------- US4591 STARTS ----------------------------------------------------------------
	
	confirmation_steps4_OUT_5_Ecomm                            :  "<span class=\"overviewNSTableRedText\">Step 4 of 5:</span> Review and Submit",
	confirmation_steps4_OUT_5_Decoupled                        :  "<span class=\"overviewNSTableRedText\">Step 4 of 4:</span> Review and Submit",
	confirmation_steps4_OUT_5_Decoupled_OMP_OMR                :  "<span class=\"overviewNSTableRedText\">Step 4 of 4:</span> Review and Submit",
	//-------------- US4591 ENDS   ----------------------------------------------------------------
	confirmation_EditModeError							:   "Please save your changes to continue",
	
	confirmation_Title									:   "Confirmation",
	confirmation_Edit_Button_Label                      :   "Edit",
	confirmation_Terms_Conditions                       :   "<b>Application Authorization and Terms and Conditions</b>",
	confirmation_Privacy_Charter                        :   "<a href='https://www.ctfs.com/content/ctfs/en/legal_privacy/privacy_charter.html' target='_blank'>See our Privacy Charter</a>",
	confirmation_Privacy_Charter_OMP_OMR                :   "<a href='https://www.ctfs.com/content/ctfs/en/legal_privacy/privacy_charter.html' target='_blank'>See our Privacy Charter</a>",
	confirmation_Privacy_Charter_Text                   :   "By clicking this checkbox, I accept and agree to the Application Authorization.",
	confirmation_Application_Authorization_Title        :   "Application Authorization:",
	confirmation_Application_Authorization_SubTitle     :   "By clicking the checkbox below I agree as follows:",

	// Old code
	// confirmation_Application_Authorization_Item1        :   "Please open an account in my name for the type of Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> credit card indicated above (the \"Card\") with an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees.",
	confirmation_Application_Authorization_Item1        :   "Please open an account in my name for the type of Canadian Tire Bank issued credit card indicated above (the \"Card\") with an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99% for cash transactions and related fees.",
	confirmation_Application_Authorization_Item1_OMP_OMR     :   "Please open an account in my name for the type of Canadian Tire Bank issued credit card indicated above (the \"Card\") with an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99% for cash transactions and related fees.",
	// US4997 - OMP CARD
	confirmation_Application_Authorization__OMP_CARD_Item2        :   "<b>If I am not approved for the Card at an annual interest rate of 19.99&#37; for all charges (excluding cash transactions and related fees) and 22.99&#37;  for cash transactions and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99&#37; for all charges (excluding cash transactions and related fees) and 27.99&#37; for cash transactions and related fees.</b>",
	
	confirmation_Application_Authorization_Item5        :   "I will be bound by the terms and conditions of the Canadian Tire Bank Cardmember Agreement that I will receive with the Card, as such agreement may be amended from time to time. I will be solely liable for any charges to the account, including charges made by anyone to whom I have asked that you issue a supplementary card. I will be the only person who receives a monthly statement.",
	confirmation_Application_Authorization_Item6        :   "<u>You may obtain credit and other personal information about me from, and exchange such information with, credit reporting agencies.</u>",
	confirmation_Application_Authorization_Item6a       : "I consent to Canadian Tire Bank (“CTB”) verifying my personal information (CTB Information) including my name, address, date of birth, mobile number with my mobile service provider (“MSP”) and consent to my MSP providing CTB my account information (account status, account type, etc.). The MSP information will be used to verify my identity and to conduct fraud analysis and fraud investigations.",
	confirmation_Application_Authorization_Item7        :   "Each person to whom I have asked that you issue a supplementary card has authorized me to provide you with the above information about them.",
	confirmation_Application_Authorization_Item8        :   "If I provide you with my Social Insurance Number, you may use it to identify me, including with credit reporting agencies.",
	confirmation_Application_Authorization_Item9		:	"I agree that if approved you can provide me with initial disclosure statement and cardmember agreement by way of an email to the email address provided in this application.",
	confirmation_Application_Authorization_Item10       :   "I have read and understood this application.",
	confirmation_UnitNumber                             :   "unit #",
	confirmation_Suite		                            :   "Apt./Suite # ",
	confirmation_prevAddressTitle                       :   "Previous Address",
	confirmation_Information_Accurate_Text              :   "Please ensure the information submitted is accurate as this will help us process your application today!",
	confirmation_Information_Accurate_Text_OMP_OMR      :   "Please ensure the information submitted is accurate as this will help us process your application today!",
	// US4579 Removal of CT
	confirmation_Update_CT_Profile_Text					:   "Update my profile with the address information provided in this application.",
	confirmation_ReceiveEmail                           :    ', I would like to receive e-mail communications on offers, promotions, contests, and information on products and services.',
	confirmation_PrintPage								:	'Print this page',
	confirmation_print_header							:	'<img src="app/images/static_header_confirmation.png"  class="print_header" id="img2" alt="test" width="954">',
	confirmation_ScreenIndicator						:	"Please wait...",
	confirmation_footnoteContentText1					:	"<sup>1</sup> In the form of Canadian Tire ‘Money’ On The Card<sup>&reg;</sup> awards. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire 'Money' Rewards Program page. Options MasterCard customers in Nova Scotia participate in a different rewards program, please go to",
	confirmation_footnoteContentText1Link				:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	confirmation_footnoteContentText2					:	"<sup>2</sup> Provided your account is in good standing and it is a redeemable purchase.",	
	confirmation_footnoteContentText4					:	"<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	confirmation_footnoteContentText5					:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and PayPass is a trademark, of MasterCard International Incorporated.",	

	//--------------- END --------------------- Confirmation section -------------- END -----------
	
	//----------------------------------------- Identity Verification section ------------------------------
	identityVerification_steps5_OUT_5_Ecomm             :  "<span class=\"overviewNSTableRedText\">Step 5 of 5:</span> Identity Verification",
	identityVerification_NoSelectionError				:   "You must answer each identity verification question presented to continue",
	
	identityVerification_Title							:   "Identity Verification",
	identityVerification_Congratulations				:   "<strong>Congratulations, you've been approved!</strong>",
	identityVerification_Customer_Name                  :     "Customer Name: ",
	identityVerification_CardNumberText					:   "Card Number: ",
	identityVerification_CardLimitText					:   "Credit Limit: ",
	identityVerification_CardAPRText					:   "APR: ",
	
	/* 2016-02-22 chrch: Change confirmation_Button_Label per Legal */
	confirmation_Button_Label                           :   "SUBMIT AND VERIFY",
	
	// US3627
	confirmation_Ctfs_Button_Label						:	"SUBMIT",
	
	identityVerification_FinalText1						:	"You have been approved for your new Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> which will now be added to your My Canadian Tire Account, so you can start using it online on canadiantire.ca today!",
	//identityVerification_FinalText2						:	"You will also receive your Options MasterCard in the mail within 7-10 business days to use everywhere else.",
	//identityVerification_FinalText3						:	"Your initial disclosure statement and cardmember agreement will be sent to you via email at: ",
	identityVerification_FinalText3						:	"All the important information outlining your new Canadian Tire Options MasterCard and its associated benefits will be sent to you via email at: ",
	identityVerification_FinalText4						:	"If this is incorrect, please call 1-800-459-6415. You will also receive a copy of this information in the welcome package that includes your physical card.",
	identityVerification_FinalText5						:	"*Take note of your last four digits for reference in your My CT account and checkout process.",
	
	identityVerification_PendingTitle					:   "<strong>Thank you - We have received your application</strong>",
	identityVerification_PendingText1					:	"Your application is now under review by our application team. Depending on the level of information you provided, processing can take from a few days to a couple of weeks.", 
	identityVerification_PendingText1_OMP_OMR			:	"Your application is now under review by our application team. Depending on the level of information you provided, processing can take from a few days to a couple of weeks.",
	identityVerification_PendingText2					:	"Depending on the level of information you provided, approval can take from a few days to couple of weeks.",
	identityVerification_PendingText3					:	"When will I receive my card?",
	identityVerification_PendingText4					:	"If approved, you will receive correspondence in the mail within 7-10 business days.",
	identityVerification_TUPendingText1					:	"Unfortunately our Instant Credit services are temporarily unavailable, however your application will still be processed.",
	identityVerification_TUPendingText2					:	"NOTE: Do <u>NOT</u> attempt to resubmit your application.",
	
	identityVerification_ContinueShopping				:	"Continue Shopping",
	identityVerification_ProceedToCheckout				:	"Proceed to Checkout",
	identityVerification_Submit							:	"SUBMIT",
	
	
	identityVerification_Exam1Question					:	"From the following list, select one of your previous employers",
	identityVerification_Exam1Answer1					:	"Versina Trust",
	identityVerification_Exam1Answer2					:	"HSBC Bank Canada",
	identityVerification_Exam1Answer3					:	"Bank of Nova Scotia",
	identityVerification_Exam1Answer4					:	"TD Canada Trust",
	
	identityVerification_Exam2Question					:	"You have a car loan with which of the following institutions:",
	identityVerification_Exam2Answer1					:	"Honda Finance",
	identityVerification_Exam2Answer2					:	"Chevrolet Financing",
	identityVerification_Exam2Answer3					:	"TD Auto Loan",
	
	identityVerification_ScreenIndicator				:	"Just a minute - your application is currently being processed...",
	identityVerification_FireFoxProblem 				:	" You have completed the application process - you may close this window and continue shopping at canadiantire.ca",
	
	identityVerification_ProtectionNote 				:	"For your protection and security you will be asked 3 questions that only you will know the answers to. ",
		
	identityVerification_EcommProfile_Update_Request_Failed	:	"Unfortunately, we cannot access your My CT Account at this time. To have your new card manually added to your My CT Account, please call 1-800-387-8803.",
	
	identityVerification_ApplicationDataValidatonFailed	:	"Unfortunately, the application could not be submitted due to an internal issue. Please try again.",
	
	// -- US4675 starts -- //
	//approve_you_have_been_approve_label                 :   "YOU'VE BEEN APPROVED",
	approved_title_one_OMX                              :   "You have been <span class=\"overviewNSTableRedText\">approved</span> for your new Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> ",
	approved_title_one_OMZ                              :   "You have been <span class=\"overviewNSTableRedText\">approved</span> for your new Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup>",
	approved_title_one_OMR                              :   "You have been <span class=\"overviewNSTableRedText\">approved</span> for your Cash Advantage<sup>&trade;</sup> Mastercard<sup>&trade;</sup>",
	approved_title_one_OMP                              :   "You have been <span class=\"overviewNSTableRedText\">approved</span>  for your Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>",
	
	approved_title_one_listItem1_OMR                    :   "Over the next 7-10 business days, you will receive your Cash Advantage Mastercard &amp; Welcome Package.",
	approved_title_one_listItem1_OMP                    :   "Over the next 7-10 business days, you will receive your Gas Advantage Mastercard &amp; Welcome Package.",
	approved_title_two                                  :   "Over the next 7-10 business days, you will receive:",
	approved_title_one_listItem1                        :   "You will receive an email with your Initial Disclosure Statement and Cardmember Agreement",
	approved_title_one_listItem2                        :   "Your card is now added to your online shopping profile, so you can start using it online today",
	approved_title_one_listItem3                        :   "Please make note of the last four digits of your card number for your Checkout process",
	approved_title_two_listItem_OMX                        :   "Your Triangle Mastercard and Welcome Package",
	approved_title_two_listItem_OMZ                        :   "Your Triangle World Elite Mastercard and Welcome Package",
	approved_title_two_listItem2                        :   "Your Triangle Rewards<sup>&trade;</sup> Card and Welcome Package",
	approved_title_two_listItem3                        :   "A confirmation email.",
	approved_page_continueShoppingButton                :   "CONTINUE SHOPPING",
	pending_page_title                                  :   "THANK YOU - WE HAVE RECEIVED YOUR APPLICATION",
	pending_page_statusName                             :   "Approval Status: ",
	pending_page_status                                 :   "PENDING",
	pending_page_card_type                              :   "Card Type: ",
	pending_page_description                            :   "Unfortunately we are unable to instantly process your application today, your application is now being reviewed by our application team. Depending on the level of information provided, processing can take from a few days to a couple of weeks.",
	pending_page_subtitle_desc                          :   "What happens next?",
	pending_page_sub_subtitle                           :   "If approved, your credit card welcome package will arrive in the mail within 7-10 business days, containing:",
	pending_page_li_one                                 :   "Your Canadian Tire Options® Mastercard® & Welcome package.",
	pending_page_li_two                                 :   "Your My Canadian Tire 'Money' card & Welcome package",
	pending_page_note                                   :   "<b>NOTE: PLEASE DO NOT ATTEMPT TO RESUBMIT YOUR APPLICATION.<b>",
	pending_page_note_OMR                           :   "<b>NOTE: PLEASE DO NOT ATTEMPT TO RESUBMIT YOUR APPLICATION.<b>",
	pending_page_note_OMP                           :   "<b>NOTE: PLEASE DO NOT ATTEMPT TO RESUBMIT YOUR APPLICATION.<b>",
	
	pending_page_close_button_text                      :   "CLOSE",
	declined_message_one                                :   "Unfortunately we are unable to instantly process your application today. Your application is now being reviewed by our application team. Depending on the level of information provided, processing can take from a few days to a couple of weeks.",
	declined_message_two                                :   "<strong>What happens next?</strong>",
	declined_message_two_OMP_OMR                        :   "<strong>What happens next?</strong>",
	declined_message_three                              :   "Questions? Please call 1-800-459-6415.",
	pendinDeclinedPageOMX_OMZ                           :   "<span class=\"overviewNSTableRedText\"> &#91; Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup> OR Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup>&#93;</span>",
	
	pendingDeclined_page_li_one                         :   "You will also receive a Triangle Rewards<sup>TM</sup> Card and welcome package separately within 7-10 business days.",
	pendingDeclined_page_li_two_OMX                     :   " If approved, your welcome package containing your Triangle Mastercard will arrive in the mail within 7-10 business days.",
	pendingDeclined_page_li_two_OMZ                     :   " If approved, your welcome package containing your Triangle World Elite Mastercard will arrive in the mail within 5-7 business days.",
	pendingDeclined_page_li_two_OMP                     :   " If approved for credit, you will receive your  welcome package in the mail within 7-10 business days.",
	
	pendingDeclined_page_li_two_OMP_footerText1                     :   "Canadian Tire Financial Services is a business name of Canadian Tire Bank.",
	pendingDeclined_page_li_two_OMP_footerText2                     :   "<span class=\"superscripts\"><sup>&reg;/&trade;</sup></span> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, are used under licence.",
	pendingDeclined_page_li_two_OMP_footerText3                     :   "<span class=\"superscripts\"><sup>&reg;/&trade;</sup></span> Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",

	// -- US4675 ends --//

	//---------US3084 iLoyalty - BRB front facing chagnes -  Loyalty Notification --------------//	
	
	// US4591 -- starts--
	overview_Page_tiltle_Ecomm                          :   "<span class=\"overviewNSTableRedText\">Step 1 of 5:</span> Overview",
	overview_Page_tiltle_Decoupled                      :   "<span class=\"overviewNSTableRedText\">Step 1 of 4:</span> Overview",
	overview_page_CompareCards                          :   "Compare Cards",
	overview_Page_choose_the_card                       :   "Choose the card you'd  like to apply for:",
	overview_pageCompareCards_table_title               :   "Included Features & Benefits",
	
	overview_pageCompareCards_table_td1                 :   "<b>No Annual Fee</b>",
	overview_pageCompareCards_table_td2                 :   "<b>Collect 4%</b> Canadian Tire Money<sup>&reg;</sup> everyday<sup>1</sup> at Canadian Tire, Sport Chek<sup>&reg;</sup>, Mark’s<sup>&reg;</sup>/ L'Équipeur<span class=\"superscripts\"><sup>MD</sup></span> and PartSource<sup>&reg;</sup> stores",
	overview_pageCompareCards_table_td3                 :   "<b>Collect</b> Canadian Tire Money at participating Canadian Tire gas bars<sup>2</sup>",
	overview_pageCompareCards_table_td4                 :   "<b>Collect</b> Canadian Tire Money everywhere else you shop<sup>1</sup>",
	overview_pageCompareCards_table_td5                 :   "<b>Redeem</b> Canadian Tire Money at Canadian Tire and at designated partner locations such as Sport Chek and Marks stores<sup>1</sup>",
	overview_pageCompareCards_table_td6                 :   "<b>In-Store and Online Financing<sup>*</sup></b>   at Canadian Tire, Sport Chek and participating Mark’s / L'Équipeur stores",
	overview_pageCompareCards_table_td7                 :   "<b>Collect 3&#37;</b> Canadian Tire Money on the first &#36;12,000 of applicable grocery purchases<sup>3</sup>",
	overview_pageCompareCards_table_td8                 :   "Roadside Assistance<sup>&#94;</sup>",
	overview_pageCompareCards_table_td9                 :   "Extended Warranty Coverage<sup>&dagger;</sup>",
	overview_pageCompareCards_table_td10                :   "Purchase Security<sup>&dagger;</sup>",
	overview_pageCompareCards_table_td11                :   "Car Rental Collision/Loss Damage Waiver Insurance<sup>&dagger;</sup>",
	overview_pageCompareCards_table_td12                :   "24/7 Concierge Services<sup>&dagger;</sup>",
	overview_pageCompareCards_table_td13                :   "Enhanced Customer Service &#40;priority queuing&#41;",
	
	// US4591 -- ends--
	
	overview_NS_Attention                 		        :   "Attention Residents of Nova Scotia: <br> The following Cost of Credit Disclosure for Credit Card Applications is not applicable to Nova Scotia residents who are applying for a Canadian Tire Options MasterCard. The next step of the application process will show the appropriate Cost of Credit Disclosure.",	
	overview_NS_AttentionNote                           :   "",
	overview_NS_LeftRed                                 :   "The rewards program that the Canadian Tire Options<sup>&reg;</sup> MasterCard<sup>&reg;</sup> participates in has changed.",
	overview_NS_LeftTitile                              :   "As of October 10 2014, the Canadian Tire ‘Money’ Advantage<sup>&reg;</sup>program has changed to the My Canadian Tire ‘Money’<sup>&trade;</sup> program",
	overview_NS_LeftBullet1                             :   "Collect 10X Canadian Tire ‘Money’<sup>&trade;1</sup> every day at Canadian Tire stores, including on automotive service, at Partsource<sup>&reg;</sup>, Mark’s<sup>&reg;</sup> and at Sportcheck<sup>&reg;2</sup>.",
	overview_NS_LeftBullet2                             :   "Collect 2X Canadian Tire ‘Money’ everywhere else you shop<sup>2</sup>.",
	overview_NS_LeftBullet3                             :   "Collect Canadian Tire ‘Money’ at participating Canadian Tire gas bars<sup>4</sup>.",
	overview_NS_LeftNote                                :   "Please note: The rate at which you’ll collect Canadian Tire ‘Money’ is different than the rate at which Canadian Tire ‘Money’ Advantage points can be collected.<sup>3</sup>",
	overview_NS_LeftText                                :   "Redeeming is easy, right at the checkout at Canadian Tire stores or online for gift cards at canadiantire.ca ",
	overview_NS_DisclosureRed                           :   "Cost of Credit Disclosure for Credit Card Applications",
	overview_NS_DisclosureLeft1                         :   "Annual Interest Rate",
	
	// Old code
	// 	Overview_NS_DisclosureRight1                                :   "<p>These interest rates will be in effect on the day your account is opened: <br>All charges to your account (excluding cash advances and related fees) - <strong>19.99%</strong></p> <p>Cash advances and related fees - <strong>21.99%</strong></p> <p>If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - <strong>25.99%</strong> for all charges (excluding cash advances and related fees) and <strong>27.99%</strong> for cash advances and related fees.</p>",
	Overview_NS_DisclosureRight1                               :   "<p>These interest rates will be in effect on the day your account is opened: <br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p> <p>For Triangle Mastercard only: If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - 25.99% for all charges (excluding cash transactions and related fees) and 27.99% for cash transactions and related fees.</p>",
	Overview_NS_DisclosureRight1_DEC_OMX                       :  "<p>These interest rates will be in effect on the day your account is opened: <br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p><p>For Triangle Mastercard only: If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - 25.99% for all charges (excluding cash transactions and related fees) and 27.99% for cash transactions and related fees.</p>",
	Overview_NS_DisclosureRight1_DEC_OMZ                       :  "<p>These interest rates will be in effect on the day your account is opened: <br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p> <p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p>",
	Overview_NS_DisclosureRight1_DEC_OMR                       :  "<p>These interest rates will be in effect on the day your account is opened: <br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p><p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p><p> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interst rate of - 25.99% for all changes (excluding cash transactions and related fees) and 27.99% for cash transactions and related fees.</p>",
	Overview_NS_DisclosureRight1_DEC_OMP                       :  "<p>These interest rates will be in effect on the day your account is opened: <br>All charges to your account (excluding cash transactions and related fees) - <strong>19.99%</strong></p><p>Cash transactions (for example: cash advances, balance transfers, convenience cheques, money transfers, purchase of travellers cheques and gambling transactions) and related fees - <strong>22.99%</strong></p><p> If you are not approved for a card at the above rates, Canadian Tire Bank may still issue you a card at an annual interest rate of - 25.99% for all charges (excluding cash transactions and related fees) and 27.99% for cash transactions and related fees.</p>",
	overview_NS_DisclosureLeft2                                :   "Interest-Free Grace Period",
	Overview_NS_DisclosureRight2                               :   "<p>At least <strong>21</strong> days or, if you are a resident of Quebec, at least <strong>26</strong> days.</p><p> You will benefit from an interest-free grace period of at least <strong>21</strong> days (at least <strong>26</strong> days if you are a resident of Quebec) on new purchases if we receive payment in full of the balance due on your current statement by the payment due date.</p><p> There is no grace period for cash transactions, such as convenience cheques, balance transfers or cash advances, or for fees for such transactions.</p>",
	
	
	Overview_NS_DisclosureRight2_OMP_CARD                      :   "<p>At least <strong>21</strong> days or, if you are a resident of Quebec, at least <strong>26</strong> days.</p><p> You will benefit from an interest-free grace period of at least <strong>21</strong> days (at least <strong>26</strong> days if you are a resident of Quebec) on new purchases if we receive payment in full of the balance due on your current statement by the payment due date.</p><p> There is no grace period for cash transactions, such as convenience cheques, balance transfers or cash advances, or for fees for such transactions.</p>",
	
	overview_NS_DisclosureLeft3                                :   "Minimum Payment",
	Overview_NS_DisclosureRight3                               :   "<p>The sum of: </p><p>(A) interest and fees shown on your statement, plus </p><p>(B) the greater of any amount past due or any balance over your credit limit, plus </p><p>(C) the amount of any equal payments plan installments then due, plus </p><p>(D) <strong>$10.00</strong> </p><p> Balances under <strong>$10.00</strong> are due in full.</p> ",
	
	Overview_NS_DisclosureRight3_OMP                           :   "<p>The sum of:</p><p>(A) interest and fees shown on your statement, plus</p><p>(B) the greater of any amount past due or any balance over your credit limit, plus </p><p>(C) the amount of any equal payments plan installments then due, plus </p><p>(D) <strong>$10.00</strong> </p><p> Balances under $10.00 are due in full.</p>",
	
	Overview_NS_DisclosureRight3_OMR                           :   "<p>The sum of:</p><p>(A) interest and fees shown on your statement, plus</p><p>(B) the greater of any amount past due or any balance over your credit limit, plus </p><p>(C) the amount of any equal payments plan installments then due, plus </p><p>(D) <strong>$10.00</strong> </p><p>Balances under <strong>$10.00</strong> are due in full.</p>",
	
	overview_NS_DisclosureLeft4                                :   "Foreign Exchange Conversion",
	Overview_NS_DisclosureRight4                               :   "All transactions made in a foreign currency will be converted to Canadian currency at the then current MasterCard conversion rate plus <strong>2.5%</strong> (for charges to your account) or minus <strong>2.5%</strong> (for credits to your account) when the transaction is posted to your account.",
	
	Overview_NS_DisclosureRight4_OMP                           :   "All transactions made in a foreign currency will be converted to Canadian currency at the then current MasterCard conversion rate plus <strong>2.5%</strong> (for charges to your account) or minus <strong>2.5%</strong> (for credits to your account) when the transaction is posted to your account.",
	Overview_NS_DisclosureRight4_OMR                           :   "All transactions made in a foreign currency will be converted to Canadian currency at the then current MasterCard conversion rate plus 2.5% (for charges to your account) or minus 2.5% (for credits to your account) when the transaction is posted to your account.",
	
	overview_NS_DisclosureLeft5                                :   "Annual Fees",
	Overview_NS_DisclosureRight5                                :   "None",
	overview_NS_DisclosureLeft6                               :   "Other Fees",
	//<p><strong> Overlimit Fee: $29</strong> - Unless you reside in Quebec, we will charge you an overlimit fee of <strong>$29.00</strong> if on a statement date your balance exceeds your credit limit and your balance is equal to or more than <strong>$2,000.00</strong>.  However, for determining whether you must pay an overlimit fee, we will not include in that balance any amounts that have been billed on that statement for interest charges, or for credit insurance on your account that is offered by us or one of our affiliates.</p>
	
	// Old code
	// Overview_NS_DisclosureRight6                                  :   "<p><strong>Cash Advance Fee:  $4</strong> - Charged when the transaction is posted to your account.</p> <p><strong> Overlimit Fee: $29</strong> - Unless you reside in Quebec, we will charge you an overlimit fee of <strong>$29.00</strong> if on a statement date your balance exceeds your credit limit and your balance is equal to or more than <strong>$2,000.00</strong>.  However, for determining whether you must pay an overlimit fee, we will not include in that balance any amounts that have been billed on that statement for interest charges, or for credit insurance on your account that is offered by us or one of our affiliates.</p> <p><strong> NSF/Dishounoured Payment Fee: $25</strong> - Charged if a payment you make is dishonoured.</p><p><strong> Charges for Copies: $2</strong> - Charged when you request a copy of a statement or sales slip. <p></p><strong>Credit Balance Fee:</strong> The lesser of <strong>$10</strong> or the amount of your credit balance. - Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <strong>12</strong> billing periods. </p>",
	Overview_NS_DisclosureRight6                                  :   "<p><strong>Cash Advance Fee:  $4</strong> - Charged when the transaction is posted to your account.</p> <p><strong> NSF/Dishounoured Payment Fee: $25</strong> - Charged if a payment you make is dishonoured.</p><p><strong> Charges for Copies: $2</strong> - Charged when you request a copy of a statement or sales slip. <p></p><strong>Credit Balance Fee:</strong> The lesser of <strong>$10</strong> or the amount of your credit balance. - Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <strong>12</strong> billing periods. </p>",
	
	Overview_NS_DisclosureRight6_OMP                                  :   "<p><strong>Cash Advance Fee:  $4</strong> - Charged when the transaction is posted to your account.</p> <p><strong> NSF/Dishounoured Payment Fee: $25</strong> - Charged if a payment you make is dishonoured.</p><p><strong> Charges for Copies: $2</strong> - Charged when you request a copy of a statement or sales slip. <p></p><strong>Credit Balance Fee:</strong> The lesser of <strong>$10</strong> or the amount of your credit balance. - Charged on the last day of a billing period when there is a credit balance on the account and the account has been inactive for the previous <strong>12</strong> billing periods. </p>",
	
	// US3382
	Overview_NS_EffectiveDate								: "<b>Information effective as of July 23, 2015.</b>",
	
	Overview_NS_EffectiveDate_OMP						    : "<b>Information effective as of July 23, 2015.</b>",
	
	Overview_NS_LegalText1 									: "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details.",
	Overview_NS_LegalText2 									: "<sup>2</sup> Canadian Tire Options MasterCard cardmembers collect Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect Canadian Tire ‘Money’ on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. ",
	Overview_NS_LegalText3 									: "<sup>3</sup> Canadian Tire ‘Money’ collected at Canadian Tire stores or online at canadiantire.ca is calculated on the pre-tax amount of the qualifying purchase, and is rounded to the nearest penny. For current rate(s) call 1-800-226-8473.",
	Overview_NS_LegalText4 									: "<sup>4</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	Overview_NS_LegalText5 									: "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
	Overview_NS_LegalText6 									: "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
	
	personalInfo_Loyalty_HeaderRed							: "A FASTER WAY TO COLLECT YOUR CANADIAN TIRE ‘MONEY’",
	// Old code
	//personalInfo_Loyalty_Bullet1							: "Collect 10X Canadian Tire ‘Money’<sup>TM</sup> every day at Canadian Tire stores (including on automotive service), at Partsource<sup>&reg;</sup>, Mark’s<sup>&reg;</sup> and at Sportcheck<sup>&reg;2</sup>.",
	// US3627
	personalInfo_Loyalty_Bullet1							: "<b>Collect 4&#37;</b> Canadian Tire Money<sup>&reg;</sup>  everyday<sup>1</sup> at Canadian Tire, Sport Chek<sup>&reg;</sup>, Mark’s<sup>&reg;</sup> / L'Équipeur<sup>MD</sup> and PartSource<sup>&reg;</sup>  stores",
	personalInfo_Loyalty_Bullet2							: "<b>Collect</b>  Canadian Tire Money at participating Canadian Tire gas bars<sup>2</sup>",	
	personalInfo_Loyalty_Bullet3							: "<b>Collect</b> Canadian Tire Money everywhere else you shop<sup>1</sup> ",
	personalInfo_Loyalty_Bullet4							: "<b>Redeem</b> Canadian Tire Money at Canadian Tire and at designated partner locations such as Marks and Sport Chek stores<sup>1</sup>",
	personalInfo_Loyalty_Bullet5							: "<b>In-Store and Online Financing<sup>&#42;</sup></b> at Canadian Tire, Sport Chek and participating Mark’s / L'Équipeur stores",
	personalInfo_Loyalty_Bullet6							: "<b>Collect 3&#37;</b> Canadian Tire Money on the first &#36;12,000 of applicable grocery purchases<sup>3</sup>",
	personalInfo_Loyalty_Bullet7							: "Roadside Assistance<sup>&#94;</sup>",
	personalInfo_Loyalty_Bullet8							: "Extended Warranty Coverage<sup>&dagger;</sup>",
	personalInfo_Loyalty_Bullet9							: "Purchase Security<sup>&dagger;</sup>",
	personalInfo_Loyalty_Bullet10							: "Car Rental Collision/Loss Damage Waiver Insurance<sup>&dagger;</sup>",
	personalInfo_Loyalty_Bullet11							: "24/7 Concierge Services",
	personalInfo_Loyalty_Bullet12							: "Enhanced Customer Service (priority queuing)",
	personalInfo_Loyalty_Bullet13							: "Annual Fee <b>- None</b>",
	personalInfo_Loyalty_Bullet14							: "Interest Rate <b>- 19.99&#37;<sup>3</sup></b>",
	personalInfo_Loyalty_Bullet15							: "Cash Transactions and Related Fees <b>- 22.99&#37;<sup>3</sup></b>",
	// US3979
	
	// US4997 starts here
	personalInfo_OMP_CARD_Bullet1							: "<b>Save up</b> to 10&cent; off per litre at Canadian Tire gas bars&#8225;",
	personalInfo_OMP_CARD_Bullet2							: "<b>Save instantly</b> at the pump, when used for everyday purchases&#8225;",	
	personalInfo_OMP_CARD_Bullet3							: "<b>In-store and Online Financing&#42;</b> at Canadian Tire, Sport Chek and particiapting Mark's/L'Équipeur and Atmosphere stores",
	// US4997  ends here 
	// US4998 Starts here
	personalInfo_OMR_CARD_Bullet1							: "<b>Earn up to 1.5&#37;</b> cash back on eligible purchases<sup>&#8224;</sup>",
	personalInfo_OMR_CARD_Bullet2							: "<b>Get 2X</b> the cash back (up to 3&#37;) on purchases at  Canadian Tire stores, Canadian Tire Gas&#43; pumps and Marks&#8225;",	
	personalInfo_OMR_CARD_Bullet3							: "<b>Cash back</b> is automatically applied to your account every year, and there's no limit on how much cash back you can get&#8225;",
	personalInfo_OMR_CARD_Bullet4							: "<b>In-store and Online Financing<sup>&#42;</sup></b> at Canadian Tire, Sport Chek and participating Mark's/L'Équipeur and Atmosphere stores",
	// US4998 ends here 
	personalInfo_Loyalty_PersonalInf_Bullet1				: "Collect 10X Canadian Tire ‘Money’<sup>&reg;</sup> every day at Canadian Tire stores (including on automotive service), at Partsource<sup>&reg;</sup>, Mark’s / L'Equipeur<sup>&reg;</sup> and at Sportcheck<sup>&reg;1</sup>.",
	personalInfo_CTM_label   								:"Triangle Rewards<sup>&trade;</sup><br> Account Number",
	
	personalInfo_CTM_Text_OMX   							:"If you are already a Member, please enter your  Triangle Rewards Account number. If you are approved for the credit card that you are applying for, your  Triangle Rewards Account will be linked to your new Triangle Mastercard. If left blank, a Triangle Rewards Account number will be assigned to you.",
	personalInfo_CTM_Text_OMZ   							:"If you are already a Member, please enter your  Triangle Rewards Account number. If you are approved for the credit card that you are applying for, your  Triangle Rewards Account will be linked to your new Triangle World Elite Mastercard. If left blank, a Triangle Rewards Account number will be assigned to you.",
	personalInfo_Email_Text   								:"I would like to receive offers&#44; promotions&#44; contests&#44; giveaways&#44;  events&#44; coupons and other information about products and services that may be of interest to you by email&#44; text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited &#40;&ldquo;CTC&rdquo;&#41;&#44; Canadian Tire Services Limited &#40;&ldquo;CTS&rdquo;&#41;&#44; and Canadian Tire Bank &#40;&ldquo;CTB&rdquo;&#41;&#44; including from their respective business units operating under the Canadian Tire,  Triangle Rewards<sup><sup>&trade;</sup></sup> Program&#44; Canadian Tire Drivers Academy<sup>&reg;</sup>&#44; Canadian Tire Home Services<sup>&reg;</sup>&#44; and Canadian Tire Roadside Assistance<sup>&reg;</sup> brands, as well as from their other affiliates and/or marketing partners. You may contact CTC&#45;CTS&#45;CTB&#44; at P.O. Box 2000 Welland&#44; ON L3B 5S3 or <U><a hrer=\" \">customerservice@canadiantire.ca.</a></U> You may withdraw your consent at any time.",
	
	personalInfo_Email_Text_OMP   							:"I would like to receive offers, promotions, contests, giveaways, events, coupons and other information about products and services that may be of interest to me by email, text message (standard text messaging and data rates may apply) and other electronic messaging from Canadian Tire Corporation, Limited &#40;&ldquo;CTC&rdquo;&#41;, and Canadian Tire Bank &#40;&ldquo;CTB&rdquo;&#41;, Canadian Tire Services Limited &#40;&ldquo;CTS&rdquo;&#41; including from their respective business units operating under the Canadian Tire, Triangle RewardsTM Program, Canadian Tire Drivers Academy<span class=\"superscripts\"><sup>&reg;</sup></span>, Canadian Tire Home Services<span class=\"superscripts\"><sup>&reg;</sup></span> and Canadian Tire Roadside Assistance<span class=\"superscripts\"><sup>&reg;</sup></span> brands, as well as from other CTC-CTB-CTS affiliates and/or marketing partners. You may contact CTC-CTB-CTS, at P.O. Box 2000 Welland, ON L3B 5S3 or <U><a hrer=\" \">customerservice@canadiantire.ca. </a></U> I understand that I may withdraw my consent at any time.",
	
	// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
/*	personalInfo_LegalText1                                : "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at <a href='http://www.canadiantire.ca/en/my-canadian-tire-money.html' target='_blank'>www.canadiantire.ca</a> or <a href='http://www.ctfs.com/ctm' target='_blank'>www.ctfs.com/ctm</a> for more details. ",
	personalInfo_LegalText2                                : "<sup>2</sup> Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect Canadian Tire ‘Money’<sup>&trade;</sup> on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. ",
	personalInfo_LegalText3                                : "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	personalInfo_LegalText4                                : "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited. ",	
	personalInfo_LegalText5									: "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks <i/>of MasterCard International Incorporated.",
*/
	// US3979personalInfo_LegalText4
	personalInfo_LegalText1 								: "Canadian Tire Financial Services is a business name of Canadian Tire Bank.<br><br>" +
															  "<sup>&dagger;</sup> Cardmembers will be emailed a redeemable coupon to use at Canadian Tire stores only. The bonus Canadian Tire Money will be added to your My Canadian Tire Money account at the time of purchase. Canadian Tire Money can then be redeemed on any future purchases providing your account is in good standing and it is a redeemable purchase.",
	personalInfo_LegalText2 								: "<sup>1</sup> In the form of Canadian Tire ‘Money’. Terms and conditions apply to collecting and redeeming. Visit ctfs.com/ctm for more information. Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect Canadian Tire ‘Money’ on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions.",
	personalInfo_LegalText2_OMX                             :  "<sup>1</sup> In the form of electronic Canadian Tire Money<sup>&reg;</sup> (CT Money<sup>&reg;</sup>). Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm for more information. Triangle<sup>&trade; </sup> Mastercard<sup>&reg;</sup>  cardmembers paying with their Triangle<sup>&trade; </sup> Mastercard<sup>&reg;</sup> collect Canadian Tire Money at the rate that is 10X (equates to 4&#37;) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	personalInfo_LegalText2_OMZ                             :  "<sup>1</sup> In the form of electronic Canadian Tire Money<sup>&reg;</sup> (CT Money<sup>&reg;</sup>). Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm for more information. Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup>   cardmembers paying with their Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> collect Canadian Tire Money at the rate that is 10X (equates to 4&#37;) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	
	personalInfo_LegalText3 								: "<sup>2</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	personalInfo_LegalText4 								: "<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",			
	personalInfo_LegalText5									: "<sup>&reg;/&trade;</sup> Mastercard and World Elite Mastercard are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
	
	
	//------------------------------ US4997 STARTS------------------
	personalInfo_Legal_OIC_OMP_CARD_Text1 								: "Canadian Tire Financial Services is a business name of Canadian Tire Bank.<br><br>",
	personalInfo_Legal_OIC_OMP_CARD_Text4 								: "<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	personalInfo_Legal_OIC_OMP_CARD_Text5								: "<sup>&reg;/&trade;</sup>  Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",
	
	//------------------------------ US4997 ENDS  ------------------
	
	// Old code
	// confirmation_Application_Authorization_Item2           :   "If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash advances and related fees) and 21.99% for cash advances and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all charges (excluding cash advances and related fees) and 27.99% for cash advances and related fees.",
	confirmation_Application_Authorization_Item2_OMX           :   "If I am not approved for the Card at an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99% for cash transactions and related fees, you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all charges (excluding cash transactions and related fees) and 27.99% for cash transactions and related fees.",
	confirmation_Application_Authorization_Item2_OMZ           :   "If I am not approved for the Card at the above rates, Canadian Tire Bank may still issue me a Triangle™ Mastercard at an annual interest rate of 19.99% for all charges (excluding cash transactions and related fees) and 22.99% for cash transactions and related fees.",
	confirmation_Application_Authorization_Item3           :   "The Card is issued by Canadian Tire Bank (\"CTFS\"). The Triangle Rewards Program is provided and administered by Canadian Tire Corporation, Limited.",
	confirmation_Application_Authorization_Item3_OMP           :   "The Card is issued by Canadian Tire Bank (\"CTFS\").",
	confirmation_Application_Authorization_Item4_1         :   "CTFS may collect, use and share personal information about me for the purposes described in the ",
	confirmation_Application_Authorization_Item4_2         :   "<a href='https://www.ctfs.com/content/ctfs/en/legal_privacy/privacy_charter.html' target='_blank'>\"Canadian Tire Privacy Charter\"</a>",
	confirmation_Application_Authorization_Item4_3         :   " including marketing and selling by way of e-mail, telephone, automatic dialing-announcing device or other form of telecommunication.",
	
	confirmation_Application_Authorization_Item7a          :   "If I am not already a member, I will also be automatically enrolled in the Triangle Rewards Program, even if I am not approved for the Card.",
	confirmation_Application_Authorization_Item7b          :   "I will be bound by the Triangle Rewards Program rules, a copy of which are available at  " +"<a href='http://www.canadiantire.ca/en.html' target='_blank'>canadiantire.ca</a>" +" or " +"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'> triangle.com/ctm</a>.",
	
/*	confirmation_footnoteContentText01 					   :   "Plus applicable taxes, payable monthly. See the Legal Information handout or your Certificate of Insurance for all terms, conditions, limitations and exclusions. Terms and conditions apply.",
	confirmation_footnoteContentText02 					   :   "If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector-Senior. Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida.  Credit Protector - Senior is underwritten by American Bankers Life Assurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name of Assurant Solutions<sup>&reg;</sup>.",
	confirmation_footnoteContentText02a 				   :   "Plus applicable taxes. Subscription Fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	confirmation_footnoteContentText03 					   :   "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details.",
	confirmation_footnoteContentText04					   :	"<sup>&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire MasterCard. The information on this application is used to determine eligibility for a Canadian Tire MasterCard and not for the optional products, which are offered to all Canadian Tire MasterCard holders.<br>" +
   																"<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",
    confirmation_footnoteContentText05					   :   	"<sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector is a registered trademarks of Canadian Tire Financial Services Limited and used under licence.<br>The Identity Watch Classic program is sponsored by Canadian Tire Financial Services Limited and provided by Aimia Proprietary Loyalty Canada Inc.<br>" +
																"Rebound<sup>&reg;</sup> is a registered trademark of Aimia Proprietary Loyalty Canada Inc.<br>"+
																"<sup>&reg;</sup> Assurant Solutions is a trademark of Assurant, Inc.<br>" +	
																"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks of MasterCard International Incorporated.",
*/				
	// US3979
	confirmation_footnoteContentText1_1					   :   "Canadian Tire Financial Services is a business name of Canadian Tire Bank.<br><br>" + 
																"<sup>&dagger;&dagger;</sup> These are optional products offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional products. Canadian Tire Bank has a financial interest in the sale of these products." ,
	confirmation_footnoteContentText1_1_OMP_OMR			   :   "Canadian Tire Financial Services is a business name of Canadian Tire Bank.<br><br>" + 
																"<sup>&dagger;&dagger;</sup> These are optional products offered to all customers approved for a Canadian Tire Bank issued Mastercard. The information on this application is used to determine eligibility for a Canadian Tire Bank issued Mastercard and not for the optional products. Canadian Tire Bank has a financial interest in the sale of these products." ,															
	confirmation_footnoteContentText01_OMX 				   :   "<span class=\"superscripts\"><sup>1</sup></span> In the form of electronic Canadian Tire Money<span class=\"superscripts\"><sup>&reg;</sup></span> (CT Money<span class=\"superscripts\"><sup>&reg;</sup></span>). Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm for more information. Triangle<span class=\"superscripts\"><sup>&trade;</sup></span> Mastercard<span class=\"superscripts\"><sup>&reg;</sup></span>  cardmembers paying with their Triangle<span class=\"superscripts\"><sup>&trade;</sup></span> Mastercard<span class=\"superscripts\"><sup>&reg;</sup></span>  collect Canadian Tire Money at the rate that is 10X (equates to 4%) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	confirmation_footnoteContentText01_OMZ 				   :   "<span class=\"superscripts\"><sup>1</sup></span> In the form of electronic Canadian Tire Money<span class=\"superscripts\"><sup>&reg;</sup></span> (CT Money<span class=\"superscripts\"><sup>&reg;</sup></span>). Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm for more information. Triangle<span class=\"superscripts\"><sup>&trade;</sup></span> World Elite Mastercard<span class=\"superscripts\"><sup>&reg;</sup></span>  cardmembers paying with their Triangle<span class=\"superscripts\"><sup>&trade;</sup></span> World Elite Mastercard<span class=\"superscripts\"><sup>&reg;</sup></span>  collect Canadian Tire Money at the rate that is 10X (equates to 4%) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	confirmation_footnoteContentText02 					   :   "If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector-Senior. Credit Protector is underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida. Credit Protector - Senior is underwritten by American Bankers Life Assurance Company of Florida. American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida and their subsidiaries and affiliates carry on business in Canada under the name of Assurant Solutions<sup>&reg;</sup>.",
	confirmation_footnoteContentText02a 				   :   "<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	confirmation_footnoteContentText02a_OMP_OMR			   :   "<sup>&reg;/&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	confirmation_footnoteContentText03 					   :   "<sup>1</sup> In the form of Canadian Tire ‘Money’. Terms, conditions and restrictions apply. See program rules at www.triangle.com/ctm for more details.",
	confirmation_footnoteContentText04					   :   	"<sup>&reg;/&trade;</sup> Mastercard and World Elite Mastercard are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
	confirmation_footnoteContentText04_OMP					   :   	"<sup>&reg;/&trade;</sup> Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",
	confirmation_footnoteContentText05					   :   	"<sup>&reg; </sup> Assurant is a registered trademark of Assurant, Inc.<br><br>" +
																"<sup>&reg;</sup>/<sup>&trade;</sup>  Credit Protector is a registered trademark of Canadian Tire Bank.<br><br>" +
																"Credit Protector is underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and American Bankers Insurance Company of Florida (ABIC). ABLAC and ABIC, their subsidiaries and affiliates, carry on business in Canada under the name of Assurant<sup>&reg;</sup>.<br><br>" +	
																"The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Sigma Loyalty Group Inc.",
	confirmation_footnoteContentText05_OMP_OMR			   :   	"<sup>&reg; </sup> Assurant is a registered trademark of Assurant, Inc.<br><br>" +
																"<sup>&reg;</sup>/<sup>&trade;</sup>  Credit Protector is a registered trademark of Canadian Tire Bank.<br><br>" +
																"Credit Protector is underwritten by American Bankers Life Assurance Company of Florida (ABLAC) and American Bankers Insurance Company of Florida (ABIC). ABLAC and ABIC, their subsidiaries and affiliates, carry on business in Canada under the name of Assurant<sup>&reg;</sup>.<br><br>" +	
																"The Identity Watch Classic Program is sponsored by Canadian Tire Bank and provided by Sigma Loyalty Group Inc.",
	
	identityVerification_FinalText2						   :	"You will also receive your Options Mastercard in the mail within 7-10 business days to use everywhere else. Please note that your My Canadian Tire ‘Money’ card <u>will arrive separately from your Options MasterCard</u>.",
	
	identityVerification_FooterText1                      	:    "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at www.canadiantire.ca or www.ctfs.com/ctm for more details. ",
	identityVerification_FooterText2                      	:   "<sup>2</sup> Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect Canadian Tire ‘Money’<sup>&trade;</sup> on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. ",
	identityVerification_FooterText3                     	:    "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	identityVerification_FooterText4                      	:    "Canadian Tire Financial Services is a business name of Canadian Tire Bank. <br><br>" +
																 "<sup>&reg;</sup><sup>/</sup><sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, are used under licence.",
	// Old identityVerification_FooterText4                      	:    "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited. ",
	identityVerification_FooterText5                        :    "<sup>&reg;/&trade;</sup> Mastercard and World Elite Mastercard are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
	
	identityVerification_FooterTextTuAuth1                  :    "Canadian Tire Financial Services is a business name of Canadian Tire Bank.",
	identityVerification_FooterTextTuAuth2                  :    "<sup>&reg;</sup><sup>/</sup><sup>&trade;</sup> The Canadian Tire Financial Services design is a trademark of Canadian Tire Corporation, Limited and is used under licence.",
	
	
	//--old--
	additionalInformation_footnoteContentText1old				:	"<sup>1</sup> In the form of Canadian Tire ‘Money’ On The Card<sup>&reg;</sup> awards. Terms and conditions apply to earning and redeeming. Details available in-store or on the Canadian Tire 'Money' Rewards Program page. Options MasterCard customers in Nova Scotia participate in a different rewards program, please go to ",
	additionalInformation_footnoteContentText1Linkold			:	"<a href='https://www.ctfs.com/Products/CreditCards/OptionsMasterCard/CTMoneyRewards/' target='_blank'>ctfs.com/ctm.</a>",
	additionalInformation_footnoteContentText2old				:	"<sup>2</sup> Provided your account is in good standing and it is a redeemable purchase.",
	additionalInformation_footnoteContentText3old				:	"Plus applicable taxes, payable monthly. See the Legal Information handout or your Certificate of Insurance for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	additionalInformation_footnoteContentText4old				:	"If you are less than age 66, you will be enrolled in Credit Protector. If you are between 66-75 you will be enrolled in Credit Protector-Senior. Credit Protector and Credit Protector-Senior are underwritten by American Bankers Life Assurance Company of Florida and American Bankers Insurance Company of Florida, Assurant Solutions<sup>&reg;</sup> companies.",
	additionalInformation_footnoteContentText5old				:	"Plus applicable taxes. Subscription Fees will commence after the first transaction is made on your Canadian Tire branded credit card. Thereafter, subscription Fees will be charged in advance monthly to your Canadian Tire branded credit card. See the Legal Information handout for all terms, conditions, limitations  and exclusions. Terms and conditions apply.",
	additionalInformation_footnoteContentText6old				:	"<br><sup>&#8224;</sup> These are optional products offered to all customers approved for a Canadian Tire MasterCard. The information on this application is used to determine eligibility for a Canadian Tire MasterCard and not for the optional products, which are offered to all Canadian Tire MasterCard holders.<br>" +
	                                                                "<sup>&reg;</sup>/<sup>&trade;</sup> Credit Protector and Credit Protector-Senior are registered trademarks of Canadian Tire Financial Services Limited and used under licence.<br>The Identity Watch Classic program is sponsored by Canadian Tire Financial Services Limited and provided by Aimia Proprietary Loyalty Canada Inc.<br>Rebound<sup>&reg;</sup> is a registered trademarks of Aimia Proprietary Loyalty Canada Inc.",
	additionalInformation_footnoteContentText7old				:   "<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.<br>" +  	
																"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and <i>PayPass</i> is a trademark, of MasterCard International Incorporated.",
   
	confirmation_Application_Authorization_Item2old        :   "If I am not approved for the Card at an annual interest rate of 19.99% you may, without further notice to me, treat this as a separate application for the same Card at an annual interest rate of 25.99% for all charges, including cash advances and related fees.",
	confirmation_Application_Authorization_Item3old        :   "The Card is issued by Canadian Tire Bank (\"CTB\") and the account is administered by Canadian Tire Financial Services Limited (\"CTFSL\").",
	confirmation_Application_Authorization_Item4_1old      :   "CTB and CTFSL may collect, use and share personal information about me for the purposes described in the ",
	confirmation_Application_Authorization_Item4_2old      :	"<a href='https://www.ctfs.com/SecurityCentre/PrivacyAndSecurity/PrivacyCharter/' target='_blank'>\"Canadian Tire Privacy Charter\"</a>",
	confirmation_Application_Authorization_Item4_3old      :   " including marketing and selling by way of e-mail, telephone, automatic dialing-announcing device or other form of telecommunication.",
	
	identityVerification_FinalText2old					   :	"You will also receive your Options Mastercard in the mail within 7-10 business days to use everywhere else. Please note that your My Canadian Tire ‘Money’ card will arrive separately from your Options MasterCard.",
	
	identityVerification_FooterText1old					:	"For your protection and security, Canadian Tire Financial Services Limited has implemented this process to complete your Canadian Tire credit card application. This process will access your consumer report to assist Canadian Tire Financial Services Limited in verifying your identity. This is not a credit check but a tool used to ensure that the person applying for a Canadian Tire credit card is really you. Please answer the questions to the best of your ability, understanding that the information you provide will not be retained on file by Canadian Tire Financial Services Limited and Canadian Tire Bank.",
	identityVerification_FooterText2old					:	"<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	identityVerification_FooterText3old					:	"<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks, and PayPass is a trademark, of MasterCard International Incorporated.",
	
	//--old--
	//----US3011------
	// chooseProduct_TitleA   : "EXCLUSIVE TO YOU AS A CARDMEMBER",
	// US3627
	chooseProduct_TitleA   : "EXCLUSIVE TO YOU AS A CANADIAN TIRE OPTIONS <sup>&reg;</sup> MASTERCARD <sup>&reg;</sup>",
	
	// Old line
	// chooseProduct_DescriptionA1   : "Interest Rate – <b>19.99%</b>",
	// chooseProduct_DescriptionA2   : "Cash Advances and Related Fees – <b>21.99%</b>",
	chooseProduct_DescriptionA0	  : "Annual Fee &#45; <b>None</b>",
	chooseProduct_DescriptionA1   : "Interest Rate &#45; <b>19.99%</b><sup>3</sup>",
	chooseProduct_DescriptionA2   : "Cash Transactions and Related Fees &#45; <b>22.99%</b><sup>3</sup>",
	
	chooseProduct_DescriptionA1_OMZ   : "Interest Rate &#45; <b>19.99%</b>",
	chooseProduct_DescriptionA2_OMZ   : "Cash Transactions and Related Fees &#45; <b>22.99%</b>",
	
	// US4997 OMP card
	chooseProduct_DescriptionA0_OMP	  : "Annual Fee &#45; <b>None</b>",
	chooseProduct_DescriptionA1_OMP   : "Interest Rate &#45; <b>19.99%</b><sup>1</sup>",
	chooseProduct_DescriptionA2_OMP   : "Cash Transactions and Related Fees &#45; <b>22.99%</b><sup>1</sup>",
	
	// 2016-03-17 chrch: Adding hyperlinks as per business request US3964
/*	Overview_ctm_LegalText1 						   			: "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms, conditions and restrictions apply. See program rules at <a href='http://www.canadiantire.ca/en/my-canadian-tire-money.html' target='_blank'>www.canadiantire.ca</a> or <a href='http://www.ctfs.com/ctm' target='_blank'>www.ctfs.com/ctm</a> for more details.",
	Overview_ctm_LegalText2 									: "<sup>2</sup> Canadian Tire Options MasterCard cardmembers collect Canadian Tire ‘Money’ at a rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire ‘Money’ program collect Canadian Tire ‘Money’ on purchases made by such other members at Canadian Tire stores (if those other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. Canadian Tire ‘Money’ collected at Canadian Tire stores or online at canadiantire.ca is calculated on the pre-tax amount of the qualifying purchase, and is rounded to the nearest penny. For current rate(s) call 1-800-226-8473.",
	Overview_ctm_LegalText3 									: "<sup>3</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	Overview_ctm_LegalText4 									: "<sup>4</sup> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99% for cash advances and related fees and 25.99% for all other charges.",
	Overview_ctm_LegalText5 									: "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire, Canadian Tire Options, PartSource and the Canadian Tire triangle design are registered trademarks, and My Canadian Tire ‘Money’ and Canadian Tire ‘Money’ are trademarks, of Canadian Tire Corporation, Limited.",	
	Overview_ctm_LegalText6 									: "<sup>&reg;</sup>/<sup>&trade;</sup> MasterCard and the MasterCard Brand Mark are registered trademarks <i/>of MasterCard International Incorporated.",
*/
	// US3979
	Overview_ctm_LegalText1 						   			: "Canadian Tire Financial Services is a business name of Canadian Tire Bank. <br>" +
																  "<sup>1</sup> In the form of Canadian Tire 'Money'. Terms and conditions apply to collecting and redeeming. Visit ctfs.com/ctm for more information. Canadian Tire Options MasterCard cardmembers paying with their Options MasterCard collect Canadian Tire 'Money' at the rate that is 10X (or 2X as the case may be) the rate at which other members of the My Canadian Tire 'Money'<sup>&reg;</sup> program collect Canadian Tire 'Money' on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions.",
	Overview_ctm_LegalText2 									: "<sup>2</sup> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	Overview_ctm_LegalText3 									: "<sup>3</sup> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99% for cash transactions and related fees and 25.99% for all other charges.",
	Overview_ctm_LegalText4 									: "<sup>&reg;</sup>/<sup>&trade;</sup> Canadian Tire , the Canadian Tire triangle design, the Canadian Tire Financial Services  design, Canadian Tire Options, Canadian Tire 'Money', My Canadian 'Money' and PartSource are registered trademarks of Canadian Tire Corporation, Limited and are used under licence.",
	Overview_ctm_LegalText5 									: "<sup>&reg;</sup>/&trade; MasterCard and the MasterCard Brand Mark are registered trademarks of MasterCard International Incorporated, and are used under licence.",	
	//US4541
	Overview_ctm_LegalTextEComm1 						   			: "Canadian Tire Financial Services is a business name of Canadian Tire Bank.",
	Overview_ctm_LegalTextEComm2 									: "<span class=\"superscripts\"><sup>1</sup></span> In the form of electronic Canadian Tire Money<span class=\"superscripts\"><sup>&reg;</sup></span> (CT Money<span class=\"superscripts\"><sup>&reg;</sup></span>). Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm/ctm for more information. Triangle Mastercard and Triangle World Elite Mastercard cardmembers paying with their Triangle Mastercard and Triangle World Elite Mastercard collect Canadian Tire Money at the rate that is 10X (equates to 4%) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	Overview_ctm_LegalTextEComm3 									: "<span class=\"superscripts\"><sup>2</sup></span> Minimum fuel purchase may be required. Rate may vary by location. See local gas bars for details.",
	Overview_ctm_LegalTextEComm4 									: "<span class=\"superscripts\"><sup>3</sup></span> Earn rate applies to the first $12,000 in annual grocery spend. After that, your earn rate reverts back to the regular earn rate. Applies to purchases made at stores with Mastercard merchant code 5411. For examples of qualifying merchants visit triangle.com/merchants. 3% is calculated on the after tax purchase amount. Excludes purchases at Wal-Mart and Costco." +
																	"<br><br><span class=\"superscripts\"><sup>&#94;</sup></span> This service requires activation. Roadside Assistance is provided by Canadian Tire Services Limited. Please <a href='http://roadsideassistance.canadiantire.ca/en.html' target=\"_blank\">click here</a> for full details.",
	Overview_ctm_LegalTextEComm2_DEC_OMX 						: "<span class=\"superscripts\"><sup>1</sup></span> In the form of electronic Canadian Tire Money<span class=\"superscripts\"><sup>&reg;</sup></span> (CT Money<span class=\"superscripts\"><sup>&reg;</sup></span>). Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm/ctm for more information. Triangle<sup>&trade;</sup>  Mastercard<sup>&reg;</sup> cardmembers paying with their Triangle<sup>&trade;</sup>  Mastercard<sup>&reg;</sup> collect Canadian Tire Money at the rate that is 10X (equates to 4%) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	Overview_ctm_LegalTextEComm2_DEC_OMZ 						: "<span class=\"superscripts\"><sup>1</sup></span> In the form of electronic Canadian Tire Money<span class=\"superscripts\"><sup>&reg;</sup></span> (CT Money<span class=\"superscripts\"><sup>&reg;</sup></span>). Terms and conditions apply to collecting and redeeming. Visit triangle.com/ctm/ctm for more information. Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> cardmembers paying with their Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> collect Canadian Tire Money at the rate that is 10X (equates to 4%) the rate at which other members of the Triangle Rewards program collect Canadian Tire Money on purchases made by such other members at Canadian Tire stores (if other members paid by cash, debit or a credit card not linked to this loyalty program). The offered rate is exclusive of any bonus or promotional offers or redemption transactions. CT Money is collected on the pre-tax amount at Canadian Tire and PartSource.",
	
	Overview_ctm_LegalTextEComm4_DEC_OMX 						: "<span class=\"superscripts\"><sup>3</sup></span> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99% for cash transactions and related fees and 25.99% for all other charges.",
	Overview_ctm_LegalTextEComm4_DEC_OMZ						: "<span class=\"superscripts\"><sup>3</sup></span> Earn rate applies to the first $12,000 in annual grocery spend. After that, your earn rate reverts back to the regular earn rate. Applies to purchases made at stores with Mastercard merchant code 5411. For examples of qualifying merchants visit triangle.com/merchants. 3% is calculated on the after tax purchase amount. Excludes purchases at Wal-Mart and Costco.<br><br><p><sup>&#94;</sup> This service requires activation. Roadside Assistance is provided by Canadian Tire Services Limited. Please <a href='http://roadsideassistance.canadiantire.ca/en.html' target=\"_blank\">click here</a> for full details.</p>",
	
	Overview_ctm_LegalTextEComm5 									: "<sup>*</sup> “Equal payments, no interest” for 12 months (unless stated otherwise) is only available on request, on approved credit with a Canadian Tire Bank issued credit card and on purchases of items at Canadian Tire of $200 or more (excluding gift cards). Interest does not accrue during the period of the plan. However, if we do not receive the full minimum due on a statement within 59 days of the date of that statement, or any event of default (other than a payment default) occurs under your Cardmember Agreement, all special payment plans on your account will terminate and (i) you will then be charged interest on the balances outstanding on such plans at the applicable regular annual rate from the day after the date of your next statement, and (ii) the balances outstanding will form part of the balance due on that statement. There is no administration fee charged for entering into a special payments plan. Each month during an equal payments plan you are required to pay in full by the due date that month’s equal payments plan instalment. Any unpaid portion not received by the due date will no longer form part of the equal payments plan and interest will accrue on that amount from the day after the date of your next statement at the applicable regular annual rate.",
	Overview_ctm_LegalTextEComm7_newLine_1                          : "<span class=\"superscripts\"><sup>&#8224;</sup></span> Purchase Security, Extended Warranty and Car Rental Collision/Loss Damage Waiver Insurance is underwritten by American Bankers Insurance Company of Florida (ABIC). Concierge Services are provided by Assurant Services Canada Inc. (ASCI). Details of your insurance coverage and services, including definitions, benefits, limitations, and exclusions are outlined in the Certificate of Insurance and Statement of Services provided with your card. Keep your document in a safe place with your other valuable documents, and take it with you when you travel. ABIC, ASCI, their subsidiaries, and affiliates carry on business in Canada under the name of Assurant<sup>&reg;</sup>.",
	
	
	
	Overview_ctm_LegalTextEComm6								    : "<b>Additional information for residents of Quebec only:</b> The regular annual rate for persons applying for the Triangle Mastercard and Triangle World Elite Mastercard is 22.99% for cash transactions and related fees and 19.99% for all other charges. Some applicants may receive a higher or lower regular annual rate depending on a credit evaluation. The minimum payment is the sum of (a) interest and fees shown on your statement, (b) the greater of any amount past due or any balance over your credit limit, (c) the amount of any equal payments plan instalments then due, and (d) $10. Balances under $10 are due in full. For residents of Quebec, the period between the statement date and the due date for payment is 26 days. The billing period covered by each statement can be from 28-33 days. The Triangle Mastercard and Triangle World Elite Mastercard do not have an annual fee. Examples of borrowing costs (rounded to the nearest cent) assuming that all charges are purchases bearing interest at the regular annual rate of 19.99%, a 30 day month, no charges made on special payment plans and no other fees, additional payments or other changes are:",
	Overview_ctm_LegalTextEComm7_newLine_2						    : "<sup>&reg;</sup> Assurant is a registered trademark of Assurant, Inc.",
	
	Overview_ctm_LegalTextEComm6_DEC_OMX						    : "<b>Additional information for residents of Quebec only:</b> The regular annual rate for persons applying for the Triangle<sup>&trade;</sup>  Mastercard<sup>&reg;</sup> is 22.99% for cash transactions and related fees and 19.99% for all other charges. Some applicants may receive a higher or lower regular annual rate depending on a credit evaluation. The minimum payment is the sum of (a) interest and fees shown on your statement, (b) the greater of any amount past due or any balance over your credit limit, (c) the amount of any equal payments plan instalments then due, and (d) $10. Balances under $10 are due in full. For residents of Quebec, the period between the statement date and the due date for payment is 26 days. The billing period covered by each statement can be from 28-33 days. Triangle<sup>&trade;</sup>  Mastercard<sup>&reg;</sup> do not have an annual fee. Examples of borrowing costs (rounded to the nearest cent) assuming that all charges are purchases bearing interest at the regular annual rate of 19.99%, a 30 day month, no charges made on special payment plans and no other fees, additional payments or other changes are:",
	Overview_ctm_LegalTextEComm6_DEC_OMZ						    : "<b>Additional information for residents of Quebec only:</b>  The regular annual rate for persons applying for the  Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> is 22.99% for cash transactions and related fees and 19.99% for all other charges. Some applicants may receive a higher or lower regular annual rate depending on a credit evaluation. The minimum payment is the sum of (a) interest and fees shown on your statement, (b) the greater of any amount past due or any balance over your credit limit, (c) the amount of any equal payments plan instalments then due, and (d) $10. Balances under $10 are due in full. For residents of Quebec, the period between the statement date and the due date for payment is 26 days. The billing period covered by each statement can be from 28-33 days. Triangle<sup>&trade;</sup> World Elite Mastercard<sup>&reg;</sup> do not have an annual fee. Examples of borrowing costs (rounded to the nearest cent) assuming that all charges are purchases bearing interest at the regular annual rate of 19.99%, a 30 day month, no charges made on special payment plans and no other fees, additional payments or other changes are:",
	
	
	Overview_ctm_LegalTextEComm7									: "<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	Overview_ctm_LegalTextEComm7_OMP								: "<sup>&reg;</sup>/<sup>&trade;</sup> Unless otherwise noted, all trademarks are owned by Canadian Tire Corporation, Limited and are used under licence.",
	Overview_ctm_LegalTextEComm8									: "<sup>&reg;</sup>/<sup>&trade;</sup> Sport Chek and Atmosphere are registered trademarks of FGL Sports Ltd, used under licence.",
	Overview_ctm_LegalTextEComm8_OMP								: "<sup>&reg;</sup>/<sup>&trade;</sup> Sport Chek and Atmosphere are registered trademarks of FGL Sports Ltd, used under licence.",
	Overview_ctm_LegalTextEComm9									: "<sup>&reg;</sup>/<sup>&trade;</sup> Mark’s and L'Equipeur are registered trademarks of Mark’s Work Wearhouse Ltd, used under licence.",
	Overview_ctm_LegalTextEComm9_OMP									: "<sup>&reg;</sup>/<sup>&trade;</sup> Mark’s and L'Equipeur are registered trademarks of Mark’s Work Wearhouse Ltd, used under licence.",
	Overview_ctm_LegalTextEComm9_OMR									: "<sup>&reg;</sup>/<sup>&trade;</sup> Mark’s and L'Equipeur are registered trademarks of Mark’s Work Wearhouse Ltd, used under licence.",
	Overview_ctm_LegalTextEComm10									: "<sup>&reg;/&trade;</sup> Mastercard and World Elite Mastercard are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
	
	Overview_ctm_LegalTextEComm10_DEC							    : "<sup>&reg;/&trade;</sup> Mastercard and World Elite Mastercard are registered trademarks, and the circles design is a trademark of Mastercard International Incorporated.",
	Overview_ctm_LegalTextEComm10_OIC_OMP_CARD                      : "<sup>&reg;/&trade;</sup>  Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated.",
	overview_AverageEComm											: "If your average balance is:",
	overview_Average0EComm										    : "&#36;100",
	overview_Average1EComm									        : "&#36;500",
	overview_Average2EComm											: "&#36;1&#44;000",
	overview_Average3EComm									        : "&#36;2&#44;000",
	overview_MonthlyCreditChargesEComm								: "Total monthly credit charges will be:",
	overview_MonthlyCreditCharges0EComm								:	"$1.64",
	overview_MonthlyCreditCharges1EComm								:	"$8.22",
	overview_MonthlyCreditCharges2EComm								:	"$16.43",
	overview_MonthlyCreditCharges3EComm								:	"$32.86 ",
	Overview_ctm_LegalText_OIC_OMP_Card_Text2                       :   "<sup>&#8225;</sup> Based on the level of net new purchases (purchases less credits) that are posted to your Gas Advantage MasterCard account in any monthly billing period, you will be entitled to a discount on each litre of gasoline or diesel fuel that is purchased for a motor vehicle at Canadian Tire gas bars during the following monthly billing period and that is charged to your Gas Advantage MasterCard. The discount that you receive in a billing period will be reduced to 2&cent; per litre after you have made purchases of more than &#36;700 for gasoline, diesel fuel or any other sundry items at Canadian Tire gas bars during that billing period using your Gas Advantage MasterCard. Effective May 2, 2016 your gas savings will be reduced to 2&cent;/litre after Canadian Tire gas bar purchases exceed &#36;500. For complete program details please read the Gas Advantage MasterCard Terms and Conditions page. back",
	Overview_ctm_LegalText_OIC_OMP_Card_Text3                       :   "<sup>1</sup> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99&#37; for cash transactions and related fees and 25.99&#37; for all other charges.",
	Overview_ctm_LegalText_OIC_OMP_Card_Text5                       :   "&#8220;Equal payments, no interest&#8221; for 12 months (unless stated otherwise) is only available on request, on approved credit with a Canadian Tire Bank issued credit card and on purchases of items at Canadian Tire of &#36;200 or more (excluding gift cards). Interest does not accrue during the period of the plan. However, if we do not receive the full minimum due on a statement within 59 days of the date of that statement, or any event of default (other than a payment default) occurs under your Cardmember Agreement, all special payment plans on your account will terminate and (i) you will then be charged interest on the balances outstanding on such plans at the applicable regular annual rate from the day after the date of your next statement, and (ii) the balances outstanding will form part of the balance due on that statement. There is no administration fee charged for entering into a special payments plan. Each month during an equal payments plan you are required to pay in full by the due date that month’s equal payments plan instalment. Any unpaid portion not received by the due date will no longer form part of the equal payments plan and interest will accrue on that amount from the day after the date of your next statement at the applicable regular annual rate.",
	Overview_ctm_LegalText_OIC_OMP_Card_Text6                       :   "<b>Additional information for residents of Quebec only:</b> The regular annual rate for persons applying for the Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup>  is 22.99&#37; for cash transactions and related fees and 19.99% for all other charges. Some applicants may receive a higher or lower regular annual rate depending on a credit evaluation. The minimum payment is the sum of (a) interest and fees shown on your statement, (b) the greater of any amount past due or any balance over your credit limit, (c) the amount of any equal payments plan instalments then due, and (d) &#36;10. Balances under &#36;10 are due in full. For residents of Quebec, the period between the statement date and the due date for payment is 26 days. The billing period covered by each statement can be from 28-33 days. Gas Advantage<sup>&reg;</sup> Mastercard<sup>&reg;</sup> do not have an annual fee. Examples of borrowing costs (rounded to the nearest cent) assuming that all charges are purchases bearing interest at the regular annual rate of 19.99&#37;, a 30 day month, no charges made on special payment plans and no other fees, additional payments or other changes are:",
	
	Overview_ctm_LegalText_OIC_OMR_Card_Text2                       :   "<sup>&#8224;</sup> Some conditions apply. See Rewards Program Terms and Conditions for details. back",
	Overview_ctm_LegalText_OIC_OMR_Card_Text3                       :   "&#8225; Annual rewards will reduce the balance for determining the Minimum Due but not for the purpose of calculating interest or any balance-based insurance premium. Other Terms and Conditions apply. See Rewards Program Terms and Conditions for details.",
	Overview_ctm_LegalText_OIC_OMR_Card_Text4                       :   "<sup>1</sup> If you are not approved for the Card at these rates, we may still issue you a card at an annual interest rate of 27.99&#37; for cash transactions and related fees and 25.99&#37; for all other charges.",
	Overview_ctm_LegalText_OIC_OMR_Card_Text5                       :   "<sup>&#42;</sup> &#8220;Equal payments, no interest&#8221; for 12 months (unless stated otherwise) is only available on request, on approved credit with a Canadian Tire Bank issued credit card and on purchases of items at Canadian Tire of &#36;200 or more (excluding gift cards). Interest does not accrue during the period of the plan. However, if we do not receive the full minimum due on a statement within 59 days of the date of that statement, or any event of default (other than a payment default) occurs under your Cardmember Agreement, all special payment plans on your account will terminate and (i) you will then be charged interest on the balances outstanding on such plans at the applicable regular annual rate from the day after the date of your next statement, and (ii) the balances outstanding will form part of the balance due on that statement. There is no administration fee charged for entering into a special payments plan. Each month during an equal payments plan you are required to pay in full by the due date that month’s equal payments plan instalment. Any unpaid portion not received by the due date will no longer form part of the equal payments plan and interest will accrue on that amount from the day after the date of your next statement at the applicable regular annual rate.",
	Overview_ctm_LegalText_OIC_OMR_Card_Text6                       :   "<b>Additional information for residents of Quebec only:</b> The regular annual rate for persons applying for the Cash Advantage<sup>&reg;</sup>  Mastercard<sup>&reg;</sup>  is 22.99&#37; for cash transactions and related fees and 19.99&#37; for all other charges. Some applicants may receive a higher or lower regular annual rate depending on a credit evaluation. The minimum payment is the sum of (a) interest and fees shown on your statement, (b) the greater of any amount past due or any balance over your credit limit, (c) the amount of any equal payments plan instalments then due, and (d) &#36;10. Balances under &#36;10 are due in full. For residents of Quebec, the period between the statement date and the due date for payment is 26 days. The billing period covered by each statement can be from 28-33 days. Cash Advantage<sup>&reg;</sup>  Mastercard<sup>&reg;</sup>  does not have an annual fee. Examples of borrowing costs (rounded to the nearest cent) assuming that all charges are purchases bearing interest at the regular annual rate of 19.99&#37;, a 30 day month, no charges made on special payment plans and no other fees, additional payments or other changes are:",
	
	endstatemeant                                         			 :   "",
	decline_chapter_one_text                              			 :  "<b>Unfortunately our Instant Credit services are temporarily</b>",
	decline_chapter_one_text_OMP_OMR                       			 :  "<b>Unfortunately our Instant Credit services are temporarily unavailable, however your application will still be processed.</b>",
	decline_chapter_two_text                              			 : "<b>unavailable, however your application will still be processed.<b>",
	decline_chapter_three_text                        				 :  "<strong>Questions?</strong> Please call 1-800-459-6415. ",
	decline_chapter_note                              				  : "<b>NOTE: PLEASE DO NOT ATTEMPT TO RESUBMIT YOUR APPLICATION.<b>",
	pending_verification_status                       				 :"PENDING - ID Verification",
	verification_message_one_omx                          			 :"You have been approved for a Triangle<sup>&trade;</sup> Mastercard<sup>&reg;</sup>, pending an in-store ID verification.",
	verification_message_two_omx                          			 :"To meet government regulations, we need to view your government issued photo identification before we can open an account for you.",
	verification_message_one_omz                          			 :"You have been approved for a Triangle<sup>&trade;</sup>  World Elite Mastercard<sup>&reg;</sup>, pending an in-store ID verification.",
	verification_message_two_omz                         			 :"To meet government regulations, we need to view your government issued photo identification before we can open an account for you.",
	pending_Verification_chapter_one 									:"<strong>ID Request:</strong> You will receive a letter in the mail requesting you to visit your closest Canadian Tire store to verify your identity with your government issued photo ID",
	pending_Verification_chapter_two 								:"<strong>ID Verification:</strong> Bring your letter and your government issued photo ID to Customer Service  at your closest Canadian Tire store within 20 days of receipt",
	pending_Verification_chapter_three_omx					 		:"<strong> Welcome Package:</strong> If approved, your welcome package containing your Triangle Mastercard will arrive in the mail within 7-10 business days <br><br>You will also receive a Triangle Rewards<sup>TM</sup> card and welcome package separately within 7-10 business days.",
	pending_Verification_chapter_three_omz 							 :"<strong>Welcome Package:</strong> If approved, your welcome package containing your Triangle World Elite Mastercard will arrive in the mail within 7-10 business days <br><br> You will also receive a Triangle Rewards<sup>TM</sup> card and welcome package separately within 7-10 business days.",
    personalInformation_PhoneType_Field	                             : "Phone Type",
    personalInformation_PhoneType_TextField							 :	'<select class=\"fieldValuesSelectField titleField\" id=\"personalInformation_PhoneType_TextField\" />',
    personalData_HOME                                                :"Home",
    personalData_MOBILE                                              :"Mobile",
    personalData_OTHER                                               :"Other",
    personalInformation_EligibilityText                              :" <p><strong>Eligibility Requirement:</strong> a minimum individual income of $80,000 is required. If the requirement for this product cannot be met, we suggest applying for the Triangle<sup>TM</sup> Mastercard<sup>&reg;</sup>.</p>  <p> Select '\Yes\' if you want to transfer your information to the Triangle<sup>TM</sup> Mastercard<sup>&reg;</sup> application.</p> <p> Select '\No\' to continue with the Triangle<sup>TM</sup> World Elite Mastercard<sup>&reg;</sup>.</p> ",
    creditDisclosure_TitleText                                        :"<p class=\"creditDiscloseTitle\"><strong>Please read the information below and click '\Start Application\' to continue.</strong></p>"
    
    
    
	
		
		
		
		

	


										
		
	//--------------- END --------------------- Identity Verification section -------------- END -----------		
};	

