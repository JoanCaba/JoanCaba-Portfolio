import { useTranslation } from 'react-i18next';
import MEDIA from '../../data/externalMedia';
import ExternalLink from '../ExternalLink/ExternalLink';
import ImageText from '../ImageText/ImageText';
import './SocialButton.css'



const SocialButton = ({ networkName, style }) => {
  const { t } = useTranslation();
  const { url, icon, text } = MEDIA[networkName];
  const imageAlt = `${t('logoAlt')} ${networkName}`;
  return (
    <>
      <ExternalLink href={url} content={<ImageText image={icon} imageAlt={imageAlt} text={text} />} className={`${networkName} social-button ${style}`} />
    </>
  )
}
export default SocialButton