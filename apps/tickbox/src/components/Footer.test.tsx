import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the template name', () => {
    render(<Footer />)
    expect(screen.getByText('Tickbox')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Footer />)
    expect(screen.getByText('Custom checkbox UI components for React.')).toBeInTheDocument()
  })

  it('contains a link to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })
})
