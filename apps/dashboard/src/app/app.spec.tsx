import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import * as useScanResult from '../../src/hooks/useScanResult';
import { ScanResultListing } from '../shared/types';
import * as reactQuery from 'react-query'

import App from './app';

describe('App', () => {
  it('should render successfully', async () => {
    jest.spyOn(useScanResult, 'useScanResult').mockReturnValue({
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: '',
      data: []
    } as unknown as reactQuery.UseQueryResult<ScanResultListing[], unknown>);
    render(<App />, { wrapper: BrowserRouter});
    await waitFor(() => {
      const linkElement = screen.getByText(/Submit Scan Result/i);
      expect(linkElement).toBeDefined();
      fireEvent.click(linkElement);
      const title = screen.getByText(/New Scan Result/i);
      expect(title).toBeDefined()
    })
  });
});
