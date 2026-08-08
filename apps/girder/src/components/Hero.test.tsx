import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, buttons, and hero image', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /We Are Girder/i })).toBeInTheDocument()
    expect(screen.getByText(/far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /See our projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Watch our video/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /building facade/i })).toBeInTheDocument()
  })
})
