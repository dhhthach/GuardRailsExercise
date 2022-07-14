import { lazy, Suspense } from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Navigate, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Loading from '../ components/Loading';

const AppContainer = styled.div`
  padding: 20px;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  }
});

const ScanResultFindings = lazy(() => import('../pages/scan-result/ScanResultFindings'));
const ScanResultNew = lazy(() => import('../pages/scan-result/ScanResultNew'));
const ScanResultList = lazy(() => import('../pages/scan-result/ScanResultList'));

export function App() {
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <AppContainer>
          <Routes>
            <Route path="/scan-results" element={<ScanResultList />} />
            <Route path="/scan-results/create" element={<ScanResultNew />} />
            <Route path="/scan-results/:scanId" element={<ScanResultFindings />} />
            <Route path="*" element={<Navigate to="/scan-results" replace />} />
          </Routes>
        </AppContainer>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
