import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading as an h1', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Stories That Inspire Action/)
  })

  it('shows the new-episode badge and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('New Episode Every Tuesday')).toBeInTheDocument()
    expect(screen.getByText(/Deep-dive conversations with the founders/)).toBeInTheDocument()
  })

  it('renders the Listen Latest Episode and Subscribe CTAs with anchors', () => {
    render(<Hero />)
    const listen = screen.getByRole('link', { name: /Listen Latest Episode/ })
    expect(listen).toHaveAttribute('href', '#episodes')
    const subscribe = screen.getByRole('link', { name: /Subscribe/ })
    expect(subscribe).toHaveAttribute('href', '#newsletter')
  })

  it('lists the streaming platforms', () => {
    render(<Hero />)
    expect(screen.getByText('Spotify')).toBeInTheDocument()
    expect(screen.getByText('Apple Podcasts')).toBeInTheDocument()
    expect(screen.getByText('Google Podcasts')).toBeInTheDocument()
    expect(screen.getByText('YouTube')).toBeInTheDocument()
  })

  it('renders the stats strip', () => {
    render(<Hero />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Episodes')).toBeInTheDocument()
    expect(screen.getByText('2M+')).toBeInTheDocument()
    expect(screen.getByText('Downloads')).toBeInTheDocument()
    expect(screen.getByText('Top 50')).toBeInTheDocument()
    expect(screen.getByText('Tech Podcast')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText('Rating')).toBeInTheDocument()
  })
})
