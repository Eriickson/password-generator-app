import { RequirementsFormValues } from "@password-generator";

export function generateRandomString({
  includeLowercase,
  includeNumbers,
  includeSymbols,
  includeUppercase,
  length,
}: RequirementsFormValues & { length: number }) {
  let isPasswordValid = false;
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let validChars = "";
  let randomString = "";

  if (includeLowercase) validChars += lowercaseChars;
  if (includeUppercase) validChars += uppercaseChars;
  if (includeNumbers) validChars += numberChars;
  if (includeSymbols) validChars += symbolChars;

  do {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      randomString += validChars[randomIndex];
    }

    if (includeLowercase && !randomString.match(/[a-z]/g)) {
      randomString = "";
      continue;
    }
    if (includeUppercase && !randomString.match(/[A-Z]/g)) {
      randomString = "";
      continue;
    }
    if (includeNumbers && !randomString.match(/[0-9]/g)) {
      randomString = "";
      continue;
    }
    if (includeSymbols && !randomString.match(/[^a-zA-Z0-9]/g)) {
      randomString = "";
      continue;
    }

    isPasswordValid = true;
  } while (!isPasswordValid);


  return randomString;
}
