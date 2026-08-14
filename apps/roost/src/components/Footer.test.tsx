import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { FOOTER, FOOTER_LINKS } from '../data'

describe('Footer', () => {
  it('renders the Subscribe form and confirms a submitted email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { name: FOOTER.subscribeTitle })).toBeInTheDocument()

    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'buyer@example.com')
    await user.click(screen.getByRole('button', { name: FOOTER.sendNowLabel }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('does not confirm an empty email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: FOOTER.sendNowLabel }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders the About Us link column and the About blurb', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: FOOTER.aboutLinksTitle })).toBeInTheDocument()
    for (const label of FOOTER_LINKS) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('heading', { name: FOOTER.aboutTitle })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.aboutBlurb)).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: FOOTER.credit })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright © \d{4}/)).toBeInTheDocument()
  })
})
