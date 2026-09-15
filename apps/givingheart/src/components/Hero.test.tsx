import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Waiting for Help')
  })

  it('renders the Donate Now button', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /donate now/i })
    expect(link).toHaveAttribute('href', '#donate')
  })

  it('has a background image', () => {
    render(<Hero />)
    const img = document.querySelector('#home img')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/givingheart-hero/1920/1080')
  })

  it('fills most of the viewport height', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')!
    expect(section.className).toContain('min-h-screen')
  })

  it('has a dark overlay over the background', () => {
    render(<Hero />)
    const overlay = document.querySelector('.bg-black\\/50')
    expect(overlay).toBeInTheDocument()
  })
})
