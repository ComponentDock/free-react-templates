import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { ACCORDION_ITEMS } from './data'

describe('App', () => {
  it('renders the source page heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Bootstrap Accordion #2')
    expect(heading.className).toContain('text-center')
  })

  it('renders all three accordion rows', () => {
    render(<App />)
    for (const item of ACCORDION_ITEMS) {
      expect(screen.getByRole('button', { name: item.question })).toBeInTheDocument()
    }
  })

  it('opens the first row by default, like the source snippet', () => {
    render(<App />)
    const [first] = ACCORDION_ITEMS
    expect(screen.getByRole('button', { name: first!.question })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('region', { name: first!.question })).toBeInTheDocument()
  })

  it('keeps the desktop page rhythm from the source stylesheet', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')!
    expect(main.className).toContain('py-28')
    expect(container.querySelector('[class*="max-w-[960px]"]')).not.toBeNull()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Plisse — Interactive Accordion Template')
  })
})
