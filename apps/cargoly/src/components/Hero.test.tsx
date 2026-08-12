import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Hero } from './Hero'
import {
  COUNTRY_CODES,
  HERO_IMAGE,
  HERO_PHONE_PLACEHOLDER,
  HERO_SUBLINE,
  PICKUP_CARD_LABEL,
  PICKUP_CARD_TITLE,
} from '../data'

describe('Hero', () => {
  it('renders the full-bleed truck background image', () => {
    const { container } = render(<Hero />)

    expect(container.querySelector('section img')).toHaveAttribute('src', HERO_IMAGE)
  })

  it('renders the headline with the yellow accent word and the subline', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Run on the rocky streets')
    expect(heading.querySelector('.text-accent')).toHaveTextContent('rocky streets')
    expect(screen.getByText(HERO_SUBLINE)).toBeInTheDocument()
  })

  it('renders the phone CTA with country codes, placeholder, and yellow arrow button', () => {
    render(<Hero />)

    const select = screen.getByLabelText('Country code')
    expect(select).toHaveValue('+33')
    for (const code of COUNTRY_CODES) {
      expect(within(select).getByRole('option', { name: code })).toBeInTheDocument()
    }
    expect(screen.getByPlaceholderText(HERO_PHONE_PLACEHOLDER)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit phone number' })).toBeInTheDocument()
  })

  it('submits the phone form without navigation', () => {
    render(<Hero />)

    const form = screen.getByRole('form', { name: 'Phone callback' })
    fireEvent.submit(form)
    expect(screen.getByPlaceholderText(HERO_PHONE_PLACEHOLDER)).toBeInTheDocument()
  })

  it('renders the floating pick-up card with label, title, and arrow', () => {
    render(<Hero />)

    const card = screen.getByRole('link', { name: PICKUP_CARD_TITLE })
    expect(card).toHaveTextContent(PICKUP_CARD_LABEL)
    expect(card).toHaveTextContent(PICKUP_CARD_TITLE)
    expect(card.querySelector('svg')).not.toBeNull()
  })
})
