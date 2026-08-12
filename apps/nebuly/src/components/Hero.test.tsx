import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, subtext with a highlighted number, and green CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Cloud Services')).toHaveClass('text-white/80')
    expect(screen.getByRole('heading', { level: 1, name: 'Cloud, Management, Template' }))
    const paragraph = screen.getByText(/Far far away, behind the word mountains/)
    expect(paragraph).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toHaveClass('text-accent')
    const cta = screen.getByRole('link', { name: 'Get in touch' })
    expect(cta).toHaveClass('bg-accent')
  })

  it('lays the illustration out beside the text on wide viewports', () => {
    const { container } = render(<Hero />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', expect.stringMatching(/picsum\.photos\/seed\/nebuly-hero/))
    expect(container.querySelector('section')?.className).toContain('bg-brand')
  })
})
