import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('displays the heading and CTA', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About our tailor house/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More About Us/i })).toHaveAttribute('href', '#contact')
  })
})
