import React, { memo } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Container, DropdownProps, Form, Header } from "semantic-ui-react";
import { STATUS_OPTIONS } from "../../shared/constants";
import { ScanResult, ScanStatus } from "../../shared/types";
import { formResolver } from "../../shared/utils";
import { useSubmitScanResult } from "../../hooks/useScanResult";
import Loading from "../../ components/Loading";

export const ScanResultNew: React.FC = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: formResolver,
  });

  const gotToList = () => {
    navigate('/scan-results');
  }

  const { mutate, isLoading } = useSubmitScanResult({
    onSuccess: gotToList
  })

  const submitForm = (formData: any) => {
    mutate(formData);
  };

  const onChangeStatus = (e: React.SyntheticEvent<HTMLElement>, { value }: DropdownProps) => {
    setValue('status', value as ScanStatus);
  }

  const onFindingsChange = (newValue: any) => {
    setValue('findings', newValue);
  }

  return !isLoading ? <Container>
    <Header as='h1'>
      New Scan Result
    </Header>
    <Form onSubmit={handleSubmit(submitForm)}>
      <Form.Field required error={errors['repositoryName'] !== undefined}>
        <label>Repository Name</label>
        <input 
          placeholder='Repository Name' 
          {...register("repositoryName", { required: true })} />
      </Form.Field>
      <Form.Select
        error={errors['status'] !== undefined}
        required
        fluid
        label='Status'
        options={STATUS_OPTIONS}
        placeholder='Status'
        {...register("status", { required: true })}
        onChange={onChangeStatus}
      />
      <Form.Field error={errors['findings'] !== undefined}>
        <label>Findings</label>
        <AceEditor
          mode="json"
          width="100%"
          theme="github"
          {...register("findings")}
          onChange={onFindingsChange}
          setOptions={{ showPrintMargin: false }}
        />
      </Form.Field>
      <Button type='submit' primary>Submit</Button>
      <Button type='button' onClick={gotToList}>Cancel</Button>
    </Form>
  </Container> : <Loading />;
};

export default memo(ScanResultNew);
