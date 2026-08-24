import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the heading and 8 category cards with "View Courses" links', () => {
    render(<Categories />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Explore top categories' }),
    ).toBeInTheDocument()

    const viewCoursesLinks = screen.getAllByText('View Courses')
    expect(viewCoursesLinks).toHaveLength(8)

    const categories = [
      'Programming',
      'VFX',
      'App Development',
      'Technology',
      'Graphics Design',
      'Music',
      'Product Design',
      'Video Editing',
    ]
    for (const name of categories) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
