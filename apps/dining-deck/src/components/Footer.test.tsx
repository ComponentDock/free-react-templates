import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, tagline, social links and Component Dock link', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')!
    expect(
      within(footer as HTMLElement).getByRole('link', { name: 'DiningDeck' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Premium dining experiences/i)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
    const cdLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })
})
