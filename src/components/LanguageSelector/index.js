import React from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageConstant } from '../../constant';

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  return (
    <div onChange={changeLanguage}>
      <input type="radio" value={LanguageConstant.EN} name="language" defaultChecked={i18n.language === LanguageConstant.EN} /> English
      <input type="radio" value={LanguageConstant.ID} name="language" defaultChecked={i18n.language === LanguageConstant.ID} /> Bahasa Indonesia
    </div>
  )
}

export default LanguageSelector;