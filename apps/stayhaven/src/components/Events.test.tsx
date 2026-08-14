import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'
import { EVENTS } from '../data'

describe('Events', () => {
  it('renders the heading and all three post cards', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { level: 2, name: 'Events' })).toBeInTheDocument()

    for (const post of EVENTS) {
      expect(screen.getAllByText(post.date).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })
})
