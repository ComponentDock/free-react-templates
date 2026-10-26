import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { AVATARS, CARD, HEADLINE, ISSUE_ITEMS, ISSUE_PILL, LEDE, READERS, STICKER } from '../data/site'

describe('Hero', () => {
  it('labels one section with its single headline and no second heading level', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(0)
    expect(container.querySelector('section')).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading.textContent).toBe(`${HEADLINE.lead} ${HEADLINE.accent}`)
    expect(heading.querySelector('em')?.textContent).toBe(HEADLINE.accent)
  })

  it('opens the copy column with the issue pill and its decorative dot', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText(ISSUE_PILL)).toBeInTheDocument()
    expect(container.querySelector('.ep-dot')).toHaveAttribute('aria-hidden', 'true')
  })

  it('keeps the lede and subscribes through the form', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText(LEDE)).toBeInTheDocument()
    expect(container.querySelectorAll('form')).toHaveLength(1)
  })

  it('closes the copy column with four initials and the read count', () => {
    const { container } = render(<Hero />)
    const faces = container.querySelector('.ep-faces')

    expect(faces).toHaveAttribute('aria-hidden', 'true')
    expect(faces?.querySelectorAll('.ep-face')).toHaveLength(AVATARS.length)
    expect(faces?.textContent).toBe(AVATARS.map((avatar) => avatar.initials).join(''))
    expect(screen.getByText(READERS.count)).toHaveProperty('tagName', 'STRONG')
    expect(screen.getByText(READERS.count).closest('.ep-readers')?.lastElementChild?.textContent).toBe(
      `${READERS.lead} ${READERS.count}${READERS.tail}`,
    )
  })

  it('draws the rotated stack as decoration: three cards, content only on the front', () => {
    const { container } = render(<Hero />)
    const stack = container.querySelector('.ep-stack')

    expect(stack).toHaveAttribute('aria-hidden', 'true')
    expect(stack?.querySelectorAll('.ep-card')).toHaveLength(3)

    const back = stack?.querySelector('.ep-card--b')
    expect(back?.textContent).toBe('')
    expect(stack?.querySelector('.ep-card--c')?.textContent).toBe('')

    const front = stack?.querySelector('.ep-card--a')
    expect(front?.textContent).toContain(CARD.name)
    expect(front?.textContent).toContain(CARD.meta)
    expect(front?.textContent).toContain(CARD.title)
    expect(front?.querySelector('.ep-mail-avatar')?.textContent).toBe(CARD.badge)
    expect(front?.querySelectorAll('.ep-mail-art > span')).toHaveLength(3)
    expect(front?.querySelectorAll('.ep-mail-list li')).toHaveLength(ISSUE_ITEMS.length)
  })

  it('clips the sticker over the stack corner', () => {
    const { container } = render(<Hero />)

    expect(container.querySelector('.ep-sticker')?.textContent).toBe(STICKER.join(''))
  })
})
