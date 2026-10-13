export interface AccordionItem {
  id: string
  question: string
  answer: string
}

const ANSWER =
  'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.'

export const ACCORDION_ITEMS: AccordionItem[] = [
  { id: 'download-register', question: 'How to download and register?', answer: ANSWER },
  { id: 'paypal-account', question: 'How to create your paypal account?', answer: ANSWER },
  { id: 'paypal-bank', question: 'How to link your paypal and bank account?', answer: ANSWER },
]
