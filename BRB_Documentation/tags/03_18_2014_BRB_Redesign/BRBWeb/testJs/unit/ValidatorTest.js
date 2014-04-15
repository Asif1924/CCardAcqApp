describe("Validator", function() {
	var sut;
	
	beforeEach(function() {
		sut = new BRB.Validator();
	});
	
	
	describe("- Common value validation", function() {
		
		it("is not empty string", function() {
			expect(sut.notEmpty(" asdfasd")).toBeTruthy();
			
			expect(sut.notEmpty("")).toBeFalsy();
			expect(sut.notEmpty(" ")).toBeFalsy();		
			expect(sut.notEmpty(undefined)).toBeFalsy();
		});
		
		it("is not null value", function() {
			expect(sut.isNotNull(" asdfasd")).toBeTruthy();
			expect(sut.isNotNull(null)).toBeFalsy();
		});
		
		it("is a string which matches specified length limits", function() {
			expect(sut.maxSize("", 4)).toBeTruthy();
			expect(sut.maxSize("abc", 3)).toBeTruthy();
			expect(sut.maxSize("14df", 3)).toBeFalsy();
			
			expect(sut.minSize("33rt5", 4)).toBeTruthy();
			expect(sut.minSize("33rt5", 5)).toBeTruthy();
			expect(sut.minSize("abcd", 6)).toBeFalsy();
			expect(sut.minSize("", 3)).toBeFalsy();
		});
	
		it("is a value greater than zero", function() {
			expect(sut.moreThanZero(2)).toBeTruthy();
			
			expect(sut.moreThanZero(0)).toBeFalsy();
		});
		
		it("will check that multiple values match", function() {
			expect(sut.matches("value", "value")).toBeTruthy();
			
			expect(sut.matches("value", "other Field")).toBeFalsy();
			expect(sut.matches("1111", "2222")).toBeFalsy();
		});		
	});
			
	
	describe("- Postal code validation", function() {
		
		it("could not be empty or null", function() {
			expect(sut.postalCode("")).toBeFalsy();
			expect(sut.postalCode("  ")).toBeFalsy();
			expect(sut.postalCode(null)).toBeFalsy();
		});
		
		it("has correct alphanumeric format and length", function() {
			expect(sut.postalCode("M2R4E4")).toBeTruthy();
			expect(sut.postalCode("X3J3G4")).toBeTruthy();
			
			expect(sut.postalCode("444443")).toBeFalsy();
			expect(sut.postalCode("44444")).toBeFalsy();
			expect(sut.postalCode("M5T333")).toBeFalsy();
			expect(sut.postalCode("M5T3S3A")).toBeFalsy();
			expect(sut.postalCode("AM5T3S3")).toBeFalsy();
			expect(sut.postalCode("X3j3g4")).toBeFalsy();
			expect(sut.postalCode("#5T333")).toBeFalsy();
		});
	});
	
	describe("- City name validation", function() {
		
		it("could not be empty or null", function() {
			expect(sut.city("")).toBeFalsy();
			expect(sut.city("  ")).toBeFalsy();
			expect(sut.city(null)).toBeFalsy();
		});
		
		it("could be in any case", function() {
			expect(sut.city("VINNITSA")).toBeTruthy();
			expect(sut.city("Toronto")).toBeTruthy();
			
			// Unit test doesn't understand France symbols
			// Test France
			//expect(sut.city("Québec")).toBeTruthy();			
		});
		
		it("contains only valid characters", function() {
			expect(sut.city("LOS ANGELES")).toBeTruthy();
			
			expect(sut.city("New#York^")).toBeFalsy();
		});
	});
	
	describe("- Email address validation", function() {
		
		it("could not be empty or null", function() {
			expect(sut.emailAddress("")).toBeFalsy();
			expect(sut.emailAddress("  ")).toBeFalsy();
			expect(sut.emailAddress(null)).toBeFalsy();
		});
		
		it("will trim email addresses of spaces", function() {
			expect(sut.emailAddress("  someone@somewhere.com  ")).toBeTruthy();
		});
		
		it("will allow only email addresses in valid format", function() {
			expect(sut.emailAddress("someone@somewhere.com")).toBeTruthy();
			expect(sut.emailAddress("someone@somewhere.ca")).toBeTruthy();
			expect(sut.emailAddress("someone-lastname@some-where.com")).toBeTruthy();
			expect(sut.emailAddress("someonelastname@somewhere.co.uk")).toBeTruthy();
			expect(sut.emailAddress("someone.lastname@somewhere.com")).toBeTruthy();
			
			expect(sut.emailAddress("someone-last#name@somewhere.com")).toBeFalsy();
			expect(sut.emailAddress("someone-last+name@somewhere.com")).toBeFalsy();
		});
	});
		
	describe("- isOnlyNumeric and isWholeNumber validation", function() {
		
		it("integer number is a number - ", function() {
	    	expect(sut.isOnlyNumeric(10)).toBeTruthy();
	    });
	    it("integer number is a number .0 (10.0 == 10 == integerNumber)", function() {
	    	expect(sut.isOnlyNumeric(10.0)).toBeTruthy();
	    });
	    it("number is not a only numeric number .5", function() {
	    	expect(sut.isOnlyNumeric(10.5)).toBeFalsy();
	    });
	    it("string integer number is a integer number", function() {
	    	expect(sut.isOnlyNumeric("10")).toBeTruthy();
	    });
	    it("number has decimal is not an integer number .0", function() {
	    	expect(sut.isOnlyNumeric("10.0")).toBeFalsy();
	    });
	    it("number has decimal is not an integer number .5", function() {
	    	expect(sut.isOnlyNumeric("10.5")).toBeFalsy();
	    });
	    it("number is null is not an integer number", function() {
	    	expect(sut.isOnlyNumeric(null)).toBeFalsy();
	    });
	    it("number is undefined is not an integer number", function() {
	    	expect(sut.isOnlyNumeric(undefined)).toBeFalsy();
	    });
	    it("number is the empty string is not an integer number", function() {
	    	expect(sut.isOnlyNumeric("")).toBeFalsy();
	    });	    
	    
	    it("integer number is a whole number - ", function() {
	    	expect(sut.isWholeNumber(10)).toBeTruthy();
	    });
	    it("integer number is a whole number .0 (10.0 == 10 == wholeNumber)", function() {
	    	expect(sut.isWholeNumber(10.0)).toBeTruthy();
	    });
	    it("number is not a whole number .5", function() {
	    	expect(sut.isWholeNumber(10.5)).toBeFalsy();
	    });
	    it("string integer is a whole number", function() {
	    	expect(sut.isWholeNumber("10")).toBeTruthy();
	    });
	    it("string number has decimal is a whole number .0", function() {
	    	expect(sut.isWholeNumber("10.0")).toBeTruthy();
	    });
	    it("string number has decimal is not a whole number .5", function() {
	    	expect(sut.isWholeNumber("10.5")).toBeFalsy();
	    });
	    it("null is not a whole number", function() {
	    	expect(sut.isWholeNumber(null)).toBeFalsy();
	    });
	    it("undefined is not a whole number", function() {
	    	expect(sut.isWholeNumber(undefined)).toBeFalsy();
	    });
	    it("empty string is not a whole number", function() {
	    	expect(sut.isWholeNumber("")).toBeFalsy();
	    });
	    it("string that starts with a number ends with a number and has letters in the middle is not a whole number", function() {
	    	expect(sut.isWholeNumber("1qw2")).toBeFalsy();
	    });	    
	});
	
	describe("- Date to be in future validation", function() {

	    it("2099 5 is a future date", function() {
	    	expect(sut.isFutureDate(2099, 5)).toBeTruthy();
	    });
		
	    it("2012 5 is not a future date", function() {
	    	expect(sut.isFutureDate(2012, 5)).toBeFalsy();
	    });
	});

	describe("- Person name validation", function() {	
	
		it("could not be empty or null", function() {
			expect(sut.personName("")).toBeFalsy();
			expect(sut.personName("  ")).toBeFalsy();
			expect(sut.personName(null)).toBeFalsy();
		});
		
		it("could be in any case", function() {
			expect(sut.personName("VICTOR")).toBeTruthy();
			
			expect(sut.personName("Ivan")).toBeTruthy();			
			
			// Unit test doesn't understand France symbols
			// Test France
			//expect(sut.personName("Corbières")).toBeTruthy();			
		});
		
		it("will trim a person name of spaces", function() {
			expect(sut.personName("  VICTOR ")).toBeTruthy();
		});
		
		it("could not contain non-alphabetical characters", function() {
			expect(sut.personName("JOHN")).toBeTruthy();
    		expect(sut.personName("$&JOHN*")).toBeFalsy();
    	});
	});
    
	describe("- Phone number validation", function() {
		
		it("could not be null", function() {
			expect(sut.phone(null)).toBeFalsy();
		});
		
		it("could be only numerical", function() {
			expect(sut.phone("0501234455")).toBeTruthy();
			
			expect(sut.phone(" 0501234455 ")).toBeFalsy();
			expect(sut.phone("050-123-44-55")).toBeFalsy();
			expect(sut.phone("0$501%2344")).toBeFalsy();
		});		
	
		it("could has only required lengt of 10 digits", function() {
			expect(sut.phone("0501234455")).toBeTruthy();
			
    		expect(sut.phone("05012344")).toBeFalsy();
    		expect(sut.phone("050123445566")).toBeFalsy();
    	});
	});
    
	describe("- Year validation", function() {
		
		it("could not be null", function() {
			expect(sut.year(null)).toBeFalsy();
		});
		
	    it("has correct format", function() {
	    	expect(sut.year("2013")).toBeTruthy();
	    	
	    	expect(sut.year(" 2013 ")).toBeFalsy();
	    	expect(sut.year("2t1^")).toBeFalsy();
	    	expect(sut.year("13")).toBeFalsy();
	    	expect(sut.year("42013")).toBeFalsy();
	    });
	});
	
	
	describe("- Month validation", function() {	
		
		it("could not be null or 'null'", function() {
			expect(sut.month(null)).toBeFalsy();
			expect(sut.month("null")).toBeFalsy();
		});
		
	    it("has correct format", function() {
	    	expect(sut.month("1")).toBeTruthy();
	    	expect(sut.month("12")).toBeTruthy();
	    	
	    	expect(sut.month(" 12 ")).toBeFalsy();
	    	expect(sut.month("13")).toBeFalsy();
	    	expect(sut.month("-1")).toBeFalsy();
	    	expect(sut.month("100")).toBeFalsy();
	    	expect(sut.month("1m")).toBeFalsy();
	    });    		
	});
	
	describe("- Day validation", function() {	
		
		it("could not be null or 'null'", function() {
			expect(sut.day(null)).toBeFalsy();
			expect(sut.day("null")).toBeFalsy();
		});
		
	    it("has correct format", function() {
	    	expect(sut.day("7")).toBeTruthy();
	    	expect(sut.day("31")).toBeTruthy();
	    	
	    	expect(sut.day(" 31 ")).toBeFalsy();
	    	expect(sut.day("45")).toBeFalsy();
	    	expect(sut.day("0")).toBeFalsy();
	    	expect(sut.day("1$m")).toBeFalsy();
	    });    		
	});

	describe("- Sin validation", function() {	
		
		it("could not be null", function() {
			expect(sut.sin(null)).toBeFalsy();
		});
		
		it("could be only numerical", function() {
			expect(sut.sin("987654321")).toBeTruthy();
			
			expect(sut.sin("a2345678b")).toBeFalsy();
			expect(sut.sin("a234-678b")).toBeFalsy();
		});
		
		it("could has only required length of 9 digits", function() {
			expect(sut.sin("123456789")).toBeTruthy();

	    	expect(sut.sin("0123456789")).toBeFalsy();
	    	expect(sut.sin("12345678")).toBeFalsy();			
		});
		
		it("could not contain spaces", function() {
	    	expect(sut.sin(" 123456789 ")).toBeFalsy();
		});
	});
    
	describe("- Street number validation", function() {
		
		it("could not be null", function() {
			expect(sut.streetNumber(null)).toBeFalsy();
		});
	
	    it("has correct format", function() {
	    	expect(sut.streetNumber("1")).toBeTruthy();
	    	expect(sut.streetNumber("12D")).toBeTruthy();
	    	expect(sut.streetNumber("135AC")).toBeTruthy();
	    	expect(sut.streetNumber("14-5F")).toBeTruthy();
	    	expect(sut.streetNumber(" 14-5F  ")).toBeTruthy();
	    	expect(sut.streetNumber("1-'E'")).toBeTruthy();
	    	
	    	expect(sut.streetNumber("145ABC")).toBeFalsy();
	    	expect(sut.streetNumber("#14_A")).toBeFalsy();
	    	
	    	expect(sut.streetNumber("14ert")).toBeTruthy();
	    	
	    	// Unit test doesn't understand France symbols
			// Test France
	    	//expect(sut.streetNumber("14éléments")).toBeTruthy();
	    });     
	});
	
	describe("- Address line validation", function() {
		
		it("could not be null", function() {
			expect(sut.addressLine(null)).toBeFalsy();
		});
		
		it("has correct format", function() {
			expect(sut.addressLine("7TH STREET, 14-2.7B")).toBeTruthy();
		});
	});
    
});