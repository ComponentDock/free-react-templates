import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and description', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /meet all your investigative/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Our services')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<Hero />)
    const img = document.querySelector('img[src*="lawguard-hero"]') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('lawguard-hero')
  })

  it('has a section with id home', () => {
    render(<Hero />)
    expect(document.getElementById('home')).toBeInTheDocument()
  })
})
