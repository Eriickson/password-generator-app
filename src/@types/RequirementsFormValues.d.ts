declare module "@password-generator" {
  type RequirementsFormKeys = "includeLowercase" | "includeUppercase" | "includeNumbers" | "includeSymbols";

  type RequirementsFormValues = Record<RequirementsFormKeys, boolean>;
}
