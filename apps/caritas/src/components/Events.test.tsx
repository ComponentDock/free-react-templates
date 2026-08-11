import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'
import { EVENTS, EVENTS_TITLE } from '../data'

describe('Events', () => {
  it('renders the title and 4 event rows with thumbs, titles and descriptions', () => {
    const { container } = render(<Events />)

    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(EVENTS_TITLE) }),
    ).toBeInTheDocument()

    const rows = container.querySelectorAll('ul > li')
    expect(rows).toHaveLength(4)

    const thumbs = container.querySelectorAll('li img')
    expect(thumbs).toHaveLength(4)
    expect(thumbs[0]?.getAttribute('src')).toContain('caritas-event-1')

    for (const event of EVENTS) {
      expect(screen.getByRole('heading', { level: 3, name: event.title })).toBeInTheDocument()
      expect(screen.getByText(event.description)).toBeInTheDocument()
    }
  })
})
