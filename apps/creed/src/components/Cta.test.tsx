import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the visitors info button', () => {
    render(<Cta />)
    expect(screen.getByRole('link', { name: /visitors info/i })).toBeInTheDocument()
  })

  it('links to the contact section', () => {
    render(<Cta />)
    expect(screen.getByRole('link', { name: /visitors info/i })).toHaveAttribute('href', '#contact')
  })
})
