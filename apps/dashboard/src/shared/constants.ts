import * as yup from 'yup';
import { ScanStatus } from './types';

export const ScanResultSchema = yup.object().shape({
  repositoryName: yup.string().required(),
  status: yup.string().required(),
  findings: yup.array().of(
    yup.object().shape({
      type: yup.string(),
      ruleId: yup.string(),
      location: yup.object().shape({
        path: yup.string(),
        positions: yup.object().shape({
          begin: yup.object().shape({
            line: yup.number()
          })
        })
      }),
      metadata: yup.object().shape({
        description: yup.string(),
        severity: yup.string()
      })
    })
  )
})

export const STATUS_OPTIONS = [
  { key: 'q', text: 'Queued', value: 'Queued' },
  { key: 'i', text: 'In Progress', value: 'In Progress' },
  { key: 's', text: 'Success', value: 'Success' },
  { key: 'f', text: 'Failure', value: 'Failure' },
]

export const timestampMap = {
  [ScanStatus.QUEUED]: 'queuedAt',
  [ScanStatus.IN_PROGRESS]: 'scanningAt',
  [ScanStatus.FAILURE]: 'finishedAt',
  [ScanStatus.SUCCESS]: 'finishedAt'
}
