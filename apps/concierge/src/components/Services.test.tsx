import { fireEvent, render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders the heading and all six feature cards with icons and links', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/ })).toBeInTheDocument()
    const headings = screen.getAllByRole('heading', { level: 3, hidden: true })
    expect(headings).toHaveLength(6)
    for (const service of SERVICES) {
      expect(screen.getByText(service.title)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Learn More', hidden: true })).toHaveLength(6)
    // 70px teal line icons (one per card, 6 svgs)
    const card = headings[0]!.closest('article')!
    expect(card.querySelector('svg')).not.toBeNull()
  })

  it('shows the first three cards initially and masks the rest', () => {
    render(<Services />)
    const articles = document.querySelectorAll('article')
    expect(articles).toHaveLength(6)
    expect(articles[0]).not.toHaveAttribute('aria-hidden')
    expect(articles[1]).not.toHaveAttribute('aria-hidden')
    expect(articles[2]).not.toHaveAttribute('aria-hidden')
    expect(articles[3]).toHaveAttribute('aria-hidden', 'true')
    expect(articles[5]).toHaveAttribute('aria-hidden', 'true')
  })

  it('advances one card on next and wraps back on prev', () => {
    render(<Services />)
    const next = screen.getByRole('button', { name: 'Next services' })
    const prev = screen.getByRole('button', { name: 'Previous services' })
    const articles = document.querySelectorAll('article')

    fireEvent.click(next) // index 1 → window 1..3
    expect(articles[0]).toHaveAttribute('aria-hidden', 'true')
    expect(articles[3]).not.toHaveAttribute('aria-hidden')

    fireEvent.click(next) // index 2 → window 2..4
    expect(articles[1]).toHaveAttribute('aria-hidden', 'true')
    expect(articles[4]).not.toHaveAttribute('aria-hidden')

    fireEvent.click(next) // index 3 → window 3..5
    expect(articles[2]).toHaveAttribute('aria-hidden', 'true')
    expect(articles[5]).not.toHaveAttribute('aria-hidden')

    fireEvent.click(next) // wraps to index 0
    expect(articles[0]).not.toHaveAttribute('aria-hidden')
    expect(articles[5]).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(prev) // wraps back to index 3
    expect(articles[3]).not.toHaveAttribute('aria-hidden')
    expect(articles[0]).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(prev) // index 2
    fireEvent.click(prev) // index 1
    fireEvent.click(prev) // index 0
    expect(articles[0]).not.toHaveAttribute('aria-hidden')
    expect(articles[3]).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies the travel service titles in the reference order', () => {
    render(<Services />)
    const titles = [...document.querySelectorAll('h3')].map((h) => h.textContent)
    expect(titles).toEqual([
      'Trekking',
      'The Map',
      'Suitcase',
      'Island Hoping',
      'World Round',
      'Travel with Plane',
    ])
  })
})
