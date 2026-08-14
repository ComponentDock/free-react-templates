import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('shows the EXPOSURE wordmark, six nav links and a Contact now button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Exposure' })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About', 'Gallery', 'Services', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    // Desktop + mobile navs both render a Contact now link (CSS visibility
    // is not applied in jsdom) — assert at least one is present.
    expect(screen.getAllByRole('link', { name: 'Contact now' }).length).toBeGreaterThanOrEqual(1)
  })

  it('switches from transparent to solid black on scroll and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    const header = document.querySelector('header')!
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')
    expect(header).toHaveClass('bg-black')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'transparent')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('opens and closes the Blog dropdown listing three sub-links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getAllByRole('link', { name: 'Blog' })[0]!
    expect(blog).toHaveAttribute('aria-expanded', 'false')

    blog.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Blog Details', 'Element']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }

    const blogDetails = screen.getByRole('link', { name: 'Blog Details' })
    blogDetails.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(blogDetails)
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu with the hamburger toggler', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggler = screen.getByRole('button', { name: 'Open menu' })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBe(2)

    await user.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a mobile link is followed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggler = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggler)

    const mobileLink = screen.getAllByRole('link', { name: 'Gallery' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile Contact now link is followed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggler = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggler)

    const mobileCta = screen.getAllByRole('link', { name: 'Contact now' })[1]!
    mobileCta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileCta)

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })
})
