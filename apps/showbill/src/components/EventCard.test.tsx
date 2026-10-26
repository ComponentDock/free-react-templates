import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EventCard } from './EventCard'
import { EVENTS } from '../data/events'

const CRAFT = EVENTS[0]!
const MARES = EVENTS[1]!
const LATTE = EVENTS[2]!

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

describe('EventCard', () => {
  it('renders the card shell without clipping its notches', () => {
    const { container } = render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)

    const card = container.querySelector('article')!
    expect(card.className).toContain('rounded-[20px]')
    expect(card.className).toContain('flex-col')
    expect(card.className).toContain(
      'shadow-[0_1px_2px_rgba(0,0,0,.05),0_16px_36px_-24px_rgba(0,0,0,.35)]',
    )
    expect(card.className).not.toContain('overflow-hidden')
    expect(card.className).not.toContain('hover:')
  })

  it('opens with a 700:440 photograph and a descriptive alt', () => {
    render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)

    const image = screen.getByRole('img', { name: CRAFT.alt })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/showbill-1/700/440')
    expect(image).toHaveAttribute('width', '700')
    expect(image).toHaveAttribute('height', '440')

    const media = image.parentElement!
    expect(media.className).toContain('aspect-[700/440]')
  })

  it('hangs the date leaf 30px below the photograph', () => {
    const { container } = render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)

    const media = container.querySelector('article > div')!
    const leaf = media.querySelector('div')!
    expect(leaf.className).toContain('bottom-[-30px]')
    expect(leaf.className).toContain('left-[18px]')
    expect(leaf.className).toContain('h-[79px]')
    expect(leaf.className).toContain('w-[68px]')

    const [month, rest] = [...leaf.children]
    expect(month!.textContent).toBe('Oct')
    expect(month!.className).toContain('bg-blue-700')
    expect(rest!.querySelector('span')!.textContent).toBe('14')
    expect(rest!.querySelectorAll('span')[1]!.textContent).toBe('Wed')
  })

  it('prints the category, the title and the two fact rows', () => {
    const { container } = render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)

    expect(screen.getByText('Conference')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Product Craft Summit 2026')

    const times = [...container.querySelectorAll('time')]
    expect(times.map((time) => time.textContent)).toEqual(['09:00', '17:30'])
    expect(times.map((time) => time.getAttribute('datetime'))).toEqual([
      '2026-10-14T09:00',
      '2026-10-14T17:30',
    ])
    expect(times[0]!.parentElement!.textContent).toBe('09:00–17:30')
    expect(screen.getByText('Centro de Congressos, Belém')).toBeInTheDocument()
    expect(screen.queryByText('Centro de Congressos, Lisbon')).toBeNull()
  })

  it('reads the midnight-crossing end as 00:00 on the next day', () => {
    render(<EventCard event={MARES} saved={false} onSaved={vi.fn()} />)

    const times = [...document.querySelectorAll('time')]
    expect(times.map((time) => time.getAttribute('datetime'))).toEqual([
      '2026-10-17T21:30',
      '2026-10-18T00:00',
    ])
    expect(times[0]!.parentElement!.textContent).toBe('21:30–00:00')
  })

  it('renders the attendee cluster as decoration and the count as the statement', () => {
    const { container } = render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)

    const cluster = container.querySelector('[aria-hidden="true"].flex')!
    const faces = [...cluster.children]
    expect(faces).toHaveLength(3)
    expect(faces.map((face) => face.textContent)).toEqual(['AM', 'JL', 'RT'])
    expect(faces.map((face) => (face as HTMLElement).style.backgroundColor)).toEqual([
      'rgb(37, 99, 235)',
      'rgb(190, 24, 93)',
      'rgb(4, 120, 87)',
    ])
    expect(faces[0]!.className).not.toContain('-ml-[6px]')
    expect(faces[1]!.className).toContain('-ml-[6px]')
    expect(screen.getByText('412 going')).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: /AM/ })).toBeNull()
  })

  it('prints two faces and the capacity form for the workshop', () => {
    const { container } = render(<EventCard event={LATTE} saved={false} onSaved={vi.fn()} />)

    expect(container.querySelectorAll('[aria-hidden="true"].flex')[0]!.children).toHaveLength(2)
    expect(screen.getByText('9 of 12 places taken')).toBeInTheDocument()
  })

  it('prints the price label first on the first two cards', () => {
    const { container } = render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)

    const price = container.querySelector('.border-dashed > p')!
    expect(price.textContent).toBe('From €180')
    expect(price.textContent!.startsWith('From')).toBe(true)
    expect(price.querySelector('span')!.textContent).toBe('€180')
  })

  it('prints the figure first and the label after on the third card', () => {
    const { container } = render(<EventCard event={LATTE} saved={false} onSaved={vi.fn()} />)

    const price = container.querySelector('.border-dashed > p')!
    expect(price.textContent).toBe('€45 incl. coffee')
    expect(price.firstElementChild!.textContent).toBe('€45')
    expect(price.textContent!.endsWith('incl. coffee')).toBe(true)
  })

  it('shows the capacity flag on the second card only', () => {
    const { rerender } = render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)
    expect(screen.queryByText('Few tickets left')).toBeNull()

    rerender(<EventCard event={MARES} saved={false} onSaved={vi.fn()} />)
    const flag = screen.getByText('Few tickets left')
    expect(flag.className).toContain('bg-amber-400')
    expect(flag.className).toContain('text-amber-950')
    expect(flag.className).toContain('rounded-full')
  })

  it('punches two page-coloured notches through the dashed stub rule', () => {
    const { container } = render(<EventCard event={CRAFT} saved={false} onSaved={vi.fn()} />)

    const stub = container.querySelector('.border-dashed')!
    expect(stub.className).toContain('border-t-2')
    expect(stub.className).toContain('border-ticket')
    expect(stub.className).toContain('flex-wrap')
    expect(stub.className).toContain('justify-between')

    const notches = [...stub.querySelectorAll(':scope > span[aria-hidden="true"]')]
    expect(notches).toHaveLength(2)
    notches.forEach((notch) => {
      expect(notch.className).toContain('bg-paper')
      expect(notch.className).toContain('top-[-11px]')
      expect(notch.className).toContain('h-5')
    })
    expect(notches[0]!.className).toContain('left-[-10px]')
    expect(notches[1]!.className).toContain('right-[-10px]')
  })

  it('hands the calendar file and the event to its parent on click', async () => {
    const user = userEvent.setup()
    const onSaved = vi.fn()
    render(<EventCard event={CRAFT} saved={false} onSaved={onSaved} />)

    await user.click(screen.getByRole('button', { name: 'Add to calendar' }))

    expect(createObjectURL).toHaveBeenCalledTimes(1)
    expect(onSaved).toHaveBeenCalledWith(CRAFT)
    expect(screen.getByRole('button', { name: 'Add to calendar' })).toBeInTheDocument()
  })

  it('switches to the green saved state and keeps its icon', () => {
    render(<EventCard event={CRAFT} saved onSaved={vi.fn()} />)

    const button = screen.getByRole('button', { name: 'Saved to calendar' })
    expect(button.className).toContain('border-green-700')
    expect(button.className).toContain('bg-green-50')
    expect(button.className).toContain('text-green-700')
    expect(button.className).not.toContain('hover:bg-blue-700')
    expect(button.querySelector('svg')).not.toBeNull()
    expect(button.className).toContain('motion-reduce:transition-none')
    expect(button.className).toContain('focus-visible:outline-blue-600')
    expect(button.className).toContain('min-w-[173px]')
  })
})
