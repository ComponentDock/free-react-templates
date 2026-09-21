import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<FAQ />)
    expect(screen.getByText('Can I accept both Paypal and Stripe?')).toBeInTheDocument()
    expect(screen.getByText('What available is refund period?')).toBeInTheDocument()
    expect(screen.getByText('Where are you from?')).toBeInTheDocument()
    expect(screen.getByText('What is your opening time?')).toBeInTheDocument()
  })

  it('expands an answer when a question is clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    await user.click(screen.getByText('Can I accept both Paypal and Stripe?'))
    expect(screen.getByText(/Yes, our platform supports/)).toBeInTheDocument()
  })

  it('collapses an answer when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    await user.click(screen.getByText('Can I accept both Paypal and Stripe?'))
    expect(screen.getByText(/Yes, our platform supports/)).toBeInTheDocument()
    await user.click(screen.getByText('Can I accept both Paypal and Stripe?'))
    expect(screen.queryByText(/Yes, our platform supports/)).not.toBeInTheDocument()
  })

  it('toggles between different questions', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    await user.click(screen.getByText('Can I accept both Paypal and Stripe?'))
    expect(screen.getByText(/Yes, our platform supports/)).toBeInTheDocument()
    await user.click(screen.getByText('Where are you from?'))
    expect(screen.getByText(/We serve clients worldwide/)).toBeInTheDocument()
    expect(screen.queryByText(/Yes, our platform supports/)).not.toBeInTheDocument()
  })
})
