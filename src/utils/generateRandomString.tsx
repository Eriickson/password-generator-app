type GenerateRandomStringType = {
  length: number;
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

export function generateRandomString({
  includeLowercase,
  includeNumbers,
  includeSymbols,
  includeUppercase,
  length,
}: GenerateRandomStringType) {
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

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    randomString += validChars[randomIndex];
  }

  return randomString;
}
