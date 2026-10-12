import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import { SideRail } from './SideRail'
import { RAIL_LABEL, RAIL_SIGN_OFF, ROWS } from '../lib/site'
import { railClass, railSignOffClass } from '../lib/styles'

describe('SideRail — the column at the page’s left edge', () => {
  it('is a fixed, full-height rail that never scrolls with the page', () => {
    render(<SideRail isOpen={false} railRef={createRef()} onNavigate={() => {}} />)

    const rail = screen.getByTestId('rail')

    expect(rail.tagName).toBe('ASIDE')
    expect(rail.className).toBe(railClass(false))
    expect(rail.className).toContain('fixed')
    expect(rail.className).toContain('top-0')
    expect(rail.className).toContain('bottom-0')
    expect(rail.className).toContain('left-0')
    expect(rail.className).toContain('w-[270px]')
    expect(rail.className).toContain('lg:w-[20%]')
    expect(rail.className).toContain('h-screen')
    expect(rail.className).toContain('supports-[height:100dvh]:h-dvh')
    expect(rail.className).toContain('overflow-y-hidden')
    expect(rail.className).toContain('z-[1001]')
    expect(rail.className).toContain('bg-rail')
    expect(rail.className).toContain('p-[48px_48px_40px]')
    expect(rail.className).toContain('duration-500')
    expect(rail.className).toContain('-translate-x-[270px]')
    expect(rail.className).toContain('max-lg:bg-drawer')
    // The design ships no rounding and no shadow anywhere on this rail.
    expect(rail.className).not.toContain('rounded')
    expect(rail.className).not.toContain('shadow')
  })

  it('sits in its 20% slot from 992px up and slides back to the edge of the page when it is out', () => {
    const { rerender } = render(
      <SideRail isOpen={false} railRef={createRef()} onNavigate={() => {}} />,
    )

    expect(screen.getByTestId('rail').className).toContain('lg:translate-x-0')

    rerender(<SideRail isOpen railRef={createRef()} onNavigate={() => {}} />)

    const rail = screen.getByTestId('rail')

    expect(rail.className).toBe(railClass(true))
    expect(rail.className).toContain('translate-x-0')
    expect(rail.className).toContain('max-lg:z-[999]')
    expect(rail.className).toContain('max-lg:bg-rail')
    expect(rail.className).not.toContain('max-lg:bg-drawer')
  })

  it('hands itself over so a press inside it is never read as a press outside', () => {
    const railRef = createRef<HTMLElement>()

    render(<SideRail isOpen={false} railRef={railRef} onNavigate={() => {}} />)

    expect(railRef.current).toBe(screen.getByTestId('rail'))
  })

  it('holds the six labels behind one landmark, under the name the rail carries', () => {
    render(<SideRail isOpen={false} railRef={createRef()} onNavigate={() => {}} />)

    const nav = screen.getByRole('navigation', { name: RAIL_LABEL })

    expect(within(nav).getAllByRole('link')).toHaveLength(ROWS.length)
    expect(nav).toContainElement(screen.getByTestId('rail-menu'))
  })

  it('signs off at its foot with one line that walks back to the top of the page', () => {
    render(<SideRail isOpen={false} railRef={createRef()} onNavigate={() => {}} />)

    const signOff = screen.getByRole('link', { name: RAIL_SIGN_OFF })

    expect(signOff).toHaveAttribute('href', '#top')
    expect(signOff.className).toBe(railSignOffClass)
    expect(signOff.className).toContain('mt-auto')
    // It sits under the list, which is what leaves the labels at the design's own origin.
    expect(screen.getByTestId('rail').lastElementChild === signOff).toBe(true)
  })
})
