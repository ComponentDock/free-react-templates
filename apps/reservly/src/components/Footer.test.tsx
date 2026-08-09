import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand and copyright inside the contentinfo landmark', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Reservly')).toBeInTheDocument()
    expect(within(footer).getByText(/© 2026 Reservly/i)).toBeInTheDocument()
  })
})
