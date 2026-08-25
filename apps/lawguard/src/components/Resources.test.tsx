import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Resources } from './Resources'

describe('Resources', () => {
  it('renders section heading', () => {
    render(<Resources />)
    expect(screen.getByText('Resources')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<Resources />)
    const texts = screen.getAllByText(/a small river named duden/i)
    expect(texts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders resource links in three columns', () => {
    render(<Resources />)
    expect(
      screen.getByText('Vitae vero perspiciatis, eveniet accusamus quam, dolores!'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Lorem ipsum dolor sit amet, consectetur, adipisicing.'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Facere libero voluptates suscipit molestiae perspiciatis iusto.'),
    ).toBeInTheDocument()
  })

  it('renders Peace & order sub-section', () => {
    render(<Resources />)
    expect(screen.getByText(/peace.*order/i)).toBeInTheDocument()
    expect(screen.getByText('Read more →')).toBeInTheDocument()
  })

  it('renders peace image', () => {
    render(<Resources />)
    const img = screen.getByRole('img', { name: /peace and order/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('lawguard-peace'))
  })
})
