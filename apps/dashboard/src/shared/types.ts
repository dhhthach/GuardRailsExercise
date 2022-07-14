export type ScanResultListing = ScanResult & { 'numOfFindings': number | string };

export type ScanResult = {
  id: string;
  status: ScanStatus;
  repositoryName: string;
  findings: Array<Finding>;
  queuedAt: string;
  scanningAt: string | null;
  finishedAt: string | null;
}

export enum ScanStatus {
  QUEUED = 'Queued',
  IN_PROGRESS = 'In Progress',
  SUCCESS = 'Success',
  FAILURE = 'Failure',
};

export type Finding = {
  type: string;
  ruleId: string;
  location: FindingLocation;
  metadata: FindingMetadata;
}

export type FindingMetadata = {
  description: string;
  severity: string;
}

export type FindingLocation = {
  path: string;
  positions: {
    begin: {
      line: number
    }
  };
}
