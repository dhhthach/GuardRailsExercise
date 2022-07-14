import { useMutation, useQuery } from 'react-query';
import { fetchScanResultById, fetchScanResults, submitScanResult } from '../apis/scan-result';

export const useScanResult = () => {
  return useQuery('scanResults', fetchScanResults);
}

export const useFindings = (scanId: string) => {
  return useQuery(['findings', scanId], fetchScanResultById);
}

export const useSubmitScanResult = (options?: any) => {
  return useMutation(submitScanResult, options)
}
