import { render, waitFor, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import ScanResultFindings from "./ScanResultFindings"
import * as useScanResult from '../../hooks/useScanResult';
import * as reactQuery from 'react-query'
import { ScanResult } from "../../shared/types";
import { mockOneResponse } from "../../fixtures/mock";

describe('ScanResult Findings Page', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </BrowserRouter>
  )
  it('should render No Scan Result Finding', async () => {
    render(<ScanResultFindings />, { wrapper: Provider})
    await waitFor(() => {
      const spinner = screen.getByText('Scan Result Findings');
      expect(spinner).toBeDefined();
      const element = screen.getByText('No Scan Result Finding');
      expect(element).toBeDefined();
    })
  })

  it('should render list of Finding', async () => {
    jest.spyOn(useScanResult, 'useFindings').mockReturnValue({
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: '',
      data: mockOneResponse[0]
    } as unknown as reactQuery.UseQueryResult<ScanResult, unknown>);

    render(<ScanResultFindings />, { wrapper: Provider})
    await waitFor(() => {
      const element = screen.getByText('G402');
      expect(element).toBeDefined();
    })
  })

})
