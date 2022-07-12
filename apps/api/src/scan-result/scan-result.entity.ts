import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'scan_result' })
export class ScanResult {

  @PrimaryColumn()
  id: string;

  @Column({ name: 'repository_name' })
  repositoryName: string;

  @Column()
  status: string;
  
  @Column()
  findings: string;

  @Column({ name: 'queued_at'})
  queuedAt: Date;

  @Column({ name: 'finished_at'})
  finishedAt: Date;

  @Column({ name: 'scanning_at'})
  scanningAt: Date;

}
