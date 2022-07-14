import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import ScanResultNew from "./ScanResultNew"

describe('ScanResult Create Page', () => {
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
    render(<ScanResultNew />, { wrapper: Provider})
    await waitFor(() => {
      const spinner = screen.getByText('New Scan Result')
      expect(spinner).toBeDefined()
    })
  })

  it('should able to submit scan result', async () => {
    render(<ScanResultNew />, { wrapper: Provider})
    const select = screen.getByTestId('status');
    fireEvent.click(select);

    const dropdownOptions = screen.getAllByRole('option');
    fireEvent.click(dropdownOptions[0]);
    expect(select.children[0].textContent).toBe('Queued');

    const submitBtn = screen.getByTestId('submitBtn');
    fireEvent.click(submitBtn);

  })

})
