import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Header, Label, Table } from 'semantic-ui-react';
import Loading from '../../ components/Loading';
import { useScanResult } from '../../hooks/useScanResult';
import { timestampMap } from '../../shared/constants';

export const ScanResultList: React.FC = () => {

  const { data: scanResults, isLoading } = useScanResult();
  
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate('/scan-results/create');
  }

  const goToFindings = (scanId: string) => {
    navigate(`/scan-results/${scanId}`);
  }

  let content = null;

  if (scanResults && scanResults.length !== 0) {
    content = scanResults.map((item, idx) => {
      return (
        <Table.Row key={idx} onClick={() => goToFindings(item.id)}>
          <Table.Cell>{item.repositoryName}</Table.Cell>
          <Table.Cell>{item.status}</Table.Cell>
          <Table.Cell>
            <Label circular as='a'>
              {item.numOfFindings}
            </Label>
          </Table.Cell>
          <Table.Cell>{(item as any)[timestampMap[item.status]]}</Table.Cell>
        </Table.Row>
      )
    });
  } else {
    content = <Table.Row><Table.Cell>No Scan Result</Table.Cell></Table.Row>
  }

  return !isLoading ? 
    <Container>
      <Header as='h1'>
        Scan Results
        <Button primary floated='right' onClick={goToCreate}>Submit Scan Result</Button>
      </Header>
      <Table singleLine selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Repository Name</Table.HeaderCell>
            <Table.HeaderCell>Scan Status</Table.HeaderCell>
            <Table.HeaderCell>Findings</Table.HeaderCell>
            <Table.HeaderCell>Timestamp</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {content}
        </Table.Body>
      </Table>
    </Container> : <Loading />;
};

export default memo(ScanResultList);
