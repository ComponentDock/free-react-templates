import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

const TODAY = new Date(2026, 5, 5)

describe('App', () => {
  it('renders one banner, one main, one contentinfo and a single h1', () => {
    render(<App today={TODAY} />)

    expect(screen.getAllByRole('banner')).toHaveLength(1)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('puts the skip link first and points it at the main landmark', () => {
    const { container } = render(<App today={TODAY} />)

    const firstLink = container.querySelector('a')
    expect(firstLink).toHaveAttribute('href', '#main-content')
    expect(firstLink).toHaveTextContent('Skip to content')
    expect(container.querySelector('#main-content')).toBeInTheDocument()
  })

  it('renders the ten bands in reference order', () => {
    const { container } = render(<App today={TODAY} />)

    const ids = Array.from(container.querySelectorAll('main section[id]')).map(
      (section) => section.id,
    )
    expect(ids).toEqual([
      'seasons',
      'why-us',
      'process',
      'plans',
      'areas',
      'reviews',
      'faq',
      'contact',
    ])
    expect(screen.getByRole('heading', { name: 'Book a technician' })).toBeInTheDocument()
  })

  it('falls back to the real clock when no date is injected', () => {
    render(<App />)

    const dayChips = screen.getAllByRole('radio', { name: /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) / })
    expect(dayChips).toHaveLength(7)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
