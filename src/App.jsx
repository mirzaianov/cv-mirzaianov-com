import Left from './components/Left';
import Right from './components/Right';
import DownloadLink from './components/DownloadLink';

import './App.css';

export default function App() {
  return (
    <main className="app">
      <Left />
      <Right />
      <DownloadLink
        url="https://www.dl.dropboxusercontent.com/scl/fi/zntiryytd866lcqqyljoi/20240426_MIRZAIANOV_A4_EN.pdf?rlkey=xsd6n63y96rsxrqhqqxeoj10n&dl=0"
        fileName="20240426_MIRZAIANOV_A4_EN.pdf"
      />
    </main>
  );
}
