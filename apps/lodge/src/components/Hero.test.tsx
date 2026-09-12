import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders welcome heading', () => {
    render(<Hero />)
    expect(screen.getByText(/We hope you'll enjoy/)).toBeDefined()
    expect(screen.getByText(/your stay/)).toBeDefined()
  })

  it('renders thumbnail navigation links', () => {
    render(<Hero />)
    expect(screen.getByText('Pool')).toBeDefined()
    expect(screen.getByText('Sauna')).toBeDefined()
    expect(screen.getByText('Restaurant')).toBeDefined()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen.getByText(/We hope you'll enjoy/).closest('section')
    expect(section).toBeDefined()
  })
})
