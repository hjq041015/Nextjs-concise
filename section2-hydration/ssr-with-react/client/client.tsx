import { hydrateRoot } from 'react-dom/client';
import App from '../components/App';

const root = hydrateRoot(document.getElementById('root')!, <App />);
