import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, service links, contact info and Component Dock credit', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Counsel/i })).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@counsel.com')).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })
})
