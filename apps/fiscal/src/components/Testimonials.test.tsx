import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the heading and the first testimonial slide', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Portrait of John Campbell/ })).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()
    expect(screen.getByText('John Campbell')).toBeInTheDocument()
    expect(screen.getByText('CEO & Co-founder')).toBeInTheDocument()
  })

  it('switches slides via dot pagination', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(screen.getByText(TESTIMONIALS[2]!.quote)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
