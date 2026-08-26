export interface AccordionItem {
  id: string
  question: string
  answer: string
}

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'download-register',
    question: 'How to download and register?',
    answer:
      'Simply visit our download page and click the installation button for your operating system. Once downloaded, run the installer and follow the on-screen prompts. Registration requires a valid email address — you will receive a confirmation link to activate your account within minutes.',
  },
  {
    id: 'paypal-account',
    question: 'How to create your paypal account?',
    answer:
      'Go to PayPal.com and click the "Sign Up" button. Choose between a Personal or Business account depending on your needs. Fill in your personal details, link a bank account or credit card, and verify your email address. Once confirmed, your PayPal account is ready to send and receive payments.',
  },
  {
    id: 'link-bank',
    question: 'How to link your paypal and bank account?',
    answer:
      'Log into your PayPal account and navigate to the Wallet section. Click "Link a bank account" and enter your bank\'s routing number and account number. PayPal will send two small deposits to your bank within a few business days. Confirm those amounts in your PayPal dashboard to complete the verification process.',
  },
]
