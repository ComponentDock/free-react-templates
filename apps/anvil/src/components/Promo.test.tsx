import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Promo } from './Promo'

describe('Promo', () => {
  it('renders the quotation invitation and contact button', () => {
    render(<Promo />)
    expect(screen.getByText(/Contact us for quotations/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get In Touch/i })).toBeInTheDocument()
  })
})
