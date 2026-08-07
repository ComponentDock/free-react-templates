import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least one client quote', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: /What Our Client Says/ })).toBeInTheDocument()
    expect(screen.getByText('Andrew Field')).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })
})
