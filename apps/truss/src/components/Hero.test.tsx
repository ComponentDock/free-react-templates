import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, intro label, and read-more CTA', () => {
    render(<Hero />)
    expect(screen.getByText(/Intro/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Creates Smart Architecture\./i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Read more/i })).toHaveLength(2)
  })

  it('renders the three stat counters', () => {
    render(<Hero />)
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('159')).toBeInTheDocument()
    expect(screen.getByText('298')).toBeInTheDocument()
    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Number')).toBeInTheDocument()
  })

  it('renders the mission block with heading and read-more link', () => {
    render(<Hero />)
    expect(screen.getByText(/Mission/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Architectures for Complex Projects/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Read more/i })).toHaveLength(2)
  })

  it('renders two overlapping placeholder images', () => {
    render(<Hero />)
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
