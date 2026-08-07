import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders three quotes with authors and roles', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('blockquote')).toHaveLength(3)
    expect(screen.getByText('Mithila Rahman')).toBeInTheDocument()
    expect(screen.getByText('Designer at Atrium')).toBeInTheDocument()
    expect(screen.getByText('Jonas Keller')).toBeInTheDocument()
    expect(screen.getByText('Project Architect')).toBeInTheDocument()
    expect(screen.getByText('Priya Nair')).toBeInTheDocument()
    expect(screen.getByText('Interior Stylist')).toBeInTheDocument()
  })
})
