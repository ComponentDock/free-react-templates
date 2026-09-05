import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the template name', () => {
    render(<Footer />)
    expect(screen.getByText('Coralbit')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Footer />)
    expect(
      screen.getByText('Circular custom checkbox components with coral pink accents.'),
    ).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders "More templates at" text', () => {
    render(<Footer />)
    expect(screen.getByText('More templates at')).toBeInTheDocument()
  })
})
