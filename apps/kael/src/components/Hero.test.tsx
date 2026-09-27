import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the greeting and name', () => {
    render(<Hero />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('I am Kael')).toBeInTheDocument()
  })

  it('renders the role subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Senior Developer')).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /hire me/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get cv/i })).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<Hero />)
    expect(screen.getByAltText('Portrait of Kael')).toBeInTheDocument()
  })
})
