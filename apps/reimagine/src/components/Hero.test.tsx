import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /We grow money, Guaranteed/i })).toBeInTheDocument()
    expect(screen.getByText('Re-imagining the way')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })
})
