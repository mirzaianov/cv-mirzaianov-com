import { FaCircleDown } from 'react-icons/fa6';
import { IoMdArrowRoundDown } from 'react-icons/io';
import './DownloadLink.css';

const DownloadLink = ({ url, fileName }) => {
  const handleDownload = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');

        link.href = url;
        link.download = fileName || 'downloaded-file';
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
    <div className="download-link__container">
      <div className="download-link__bg"></div>
      <button
        className="download-link__button"
        onClick={handleDownload}
      >
        <IoMdArrowRoundDown
          style={{ color: 'var(--neutral-10)', fontSize: '5em' }}
        />
      </button>
    </div>
  );
};

export default DownloadLink;
