import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_BADGE, ABOUT_BUTTON_LABEL, ABOUT_PARAGRAPH, ABOUT_TITLE, COUNTERS } from '../data'

describe('About', () => {
  it('renders the photo block with the since badge', () => {
    const { container } = render(<About />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(1)
    expect(images[0]?.getAttribute('src')).toContain('caritas-about')

    expect(screen.getByText(ABOUT_BADGE.value)).toBeInTheDocument()
    expect(screen.getByText(ABOUT_BADGE.label)).toBeInTheDocument()
  })

  it('renders the heading, paragraph and 3 counters with final values', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(ABOUT_TITLE) }),
    ).toBeInTheDocument()
    expect(screen.getByText(ABOUT_PARAGRAPH)).toBeInTheDocument()

    for (const counter of COUNTERS) {
      expect(screen.getByText(`${counter.value}${counter.suffix}`)).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })

  it('renders the centered gradient learn-more button', () => {
    render(<About />)

    const button = screen.getByRole('link', { name: ABOUT_BUTTON_LABEL })
    expect(button).toHaveAttribute('href', '#causes')
    expect(button.className).toContain(
      'linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)',
    )
    expect(button.closest('div')?.className).toContain('text-center')
  })
})
