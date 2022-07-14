import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Header, Table } from 'semantic-ui-react';
import { useFindings } from '../../hooks/useScanResult';

export const ScanResultFindings: React.FC = () => {

  const params = useParams();
  const { data: scanResult} = useFindings(params['scanId'] || '');

  const navigate = useNavigate();
  const gotToList = () => {
    navigate('/scan-results');
  }

  return <Container>
      <Header as='h1'>
        Scan Result Findings
        <Button primary floated='right' onClick={gotToList}>Scan Results</Button>
      </Header>
      <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Rule ID</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Severity</Table.HeaderCell>
          <Table.HeaderCell>Path name : Line number</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          (scanResult?.findings && scanResult.findings.length !== 0) ? scanResult.findings.map((item, idx) => {
            return (
              <Table.Row key={idx}>
                <Table.Cell>{item?.ruleId}</Table.Cell>
                <Table.Cell>{item?.metadata?.description}</Table.Cell>
                <Table.Cell>{item?.metadata?.severity}</Table.Cell>
                <Table.Cell>{item?.location?.path}:{item?.location?.positions?.begin?.line}</Table.Cell>
              </Table.Row>
            )
          }) : <Table.Row><Table.Cell>No Scan Result Finding</Table.Cell></Table.Row>
        }
      </Table.Body>
    </Table>
  </Container>;
};

export default memo(ScanResultFindings)
