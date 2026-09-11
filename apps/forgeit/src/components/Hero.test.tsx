import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading', () => {
    render(<Hero />)
    expect(screen.getByText('We Love To Build')).toBeInTheDocument()
  })

  it('renders typed words text', () => {
    render(<Hero />)
    expect(screen.getByText('Web Apps')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /watch video/i })).toBeInTheDocument()
  })
})
