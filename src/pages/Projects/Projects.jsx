import { useTranslation } from "react-i18next"


const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('projects')}</h1>
      <div>hello</div>
    </>
  )
}

export default Projects