import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Season 4 Episode 48 available/)).toBeInTheDocument()
  })

  it('renders tag pills', () => {
    render(<Hero />)
    expect(screen.getByText('lifestyle')).toBeInTheDocument()
    expect(screen.getByText('interview')).toBeInTheDocument()
    expect(screen.getByText('last episode')).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Check out my latest podcast/)).toBeInTheDocument()
  })

  it('renders track info', () => {
    render(<Hero />)
    expect(screen.getByText('September 24, 2024')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getAllByText('56:40').length).toBe(2) // track info + player
    expect(screen.getByText('0 Comments')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Play episode')).toBeInTheDocument()
  })

  it('renders More Info button', () => {
    render(<Hero />)
    expect(screen.getByText('More Info')).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const bg = document.querySelector('[style*="background-image"]')
    expect(bg).toBeTruthy()
  })
})
