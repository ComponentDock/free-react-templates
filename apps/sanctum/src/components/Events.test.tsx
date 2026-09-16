import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'
import { events } from '../data'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our latest events')
  })

  it('renders all event entries with unique titles', () => {
    render(<Events />)
    events.forEach((e) => {
      expect(screen.getByText(e.title)).toBeInTheDocument()
    })
  })

  it('renders date badges', () => {
    render(<Events />)
    events.forEach((e) => {
      expect(screen.getByText(String(e.day))).toBeInTheDocument()
    })
  })

  it('renders the View Events CTA', () => {
    render(<Events />)
    expect(screen.getByRole('link', { name: 'View Events' })).toBeInTheDocument()
  })
})
