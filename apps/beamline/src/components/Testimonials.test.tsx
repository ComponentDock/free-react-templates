import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()
  })

  it('shows client quotes with author names', () => {
    render(<Testimonials />)

    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
  })
})
