import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Shotwise')).toBeInTheDocument()
    expect(screen.getByText('Your best partner')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })
})
