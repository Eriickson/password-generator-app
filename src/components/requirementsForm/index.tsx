import React, { FC } from "react";

import { Stack } from "@chakra-ui/react";

import { RequirementsFormKeys, RequirementsFormValues } from "@password-generator";

import { CustomCheckbox, CustomCheckboxProps } from "../customCheckbox";

interface RequirementsFormProps {
  requirementsForm: RequirementsFormValues;
  onChange: (value: Partial<RequirementsFormValues>) => void;
}

export const RequirementsForm: FC<RequirementsFormProps> = ({ requirementsForm, onChange }) => {
  return (
    <Stack>
      <RequirementsFormCheckbox
        onChange={onChange}
        requirementsForm={requirementsForm}
        requirementsFormKey="includeLowercase"
      />
      <RequirementsFormCheckbox
        onChange={onChange}
        requirementsForm={requirementsForm}
        requirementsFormKey="includeUppercase"
      />
      <RequirementsFormCheckbox
        onChange={onChange}
        requirementsForm={requirementsForm}
        requirementsFormKey="includeNumbers"
      />
      <RequirementsFormCheckbox
        onChange={onChange}
        requirementsForm={requirementsForm}
        requirementsFormKey="includeSymbols"
      />
    </Stack>
  );
};

interface RequirementsFormCheckboxProps extends RequirementsFormProps {
  requirementsFormKey: RequirementsFormKeys;
  requirementsForm: RequirementsFormValues;
}

const RequirementsFormCheckbox: FC<RequirementsFormCheckboxProps> = ({
  requirementsForm,
  requirementsFormKey,
  ...props
}) => {
  const labels: Record<RequirementsFormKeys, CustomCheckboxProps["label"]> = {
    includeLowercase: "Include Lowercase Letters",
    includeUppercase: "Include Uppercase Letters",
    includeNumbers: "Include Numbers",
    includeSymbols: "Include Symbols",
  };
  return (
    <CustomCheckbox
      defaultValue={requirementsForm[requirementsFormKey]}
      label={labels[requirementsFormKey]}
      onChange={(value) => props.onChange({ [requirementsFormKey]: value })}
      isDisabled={
        Object.values(requirementsForm).filter((value) => value).length === 1 && requirementsForm[requirementsFormKey]
      }
    />
  );
};
