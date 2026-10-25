import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroTicks } from '../data'

describe('Hero', () => {
  it('renders one h1 whose second sentence is a brand-coloured span', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('You got the letter. This takes twenty minutes.')

    const blue = heading.querySelector('span')
    expect(blue).toHaveTextContent('This takes twenty minutes.')
    expect(blue).toHaveClass('text-primary-600')
  })

  it('renders the four ticks as a list with decorative icons', () => {
    const { container } = render(<Hero />)

    const list = screen.getByRole('list', { name: '' })
    expect(list.querySelectorAll('li')).toHaveLength(4)

    for (const tick of heroTicks) {
      expect(screen.getByText(tick)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('ul svg[aria-hidden="true"]')).toHaveLength(4)
  })

  it('renders a labelled five-star rating beside the score', () => {
    render(<Hero />)

    expect(screen.getByRole('img', { name: 'Rated 4.9 out of 5' })).toBeInTheDocument()
    expect(screen.getByText('380+ reviews on Google · sample data')).toBeInTheDocument()
  })

  it('holds the quick-book card in the right-hand column', () => {
    const { container } = render(<Hero />)

    const quote = container.querySelector('#quote')
    expect(quote).not.toBeNull()
    expect(quote).toHaveClass('lg:col-span-5')
    expect(screen.getByRole('heading', { name: 'Book a test' })).toBeInTheDocument()
  })
})
