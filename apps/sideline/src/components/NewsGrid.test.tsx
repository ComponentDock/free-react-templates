import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NewsGrid } from './NewsGrid'

describe('NewsGrid', () => {
  it('renders the section heading and three post cards', () => {
    render(<NewsGrid />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
    for (const title of [
      'Continental Final — Who Will Win?',
      'Transfer Window Roundup',
      'Supporters Trust Meets the Board',
    ]) {
      expect(screen.getByRole('link', { name: title })).toBeInTheDocument()
    }
  })

  it('renders uppercase bylines and excerpts', () => {
    render(<NewsGrid />)
    expect(screen.getByText(/By Alex Moreau • Sep 25, 2026/)).toBeInTheDocument()
    expect(screen.getByText(/Both managers talk tactics, rotation/i)).toBeInTheDocument()
  })
})
