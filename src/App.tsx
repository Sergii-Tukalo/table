import './App.css';
import { Layout } from './components/Layout';
import { TableContextProvider } from './context/Context';

function App() {
  return (
    <TableContextProvider>
      <Layout />
    </TableContextProvider>
  );
}

export default App;
