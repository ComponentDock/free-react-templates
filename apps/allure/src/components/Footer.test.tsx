import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, tagline, copyright, and four office columns', () => {
    render(<Footer />)
    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText('Model Agency')).toBeInTheDocument()
    expect(within(contentinfo).getByText(/free react template/i)).toBeInTheDocument()

    for (const city of ['Milan', 'Paris', 'New York', 'London']) {
      expect(within(contentinfo).getByRole('heading', { name: city })).toBeInTheDocument()
    }
    expect(within(contentinfo).getByText('1095 Lodgeville Road')).toBeInTheDocument()
    expect(within(contentinfo).getAllByText('+34 5667 77833')).toHaveLength(4)
  })
})
