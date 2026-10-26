import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { EVENTS } from './data/events'

const createObjectURL = vi.fn(() => 'blob:showbill')

beforeEach(() => {
  Object.defineProperty(URL, 'createObjectURL', {
    value: createObjectURL,
    configurable: true,
    writable: true,
  })
  Object.defineProperty(URL, 'revokeObjectURL', {
    value: vi.fn(),
    configurable: true,
    writable: true,
  })
  vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {})
  createObjectURL.mockClear()
})

describe('App', () => {
  it('renders one paper stage holding the head, the grid, the status line and the footer', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)
    const main = mains[0]!
    expect(main.className).toContain('max-w-[1192px]')
    expect(main.className).toContain('mx-auto')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(main.className).not.toContain('min-h-screen')

    expect([...main.children].map((child) => child.tagName)).toEqual([
      'HEADER',
      'DIV',
      'P',
      'FOOTER',
    ])
  })

  it('never forces a viewport height and never clips the cards', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main.className).not.toContain('min-h')

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    cards.forEach((card) => expect(card.className).not.toContain('overflow-hidden'))
  })

  it('keeps the head copy on one clamp-scaled h1', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    const h1 = headings[0]!
    expect(h1.textContent).toBe('Upcoming in Lisbon')
    expect(h1.className).toContain('text-[clamp(30px,4vw,44px)]')
    expect(h1.className).toContain('font-extrabold')
    expect(h1.className).toContain('tracking-[-.03em]')

    const head = h1.parentElement!
    expect(head.className).toContain('mb-7')
    expect(screen.getByText('Three picks for October from the city events desk.')).toBeInTheDocument()
  })

  it('lays the cards out on the arithmetic auto-fit grid', () => {
    render(<App />)

    const grid = screen.getByRole('main').children[1]!
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(290px,1fr))]')
    expect(grid.className).toContain('gap-6')
    expect(grid.className).not.toMatch(/(sm|md|lg|xl):/)
    expect(grid.children).toHaveLength(3)
    ;[...grid.children].forEach((card) => {
      expect(card.tagName).toBe('ARTICLE')
      expect(card.className).not.toContain('h-[')
    })
  })

  it('prints one h2 per event and three focusable controls', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(document.querySelectorAll('form, input')).toHaveLength(0)
    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
  })

  it('gives every card a 700x440 photograph with its own seed', () => {
    render(<App />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images.map((image) => image.getAttribute('src'))).toEqual([
      'https://picsum.photos/seed/showbill-1/700/440',
      'https://picsum.photos/seed/showbill-2/700/440',
      'https://picsum.photos/seed/showbill-3/700/440',
    ])
  })

  it('reserves an empty status line under the grid', () => {
    render(<App />)

    const status = screen.getByRole('status')
    expect(status.textContent).toBe('')
    expect(status.className).toContain('min-h-[1.5em]')
    expect(status.className).toContain('mt-5')
    expect(status.className).toContain('text-blue-800')
  })

  it('writes the calendar file and announces it in the single status line', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getAllByRole('button', { name: 'Add to calendar' })[0]!)

    expect(createObjectURL).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('status').textContent).toBe(
      'Product Craft Summit 2026 downloaded as a calendar file. Open it to add the event.',
    )
    expect(
      screen.getByRole('button', { name: 'Saved to calendar' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: 'Add to calendar' })).toHaveLength(2)
  })

  it('keeps each button in the saved state and overwrites the shared status line', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getAllByRole('button', { name: 'Add to calendar' })[1]!)
    expect(screen.getByRole('status').textContent).toBe(
      `${EVENTS[1]!.title} downloaded as a calendar file. Open it to add the event.`,
    )
    expect(screen.getAllByRole('button', { name: 'Add to calendar' })).toHaveLength(2)

    await user.click(screen.getAllByRole('button', { name: 'Add to calendar' })[0]!)
    expect(screen.getByRole('status').textContent).toBe(
      `${EVENTS[0]!.title} downloaded as a calendar file. Open it to add the event.`,
    )
    expect(screen.getAllByRole('button', { name: 'Saved to calendar' })).toHaveLength(2)
  })

  it('re-downloads on a second click and leaves the label alone', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getAllByRole('button')[2]!
    await user.click(button)
    await user.click(screen.getByRole('button', { name: 'Saved to calendar' }))

    expect(createObjectURL).toHaveBeenCalledTimes(2)
    expect(screen.getByRole('button', { name: 'Saved to calendar' }).className).toContain(
      'bg-green-50',
    )
  })

  it('credits Component Dock in the footer, with no other external link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(document.querySelectorAll('a')).toHaveLength(1)
    expect(screen.getByRole('contentinfo').textContent).toContain('More templates at')
  })
})
