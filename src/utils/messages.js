import { useTranslation } from 'react-i18next'

export const Messages = (value) => {
    const { t } = useTranslation()
    return t(value);
};