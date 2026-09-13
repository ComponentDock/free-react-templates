import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Shows } from './Shows'

describe('Shows', () => {
  it('renders three episode cards', () => {
    render(<Shows />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders episode dates', () => {
    render(<Shows />)
    const dates = screen.getAllByText('24 September, 2024')
    expect(dates.length).toBe(3)
  })

  it('renders episode titles', () => {
    render(<Shows />)
    expect(screen.getByText(/The art of sound design/)).toBeInTheDocument()
    expect(screen.getByText(/Exploring new audio/)).toBeInTheDocument()
    expect(screen.getByText(/Behind the scenes/)).toBeInTheDocument()
  })

  it('renders favorite counts', () => {
    render(<Shows />)
    const favs = screen.getAllByText('2,371')
    expect(favs.length).toBe(3)
  })

  it('renders comment counts', () => {
    render(<Shows />)
    const comments = screen.getAllByText(/88 Comments/)
    expect(comments.length).toBe(3)
  })

  it('renders Browse Shows button', () => {
    render(<Shows />)
    expect(screen.getByText('Browse Shows')).toBeInTheDocument()
  })

  it('renders tag labels', () => {
    render(<Shows />)
    const musicTags = screen.getAllByText('Music')
    expect(musicTags.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Experiment')).toBeInTheDocument()
  })
})
