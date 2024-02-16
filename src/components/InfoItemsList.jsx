import InfoItem from './InfoItem';

import LinkedIn from '../assets/icons/linkedin.svg';
import Site from '../assets/icons/site.svg';
import Email from '../assets/icons/email.svg';
import GitHub from '../assets/icons/github.svg';
import Telegram from '../assets/icons/telegram.svg';
import Address from '../assets/icons/address.svg';

const InfoItemsList = () => {
  return (
    <div className="list-0">
      <InfoItem
        src={LinkedIn}
        alt="LinkedIn"
        name="LinkedIn"
        href="https://www.linkedin.com/in/mirzaianov/"
        path="in/mirzaianov/"
      />
      <InfoItem
        src={Site}
        alt="Site"
        name="Site"
        href="https://cv.mirzaianov.com"
        path="cv.mirzaianov.com"
      />
      <InfoItem
        src={Email}
        alt="Email"
        name="Email"
        href="mailto:hello@mirzaianov.com"
        path="hello@mirzaianov.com"
      />
      <InfoItem
        src={GitHub}
        alt="GitHub"
        name="GitHub"
        href="https://github.com/mirzaianov"
        path="/mirzaianov"
      />
      <InfoItem
        src={Telegram}
        alt="Telegram"
        name="Telegram"
        href="https://t.me/mirzaianov"
        path="@mirzaianov"
      />
      <InfoItem
        src={Address}
        alt="Address"
        name="Address"
        href="https://maps.app.goo.gl/sfzLu94hcytEdaMv7"
        path="Bursa, Türkiye"
      />
    </div>
  );
};

export default InfoItemsList;
