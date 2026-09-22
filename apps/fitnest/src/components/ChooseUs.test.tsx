import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the heading and description', () => {
    render(<ChooseUs />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Have Highly Qualified/i })).toBeInTheDocument()
    expect(screen.getByText(/internationally certified instructors/i)).toBeInTheDocument()
  })

  it('renders all four stats', () => {
    render(<ChooseUs />)
    expect(screen.getByText('2146')).toBeInTheDocument()
    expect(screen.getByText('Students')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('48')).toBeInTheDocument()
    expect(screen.getByText('Branches')).toBeInTheDocument()
    expect(screen.getByText('234')).toBeInTheDocument()
    expect(screen.getByText('Expert Staff')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('img', { name: 'Yoga instructor guiding a class' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
