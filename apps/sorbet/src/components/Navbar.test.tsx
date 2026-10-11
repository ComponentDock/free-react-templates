import { describe, it, expect, beforeEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

function setScroll(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, writable: true, configurable: true })
  act(() => {
    fireEvent.scroll(window)
  })
}

describe('Navbar', () => {
  beforeEach(() => {
    setScroll(0)
  })

  it('floats transparent over the hero with the brand wordmark and download link', () => {
    const { container } = render(<Navbar />)

    const nav = container.querySelector('nav')!
    expect(nav.className).toContain('absolute')
    expect(nav.className).toContain('bg-transparent')
    expect(screen.getByRole('link', { name: 'sorbet' })).toHaveAttribute('href', '#home')

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()

    const download = screen.getByRole('link', { name: /Download/ })
    expect(download).toHaveAttribute('href', '#signup')
    expect(download.className).toContain('bg-white')
  })

  it('opens and closes the components dropdown', async () => {
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Components/ })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'All Components' })).toHaveAttribute('href', '#buttons')
    expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute(
      'href',
      '#typography',
    )

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'All Components' })).not.toBeInTheDocument()
  })

  it('toggles the collapsed mobile menu', async () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    const panel = toggle.nextElementSibling as HTMLElement
    expect(panel.className).toContain('hidden')

    await userEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(panel.className).toContain('flex')
  })

  it('switches to the solid black bar once the page is scrolled', () => {
    const { container } = render(<Navbar />)

    setScroll(120)

    const nav = container.querySelector('nav')!
    expect(nav.className).toContain('fixed')
    expect(nav.className).toContain('bg-black')
    expect(screen.getByRole('link', { name: 'sorbet' }).className).toContain('text-white')

    setScroll(10)

    expect(container.querySelector('nav')!.className).toContain('bg-transparent')
  })
})
