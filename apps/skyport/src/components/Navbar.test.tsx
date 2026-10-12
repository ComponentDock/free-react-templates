import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

const SHADOW = 'shadow-[-21.213px_21.213px_30px_rgba(158,158,158,0.3)]'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value })
}

describe('Navbar', () => {
  it('renders the dark utility strip above a seven-item uppercase menu', () => {
    render(<Navbar />)

    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const label of ['Home', 'Plan', 'About', 'Service', 'Faq', 'Contact']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveClass('text-[12px]', 'uppercase', 'px-[8px]', 'hover:text-brand')
    }
    expect(screen.getByRole('button', { name: /Pages/ })).toHaveAttribute('aria-haspopup', 'true')
    expect(screen.getByRole('link', { name: 'Get Skyport' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skyport home' })).toHaveAttribute('href', '#home')
  })

  it('marks the chosen section as the current page', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home).toHaveClass('text-brand')

    const plan = screen.getByRole('link', { name: 'Plan' })
    await user.click(plan)

    expect(plan).toHaveAttribute('aria-current', 'page')
    expect(home).not.toHaveAttribute('aria-current')
  })

  it('opens the Pages dropdown on hover and closes it on leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Pages/ })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.hover(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Style Guide' })).toBeInTheDocument()

    await user.unhover(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the dropdown on click and closes it on Escape with focus restored', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Pages/ })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()
  })

  it('closes the dropdown once a page entry is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Pages/ })
    await user.click(trigger)
    await user.click(screen.getByRole('link', { name: 'Style Guide' }))

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('collapses into an accessible mobile panel that closes on selection', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const serviceLinks = screen.getAllByRole('link', { name: 'Service' })
    expect(serviceLinks).toHaveLength(2)

    await user.click(serviceLinks[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile panel when one of its page entries is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Elements' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('leaves the dropdown and panel open for keys other than Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Pages/ })
    await user.click(trigger)
    await user.keyboard('{ArrowDown}')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Tab}')
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes the mobile panel on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('gains the offset shadow past 100px of scroll and drops it again at the top', () => {
    const { container, unmount } = render(<Navbar />)
    const header = container.querySelector('header')

    expect(header).toHaveClass('fixed', 'bg-surface', 'z-[997]')
    expect(header).not.toHaveClass(SHADOW)

    setScrollY(240)
    fireEvent.scroll(window)
    expect(header).toHaveClass(SHADOW)

    setScrollY(40)
    fireEvent.scroll(window)
    expect(header).not.toHaveClass(SHADOW)

    unmount()
  })
})
