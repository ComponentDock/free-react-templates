export interface AccordionItem {
  id: string
  question: string
  answer: string
}

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: 'manage-account',
    question: 'How do I manage my account settings?',
    answer:
      'You can manage your account settings by navigating to the dashboard and clicking on the profile icon. From there, you can update your personal information, change your password, and configure notification preferences.',
  },
  {
    id: 'billing',
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major credit cards including Visa, Mastercard, and American Express. Additionally, we support PayPal and bank transfers for annual subscriptions. All transactions are securely processed through our encrypted payment gateway.',
  },
  {
    id: 'cancellation',
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments. Your access will continue until the end of your current billing period, and you can reactivate at any time.',
  },
  {
    id: 'support',
    question: 'How do I contact support?',
    answer:
      'Our support team is available 24/7 through the live chat widget on our website. You can also reach us via email at support@example.com or call our toll-free number during business hours. We typically respond within a few hours.',
  },
  {
    id: 'refund',
    question: 'What is your refund policy?',
    answer:
      'We offer a 30-day money-back guarantee on all subscription plans. If you are not satisfied with our service, simply contact our support team within 30 days of your purchase for a full refund, no questions asked.',
  },
]
