import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero text and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome To Opulux')).toBeInTheDocument()
    expect(screen.getByText('Hotels & Resorts')).toBeInTheDocument()
    expect(screen.getByText('Enjoy A Luxury Experience')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join With Us' })).toBeInTheDocument()
  })
})
