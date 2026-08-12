import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('sits on a full-width background photo with a dark overlay', () => {
    const { container } = render(<Hero />)

    const section = screen.getByRole('region', { name: 'Hero' }) as HTMLElement
    expect(section).toHaveClass('bg-cover', 'bg-center')
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/imagine-grow')
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('bg-black/40')
  })

  it('shows the thin headline with bold emphasized spans', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('We Provide Solutions that Brings Joy')
    const spans = heading.querySelectorAll('span')
    expect(spans).toHaveLength(2)
    expect(spans[0]).toHaveTextContent('Solutions')
    expect(spans[1]).toHaveTextContent('Joy')
    for (const span of spans) {
      expect(span).toHaveClass('font-bold')
    }
    expect(heading).toHaveClass('font-thin')
  })

  it('shows the gradient Hire Us Now! button', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: 'Hire Us Now!' })
    expect(cta).toHaveAttribute('href', '#service')
    expect(cta).toHaveClass('bg-gradient-to-r', 'from-brand-start', 'to-brand-end')
  })

  it('right-aligns on wide viewports and centers on narrow ones', () => {
    render(<Hero />)

    expect(screen.getByRole('region', { name: 'Hero' })).toHaveClass('justify-end')
    const content = screen.getByText('Hire Us Now!').closest('div')
    expect(content).toHaveClass('text-center', 'lg:text-right')
  })
})
