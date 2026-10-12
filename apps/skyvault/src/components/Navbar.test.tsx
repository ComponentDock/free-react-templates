import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

describe('Navbar', () => {
  beforeEach(() => {
    setScrollY(0)
  })

  it('renders a transparent header with the wordmark, five destinations and the auth pair', () => {
    render(<Navbar />)

    const header = document.querySelector('header')!
    expect(header).toHaveClass('fixed', 'bg-transparent', 'z-[100]')
    expect(screen.getByRole('link', { name: 'Skyvault home' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getAllByRole('link')).toHaveLength(5)
    for (const label of ['Home', 'About us', 'Services', 'News', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `#${label === 'About us' ? 'about' : label.toLowerCase()}`,
      )
    }

    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
  })

  it('collapses the 124px row into the violet bar past 91px and restores it at the top', () => {
    render(<Navbar />)

    const header = document.querySelector('header')!
    const row = header.firstElementChild!
    expect(row).toHaveClass('h-[124px]')

    setScrollY(120)
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-night', 'pt-[6px]')
    expect(row).toHaveClass('h-[80px]')

    setScrollY(0)
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-transparent')
    expect(row).toHaveClass('h-[124px]')
  })

  it('marks the current destination and moves the mark on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const home = within(nav).getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home).toHaveClass('text-mint')

    const services = within(nav).getByRole('link', { name: 'Services' })
    await user.click(services)

    expect(services).toHaveAttribute('aria-current', 'page')
    expect(home).not.toHaveAttribute('aria-current')
  })

  it('opens the off-canvas panel from the hamburger and hands focus back on close', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: 'Open the menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(trigger)

    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger).toHaveAccessibleName('Close the menu')

    await user.click(within(dialog).getByRole('button', { name: 'Close panel' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('removes the scroll listener when it unmounts', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })
})
