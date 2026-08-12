import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section title and three article cards with meta, title and blurb', () => {
    const { container } = render(<Blog />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Latest Blog/)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)

    const first = cards[0]!
    expect(within(first).getByText('12 Jun, 2019')).toBeInTheDocument()
    expect(within(first).getByText('in Design tips')).toBeInTheDocument()
    expect(
      within(first).getByRole('heading', { name: 'Commitment to dedicated Support' }),
    ).toBeInTheDocument()
    expect(within(first).getByText(/Firmament morning sixth/)).toBeInTheDocument()
  })
})
