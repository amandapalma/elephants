import { useTranslation } from 'react-i18next';
import { FooterStyled } from '../styles/styled';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <FooterStyled>
      <p>
        {t('footer.footer')}{' '}
        <a href="mailto:amandapalma00@gmail.com">Amanda Palma</a>. CC 2021
      </p>
    </FooterStyled>
  );
}
