import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { SERVICES } from '../content'

describe('Services', () => {
  it('renders the four/eight split with a serif h2 and its intro', () => {
    render(<Services />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(SERVICES.heading)
    expect(heading).toHaveClass('font-serif', 'text-3xl', 'sm:text-4xl', 'text-ink-800')
    expect(screen.getByText(SERVICES.intro)).toHaveClass('text-ink-500')
    expect(document.querySelector('section')).toHaveAttribute('id', 'services')
  })

  it('prices six services in a dl with a rule between rows only', () => {
    const { container } = render(<Services />)
    const list = container.querySelector('dl') as HTMLElement
    expect(list).toBeInTheDocument()

    const rows = container.querySelectorAll('[data-price-row]')
    expect(rows).toHaveLength(6)
    expect(rows[0]).not.toHaveClass('border-t')
    for (const row of Array.from(rows).slice(1)) {
      expect(row).toHaveClass('border-t', 'border-ink-100', 'py-5')
    }
  })

  it('keeps the two non-numeric prices without a dollar sign', () => {
    render(<Services />)
    expect(screen.getByText('From $110')).toHaveClass(
      'uppercase',
      'tracking-wider',
      'text-primary-700',
    )
    expect(screen.getByText('Quoted on site')).toBeInTheDocument()
    expect(screen.getByText('No charge')).toBeInTheDocument()
    expect(screen.queryByText('$Quoted on site')).toBeNull()
    expect(screen.getByText(SERVICES.note)).toHaveClass('text-sm', 'text-ink-400')
  })

  it('names each service in Playfair over an Inter description', () => {
    render(<Services />)
    const term = screen.getByText('Crawl space and freeze damage')
    expect(term.tagName).toBe('DT')
    expect(term).toHaveClass('font-serif', 'text-xl', 'font-semibold')
    expect(term.nextElementSibling?.tagName).toBe('DD')
  })
})
