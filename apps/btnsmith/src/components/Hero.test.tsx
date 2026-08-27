import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders title and description', () => {
    render(<Hero />)
    expect(screen.getByText('Button #07 Collection & Effects')).toBeInTheDocument()
    expect(screen.getByText(/A comprehensive suite of modern UI buttons/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Buttons/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toBeInTheDocument()
  })
})
