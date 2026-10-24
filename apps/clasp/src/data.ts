export interface AccordionItem {
  id: string
  question: string
  answer: string
}

const PANEL_COPY =
  'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'

export const DEFAULT_OPEN_ID = 'download-register'

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'download-register',
    question: 'How to download and register?',
    answer: PANEL_COPY,
  },
  {
    id: 'paypal-account',
    question: 'How to create your paypal account?',
    answer: PANEL_COPY,
  },
  {
    id: 'paypal-bank',
    question: 'How to link your paypal and bank account?',
    answer: PANEL_COPY,
  },
  {
    id: 'billing-info',
    question: 'How to update your billing information?',
    answer: PANEL_COPY,
  },
  {
    id: 'customer-support',
    question: 'How to contact customer support?',
    answer: PANEL_COPY,
  },
]
