import { render, waitFor, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import ScanResultList from "./ScanResultList"
import * as useScanResult from '../../hooks/useScanResult';
import { ScanResultListing } from "../../shared/types";
import * as reactQuery from 'react-query'

describe('ScanResult List Page', () => {
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
  it('should render properly', async () => {
    jest.spyOn(useScanResult, 'useScanResult').mockReturnValue({
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: '',
      data: []
    } as unknown as reactQuery.UseQueryResult<ScanResultListing[], unknown>);
    render(<ScanResultList />, { wrapper: Provider})
    await waitFor(() => {
      const spinner = screen.getByText('Scan Results')
      expect(spinner).toBeDefined()
    })
  })

})
