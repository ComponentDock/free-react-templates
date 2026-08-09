import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, blurb, carousel buttons, and three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByText(/word mountains/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous services' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next services' })).toBeInTheDocument()

    for (const title of ['Haircuting', 'Beard Shaving', 'Cream & Shampoo']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
