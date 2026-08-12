import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LiveStreams } from './LiveStreams'

describe('LiveStreams', () => {
  it('shows the section heading and an install button', () => {
    render(<LiveStreams />)
    expect(screen.getByRole('heading', { name: /live stareams/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Install Now' })).toBeInTheDocument()
  })

  it('renders match cards with score, date, title and play button', () => {
    render(<LiveStreams />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('190 / 189')).toBeInTheDocument()
    expect(screen.getByText('27 june 2020')).toBeInTheDocument()
    expect(screen.getByText(/Open War Challenge/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /watch stream/i }).length).toBeGreaterThanOrEqual(2)
  })

  it('renders a cover image for each match card', () => {
    render(<LiveStreams />)
    const covers = screen.getAllByRole('img', { name: /stream cover/i })
    expect(covers.length).toBeGreaterThanOrEqual(2)
  })
})
