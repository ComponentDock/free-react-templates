import { render, screen } from '@testing-library/react'
import { Promo } from './Promo'
import { PROMO } from '../data'
import { describe, expect, it } from 'vitest'

describe('Promo', () => {
  it('renders the heading', () => {
    render(<Promo />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(PROMO.heading)
  })

  it('renders the Book Now button', () => {
    render(<Promo />)
    expect(screen.getByRole('button', { name: PROMO.buttonLabel })).toBeInTheDocument()
  })

  it('renders the countdown text', () => {
    render(<Promo />)
    expect(screen.getByText(PROMO.countdown)).toBeInTheDocument()
  })

  it('has parallax background', () => {
    render(<Promo />)
    const section = document.querySelector('section')
    expect(section).not.toBeNull()
    expect(section).toHaveStyle({
      backgroundImage: expect.stringContaining('picsum'),
    })
  })
})
