import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three member quotes', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Inspirational Testimony' })).toBeInTheDocument()
    expect(screen.getByText('John Cooper')).toBeInTheDocument()
    expect(screen.getAllByText('Member').length).toBe(2)
    expect(screen.getAllByRole('img').length).toBe(3)
    expect(screen.getByText('Mary Lane')).toBeInTheDocument()
    expect(screen.getByText('David Grant')).toBeInTheDocument()
  })
})
