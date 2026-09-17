import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the conference year and title', () => {
    render(<Hero />)
    expect(screen.getByText('2025')).toBeInTheDocument()
    expect(screen.getByText('Marketing Conference')).toBeInTheDocument()
  })

  it('renders date and location', () => {
    render(<Hero />)
    expect(screen.getByText('12-16 February 2025')).toBeInTheDocument()
    expect(screen.getByText('Miami, FL')).toBeInTheDocument()
  })

  it('renders Get Tickets CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Get Tickets')).toBeInTheDocument()
  })

  it('renders slide dots', () => {
    render(<Hero />)
    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
    expect(screen.getByText('03.')).toBeInTheDocument()
  })
})
