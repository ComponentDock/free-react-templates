import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { INITIAL, MESSAGES } from '../data'
import { Inbox } from './Inbox'

const cards = () => within(screen.getByRole('list')).queryAllByRole('listitem')
const readButton = (index: number) =>
  within(cards()[index]!).getByRole('button', { name: /^Mark as (un)?read$/ })
const archiveButton = (index: number) =>
  within(cards()[index]!).getByRole('button', { name: 'Archive' })
const heading = () => screen.getByRole('heading', { level: 1 })
const pill = () => heading().querySelector('span') as HTMLElement
const status = () => screen.getByRole('status')
const labels = () => cards().map((card) => card.querySelector('strong')?.textContent ?? '')

const settle = () => {
  act(() => {
    vi.advanceTimersByTime(250)
  })
}

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('Inbox — the initial render', () => {
  it('opens on four cards, three unread and a counter of 3', () => {
    render(<Inbox />)

    expect(cards()).toHaveLength(4)
    expect(pill()).toHaveTextContent('3')
    expect(pill().getAttribute('class')).toContain('bg-accent')
    expect(labels()).toEqual(['Mara Kovač', 'web-app #1482', 'Diego Alves', 'INV-2093'])
  })

  it('is one labelled section holding one list', () => {
    render(<Inbox />)

    const section = screen.getByRole('region', { name: /Notifications/ })
    expect(section.getAttribute('aria-labelledby')).toBe('notebell-title')
    expect(within(section).getAllByRole('list')).toHaveLength(1)
    expect(section.getAttribute('class')).toContain('max-w-[620px]')
    expect(section.getAttribute('class')).not.toContain('rounded')
    expect(section.getAttribute('class')).not.toContain('border')
  })

  it('keeps a silent 1 px status line and no empty note yet', () => {
    render(<Inbox />)

    expect(status()).toHaveTextContent('')
    expect(status().getAttribute('class')).toContain('min-h-px')
    expect(screen.queryByText("You're all caught up.")).toBeNull()
    expect(screen.queryByRole('button', { name: 'Undo' })).toBeNull()
  })

  it('starts at three unread dots and one quote', () => {
    const { container } = render(<Inbox />)

    expect(container.querySelectorAll('li > span.absolute')).toHaveLength(3)
    expect(container.querySelectorAll('blockquote')).toHaveLength(1)
  })

  it('never ships an image and never ships a link of its own', () => {
    const { container } = render(<Inbox />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('a')).toHaveLength(0)
  })

  it('accepts a different starting list', () => {
    render(<Inbox initial={[INITIAL[3]!]} />)

    expect(cards()).toHaveLength(1)
    expect(pill()).toHaveTextContent('0')
    expect(pill().getAttribute('class')).toContain('bg-count-zero')
  })
})

describe('Inbox — the read toggle', () => {
  it('moves one card and the counter both ways', async () => {
    const user = userEvent.setup()
    render(<Inbox />)

    await user.click(readButton(0))

    expect(pill()).toHaveTextContent('2')
    expect(within(cards()[0]!).getByRole('button', { name: 'Mark as unread' })).toBeInTheDocument()
    expect(cards()[0]).toHaveTextContent('Read ·')
    expect(status()).toHaveTextContent(MESSAGES.read)
    expect(screen.queryByRole('button', { name: 'Undo' })).toBeNull()

    await user.click(readButton(0))

    expect(pill()).toHaveTextContent('3')
    expect(within(cards()[0]!).getByRole('button', { name: 'Mark as read' })).toBeInTheDocument()
    expect(cards()[0]).toHaveTextContent('Unread ·')
    expect(status()).toHaveTextContent(MESSAGES.unread)
  })

  it('reads an already-read card back to unread', async () => {
    const user = userEvent.setup()
    render(<Inbox />)

    await user.click(readButton(3))

    expect(pill()).toHaveTextContent('4')
    expect(within(cards()[3]!).getByRole('button', { name: 'Mark as read' })).toBeInTheDocument()
  })
})

describe('Inbox — mark all as read', () => {
  it('empties the counter in one gesture and greys the pill', async () => {
    const user = userEvent.setup()
    render(<Inbox />)

    await user.click(screen.getByRole('button', { name: 'Mark all as read' }))

    expect(pill()).toHaveTextContent('0')
    expect(pill().getAttribute('class')).toContain('bg-count-zero')
    expect(screen.getAllByRole('button', { name: 'Mark as unread' })).toHaveLength(4)
    expect(status()).toHaveTextContent(MESSAGES.allRead)
  })
})

describe('Inbox — archive, undo and the empty state', () => {
  it('holds the card for 250 ms, then removes it and offers Undo', () => {
    vi.useFakeTimers()
    render(<Inbox />)

    fireEvent.click(archiveButton(0))

    expect(cards()).toHaveLength(4)
    expect(cards()[0]?.getAttribute('class')).toContain('translate-x-6')
    expect(cards()[0]?.getAttribute('class')).toContain('opacity-0')
    expect(pill()).toHaveTextContent('3')
    expect(status()).toHaveTextContent('')

    settle()

    expect(cards()).toHaveLength(3)
    expect(pill()).toHaveTextContent('2')
    expect(status()).toHaveTextContent(MESSAGES.archived)
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
  })

  it('restores the card to its original slot with its read state intact', () => {
    vi.useFakeTimers()
    render(<Inbox />)

    fireEvent.click(readButton(1))
    fireEvent.click(archiveButton(1))
    settle()
    expect(labels()).toEqual(['Mara Kovač', 'Diego Alves', 'INV-2093'])
    expect(pill()).toHaveTextContent('2')

    fireEvent.click(screen.getByRole('button', { name: 'Undo' }))

    expect(labels()).toEqual(['Mara Kovač', 'web-app #1482', 'Diego Alves', 'INV-2093'])
    expect(within(cards()[1]!).getByRole('button', { name: 'Mark as unread' })).toBeInTheDocument()
    expect(pill()).toHaveTextContent('2')
    expect(status()).toHaveTextContent(MESSAGES.restored)
    expect(screen.queryByRole('button', { name: 'Undo' })).toBeNull()
  })

  it('keeps one undo slot: a second archive makes the first permanent', () => {
    vi.useFakeTimers()
    render(<Inbox />)

    fireEvent.click(archiveButton(0))
    settle()
    fireEvent.click(archiveButton(0))
    settle()
    expect(labels()).toEqual(['Diego Alves', 'INV-2093'])

    fireEvent.click(screen.getByRole('button', { name: 'Undo' }))

    expect(labels()).toEqual(['web-app #1482', 'Diego Alves', 'INV-2093'])
    expect(screen.queryByText('Mara Kovač')).toBeNull()
    expect(pill()).toHaveTextContent('2')
  })

  it('empties the panel and shows the caught-up line below the toast', () => {
    vi.useFakeTimers()
    render(<Inbox />)

    for (let index = 0; index < 4; index += 1) {
      fireEvent.click(archiveButton(0))
      settle()
    }

    expect(cards()).toHaveLength(0)
    expect(pill()).toHaveTextContent('0')
    expect(status()).toHaveTextContent(MESSAGES.archived)
    expect(screen.getByText(MESSAGES.empty)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
  })

  it('moves focus to the next card’s read button', () => {
    vi.useFakeTimers()
    render(<Inbox />)

    fireEvent.click(archiveButton(0))
    settle()

    expect(readButton(0)).toHaveFocus()
  })

  it('falls back to the previous sibling when the last card goes', () => {
    vi.useFakeTimers()
    render(<Inbox />)

    fireEvent.click(archiveButton(3))
    settle()

    expect(readButton(2)).toHaveFocus()
  })

  it('falls back to the header control when the list empties', () => {
    vi.useFakeTimers()
    render(<Inbox initial={[INITIAL[3]!]} />)

    fireEvent.click(archiveButton(0))
    settle()

    expect(screen.getByRole('button', { name: 'Mark all as read' })).toHaveFocus()
  })

  it('drops the leave animation under reduced motion but not the outcome', () => {
    vi.stubGlobal('matchMedia', () => ({ matches: true }) as unknown as typeof window.matchMedia)
    render(<Inbox />)

    fireEvent.click(archiveButton(0))

    expect(cards()).toHaveLength(3)
    expect(pill()).toHaveTextContent('2')
    expect(status()).toHaveTextContent(MESSAGES.archived)
  })

  it('clears its pending timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Inbox />)

    fireEvent.click(archiveButton(0))
    unmount()

    expect(() => settle()).not.toThrow()
  })
})
