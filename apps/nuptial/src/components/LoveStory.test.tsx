import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LoveStory } from './LoveStory'

describe('LoveStory', () => {
  it('shows the heading and the four milestones in order', () => {
    render(<LoveStory />)
    expect(screen.getByRole('heading', { name: 'Love Story' })).toBeInTheDocument()
    const titles = ['First We Meet', 'First Date', 'In A Relationship', "We're Engaged"]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    const dates = ['June 10, 2017', 'June 14, 2017', 'May. 10, 2019']
    for (const date of dates) {
      expect(screen.getAllByText(date).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders a round photo badge for every milestone', () => {
    const { container } = render(<LoveStory />)
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })

  it('alternates the panels between the left and right sides', () => {
    render(<LoveStory />)
    const first = screen.getByRole('heading', { name: 'First We Meet' })
    const second = screen.getByRole('heading', { name: 'First Date' })
    expect(first.closest('[class*="md:flex-row-reverse"]')).toBeNull()
    expect(second.closest('[class*="md:flex-row-reverse"]')).not.toBeNull()
  })
})
