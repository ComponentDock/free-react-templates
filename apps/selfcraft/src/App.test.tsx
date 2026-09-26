import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the Bio view by default with the correct heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Kate Woodman")
    expect(screen.getByText('Web Designer & Developer')).toBeInTheDocument()
  })

  it('renders the Menu toggle button', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('toggles the offcanvas menu when Menu is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuBtn = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(menuBtn)

    const siteWrap = menuBtn.closest('.min-h-screen')?.querySelector('.transition-transform')
    expect(siteWrap).not.toBeNull()
  })

  it('navigates to Portfolio view when Portfolio is clicked in the menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Navigation menu' })
    await user.click(within(dialog).getByRole('button', { name: 'Portfolio' }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Portfolio')
  })

  it('navigates to Contact view via menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Navigation menu' })
    await user.click(within(dialog).getByRole('button', { name: 'Contact' }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Me')
  })

  it('navigates to Resume view via menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Navigation menu' })
    await user.click(within(dialog).getByRole('button', { name: 'Resume' }))

    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
  })
})
