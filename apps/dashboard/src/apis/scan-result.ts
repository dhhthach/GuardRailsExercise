import { ScanResult, ScanResultListing } from "../shared/types"
import axios, { AxiosResponse } from "axios";
import { QueryFunctionContext } from "react-query";

const scanResultUrl = `http://localhost:3333/api/scan-results`;

export const fetchScanResults = (): Promise<ScanResultListing[]> => {
  return axios.get<[], AxiosResponse<ScanResult[]>>(scanResultUrl)
    .then((res) => res.data.map(scanResult => {
      return {
        ...scanResult,
        numOfFindings: scanResult.findings ? scanResult.findings.length : 'N/A'
      };
    }))
    .catch((error) => {
      throw (error as Error).message
    });
}

export const fetchScanResultById = ({ queryKey }: QueryFunctionContext): Promise<ScanResult> => {
  const [_, scanId] = queryKey;
  return axios.get<undefined, AxiosResponse<ScanResult>>(`${scanResultUrl}/${scanId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw (error as Error).message
    });
}

export const submitScanResult = (payload: Partial<ScanResult>): Promise<ScanResult> => {
  return axios
    .post<undefined, AxiosResponse<ScanResult>>(scanResultUrl, {
      ...payload,
      ...{ findings: payload.findings ? JSON.stringify(payload.findings) : null }
    })
    .then((resp) => resp.data)
    .catch((error) => {
      throw (error as Error).message
    })
}
