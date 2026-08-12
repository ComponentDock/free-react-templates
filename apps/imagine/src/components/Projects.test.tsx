import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the centered heading with a short subtext', () => {
    render(<Projects />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest Project on the go' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders at least four project cards with an image, uppercase label, and caption', () => {
    const { container } = render(<Projects />)

    const section = screen.getByRole('region', { name: 'Projects' })
    const cards = within(section).getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(4)

    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    expect(images[0]?.getAttribute('src')).toContain('picsum.photos/seed/imagine-project-')

    const firstLabel = within(cards[0]!).getByRole('heading', { level: 3 })
    expect(firstLabel).toHaveTextContent('Vector Illustration')
    expect(firstLabel).toHaveClass('uppercase')
    expect(within(cards[0]!).getByText(/vector identity system/i)).toBeInTheDocument()
  })
})
