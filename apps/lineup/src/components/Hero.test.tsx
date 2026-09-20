import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders countdown values', () => {
    render(<Hero />)

    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('08')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders heading and CTA', () => {
    render(<Hero />)

    expect(screen.getByText(/We have the best events/)).toBeInTheDocument()
    expect(screen.getByText('Order here')).toBeInTheDocument()
  })

  it('renders slide navigation arrows', () => {
    render(<Hero />)

    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })
})
