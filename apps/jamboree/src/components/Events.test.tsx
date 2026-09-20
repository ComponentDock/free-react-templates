import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByText('Upcoming Events')).toBeDefined()
  })

  it('renders all six event cards', () => {
    render(<Events />)
    const events = [
      'Building Scalable Systems',
      'AI in Product Design',
      'Remote Team Leadership',
      'Open Source Sustainability',
      'Web Performance Workshop',
      'Design Systems at Scale',
    ]
    for (const title of events) {
      expect(screen.getByText(title)).toBeDefined()
    }
  })

  it('renders like and comment counts', () => {
    render(<Events />)
    expect(screen.getByText('24 likes')).toBeDefined()
    expect(screen.getByText('8 comments')).toBeDefined()
  })

  it('links to the upcoming event section', () => {
    render(<Events />)
    const section = screen.getByText('Upcoming Events').closest('section')
    expect(section?.id).toBe('upcoming-event')
  })
})
