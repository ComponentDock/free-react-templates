import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders subtitle, heading, tagline, and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Pest Control')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Keep your House clean/i)
    expect(screen.getByText(/Trusted\. Experienced\. Dedicated\./)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/ })).toBeInTheDocument()
  })

  it('renders section with background image style', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toBeTruthy()
    expect(section!.getAttribute('style')).toContain('picsum.photos')
  })
})
