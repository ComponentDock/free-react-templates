import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FlipCard } from './FlipCard'
import { DECK } from '../data/deck'

function renderCard(index = 0) {
  const view = render(
    <ul>
      <FlipCard card={DECK[index]!} index={index} />
    </ul>,
  )
  const item = screen.getByRole('listitem')
  return {
    ...view,
    item,
    button: screen.getByRole('button'),
    front: item.querySelector('[data-face="front"]') as HTMLElement,
    back: item.querySelector('[data-face="back"]') as HTMLElement,
  }
}

describe('FlipCard', () => {
  it('prints the position pill, the word, its pronunciation and the flip hint', () => {
    const { front } = renderCard()

    expect(front).toHaveTextContent('noun \u00b7 feminine')
    expect(screen.getByText('la sobremesa')).toHaveAttribute('lang', 'es')
    expect(screen.getByText('/so\u00b7bre\u00b7ME\u00b7sa/')).toBeInTheDocument()
    expect(front).toHaveTextContent('Flip')
  })

  it('carries the meaning, an example, its translation and the derived counter', () => {
    const { back } = renderCard(3)

    expect(back).toHaveTextContent('Meaning')
    expect(back).toHaveTextContent('A sudden craving, usually for a particular food.')
    expect(back).toHaveTextContent('I am craving churros.')
    expect(screen.getByText('\u201cTengo antojo de churros.\u201d')).toHaveAttribute('lang', 'es')
    expect(back).toHaveTextContent('Card 4 of 40')
  })

  it('wraps the whole tile in one button named after the card', () => {
    const { button, item } = renderCard()

    expect(button).toHaveAccessibleName('Flip card: la sobremesa')
    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(button).toHaveAttribute('type', 'button')
    expect(item).toContainElement(button)
  })

  it('starts with the front visible and the back outside the accessibility tree', () => {
    const { front, back, item } = renderCard()

    expect(front).toHaveAttribute('aria-hidden', 'false')
    expect(back).toHaveAttribute('aria-hidden', 'true')
    expect(item).not.toHaveAttribute('data-flipped')
    expect(item).not.toHaveAttribute('data-manual')
  })

  it('flips on click, and latches the card into manual mode', async () => {
    const user = userEvent.setup()
    const { button, front, back, item } = renderCard()

    await user.click(button)

    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(item).toHaveAttribute('data-flipped')
    expect(item).toHaveAttribute('data-manual')
    expect(front).toHaveAttribute('aria-hidden', 'true')
    expect(back).toHaveAttribute('aria-hidden', 'false')
  })

  it('flips back on a second activation', async () => {
    const user = userEvent.setup()
    const { button, front, back } = renderCard()

    await user.click(button)
    await user.click(button)

    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(front).toHaveAttribute('aria-hidden', 'false')
    expect(back).toHaveAttribute('aria-hidden', 'true')
  })

  it('turns a card back on Escape and keeps the hover latch', async () => {
    const user = userEvent.setup()
    const { button, front, back, item } = renderCard()

    await user.click(button)
    await user.keyboard('{Escape}')

    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(item).not.toHaveAttribute('data-flipped')
    expect(item).toHaveAttribute('data-manual')
    expect(front).toHaveAttribute('aria-hidden', 'false')
    expect(back).toHaveAttribute('aria-hidden', 'true')
  })

  it('treats Escape on an unflipped card as a no-op', async () => {
    const user = userEvent.setup()
    const { button, item } = renderCard()

    await user.keyboard('{Escape}')

    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(item).not.toHaveAttribute('data-manual')
  })

  it('ignores every other key inside the tile', async () => {
    const user = userEvent.setup()
    const { button } = renderCard()

    await user.click(button)
    await user.keyboard('{ArrowRight}')

    expect(button).toHaveAttribute('aria-pressed', 'true')
  })

  it('mirrors aria-hidden on hover without ever pressing the card', async () => {
    const user = userEvent.setup()
    const { button, front, back, item } = renderCard()

    await user.hover(button)

    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(item).not.toHaveAttribute('data-manual')
    expect(front).toHaveAttribute('aria-hidden', 'true')
    expect(back).toHaveAttribute('aria-hidden', 'false')

    await user.unhover(button)
    expect(front).toHaveAttribute('aria-hidden', 'false')
    expect(back).toHaveAttribute('aria-hidden', 'true')
  })

  it('never swaps the faces for a touch pointer, which has no hover', () => {
    const { button, front, back } = renderCard()

    fireEvent.pointerEnter(button, { pointerType: 'touch' })
    fireEvent.pointerLeave(button, { pointerType: 'touch' })

    expect(front).toHaveAttribute('aria-hidden', 'false')
    expect(back).toHaveAttribute('aria-hidden', 'true')
  })

  it('stops hovering from swapping the faces once the card is manual', async () => {
    const user = userEvent.setup()
    const { button, front, back } = renderCard()

    await user.click(button)
    await user.keyboard('{Escape}')
    fireEvent.pointerEnter(button, { pointerType: 'mouse' })

    expect(front).toHaveAttribute('aria-hidden', 'false')
    expect(back).toHaveAttribute('aria-hidden', 'true')
  })

  it('keeps the pronunciation at full strength on the one face that needs it', () => {
    const { container: coral } = render(
      <ul>
        <FlipCard card={DECK[0]!} index={0} />
      </ul>,
    )
    const { container: indigo } = render(
      <ul>
        <FlipCard card={DECK[1]!} index={1} />
      </ul>,
    )

    expect(coral.querySelector('[data-say]')!.className).toContain('opacity-85')
    expect(indigo.querySelector('[data-say]')!.className).not.toContain('opacity-85')
  })

  it('themes itself from inline custom properties, not from a per-card class', () => {
    const { item } = renderCard(1)

    expect(item.style.getPropertyValue('--face')).toBe('#5b5bf0')
    expect(item.style.getPropertyValue('--ink')).toBe('#ffffff')
  })
})
