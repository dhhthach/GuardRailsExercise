import axios from "axios";
import { mockTwoResponse } from "../fixtures/mock";
import { fetchScanResults } from "./scan-result";

describe('scan result', () => {
  it('should run correctly', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: mockTwoResponse,
      status: 200,
    })
    const result = await fetchScanResults()
    expect(result).toEqual(mockTwoResponse.map(res => {
      return {
        ...res,
        numOfFindings: 2
      }
    }))
  })

  it('should run and throw error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('mockError'))
    try {
      await fetchScanResults()
    } catch (error) {
      expect(error).toEqual('mockError')
    }
  })
})
