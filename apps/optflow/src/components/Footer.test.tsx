import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('OptFlow')).toBeInTheDocument()
    expect(screen.getByText(/made with/i)).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })
})
