import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the two-line Philosophy heading (br collapses the name)', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2, name: /Our\s*Philosophy/ })
    expect(heading).toBeInTheDocument()
  })

  it('renders the founder attribution role above the name', () => {
    render(<About />)
    expect(screen.getByText('CEO, Consulto')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Capcilena Hanry' })).toBeInTheDocument()
  })

  it('renders both philosophy paragraphs and the split photo', () => {
    render(<About />)
    expect(
      screen.getByText(/The automated process starts as soon as your clothes/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Nunc ut sem vitae risus tristique posuere/)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Founder presenting the company philosophy/ }),
    ).toBeInTheDocument()
  })

  it('paints the peach strip behind the left edge of the photo', () => {
    const { container } = render(<About />)
    const strip = container.querySelector('span.bg-peach')
    expect(strip).toBeInTheDocument()
    expect(strip).toHaveAttribute('aria-hidden', 'true')
  })
})
