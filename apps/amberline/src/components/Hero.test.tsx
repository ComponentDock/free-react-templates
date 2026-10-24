import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, an uppercase headline with an amber word and two square buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Since 1982')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('We will be happy to take care of your work')
    expect(heading.querySelector('.text-brand')).toHaveTextContent('happy')
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: /request a quote/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('keeps the fixed photo and charcoal wash behind the copy', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-fixed')
    expect(section?.className).toContain('h-screen')
    expect(section?.getAttribute('style')).toContain('picsum.photos/seed/amberline-hero')
    expect(container.querySelector('[aria-hidden="true"].bg-ink\\/60')).not.toBeNull()
  })
})
