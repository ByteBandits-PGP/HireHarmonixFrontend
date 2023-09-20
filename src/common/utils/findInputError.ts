import { FieldError, FieldErrors, FieldValues } from "react-hook-form";

export const findInputError = (errors: FieldErrors<FieldValues>, validationName: string): FieldValues => {
    const filtered = Object.keys(errors) 
    .filter((key) => key.includes(validationName))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered;
}