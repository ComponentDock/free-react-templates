import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Open the world of music/)
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Intuitive. Powerful. Runs everywhere')).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Download For Desktop')).toBeInTheDocument()
    expect(screen.getByText('Download For Mobile')).toBeInTheDocument()
  })

  it('renders the app screenshot image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Sonority desktop app screenshot')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has the dark gradient background', () => {
    render(<Hero />)
    const section = document.getElementById('home')!
    expect(section).toBeInTheDocument()
    expect(section.className).toContain('from-[#161a1a]')
  })
})
