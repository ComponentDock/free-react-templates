import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Press } from './Press'
import { pressItems } from '../data'

describe('Press', () => {
  it('renders the eyebrow, heading and three article items', () => {
    render(<Press />)

    expect(screen.getByText('Press Releases')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Press')

    for (const item of pressItems) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.date)).toBeInTheDocument()
      expect(screen.getByText(item.excerpt)).toBeInTheDocument()
    }
  })

  it('links each title with a coral hover treatment', () => {
    render(<Press />)

    const first = pressItems[0]
    expect(first).toBeDefined()
    const titleLink = screen.getByRole('link', { name: first?.title ?? '' })
    expect(titleLink.className).toContain('hover:text-brand')
  })
})
