import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the section heading', () => {
    render(<Faq />)
    expect(screen.getByText(/Frequently Asked Questions/)).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<Faq />)
    expect(screen.getByText(/How to download and register\?/)).toBeInTheDocument()
    expect(screen.getByText(/How to create your paypal account\?/)).toBeInTheDocument()
    expect(screen.getByText(/How to link your paypal and bank account\?/)).toBeInTheDocument()
    expect(screen.getByText(/We are better than others\?/)).toBeInTheDocument()
  })

  it('shows first answer expanded by default', () => {
    render(<Faq />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('expands and collapses answers on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    // Click second question
    const secondQ = screen.getByRole('button', { name: /How to create your paypal account\?/i })
    await user.click(secondQ)

    // Second answer should be visible
    expect(screen.getByText(/A small river named Duden flows by their place/)).toBeInTheDocument()

    // First answer should be collapsed
    expect(screen.queryByText(/Far far away, behind the word mountains/)).not.toBeInTheDocument()
  })

  it('toggles same question closed on second click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const firstQ = screen.getByRole('button', { name: /How to download and register\?/i })
    await user.click(firstQ)

    // First answer should be collapsed now
    expect(screen.queryByText(/Far far away, behind the word mountains/)).not.toBeInTheDocument()
  })

  it('has correct aria-expanded attributes', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const firstQ = screen.getByRole('button', { name: /How to download and register\?/i })
    expect(firstQ).toHaveAttribute('aria-expanded', 'true')

    await user.click(firstQ)
    expect(firstQ).toHaveAttribute('aria-expanded', 'false')

    const secondQ = screen.getByRole('button', { name: /How to create your paypal account\?/i })
    await user.click(secondQ)
    expect(secondQ).toHaveAttribute('aria-expanded', 'true')
    expect(firstQ).toHaveAttribute('aria-expanded', 'false')
  })
})
