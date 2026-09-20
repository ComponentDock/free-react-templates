import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section heading', () => {
    render(<News />)
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<News />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<News />)
    expect(
      screen.getByRole('heading', { name: 'Why Online Learning is the Future' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Tips for Effective Study Habits' }),
    ).toBeInTheDocument()
  })
})
