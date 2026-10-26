import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { INITIAL } from '../data'
import { NotificationCard } from './NotificationCard'

const UNREAD = INITIAL[0]!
const READ = INITIAL[3]!

const renderCard = (item = UNREAD, overrides: Record<string, unknown> = {}) =>
  render(
    <ul>
      <NotificationCard item={item} onToggleRead={() => {}} onArchive={() => {}} {...overrides} />
    </ul>,
  )

describe('NotificationCard', () => {
  it('is the page’s only surface: 16 px radius, 1 px border, 16 / 18 / 16 / 16 padding', () => {
    const { container } = renderCard()
    const card = container.querySelector('li') as HTMLElement
    const className = card.getAttribute('class') ?? ''

    expect(className).toContain('rounded-[16px]')
    expect(className).toContain('border')
    expect(className).toContain('py-4')
    expect(className).toContain('pl-4')
    expect(className).toContain('pr-[18px]')
    expect(className).toContain('gap-3.5')
    expect(className).toContain('relative')
    expect(className).toContain('duration-[250ms]')
    expect(className).not.toContain('shadow')
    expect(className).not.toContain('min-h')
  })

  it('an unread card is three signals: tinted surface, violet border and a 9 px dot', () => {
    const { container } = renderCard()
    const card = container.querySelector('li') as HTMLElement
    const dot = card.lastElementChild as HTMLElement

    expect(card.getAttribute('class')).toContain('bg-surface-unread')
    expect(card.getAttribute('class')).toContain('border-line-unread')
    expect(dot.getAttribute('class')).toContain('h-[9px]')
    expect(dot.getAttribute('class')).toContain('w-[9px]')
    expect(dot.getAttribute('class')).toContain('top-5')
    expect(dot.getAttribute('class')).toContain('right-[18px]')
    expect(dot.getAttribute('class')).toContain('bg-accent')
    expect(dot.getAttribute('class')).toContain('shadow-[0_0_0_4px_rgba(129,140,248,0.2)]')
    expect(dot.getAttribute('aria-hidden')).toBe('true')
  })

  it('a read card has no dot at all', () => {
    const { container } = renderCard(READ)
    const card = container.querySelector('li') as HTMLElement

    expect(card.getAttribute('class')).toContain('bg-surface')
    expect(card.getAttribute('class')).toContain('border-line')
    expect(card.querySelectorAll('span.absolute')).toHaveLength(0)
  })

  it('marks the leave with 24 px of travel and zero opacity', () => {
    const { container } = renderCard(UNREAD, { leaving: true })
    const card = container.querySelector('li') as HTMLElement

    expect(card.getAttribute('class')).toContain('translate-x-6')
    expect(card.getAttribute('class')).toContain('opacity-0')
  })

  it('keeps the avatar, the body lane and the dot’s 18 px lane', () => {
    const { container } = renderCard()
    const body = container.querySelector('li > div') as HTMLElement
    const dot = container.querySelector('li > span.absolute') as HTMLElement

    expect(body.getAttribute('class')).toContain('flex-1')
    expect(body.getAttribute('class')).toContain('min-w-0')
    expect(body.getAttribute('class')).toContain('pr-[18px]')
    expect(dot.getAttribute('class')).toContain('right-[18px]')
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('writes the quote as a 3 px accent-ruled block', () => {
    const { container } = renderCard()
    const quote = container.querySelector('blockquote') as HTMLElement

    expect(quote).toHaveTextContent('Can we move the press embargo to Tuesday?')
    expect(quote.getAttribute('class')).toContain('border-l-[3px]')
    expect(quote.getAttribute('class')).toContain('border-accent')
    expect(quote.getAttribute('class')).toContain('rounded-r-[10px]')
    expect(quote.getAttribute('class')).toContain('bg-quote-bg')
    expect(quote.getAttribute('class')).toContain('text-[14px]')
  })

  it('reserves no quote margin on the three cards without one', () => {
    const { container } = renderCard(INITIAL[1]!)

    expect(container.querySelector('blockquote')).toBeNull()
    expect(container.querySelector('blockquote')).toBeNull()
  })

  it('speaks the read state in the meta line and keeps a real time element', () => {
    const { container } = renderCard()
    const meta = container.querySelectorAll('p')[1] as HTMLElement
    const time = meta.querySelector('time') as HTMLTimeElement

    expect(meta).toHaveTextContent('Unread ·')
    expect(meta).toHaveTextContent('2 min ago · Marketing')
    expect(meta.getAttribute('class')).toContain('text-[13px]')
    expect(time.dateTime).toBe('2026-09-25T13:58')
  })

  it('flips the state word and the label on a read card', () => {
    const { container } = renderCard(READ)

    expect(container.querySelectorAll('p')[1]).toHaveTextContent('Read ·')
    expect(screen.getByRole('button', { name: 'Mark as unread' })).toBeInTheDocument()
  })

  it('labels the two actions and reports the card id', async () => {
    const onToggleRead = vi.fn()
    const onArchive = vi.fn()
    const user = userEvent.setup()
    renderCard(UNREAD, { onToggleRead, onArchive })

    await user.click(screen.getByRole('button', { name: 'Mark as read' }))
    await user.click(screen.getByRole('button', { name: 'Archive' }))

    expect(onToggleRead).toHaveBeenCalledWith('mara')
    expect(onArchive).toHaveBeenCalledWith('mara')
  })

  it('keeps the ghost archive button a 16 px glyph plus a name', () => {
    const { container } = renderCard()
    const buttons = within(container.querySelector('li') as HTMLElement).getAllByRole('button')

    expect(buttons).toHaveLength(2)
    expect(buttons[1]?.getAttribute('class')).toContain('border-transparent')
    expect(buttons[1]?.getAttribute('class')).toContain('text-muted')
    expect(buttons[1]?.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
    expect(buttons[1]?.textContent).toBe('Archive')
    expect(buttons[0]?.getAttribute('class')).toContain('text-[15px]')
    expect(buttons[0]?.getAttribute('class')).toContain('font-normal')
  })

  it('hands the read button to the focus registry', () => {
    const readButtonRef = vi.fn()
    renderCard(UNREAD, { readButtonRef })

    expect(readButtonRef).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
  })
})
