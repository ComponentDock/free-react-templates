import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stats } from './Stats'
import { counters } from '../data'

describe('Stats', () => {
  it('renders the coral band with a playable video block', () => {
    render(<Stats />)

    const section = screen.getByTestId('stats')
    expect(section).toHaveAttribute('id', 'about-section')
    expect(section.className).toContain('bg-brand')

    const playLink = screen.getByRole('link', { name: 'Play video' })
    expect(playLink).toHaveAttribute('href', 'https://vimeo.com/45830194')
    expect(playLink.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/veinly-video/1200/675',
    )
  })

  it('renders the four counters with final values and captions', () => {
    render(<Stats />)

    const rendered = screen.getAllByTestId('counter')
    expect(rendered).toHaveLength(4)

    for (const counter of counters) {
      expect(screen.getByText(counter.value)).toBeInTheDocument()
      expect(screen.getByText(counter.caption)).toBeInTheDocument()
    }
  })
})
