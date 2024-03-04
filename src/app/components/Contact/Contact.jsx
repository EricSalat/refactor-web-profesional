import Button from "../Button/Button";
import {useTranslations} from 'next-intl';

function Contact() {
    const t = useTranslations('CONTACT');

    return(
    <section id="next">
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
        <p>{t('p3')}
        <br></br>{t('p4')}</p>
        <Button
            className="know-me-button"
            texto={t('button-text')} href="mailto:ericsalatb@gmail.com" 
        />
    </section>
    )
}

export default Contact;