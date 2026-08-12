import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'
import { EVENTS } from '../data'

describe('Events', () => {
  it('renders the heading and three event cards', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2, name: 'Upcoming Events' })).toBeInTheDocument()
    for (const event of EVENTS) {
      expect(screen.getByRole('heading', { level: 3, name: event.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('19')).toHaveLength(3)
    expect(screen.getAllByText('APR')).toHaveLength(3)
    expect(
      screen.getAllByText(
        (_content, element) => element?.textContent === 'Organized by: Noah Henderson',
      ),
    ).toHaveLength(3)
    expect(screen.getAllByText(EVENTS[0]!.location)).toHaveLength(3)
  })
})
