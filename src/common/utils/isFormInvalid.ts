import { FieldValues } from "react-hook-form";

export const isFormInvalid = (err: FieldValues): boolean => {
    if (Object.keys(err).length > 0) return true;
    return false;
}