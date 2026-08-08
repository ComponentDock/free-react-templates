import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('shows the eyebrow, heading and subcopy', () => {
    render(<Categories />)

    expect(screen.getByText('Explore Our Top Categories')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Browse by category' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Find the perfect course/)).toBeInTheDocument()
  })

  it('shows the eight category cards with counts', () => {
    render(<Categories />)

    for (const title of [
      'Web Development',
      'Data Science',
      'UI/UX Design',
      'Business',
      'Digital Marketing',
      'Mobile Development',
      'Cloud & DevOps',
      'Photography',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }

    expect(screen.getByText('156 courses')).toBeInTheDocument()
    expect(screen.getByText('124 courses')).toBeInTheDocument()
    expect(screen.getByText('112 courses')).toBeInTheDocument()
  })
})
