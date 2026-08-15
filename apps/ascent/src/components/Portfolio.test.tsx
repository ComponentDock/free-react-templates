import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and five work cards with hover overlays', () => {
    const { container } = render(<Portfolio />)

    const section = screen.getByRole('region', { name: 'Portfolio' })
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Featured Works' }),
    ).toBeInTheDocument()

    const cards = section.querySelectorAll('a.group')
    expect(cards).toHaveLength(5)
    expect(section.querySelectorAll('img')).toHaveLength(5)

    for (const title of [
      'Ascent Mobile App',
      'Orbit Rebrand',
      'Nimbus Dashboard',
      'Pulse Commerce',
      'Summit Launch',
    ]) {
      expect(within(section).getByText(title)).toBeInTheDocument()
    }

    expect(within(section).getAllByText('View')).toHaveLength(5)
    expect(container.querySelector('.md\\:col-span-2')).toBeInTheDocument()
  })
})
