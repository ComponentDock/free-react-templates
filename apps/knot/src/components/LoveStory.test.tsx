import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LoveStory } from './LoveStory'
import { brideCard, groomCard, loveStoryTitle, socialLinks, timelineSteps } from '../data'

describe('LoveStory', () => {
  it('renders the section title and the groom and bride cards', () => {
    const { container } = render(<LoveStory />)
    expect(screen.getByRole('heading', { level: 2, name: loveStoryTitle })).toBeInTheDocument()
    expect(screen.getByText(groomCard.label)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: groomCard.name })).toBeInTheDocument()
    expect(screen.getByText(brideCard.label)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: brideCard.name })).toBeInTheDocument()

    const portraits = container.querySelectorAll('img')
    expect(portraits).toHaveLength(2)
    expect(portraits[0]).toHaveAttribute('src', groomCard.image)
    expect(portraits[1]).toHaveAttribute('src', brideCard.image)
  })

  it('renders the four timeline steps', () => {
    render(<LoveStory />)
    for (const step of timelineSteps) {
      expect(screen.getByRole('heading', { name: step.title })).toBeInTheDocument()
    }
  })

  it('renders three social icon links per couple card', () => {
    render(<LoveStory />)
    const total = socialLinks.length * 2
    const links = screen.getAllByRole('link')
    for (const social of socialLinks) {
      const matches = links.filter((link) => link.getAttribute('aria-label') === social.label)
      expect(matches).toHaveLength(2)
      expect(matches[0]).toHaveAttribute('href', social.href)
    }
    expect(
      screen.getAllByRole('link').filter((link) => link.getAttribute('aria-label')),
    ).toHaveLength(total)
  })
})
