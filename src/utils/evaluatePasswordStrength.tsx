export const evaluatePasswordStrength = (password: string) => {
  let score = 0;

  // Add points for uppercase letters
  if (/[A-Z]/.test(password)) {
    score += 1;
  }

  // Add points for lowercase letters
  if (/[a-z]/.test(password)) {
    score += 2;
  }

  // Add points for numbers
  if (/[0-9]/.test(password)) {
    score += 3;
  }

  // Add points for special characters
  if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    score += 3;
  }

  // Add points for additional complexity
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password)) {
    score += 3;
  }

  // Add points for password length
  if (password.length == 6) {
    score += -4;
  }
  if (password.length >= 8) {
    score += 1;
  }
  if (password.length >= 12) {
    score += 1;
  }

  return score;
};
