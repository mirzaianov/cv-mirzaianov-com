import { HiOutlineDownload } from 'react-icons/hi';
import getNameWithDate from '../utils/getNameWithDate';
import './DownloadLink.css';

const URL =
  'https://www.dl.dropboxusercontent.com/scl/fi/zntiryytd866lcqqyljoi/20240426_MIRZAIANOV_A4_EN.pdf?rlkey=xsd6n63y96rsxrqhqqxeoj10n&dl=0';

const DownloadLink = () => {
  const handleDownload = (url) => {
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const blob = new Blob([buffer], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = url;
        link.download = getNameWithDate() || 'downloaded-file';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error fetching the file:', error);
      });
  };

  return (
    <div className="download-link">
      <div className="download-link__bg"></div>
      <button
        className="download-link__button"
        onClick={() => handleDownload(URL)}
      >
        <HiOutlineDownload
          style={{ color: 'var(--neutral-10)', fontSize: 'var(--m)' }}
        />
      </button>
    </div>
  );
};

export default DownloadLink;
