import { useTranslation } from "react-i18next"

const LanguageSwitch = () => {
  // TODO:move to a data json?
  const lngs = {
    en: { languageName: 'English' },
    es: { languageName: 'Castellano' }
  }
  const { i18n } = useTranslation()
  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}>
          {lngs[lng].languageName}</button>)
      )}
    </div>
  )
}

export default LanguageSwitch