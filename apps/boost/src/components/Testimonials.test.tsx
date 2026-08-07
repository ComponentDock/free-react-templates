import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and the three testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'What People Says' })).toBeInTheDocument()

    for (const title of ['User Collaboration', 'Mobile Integration', 'Smart Analytics']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('Olivia Bennett')).toBeInTheDocument()
    expect(screen.getByText('Liam Carter')).toBeInTheDocument()
    expect(screen.getByText('Sophia Reed')).toBeInTheDocument()
  })
})
