import { QueryClient, QueryClientProvider } from "react-query"
import axios from "axios";
import { renderHook, waitFor } from "@testing-library/react";
import { useScanResult } from "./useScanResult";
import { mockOneResponse } from "../fixtures/mock";

describe('useScanResult', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
  it('should run and return loading false', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(mockOneResponse)
    const { result } = renderHook(() => useScanResult(), { wrapper: Provider })
    expect(result.current.isLoading).toEqual(true)
    await waitFor(() => result.current.isSuccess)
    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false)
    })
  })
})
