import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css';
import Form from './components/Form';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Form />
      </div>
    </QueryClientProvider>
  );
}

export default App;
