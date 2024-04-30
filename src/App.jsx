import Left from './components/Left';
import Right from './components/Right';
import DownloadLink from './components/DownloadLink';

import './App.css';

export default function App() {
  return (
    <main className="app">
      <Left />
      <Right />
      <DownloadLink />
    </main>
  );
}
