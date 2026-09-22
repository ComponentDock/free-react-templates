import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to')).toBeDefined()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Grandeur')
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Experience luxury hospitality/)).toBeDefined()
  })

  it('renders the play button with accessible label', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Play introduction video')).toBeDefined()
  })

  it('renders the background image', () => {
    render(<Hero />)
    const bgImg = document.querySelector('img[src*="grandeur-hero"]') as HTMLImageElement
    expect(bgImg).toBeDefined()
    expect(bgImg.getAttribute('aria-hidden')).toBe('true')
  })
})
