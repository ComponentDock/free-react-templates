import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import { NavToggle } from './NavToggle'
import { RAIL_ID, TOGGLE_LABEL } from '../lib/site'
import { BAR_PARTS, barClass, burgerClass, toggleClass } from '../lib/styles'

describe('NavToggle — the burger the drawer folds behind', () => {
  it('is a real button with a name of its own, on screen only below 992px', () => {
    render(<NavToggle isOpen={false} onToggle={() => {}} toggleRef={createRef()} />)

    const toggle = screen.getByTestId('toggle')

    expect(toggle.tagName).toBe('BUTTON')
    expect(toggle).toHaveAccessibleName(TOGGLE_LABEL)
    expect(toggle.className).toBe(toggleClass(false))
    expect(toggle.className).toContain('fixed')
    expect(toggle.className).toContain('-left-[12px]')
    expect(toggle.className).toContain('top-0')
    expect(toggle.className).toContain('z-[9999]')
    expect(toggle.className).toContain('p-5')
    expect(toggle.className).toContain('lg:hidden')
    expect(toggle.className).toContain('translate-x-0')
  })

  it('carries the state of the rail it moves, and points at it', () => {
    const { rerender } = render(
      <NavToggle isOpen={false} onToggle={() => {}} toggleRef={createRef()} />,
    )

    const toggle = screen.getByTestId('toggle')

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', RAIL_ID)

    rerender(<NavToggle isOpen onToggle={() => {}} toggleRef={createRef()} />)

    expect(screen.getByTestId('toggle')).toHaveAttribute('aria-expanded', 'true')
  })

  it('travels the same 270px the rail does while the drawer is out', () => {
    const { rerender } = render(
      <NavToggle isOpen={false} onToggle={() => {}} toggleRef={createRef()} />,
    )

    rerender(<NavToggle isOpen onToggle={() => {}} toggleRef={createRef()} />)

    const toggle = screen.getByTestId('toggle')

    expect(toggle.className).toBe(toggleClass(true))
    expect(toggle.className).toContain('translate-x-[270px]')
  })

  it('drops the control into the DOM the drawer it controls is handed', () => {
    const toggleRef = createRef<HTMLButtonElement>()

    render(<NavToggle isOpen={false} onToggle={() => {}} toggleRef={toggleRef} />)

    expect(toggleRef.current).toBe(screen.getByTestId('toggle'))
  })

  it('hands the press straight to the page', async () => {
    const onToggle = vi.fn()

    render(<NavToggle isOpen={false} onToggle={onToggle} toggleRef={createRef()} />)

    screen.getByRole('button', { name: TOGGLE_LABEL }).click()

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('draws the design’s three bars at rest, 7px apart, and spreads them on hover', () => {
    render(<NavToggle isOpen={false} onToggle={() => {}} toggleRef={createRef()} />)

    const burger = screen.getByTestId('burger')

    expect(burger.className).toBe(burgerClass)
    expect(burger).toHaveAttribute('aria-hidden', 'true')
    expect(within(burger).getAllByTestId(/^bar-/)).toHaveLength(BAR_PARTS.length)

    expect(screen.getByTestId('bar-top').className).toBe(barClass('top', false))
    expect(screen.getByTestId('bar-top').className).toContain('top-0')
    expect(screen.getByTestId('bar-top').className).toContain('group-hover:-translate-y-[3px]')

    expect(screen.getByTestId('bar-middle').className).toBe(barClass('middle', false))
    expect(screen.getByTestId('bar-middle').className).toContain('top-[7px]')

    expect(screen.getByTestId('bar-bottom').className).toBe(barClass('bottom', false))
    expect(screen.getByTestId('bar-bottom').className).toContain('top-[14px]')
    expect(screen.getByTestId('bar-bottom').className).toContain('group-hover:translate-y-[3px]')
  })

  it('folds the bars into an X while the drawer is out, over the design’s own 0.2s', () => {
    render(<NavToggle isOpen onToggle={() => {}} toggleRef={createRef()} />)

    expect(screen.getByTestId('bar-top').className).toBe(barClass('top', true))
    expect(screen.getByTestId('bar-top').className).toContain('rotate-45')
    expect(screen.getByTestId('bar-top').className).toContain('top-[7px]')

    expect(screen.getByTestId('bar-middle').className).toBe(barClass('middle', true))
    expect(screen.getByTestId('bar-middle').className).toContain('bg-transparent')

    expect(screen.getByTestId('bar-bottom').className).toBe(barClass('bottom', true))
    expect(screen.getByTestId('bar-bottom').className).toContain('-rotate-45')
    expect(screen.getByTestId('bar-bottom').className).toContain('top-[7px]')

    for (const part of BAR_PARTS) {
      expect(screen.getByTestId(`bar-${part}`).className).toContain('h-[2px]')
      expect(screen.getByTestId(`bar-${part}`).className).toContain('w-[30px]')
      expect(screen.getByTestId(`bar-${part}`).className).toContain('duration-200')
    }

    // The middle bar is the one that goes away, so the outer two read as a single X.
    expect(screen.getByTestId('bar-top').className).toContain('bg-toggle')
    expect(screen.getByTestId('bar-bottom').className).toContain('bg-toggle')
    expect(screen.getByTestId('bar-middle').className).not.toContain('bg-toggle')
  })
})
