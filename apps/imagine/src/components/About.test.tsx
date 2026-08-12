import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('sits on a photo background with a dark overlay', () => {
    const { container } = render(<About />)

    const section = screen.getByRole('region', { name: 'About' }) as HTMLElement
    expect(section).toHaveClass('bg-cover', 'bg-center')
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/imagine-about-bg')
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('bg-black/50')
  })

  it('shows the heading, paragraph, and two outline buttons on the left', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We can be your digital Problems Solution Partner',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/our team turns complex problems/i)).toBeInTheDocument()

    const offer = screen.getByRole('link', { name: 'What we offer' })
    const quote = screen.getByRole('link', { name: 'Get a free quote' })
    for (const button of [offer, quote]) {
      expect(button).toHaveClass('rounded-full', 'border-white')
    }
  })

  it('shows a photo on the right and stacks on narrow viewports', () => {
    const { container } = render(<About />)

    const img = container.querySelector('img')
    expect(img).not.toBeNull()
    expect(img?.getAttribute('src')).toContain('picsum.photos/seed/imagine-about/')

    const grid = container.querySelector('.grid') as HTMLElement
    expect(grid).not.toBeNull()
    expect(grid).toHaveClass('grid', 'lg:grid-cols-2')
  })
})
