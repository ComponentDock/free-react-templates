import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the eyebrow and the display title', () => {
    render(<Header />)

    expect(screen.getByText('Field guides \u00b7 2026 edition')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Where to go when the season turns' }),
    ).toBeInTheDocument()
  })

  it('wraps the title at 640px with a clamped 30-52px size', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.className).toContain('max-w-[640px]')
    expect(heading.className).toContain('text-[clamp(30px,4.4vw,52px)]')
    expect(heading.className).toContain('leading-[1.02]')
    expect(heading.className).toContain('tracking-[-.035em]')
  })

  it('keeps the eyebrow in the lime accent and leaves the right side empty', () => {
    const { container } = render(<Header />)

    const eyebrow = screen.getByText('Field guides \u00b7 2026 edition')
    expect(eyebrow.className).toContain('text-accent')
    expect(eyebrow.className).toContain('text-sm')
    expect(container.querySelectorAll('a, button, img')).toHaveLength(0)
  })
})
