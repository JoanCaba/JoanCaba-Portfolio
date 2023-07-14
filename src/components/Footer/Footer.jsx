import { useTranslation } from 'react-i18next'
import './Footer.css'
import { fullName } from '/src/data/personal_data.json'
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer><p>{t('madeWith')} {fullName}</p></footer>
  )
}

export default Footer