import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the eyebrow, divider, heading, copy, and Learn More button', () => {
    render(<About />)

    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(document.querySelector('.bg-black')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /We Are Design Agency/ }),
    ).toHaveTextContent('Design Agency')
    expect(screen.getAllByText(/Lorem ipsum/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })

  it('renders an image with an offset shadow', () => {
    const { container } = render(<About />)

    const img = screen.getByRole('img', { name: /design team/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/forge-2/'))
    expect(container.querySelector('figure')).toHaveClass('shadow-[10px_10px_0_#eee]')
  })
})
