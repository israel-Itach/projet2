import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" component="h1" sx={{ marginBottom: '1rem' }}>
        אודות האתר
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        אתר השאלת האופניים החדשני הוא פלטפורמה מתקדמת להשאלת אופניים בצורה נוחה ופשוטה.
        באמצעות האתר, תוכל למצוא מגוון רחב של אופניים להשאלה מאות מידעים על כל אופניים,
        כולל תמונות ותיאורים מפורטים. בנוסף, יש לך את אפשרות לתרום אופניים שלך למאגר כדי
        שאחרים יוכלו לנצל אותם.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
        השאלת אופניים היא דרך נהדרת לחסוך כסף ולהקל על התנועה בעיר. השכרת אופניים היא
        אופציה נוחה וסבירה למי שרוצה להשתמש באופניים בצורה מתוכנתת ולא מחייבת
        השקעה גבוהה ברכב אישי.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
        הצטרפו עוד היום לקהילת השאלת האופניים ותהנו מהיתרונות שהיא מציעה!
      </Typography>
      <Button variant="contained" href='/bikepage' color="primary">
        השאל אופניים עכשיו
      </Button>
    </Container>
  );
};

export default AboutPage;
