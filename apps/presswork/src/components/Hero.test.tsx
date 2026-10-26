import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HEADLINE_ID, HERO_ID } from '../data/site'

describe('Hero', () => {
  it('is one section labelled by the headline it holds', () => {
    const { container } = render(<Hero />)
    const section = screen.getByRole('region')
    const heading = screen.getByRole('heading', { level: 1 })

    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('id', HERO_ID)
    expect(section).toHaveAttribute('aria-labelledby', HEADLINE_ID)
    expect(heading).toHaveAttribute('id', HEADLINE_ID)
    expect(section).toContainElement(heading)
    expect(container.querySelectorAll('section')).toHaveLength(1)
  })

  it('holds the kicker, the badged head and the foot in that order', () => {
    const { container } = render(<Hero />)
    const hero = container.querySelector('.pw-hero')

    expect(hero?.children[0]).toHaveClass('pw-kicker')
    expect(hero?.children[1]).toHaveClass('pw-head')
    expect(hero?.children[2]).toHaveClass('pw-foot')
    expect(container.querySelectorAll('.pw-head > *')).toHaveLength(2)
  })

  it('renders no image, form or second heading', () => {
    const { container } = render(<Hero />)

    expect(container.querySelector('img')).toBeNull()
    expect(container.querySelector('form')).toBeNull()
    expect(container.querySelector('h2')).toBeNull()
  })
})
