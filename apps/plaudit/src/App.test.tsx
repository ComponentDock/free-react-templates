import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one band and one footer line, nothing else', () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('figure')).toHaveLength(3)
  })

  it('keeps the band and the footer on the warm paper ground', () => {
    const { container } = render(<App />)

    expect(container.firstElementChild).toHaveClass('bg-paper', 'text-ink', 'font-sans')
  })

  it('places the footer after the band so the testimonial row is the whole page', () => {
    const { container } = render(<App />)

    const root = container.firstElementChild!
    expect(root.children[0]?.tagName).toBe('MAIN')
    expect(root.children[1]?.tagName).toBe('FOOTER')
  })

  it('ships no photograph, no script and no form control', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('script')).toHaveLength(0)
    expect(container.querySelectorAll('input')).toHaveLength(0)
    expect(container.querySelectorAll('button')).toHaveLength(0)
  })

  it('offers exactly one tab stop: the Component Dock line', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
