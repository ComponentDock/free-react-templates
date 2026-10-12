import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { BRAND, HOME_HREF, SHEET_ID, TOGGLE_ID, TOGGLE_LABEL } from '../lib/site'
import {
  barClass,
  brandClass,
  burgerClass,
  headerClass,
  headerRowClass,
  toggleClass,
} from '../lib/styles'

describe('Navbar — the header the sheet is opened from', () => {
  it('floats the wordmark and the burger apart on the design’s own padding', () => {
    render(<Navbar isOpen={false} onToggle={() => {}} toggleRef={createRef<HTMLButtonElement>()} />)

    const header = screen.getByTestId('header')

    expect(header.tagName).toBe('HEADER')
    expect(header.className).toBe(headerClass)
    expect(header.className).toContain('absolute')
    expect(header.className).toContain('z-[9]')
    expect(header.className).toContain('py-8')
    expect(header.className).toContain('max-md:py-4')

    expect(screen.getByTestId('container').className).toContain('px-[15px]')

    const row = header.querySelector('div > div')

    expect(row?.className).toBe(headerRowClass)
    expect(row?.className).toContain('justify-between')

    const brand = screen.getByText(BRAND)

    expect(brand).toHaveAttribute('href', HOME_HREF)
    expect(brand.className).toBe(brandClass)
    expect(brand.className).toContain('tracking-[5px]')
    expect(brand.className).toContain('text-on-dark')
  })

  it('draws the burger as three white bars with no word of its own', () => {
    render(<Navbar isOpen={false} onToggle={() => {}} toggleRef={createRef<HTMLButtonElement>()} />)

    const toggle = screen.getByTestId('toggle')

    expect(toggle.id).toBe(TOGGLE_ID)
    expect(toggle.tagName).toBe('BUTTON')
    expect(toggle.className).toBe(toggleClass())
    expect(toggle.className).toContain('h-[28.8px]')
    expect(toggle.className).toContain('w-[20px]')
    expect(screen.getByTestId('burger').className).toBe(burgerClass)

    for (const part of ['top', 'middle', 'bottom'] as const) {
      const bar = screen.getByTestId(`bar-${part}`)

      expect(bar.className).toBe(barClass(part))
      expect(bar.className).toContain('bg-on-dark')
      expect(bar.className).toContain('h-[2px]')
    }

    expect(screen.getByTestId('bar-middle').className).toContain('w-[20px]')
    expect(screen.getByTestId('bar-top').className).toContain('w-[30px]')
    expect(screen.getByTestId('bar-bottom').className).toContain('w-[30px]')
  })

  it('names the burger and carries the sheet’s state, which the design never did', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    const { rerender } = render(
      <Navbar isOpen={false} onToggle={onToggle} toggleRef={createRef<HTMLButtonElement>()} />,
    )

    const toggle = screen.getByRole('button', { name: TOGGLE_LABEL })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', SHEET_ID)

    await user.click(toggle)

    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<Navbar isOpen onToggle={onToggle} toggleRef={createRef<HTMLButtonElement>()} />)

    expect(screen.getByRole('button', { name: TOGGLE_LABEL })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
