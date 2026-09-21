import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A Yoga Studio')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover inner peace/)).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<Hero />)
    expect(screen.getByText('Watch the video')).toBeInTheDocument()
  })

  it('has a link to the classes section', () => {
    render(<Hero />)
    const link = screen.getByText('Watch the video').closest('a')
    expect(link).toHaveAttribute('href', '#classes')
  })
})
