import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name as a light-weight logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Steeple' })).toHaveAttribute('href', '#home')
  })

  it('shows the uppercase nav links Home, Sermons, Beliefs, Events, About, Contact', () => {
    render(<Navbar />)
    for (const label of ['Home', 'Sermons', 'Events', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label, hidden: true })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Beliefs', hidden: true })).toBeInTheDocument()
  })

  it('opens the Beliefs dropdown with God, Humanity, Salvation and a nested Churches list', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const beliefs = screen.getByRole('button', { name: 'Beliefs', hidden: true })
    await user.click(beliefs)
    for (const item of ['God', 'Humanity', 'Salvation', 'Churches']) {
      expect(screen.getByRole('link', { name: item, hidden: true })).toBeInTheDocument()
    }
    for (const continent of ['America', 'Europe', 'Asia', 'Africa']) {
      expect(screen.getByRole('link', { name: continent, hidden: true })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Sermons' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Events' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('opens the Beliefs dropdown inside the mobile menu and closes with the close control', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('button', { name: 'Beliefs' }))
    expect(within(mobileNav).getByRole('link', { name: 'God' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Africa' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'God' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(reopened).getByRole('button', { name: 'Beliefs' }))
    await user.click(within(reopened).getByRole('link', { name: 'Africa' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const third = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const panel = third.parentElement
    expect(panel).not.toBeNull()
    await user.click(within(panel as HTMLElement).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('adds a shadow once the page is scrolled', () => {
    const scrollSpy = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('shadow-md')
    scrollSpy.mockReturnValue(120)
    fireEvent.scroll(window)
    expect(header).toHaveClass('shadow-md')
    scrollSpy.mockReturnValue(0)
    fireEvent.scroll(window)
    expect(header).not.toHaveClass('shadow-md')
    scrollSpy.mockRestore()
  })
})
