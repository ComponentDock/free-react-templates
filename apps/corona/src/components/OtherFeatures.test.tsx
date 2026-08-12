import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { OtherFeatures } from './OtherFeatures'

describe('OtherFeatures', () => {
  it('shows the section title and subtitle', () => {
    render(<OtherFeatures />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Features That Can Avail By Everyone' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Everything you need to start learning/)).toBeInTheDocument()
  })

  it('renders six feature cards with icons', () => {
    render(<OtherFeatures />)

    for (const title of [
      'Lifetime Access',
      'Source File Included',
      'Student Membership',
      '35000+ Courses',
      'Expert Mentors',
      'Live Supports',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(document.querySelectorAll('section svg')).toHaveLength(6)
  })
})
