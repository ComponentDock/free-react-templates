import { createRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { NAV } from '../lib/site'
import { Header } from './Header'

/** The nav row's document offset this harness emulates, in px. */
const ROW_TOP = 52

function mockLayout() {
  return vi
    .spyOn(Element.prototype, 'getBoundingClientRect')
    .mockImplementation(() => ({ top: ROW_TOP - window.scrollY }) as DOMRect)
}

let layout: ReturnType<typeof mockLayout>

beforeEach(() => {
  layout = mockLayout()
})

afterEach(() => {
  layout.mockRestore()
})

function renderHeader(isOpen = false) {
  const onToggle = vi.fn()
  const toggleRef = createRef<HTMLButtonElement>()
  const view = render(<Header isOpen={isOpen} onToggle={onToggle} toggleRef={toggleRef} />)

  return { ...view, onToggle, toggleRef }
}

describe('Header', () => {
  it('floats transparent at the very top with a utility bar over a nav row', () => {
    renderHeader()

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('absolute', 'inset-x-0', 'top-0', 'z-[99]', 'w-full')

    const topBar = screen.getByTestId('top-bar')

    expect(within(header).getByTestId('top-bar')).toBe(topBar)
    expect(within(topBar).getByRole('link', { name: 'hello@topdeck.example' })).toBeInTheDocument()

    const row = screen.getByTestId('sticky-row')

    expect(row).toHaveClass('relative', 'bg-transparent')
    expect(row).not.toHaveClass('fixed', 'bg-brand')
    expect(screen.getByTestId('sticky-wrapper')).toHaveClass('relative', 'w-full')
  })

  it('splits the row into the source’s 16.667% / 83.333% columns', () => {
    renderHeader()

    const header = screen.getByRole('banner')
    const row = screen.getByTestId('sticky-row')
    const columns = Array.from(row.querySelector('div')?.children ?? []) as HTMLElement[]

    expect(columns).toHaveLength(2)
    expect(columns[0]).toHaveClass('w-[16.667%]')
    expect(columns[1]).toHaveClass('w-[83.333%]', 'justify-end')

    const wordmark = within(columns[0] as HTMLElement).getByRole('heading', { level: 1 })

    expect(wordmark).toBeInTheDocument()

    const nav = within(columns[1] as HTMLElement).getByRole('navigation', { name: 'Site sections' })

    expect(Array.from(screen.getByTestId('desktop-nav').children)).toHaveLength(NAV.length)
    expect(
      (Array.from(screen.getByTestId('desktop-nav').children) as HTMLElement[]).map(
        (entry) => entry.querySelector('a, button')?.textContent,
      ),
    ).toEqual(NAV.map((item) => item.label))
    expect(within(nav).getByRole('button', { name: 'Deck Plan' })).toBeInTheDocument()
    expect(
      within(columns[1] as HTMLElement).getByRole('button', { name: 'Toggle the site menu' }),
    ).toHaveClass('lg:hidden')
    // The header carries one nav list only: no second copy hides behind a breakpoint.
    expect(within(header).getAllByRole('navigation')).toHaveLength(1)
  })

  it('pins the nav row to the top and repaints it brand blue once the page passes it', () => {
    const scrollY = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)

    renderHeader()

    const row = screen.getByTestId('sticky-row')
    const wrapper = screen.getByTestId('sticky-wrapper')

    Object.defineProperty(row, 'offsetHeight', { configurable: true, value: 83 })

    expect(row).toHaveClass('relative', 'bg-transparent')
    expect(screen.getByRole('link', { name: 'Programmes' })).toHaveClass('py-5')
    expect(wrapper.style.height).toBe('')

    scrollY.mockReturnValue(400)
    fireEvent.scroll(window)

    expect(row).toHaveClass('fixed', 'top-0', 'left-0', 'z-[120]', 'bg-brand')
    expect(row).not.toHaveClass('relative', 'bg-transparent')
    expect(wrapper.style.height).toBe('83px')

    const pinnedLink = screen.getByRole('link', { name: 'Programmes' })

    expect(pinnedLink).toHaveClass('py-[10px]', 'text-white/60')
    expect(screen.getByRole('link', { name: 'Start' })).toHaveClass('text-white')
    // The utility bar is left to scroll away: only the row is ever pinned.
    expect(screen.getByTestId('top-bar')).not.toHaveClass('fixed')

    scrollY.mockReturnValue(0)
    fireEvent.scroll(window)

    expect(row).toHaveClass('relative', 'bg-transparent')
    expect(wrapper.style.height).toBe('')

    scrollY.mockRestore()
  })

  it('gives the hamburger the panel’s state and the row’s toggle intent', () => {
    const { onToggle, toggleRef, rerender } = renderHeader()

    const toggle = screen.getByRole('button', { name: 'Toggle the site menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggleRef.current).toBe(toggle)

    toggle.click()

    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<Header isOpen onToggle={onToggle} toggleRef={toggleRef} />)

    expect(screen.getByRole('button', { name: 'Toggle the site menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
