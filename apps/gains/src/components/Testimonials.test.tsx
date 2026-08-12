import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders three customer quotes with names and roles', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'happy customer says' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/never having deadlifted/)).toBeInTheDocument()
    expect(screen.getByText('Mosan Cameron')).toBeInTheDocument()
    expect(screen.getByText('Executive of Fedex')).toBeInTheDocument()

    expect(screen.getByText('Riley Fox')).toBeInTheDocument()
    expect(screen.getByText('Dana Whitfield')).toBeInTheDocument()
    expect(screen.getAllByRole('figure')).toHaveLength(3)
  })
})
