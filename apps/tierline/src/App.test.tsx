import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one band and one footer line, nothing else', () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('keeps the band and the footer on the near-black ground', () => {
    const { container } = render(<App />)

    expect(container.firstElementChild).toHaveClass('bg-night', 'text-plate-ink')
  })

  it('places the footer after the band so the pricing row stays the whole page', () => {
    const { container } = render(<App />)

    const root = container.firstElementChild!
    expect(root.children[0]?.tagName).toBe('MAIN')
    expect(root.children[1]?.tagName).toBe('FOOTER')
  })

  it('ships no photograph and no script-driven behaviour', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('script')).toHaveLength(0)
    expect(container.querySelectorAll('input')).toHaveLength(0)
  })

  it('offers exactly four tab stops: three CTAs and the footer link', () => {
    render(<App />)

    expect(screen.getAllByRole('link')).toHaveLength(4)
    screen.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('href')).toBeTruthy()
      expect(link.getAttribute('href')).not.toBe('#')
    })
  })
})
