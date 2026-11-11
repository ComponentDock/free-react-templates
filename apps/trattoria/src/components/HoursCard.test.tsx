import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  CARD_TITLE,
  CONTACT,
  GIFT_ID,
  HOURS,
  HOURS_TITLE_ID,
  MENU_ID,
  PRIVATE_ID,
  WINE_ID,
} from '../data/site'
import { HoursCard } from './HoursCard'

describe('HoursCard', () => {
  it('renders the square card with its own labelled heading and id', () => {
    const { container } = render(<HoursCard />)

    const card = screen.getByRole('complementary', { name: CARD_TITLE })
    expect(card).toHaveAttribute('id', MENU_ID)
    expect(card).toHaveClass('tt-hours')

    const title = screen.getByRole('heading', { level: 2 })
    expect(title).toHaveAttribute('id', HOURS_TITLE_ID)
    expect(title).toHaveTextContent(CARD_TITLE)
    expect(container.querySelectorAll('h2')).toHaveLength(1)
  })

  it('renders four dashed rows as a dl of div wrappers', () => {
    const { container } = render(<HoursCard />)

    const list = container.querySelector('dl')
    expect(list).toHaveAttribute('id', WINE_ID)
    expect(list?.querySelectorAll('div')).toHaveLength(4)
    expect(list?.querySelectorAll('dt')).toHaveLength(4)
    expect(list?.querySelectorAll('dd')).toHaveLength(4)

    for (const row of HOURS) {
      expect(screen.getByText(row.days).tagName).toBe('DT')
      expect(screen.getByText(row.hours).tagName).toBe('DD')
    }
  })

  it('renders the address with a gold pin beside it', () => {
    const { container } = render(<HoursCard />)

    const address = container.querySelector('.tt-address')
    expect(address).toHaveAttribute('id', PRIVATE_ID)
    expect(address).toHaveTextContent(CONTACT.address)
    expect(address?.querySelectorAll('svg')).toHaveLength(1)
    expect(address?.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('closes on the italic footnote', () => {
    const { container } = render(<HoursCard />)

    const note = container.querySelector('.tt-note')
    expect(note).toHaveAttribute('id', GIFT_ID)
    expect(note).toHaveTextContent(CONTACT.note)
  })

  it('carries no links, no form and no button', () => {
    const { container } = render(<HoursCard />)

    expect(container.querySelectorAll('a, form, input, button')).toHaveLength(0)
  })
})
