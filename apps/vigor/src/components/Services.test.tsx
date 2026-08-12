import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders six service cards with icons, titles, descriptions, and Enroll Now links', () => {
    render(<Services />)

    for (const title of [
      'Business School',
      'Fitness Pro',
      'Yoga Courses',
      'Diet Specialists',
      'Swimming Pool',
      'Spinning Class',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Enroll Now' })).toHaveLength(6)
    expect(screen.getByText(/strength training fundamentals/)).toBeInTheDocument()
    expect(screen.getByText(/yoga sessions that improve/)).toBeInTheDocument()
  })
})
