import { createEvent, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { ACTIVE_PILL_INDEX, CATEGORY_PILLS, HERO } from '../lib/site'

describe('Hero', () => {
  it('renders the headline, the subtext and both search fields', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: HERO.headline })).toBeInTheDocument()
    expect(screen.getByText(HERO.subtext)).toBeInTheDocument()
    expect(screen.getByLabelText(HERO.whatLabel)).toHaveAttribute(
      'placeholder',
      HERO.whatPlaceholder,
    )
    expect(screen.getByLabelText(HERO.whereLabel)).toHaveAttribute(
      'placeholder',
      HERO.wherePlaceholder,
    )
  })

  it('renders the five category pills with the recorded one pressed', () => {
    render(<Hero />)

    for (const [index, label] of CATEGORY_PILLS.entries()) {
      expect(screen.getByRole('button', { name: label })).toHaveAttribute(
        'aria-pressed',
        String(index === ACTIVE_PILL_INDEX),
      )
    }
  })

  it('moves the pressed pill when the visitor chooses another one', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Party' }))

    expect(screen.getByRole('button', { name: 'Party' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: CATEGORY_PILLS[ACTIVE_PILL_INDEX] })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })

  it('cancels the search submit so the page never navigates', () => {
    const { container } = render(<Hero />)
    const form = container.querySelector('form') as HTMLFormElement

    expect(screen.getByRole('button', { name: HERO.search })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: HERO.search })).toHaveAttribute('type', 'submit')

    const event = createEvent.submit(form)
    fireEvent(form, event)

    expect(event.defaultPrevented).toBe(true)
  })

  it('keeps the typed query in the fields', () => {
    render(<Hero />)

    fireEvent.change(screen.getByLabelText(HERO.whatLabel), { target: { value: 'Hotel' } })

    expect(screen.getByLabelText(HERO.whatLabel)).toHaveValue('Hotel')
  })
})
