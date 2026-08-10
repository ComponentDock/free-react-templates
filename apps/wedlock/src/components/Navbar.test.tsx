import { describe, expect, it } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the monogram logo, wordmark and anchor links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Wedlock home' })).toBeInTheDocument()
    expect(screen.getByText('Wedlock')).toBeInTheDocument()
    for (const label of ['Our story', 'Photos', 'When & Where', 'Events']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the top contact row with phone and email', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 840 841 25 69')).toBeInTheDocument()
    expect(screen.getByText('hello@wedlock.example')).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pages = screen.getAllByRole('button', { name: 'Pages' })[0]!
    await user.click(pages)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'RSVP Page' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    await user.click(pages)
    expect(screen.queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()
  })

  it('becomes fixed with a solid background after scrolling past the hero', () => {
    const original = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    const { container, unmount } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('bg-transparent')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-white')

    unmount()
    Object.defineProperty(window, 'scrollY', {
      value: original,
      writable: true,
      configurable: true,
    })
  })

  it('closes the mobile menu with the Escape key', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('ignores non-Escape keys while the mobile menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    await user.keyboard('a')
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes the Pages dropdown with the Escape key', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pages = screen.getAllByRole('button', { name: 'Pages' })[0]!
    await user.click(pages)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a Pages link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const aboutLinks = screen.getAllByRole('link', { name: 'About Us' })
    const mobileLink = aboutLinks[aboutLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when an anchor link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const storyLinks = screen.getAllByRole('link', { name: 'Our story' })
    const mobileLink = storyLinks[storyLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
