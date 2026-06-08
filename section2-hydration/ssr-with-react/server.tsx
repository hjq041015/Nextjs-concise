import express from 'express';
import type { Response } from 'express';
import { readFile } from 'fs/promises';
import { renderToString } from 'react-dom/server';
import App from './components/App';

const app = express();


const htmlTemplate = await readFile('./templates/index.html', 'utf-8');
const jsScript = await readFile('./templates/client.js', 'utf-8');

app.get('/', async (_req, res: Response) => {
  const htmlReactComponent = renderToString(<App />);
  const html = htmlTemplate.replace('%REACT_CONTENT%', htmlReactComponent);
  res.send(html);


});

app.get('/client.js', (_req, res: Response) => {
  res.contentType('application/javascript').send(jsScript);
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
