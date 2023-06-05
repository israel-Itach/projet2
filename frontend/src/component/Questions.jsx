import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">מה התהליך להשאלת אופניים?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            התהליך להשאלת אופניים פשוט וקל. יש לבחור את האופניים הרצויות מתוך המבחר הזמין באתר, למלא את פרטי ההשכרה ולבצע את ההזמנה.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">איך אני מחזיר את האופניים ששאלתי?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            תהליך ההחזרה פשוט וקל. יש להגיע לנקודת האיסוף בזמן ההחזרה המצופה ולהחזיר את האופניים עם כל האביזרים שנמצאו בחבילה.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">איך אני מבטל הזמנה של אופניים?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ניתן לבטל הזמנה של אופניים בכל עת על ידי יצירת קשר עם שירות הלקוחות שלנו. אנא שים לב שישנם תנאים ומגבלות לביטול ההזמנה.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
