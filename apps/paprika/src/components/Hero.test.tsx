import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders welcome text and heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome To Our')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Paprika')
  })

  it('renders subtitle and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('A Premium Restaurant Theme')).toBeInTheDocument()
    expect(screen.getByText('View Menu')).toBeInTheDocument()
  })

  it('links View Menu to menu section', () => {
    render(<Hero />)
    expect(screen.getByText('View Menu').closest('a')).toHaveAttribute('href', '#menu')
  })
})
