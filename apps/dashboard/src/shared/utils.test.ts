import { mockOneResponse } from "../fixtures/mock"
import { ScanStatus } from "./types"
import { formResolver } from "./utils"

const invalidFindings = mockOneResponse[0].findings[0];

const mock = {
  repositoryName: 'abc',
  status: ScanStatus.QUEUED,
  findings: [invalidFindings]
}

describe('utils', () => {
  it('should run correctly', async () => {
    const result = formResolver(mock as any);
    expect(result.errors).toEqual({});
  })
  it('should return error in case findings is incorrect', async () => {
    (invalidFindings as any).type = null;
    const result = formResolver(mock as any);
    expect(result.errors).toBeDefined();
  })
})
