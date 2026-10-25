import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, the four links and the boxed contact pill', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Nadia Okafor/ })).toHaveAttribute('href', '#/')
    expect(screen.getByRole('link', { name: 'Selected work' })).toHaveAttribute('href', '#work')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '#/resume')
    expect(screen.getByRole('link', { name: 'Get in touch ↗' })).toHaveAttribute('href', '#contact')
  })

  it('starts collapsed and toggles the menu', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'site-nav')
    expect(nav).toHaveClass('hidden')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(nav).toHaveClass('flex')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the menu when a link is activated', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    fireEvent.click(toggle)

    fireEvent.click(screen.getByRole('link', { name: 'About' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the menu when the contact pill is activated', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    fireEvent.click(toggle)

    fireEvent.click(screen.getByRole('link', { name: 'Get in touch ↗' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes on Escape and returns focus to the toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    fireEvent.click(toggle)

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('stays open on any key that is not Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Menu' })
    fireEvent.click(toggle)

    await user.keyboard('a')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('ignores Escape while the menu is closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Menu' })

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('detaches the Escape listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }))
    unmount()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('button', { name: 'Menu' })).toBeNull()
  })
})

describe('Footer', () => {
  it('links Component Dock instead of any other credit', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText('Devfolio · Thoughtfully built.')).toBeInTheDocument()
    expect(screen.getByText('Setup & publishing guide')).toBeInTheDocument()
    expect(screen.getByText(/the career history are fictional/)).toBeInTheDocument()
  })
})
