import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instructors } from './Instructors'

describe('Instructors', () => {
  it('renders the heading and four instructor cards', () => {
    render(<Instructors />)
    expect(screen.getByRole('heading', { name: 'Expert Instructors' })).toBeInTheDocument()
    for (const name of ['Sarah Johnson', 'David Miller', 'Emily Chen', 'Michael Brown']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getAllByText('Yoga Trainer').length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders instructor photos', () => {
    render(<Instructors />)
    expect(screen.getByRole('img', { name: 'Sarah Johnson' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders social links for each instructor', () => {
    render(<Instructors />)
    expect(
      screen.getAllByRole('link', { name: /Sarah Johnson Facebook/ }).length,
    ).toBeGreaterThanOrEqual(1)
  })
})
