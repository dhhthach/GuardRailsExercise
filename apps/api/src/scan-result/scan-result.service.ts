import { Injectable } from '@nestjs/common';

@Injectable()
export class ScanResultService {
  retrieveAll() {
    return { message: "from service" };
  }

  findFindingsById(scanId: string) {
    return { message: "from service" };
  }

  deleteScanResultById(scanId: string) {
    return { message: "from service" };
  }

  createScanResult(scanResult) {
    return { message: "from service" };
  }

  updateScanResultById(scanId: string) {
    return { message: "from service" };
  }

}
