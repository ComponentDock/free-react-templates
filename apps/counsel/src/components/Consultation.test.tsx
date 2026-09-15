import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Consultation } from './Consultation'

describe('Consultation', () => {
  it('renders the heading, description, and call-to-action button', () => {
    render(<Consultation />)

    expect(screen.getByRole('heading', { level: 2, name: 'Free Consultation' })).toBeInTheDocument()

    expect(screen.getByText(/Facing a legal challenge/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Get Free Consultation' })).toBeInTheDocument()
  })
})
