/*
Jamie Chadwick
1/12/2024
Assignment: Form Validation Part 3
This script validates form fields, displays inline error messages, focuses on erroneous fields, and applies styles on focus.
*/

/*
FUNCTION openOtherWebsites
    DECLARE choice
    WHILE true
        DISPLAY prompt("Enter 1, 2, or 3 to select a rock website:\n1. Rolling Stone\n2. Ultimate Classic Rock\n3. Loudwire")
        IF choice == "1"
            OPEN "https://www.rollingstone.com" IN new window
            BREAK
        ELSE IF choice == "2"
            OPEN "https://ultimateclassicrock.com" IN new window
            BREAK
        ELSE IF choice == "3"
            OPEN "https://loudwire.com" IN new window
            BREAK
        ELSE
            DISPLAY alert("Invalid choice. Please enter 1, 2, or 3.")
        END IF
    END WHILE
END FUNCTION
      */
// Function to open selected rock and roll websites
function openOtherWebsites() {
  let choice;
  while (true) {
    choice = prompt(
      "Enter 1, 2, or 3 to select a rock and roll website:\n1. Rolling Stone\n2. Ultimate Classic Rock\n3. Loudwire"
    );
    if (choice === "1") {
      window.open(
        "https://www.rollingstone.com",
        "_blank",
        "width=800,height=800"
      );
      return;
    } else if (choice === "2") {
      window.open(
        "https://ultimateclassicrock.com",
        "_blank",
        "width=800,height=800"
      );
      return;
    } else if (choice === "3") {
      window.open("https://loudwire.com", "_blank", "width=800,height=800");
      return;
    } else {
      alert("Invalid choice. Please enter 1, 2, or 3.");
    }
  }
}

/* pseudocode for validateForm function */
/*
****START PSEUDOCODE****

FUNCTION validateForm
    DECLARE firstName = GET_ELEMENT_BY_ID("firstName")
    DECLARE lastName = GET_ELEMENT_BY_ID("lastName")
    DECLARE email = GET_ELEMENT_BY_ID("email")
    DECLARE postcode = GET_ELEMENT_BY_ID("postcode")
    DECLARE cardNumber = GET_ELEMENT_BY_ID("cardNumber")
    DECLARE ccv = GET_ELEMENT_BY_ID("ccv")
    DECLARE expiryMonth = GET_ELEMENT_BY_ID("expiryMonth")
    DECLARE expiryYear = GET_ELEMENT_BY_ID("expiryYear")

    FUNCTION showError(element, message)
        CREATE errorElement
        SET errorElement.className = "error"
        SET errorElement.innerText = message
        APPEND errorElement TO element.parentNode
        SET element.style.border = "2px solid red"
    END FUNCTION

    CLEAR all previous errors
    RESET border styles FOR all input and select fields

    IF firstName.value IS NULL OR firstName.value IS EMPTY
        CALL showError(firstName, "First name is required.")
        RETURN false
    END IF

    IF lastName.value IS NULL OR lastName.value IS EMPTY
        CALL showError(lastName, "Last name is required.")
        RETURN false
    END IF

    IF email.value IS NULL OR email.value IS EMPTY
        CALL showError(email, "Email is required.")
        RETURN false
    END IF

    IF postcode.value IS NULL OR postcode.value IS EMPTY
        CALL showError(postcode, "Postcode is required.")
        RETURN false
    END IF

    IF cardNumber.value IS NULL OR cardNumber.value IS EMPTY
        CALL showError(cardNumber, "Credit card number is required.")
        RETURN false
    END IF

    IF ccv.value IS NULL OR ccv.value IS EMPTY
        CALL showError(ccv, "CCV is required.")
        RETURN false
    END IF

    IF firstName.value CONTAINS_DIGITS
        CALL showError(firstName, "No numbers are allowed in the first name.")
        RETURN false
    END IF

    IF lastName.value CONTAINS_DIGITS
        CALL showError(lastName, "No numbers are allowed in the last name.")
        RETURN false
    END IF

    IF email.value.length < 8 OR email.value DOES_NOT_CONTAIN "@" OR email.value DOES_NOT_CONTAIN "."
        CALL showError(email, "Email must be at least 8 characters and contain '@' and '.'")
        RETURN false
    END IF

    IF postcode.value.length != 4 OR NOT IS_NUMERIC(postcode.value)
        CALL showError(postcode, "Postcode must be exactly 4 numeric digits.")
        RETURN false
    END IF

    IF cardNumber.value.length != 16 OR NOT IS_NUMERIC(cardNumber.value)
        CALL showError(cardNumber, "Credit card number must be 16 numeric digits.")
        RETURN false
    END IF

    IF ccv.value.length != 3 OR NOT IS_NUMERIC(ccv.value)
        CALL showError(ccv, "CCV must be 3 numeric digits.")
        RETURN false
    END IF

    DECLARE currentYear = GET_CURRENT_YEAR()
    DECLARE currentMonth = GET_CURRENT_MONTH()
    DECLARE expYear = PARSE_INT(expiryYear.value)
    DECLARE expMonth = PARSE_INT(expiryMonth.value)

    IF expYear < currentYear OR (expYear == currentYear AND expMonth < currentMonth)
        CALL showError(expiryMonth, "Credit card expiry date is invalid.")
        RETURN false
    END IF

    RETURN true
END FUNCTION

ATTACH validateForm TO form.onsubmit
    IF NOT validateForm()
        PREVENT form submission
    END IF
END ATTACH

FOR EACH field IN GET_ALL_INPUT_AND_SELECT_FIELDS()
    ATTACH EVENT "focus" TO field
        SET field.style.border = "2px solid blue"
        REMOVE field.style.outline
    END ATTACH

    ATTACH EVENT "blur" TO field
        CALL validateForm()
    END ATTACH
END FOR

ATTACH EVENT onsubmit TO element WITH ID "orderForm"
    DEFINE FUNCTION(event)
        IF validateForm() RETURNS false
            CALL event.preventDefault() TO STOP form submission
        END IF
    END FUNCTION
END ATTACH

****END PSEUDOCODE****
*/
function validateForm() {
  // Get form fields
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const postcode = document.getElementById("postcode");
  const cardNumber = document.getElementById("cardNumber");
  const ccv = document.getElementById("ccv");
  const expiryMonth = document.getElementById("expiryMonth");
  const expiryYear = document.getElementById("expiryYear");

  // Helper function to show error message
  function showError(element, message) {
    const errorElement = document.createElement("span");
    errorElement.className = "error";
    errorElement.innerText = message;
    element.parentNode.appendChild(errorElement);
    // Make the input field border red on error
    element.style.border = "2px solid red";
  }

  // Clear all previous error messages and borders
  document.querySelectorAll(".error").forEach((error) => error.remove());
  document.querySelectorAll("input, select").forEach((field) => {
    field.style.border = ""; // Reset border style
  });

  // 1. Check required fields
  if (firstName.value == null || firstName.value === "") {
    showError(firstName, "First name is required.");
    return false;
  }

  if (lastName.value == null || lastName.value === "") {
    showError(lastName, "Last name is required.");
    return false;
  }
  if (email.value == null || email.value === "") {
    showError(email, "Email is required.");
    return false;
  }
  if (postcode.value == null || postcode.value === "") {
    showError(postcode, "Postcode is required.");
    return false;
  }
  if (cardNumber.value == null || cardNumber.value === "") {
    showError(cardNumber, "Credit card number is required.");
    return false;
  }
  if (ccv.value == null || ccv.value === "") {
    showError(ccv, "CCV is required.");
    return false;
  }

  // Check no digits in firstName
  if (/\d/.test(firstName.value)) {
    showError(firstName, "No numbers are allowed in the first name.");
    return false;
  }

  // Check no digits in lastName
  if (/\d/.test(lastName.value)) {
    showError(lastName, "No numbers are allowed in the last name.");
    return false;
  }

  // 2. Validate email address
  if (
    email.value.length < 8 ||
    email.value.indexOf("@") === -1 ||
    email.value.indexOf(".") === -1
  ) {
    showError(
      email,
      "Email must be at least 8 characters and contain '@' and '.'"
    );
    return false;
  }

  // 3. Validate postcode (4 digits)
  if (postcode.value.length !== 4 || isNaN(Number(postcode.value))) {
    showError(postcode, "Postcode must be exactly 4 numeric digits.");
    return false;
  }

  // 4. Validate credit card number (16 digits)
  if (cardNumber.value.length !== 16 || isNaN(Number(cardNumber.value))) {
    showError(cardNumber, "Credit card number must be 16 numeric digits.");
    return false;
  }

  // 5. Validate CCV (3 digits)
  if (ccv.value.length !== 3 || isNaN(Number(ccv.value))) {
    showError(ccv, "CCV must be 3 numeric digits.");
    return false;
  }

  // 6. Validate credit card expiry date
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Months are 0-based in JavaScript

  const expYear = parseInt(expiryYear.value, 10);
  const expMonth = parseInt(expiryMonth.value, 10);

  if (
    expYear < currentYear ||
    (expYear === currentYear && expMonth < currentMonth)
  ) {
    showError(expiryMonth, "Credit card expiry date is invalid.");
    return false;
  }
  return true; // Return true only if all checks pass
}

// Select all input fields and select elements
const fields = document.querySelectorAll("input, select");
// Attach onfocus and onblur events to each field
fields.forEach((field) => {
  field.addEventListener("focus", () => {
    // Apply styles or behavior when the field gains focus
    field.style.border = "2px solid blue";
    field.style.outline = "none"; // Remove outline
  });

  field.addEventListener("blur", () => {
    // Trigger the existing validateForm function for validation
    validateForm();
  });
});

// Attach the validation function to the form submission event
document.getElementById("orderForm").onsubmit = function (event) {
  if (!validateForm()) {
    event.preventDefault(); // Prevent form from submitting if validation fails
  }
};
