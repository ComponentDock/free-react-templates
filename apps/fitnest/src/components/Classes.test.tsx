import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders the heading and three course cards', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: 'Upcoming Yoga Courses' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '100 Hour Yoga Course' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '200 Hour Yoga Course' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '300 Hour Yoga Course' })).toBeInTheDocument()
  })

  it('renders course details and Join Now buttons', () => {
    render(<Classes />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('David Miller')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
    const joinButtons = screen.getAllByRole('link', { name: 'Join Now' })
    expect(joinButtons).toHaveLength(3)
    for (const btn of joinButtons) {
      expect(btn).toHaveAttribute('href', '#contact')
    }
  })

  it('renders course images', () => {
    render(<Classes />)
    expect(screen.getByRole('img', { name: '100 Hour Yoga Course' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
