import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline and supporting text', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Medical Services that you can trust/)
  })

  it('renders the Read More CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /read more/i })
    expect(cta).toHaveAttribute('href', '#services')
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
