import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Knowledge } from './Knowledge'

describe('Knowledge', () => {
  it('renders all four feature cards', () => {
    render(<Knowledge />)
    const headings = [
      'Knowledge is power',
      'Senior High School',
      'College of Arts & Sciences',
      'Unmatched Professors',
    ]
    for (const heading of headings) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
  })

  it('renders Read More links for each card', () => {
    render(<Knowledge />)
    const links = screen.getAllByRole('link', { name: 'Read More' })
    expect(links).toHaveLength(4)
  })
})
