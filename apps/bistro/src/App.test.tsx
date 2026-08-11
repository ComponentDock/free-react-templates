import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in the source order (1:1)', () => {
    const { container } = render(<App />)

    const sections = container.querySelectorAll('main section')
    expect(sections).toHaveLength(8)
    expect(sections[0]?.getAttribute('id')).toBe('home')
    expect(sections[1]?.getAttribute('id')).toBe('about')
    expect(sections[2]?.getAttribute('id')).toBe('menu')
    expect(sections[4]?.getAttribute('id')).toBe('booking')
    expect(sections[5]?.getAttribute('id')).toBe('services')
    expect(sections[7]?.getAttribute('id')).toBe('blog')

    // Sticky header above the main content, footer after it.
    expect(container.querySelector('header')).not.toBeNull()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the hero headline and the repeated family tagline', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Good food brings a great smile' }),
    ).toBeInTheDocument()
    // About, AboutSecond and Subscribe all reuse the source H2.
    expect(
      screen.getAllByRole('heading', { name: 'We provide good food for your family' }),
    ).toHaveLength(3)
  })

  it('renders the booking form and gallery captions', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2, name: 'Book A Table' })).toBeInTheDocument()
    expect(screen.getAllByText('Delicious Food')).toHaveLength(10)
    expect(screen.getAllByText('Best Chef')).toHaveLength(1)
  })
})
