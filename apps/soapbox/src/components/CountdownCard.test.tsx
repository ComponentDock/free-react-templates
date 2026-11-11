import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { CARD, CTA, FACTS_ID, TARGET } from '../data/site'
import { CountdownCard } from './CountdownCard'

const AT_TARGET = Date.parse(TARGET)
const DAY = 86_400_000

describe('CountdownCard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(AT_TARGET - 8 * DAY - 3_600_000)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('labels itself with its own heading', () => {
    render(<CountdownCard />)

    const card = screen.getByRole('complementary')
    const heading = screen.getByRole('heading', { level: 2 })

    expect(card).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading).toHaveTextContent(CARD.title)
    expect(screen.getByText(CARD.chip)).toBeInTheDocument()
    expect(screen.getByRole('timer')).toBeInTheDocument()
  })

  it('prints the price with its struck comparison', () => {
    const { container } = render(<CountdownCard />)

    const price = container.querySelector('.sp-price')
    expect(price).toHaveTextContent(`${CARD.price} early bird · ${CARD.priceWas} from 1 January`)
    expect(container.querySelector('s')).toHaveTextContent(CARD.priceWas)
    expect(container.querySelector('strong')).toHaveTextContent(CARD.price)
  })

  it('offers the secondary link to the schedule', () => {
    render(<CountdownCard />)

    expect(screen.getByRole('link', { name: CARD.secondary })).toHaveAttribute(
      'href',
      `#${FACTS_ID}`,
    )
  })

  it('holds a seat when the CTA is used', () => {
    render(<CountdownCard />)

    expect(screen.queryByRole('status')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: CTA.label }))

    expect(screen.getByRole('button', { name: CTA.held })).toBeInTheDocument()
    expect(screen.getByText(CARD.chipHeld)).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(CARD.note)
  })

  it('reads "Doors are open" once the clock passes the target', () => {
    vi.setSystemTime(AT_TARGET + 60_000)
    render(<CountdownCard />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(CARD.open)
    expect(screen.getByRole('timer')).toHaveAttribute(
      'aria-label',
      'Doors are open',
    )
  })
})
