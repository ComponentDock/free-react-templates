import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading', () => {
    render(<Cta />)
    expect(screen.getByText(/Our Ability To Deliver Outstanding Results/)).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Cta />)
    expect(screen.getByText('Why choose us?')).toBeInTheDocument()
  })

  it('renders the Contact Us button', () => {
    render(<Cta />)
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#contact')
  })
})
