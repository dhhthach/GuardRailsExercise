import { ValidationError } from "yup";
import { ScanResultSchema } from "./constants";
import { Finding, ScanStatus } from "./types";

type FormValues = {
  repositoryName: string,
  status: ScanStatus,
  findings: Finding[]
}

export const formResolver = async (data: FormValues) => {
  try {
    const values = ScanResultSchema.validateSync(data, { abortEarly: false });
    return { 
      values,
      errors: {} 
    }
  } catch(e: any) {
    return {
      values: {},
      errors: e.inner.reduce(
        (previous: any, currentError: ValidationError) => ({
          ...previous,
          [currentError.path || '' ]: currentError.message,
        }),
        {}
      ),
    }
  }
}
