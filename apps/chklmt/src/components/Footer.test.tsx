import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link to componentdock.com', () => {
    render(<Footer />)

    const contentinfo = screen.getByRole('contentinfo')
    expect(contentinfo).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays the "Made with Component Dock" text', () => {
    render(<Footer />)

    expect(screen.getByText(/made with/i)).toBeInTheDocument()
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })
})
