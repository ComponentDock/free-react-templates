import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the Quality Haircut heading', () => {
    render(<Cta />)
    expect(screen.getByRole('heading', { name: 'Quality Haircut' })).toBeInTheDocument()
  })

  it('links Contact Us Now to the footer contact section', () => {
    render(<Cta />)
    expect(screen.getByRole('link', { name: 'Contact Us Now' })).toHaveAttribute('href', '#contact')
  })
})
