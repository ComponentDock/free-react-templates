import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders Breaking News badge', () => {
    render(<Hero />)
    expect(screen.getByText('Breaking News')).toBeInTheDocument()
  })

  it('renders International badge', () => {
    render(<Hero />)
    expect(screen.getByText('International')).toBeInTheDocument()
  })

  it('renders ticker headlines', () => {
    render(<Hero />)
    expect(screen.getByText(/Global markets rally/)).toBeInTheDocument()
  })

  it('renders the ad placeholder', () => {
    render(<Hero />)
    expect(screen.getByText('Advertisement')).toBeInTheDocument()
  })
})
