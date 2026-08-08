import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and client quotes with authors and roles', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Clients Says' })).toBeInTheDocument()
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()
    expect(screen.getByText('Architect')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Interior Designer')).toBeInTheDocument()
    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getByText(/delivered our headquarters/)).toBeInTheDocument()
  })
})
