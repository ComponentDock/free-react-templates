import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and six feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Barber Features' })).toBeInTheDocument()
    expect(screen.getByText(/precision/i)).toBeInTheDocument()
    for (const title of [
      'Shave & Haircut',
      'Cream & Shampoo',
      'Mustache Expert',
      'Haircut Styler',
      'Razor For Beards',
      'Haircomb',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
