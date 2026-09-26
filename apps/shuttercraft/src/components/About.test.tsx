import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Great Photography Tells a Story/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the descriptive paragraph', () => {
    render(<About />)
    expect(screen.getByText(/Every photograph holds a narrative/)).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: 'Photographer portrait' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('renders the hire me button linking to contact', () => {
    render(<About />)
    const btn = screen.getByText('Hire Me Now')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('a')).toHaveAttribute('href', '#contact')
  })

  it('has the about section id', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })
})
