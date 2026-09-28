import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuoteNewsletterAd } from './QuoteNewsletterAd'

describe('QuoteNewsletterAd', () => {
  it('renders the quote text', () => {
    render(<QuoteNewsletterAd />)
    expect(screen.getByText(/Nothing is better than going home/)).toBeInTheDocument()
  })

  it('renders author name', () => {
    render(<QuoteNewsletterAd />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
  })

  it('renders date and comments', () => {
    render(<QuoteNewsletterAd />)
    expect(screen.getByText('January 04, 2018')).toBeInTheDocument()
    expect(screen.getByText('2 Comments')).toBeInTheDocument()
  })

  it('renders newsletter heading', () => {
    render(<QuoteNewsletterAd />)
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<QuoteNewsletterAd />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<QuoteNewsletterAd />)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders promotional ad image', () => {
    render(<QuoteNewsletterAd />)
    expect(screen.getByAltText('Promotional advertisement')).toBeInTheDocument()
  })

  it('form submission does not reload page', async () => {
    const user = userEvent.setup()
    render(<QuoteNewsletterAd />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('test@example.com')
  })
})
