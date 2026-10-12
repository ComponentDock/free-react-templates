import { render, screen, within } from '@testing-library/react'
import { ARRANGEMENT, ARRANGEMENT_HEADING } from '../lib/site'
import { Arrangement } from './Arrangement'

describe('the arrangement band', () => {
  it('runs four cards, each with a photograph, a title and a line of copy', () => {
    const { container } = render(<Arrangement />)

    expect(screen.getByRole('heading', { name: ARRANGEMENT_HEADING })).toBeInTheDocument()

    const cards = Array.from(container.querySelectorAll('article'))
    const classes = cards.map((card) => (card.getAttribute('class') ?? ''))

    expect(cards).toHaveLength(4)
    expect(classes.every((tokens) => tokens.split(' ').includes('shadow-card'))).toBe(true)
    expect(container.querySelectorAll('img')).toHaveLength(4)

    for (const item of ARRANGEMENT) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.blurb)).toBeInTheDocument()
      expect(screen.getByAltText(item.alt)).toBeInTheDocument()
    }
  })

  it('prints the date, the time and the address under every card', () => {
    const { container } = render(<Arrangement />)

    for (const card of Array.from(container.querySelectorAll('article'))) {
      const lines = within(card)

      expect(lines.getByText('Date')).toBeInTheDocument()
      expect(lines.getByText('Time')).toBeInTheDocument()
      expect(lines.getByText('Address')).toBeInTheDocument()
    }

    for (const date of new Set(ARRANGEMENT.map((item) => item.date))) {
      expect(screen.getAllByText(date)).toHaveLength(ARRANGEMENT.length)
    }

    for (const item of ARRANGEMENT) {
      expect(screen.getByText(item.time)).toBeInTheDocument()
      expect(screen.getByText(item.address)).toBeInTheDocument()
    }

    expect(screen.getAllByText('Date')).toHaveLength(4)
    expect(screen.getAllByText('Time')).toHaveLength(4)
    expect(screen.getAllByText('Address')).toHaveLength(4)
  })
})
