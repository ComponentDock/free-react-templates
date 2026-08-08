import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('shows the eyebrow and heading', () => {
    render(<WhyUs />)

    expect(screen.getByText('Why Coursely')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'The Best Platform to Learn New Skills' }),
    ).toBeInTheDocument()
  })

  it('shows the four value-proposition cards', () => {
    render(<WhyUs />)

    for (const title of [
      'Learn at Your Pace',
      'Expert Instructors',
      'Hands-on Projects',
      'Certificates',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/Lifetime access to every course/)).toBeInTheDocument()
    expect(screen.getByText(/Learn from practitioners/)).toBeInTheDocument()
    expect(screen.getByText(/Build real portfolio projects/)).toBeInTheDocument()
    expect(screen.getByText(/Earn shareable certificates/)).toBeInTheDocument()
  })
})
