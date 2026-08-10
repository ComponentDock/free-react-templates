import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright bar with the current year', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} All rights reserved`)),
    ).toBeInTheDocument()
  })

  it('credits the Colorlib source template', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Colorlib' })
    expect(credit).toHaveAttribute('href', 'https://colorlib.com/wp/template/meranda/')
  })
})
