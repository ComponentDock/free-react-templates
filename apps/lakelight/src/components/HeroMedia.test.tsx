import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { STAY_CARD } from '../data/site'
import { HeroMedia, PHOTO } from './HeroMedia'

describe('HeroMedia', () => {
  it('renders a seeded placeholder at its true aspect', () => {
    render(<HeroMedia />)

    const image = screen.getByRole('img', { name: PHOTO.alt })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/alpine/900/960')
    expect(image).toHaveAttribute('width', '900')
    expect(image).toHaveAttribute('height', '960')
    expect(image).toHaveClass('lk-photo')
  })

  it('parks the stay card inside the frame with its three rows', () => {
    render(<HeroMedia />)

    const figure = screen.getByRole('figure')
    const card = figure.querySelector('figcaption')
    expect(card).not.toBeNull()
    expect(card).toHaveClass('lk-card')
    expect(card).toHaveTextContent(STAY_CARD.title)
    expect(card).toHaveTextContent(STAY_CARD.place)
    expect(card).toHaveTextContent(`${STAY_CARD.price} ${STAY_CARD.suffix}`)
  })

  it('labels the rating for assistive tech', () => {
    render(<HeroMedia />)

    expect(screen.getByLabelText('Rated 4.88 out of 5')).toHaveTextContent('★ 4.88')
  })
})
