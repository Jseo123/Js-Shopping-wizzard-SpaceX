//validation for the profile form
function validateProfile() {
  let errors = {
    userName: [],
    email: [],
    password: [],
    repeatPassword: [],
  };
  let userName = document.profileForm.userName.value;
  let email = document.profileForm.email.value;
  let password = document.profileForm.password.value;
  let repeatPassword = document.profileForm.repeatPassword.value;
  const mailFormat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
  const passwordFormat =
    "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).+$";
  console.log(userName.length, email, password, repeatPassword);

  if (userName.length < 8 || userName.length > 20) {
    errors.userName.push("Username should have between 8 and 20 characters.");
  }
  if (email.length > 50) {
    errors.email.push("Email address should not be longer than 50 characters");
  }
  if (email.match(mailFormat)) {
    errors.email.push("Email must be a valid email address");
  }
  if (password.length < 8 || password.length > 20) {
    errors.password.push("Password must be between 8 and 20 characters long.");
  }
  if (password.match(passwordFormat) == null) {
    errors.password.push(
      "Password must contain number, uppercase, lowercase and a special character"
    );
  }
  if (repeatPassword != password) {
    errors.repeatPassword.push("Password must be the same");
  }
  console.log(errors);
  return errors;
}

// Validation for the address form
function validateAddress() {
  let errors = {
    firstName: [],
    lastName: [],
    birthday: [],
    address1: [],
    address2: [],
    postalCode: [],
    country: [],
    countryCode: [],
    phoneNumber: [],
    regularAddress: [],
  };
  let firstName = document.addressForm.firstName.value;
  let lastName = document.addressForm.lastName.value;
  let birthday = document.addressForm.birthday.value;
  let address1 = document.addressForm.address1.value;
  let address2 = document.addressForm.address2.value;
  let postalCode = document.addressForm.postalCode.value;
  let country = document.addressForm.country.value;
  let countryCode = document.addressForm.countryCode.value;
  let phoneNumber = document.addressForm.phoneNumber.value;
  let regularAddress = document.addressForm.regularAddress.value;
  const onlyLetters = /^[A-Za-z]+$/;
  const onlyNumbers = /^[0-9]+$/;

  if (firstName.length > 20) {
    errors.firstName.push("First Name should be less than 20 characters");
  }
  if (firstName.match(onlyLetters) == null) {
    errors.firstName.push("First can only contain letters");
  }
  if (lastName.length > 20) {
    errors.lastName.push("Last Name should be less than 20 characters");
  }
  if (lastName.match(onlyLetters) == null) {
    errors.lastName.push("Last Name can only contain letters");
  }
  if (address1.length > 50 && address1.length < 1) {
    errors.address1.push("The address should have less than 50 characters");
  }
  if (address2.length > 50) {
    errors.address2.push("The address should have less than 50 characters");
  }
  if (postalCode.match(onlyNumbers) == null) {
    errors.postalCode.push("Postal code can only contain numbers");
  }
  if (phoneNumber.length > 9) {
    errors.phoneNumber.push("Phone number should be 9 digits long");
  }
  if (phoneNumber.match(onlyNumbers) == null) {
    errors.phoneNumber.push("Phone number can only contain letters");
  }
  console.log(errors);
  return errors;
}

export { validateProfile, validateAddress };
