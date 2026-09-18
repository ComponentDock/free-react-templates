import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders featured episode title', () => {
    render(<Hero />)
    expect(screen.getByText(/Episode 09/)).toBeInTheDocument()
  })

  it('renders author and date info', () => {
    render(<Hero />)
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
    expect(screen.getByText(/16 September 2024/)).toBeInTheDocument()
  })

  it('renders transcript button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /read the transcript/i })).toBeInTheDocument()
  })

  it('renders audio player indicator', () => {
    render(<Hero />)
    expect(screen.getByText(/Listen to this episode/)).toBeInTheDocument()
  })
})
