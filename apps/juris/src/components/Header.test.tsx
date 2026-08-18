import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the top bar with contact info and social links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: '+1 (78) 673 3567' })).toHaveAttribute(
      'href',
      'tel:+1786733567',
    )
    expect(screen.getByRole('link', { name: 'hello@juris.example' })).toHaveAttribute(
      'href',
      'mailto:hello@juris.example',
    )
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Linkedin']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the logo, primary nav links and CTAs', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Juris home' })).toBeInTheDocument()
    const primary = screen.getByRole('navigation', { name: 'Primary navigation' })
    for (const label of ['Home', 'Practice Area', 'About', 'Contact']) {
      expect(within(primary).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(primary).getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make An Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: /Call Us:/ })).toHaveAttribute(
      'href',
      'tel:+1786733567',
    )
  })

  it('opens and closes the Blog submenu', () => {
    render(<Header />)
    const blogButton = screen.getByRole('button', { name: 'Blog' })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    fireEvent.click(blogButton)
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it when a link is clicked', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobile).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    fireEvent.click(within(mobile).getByRole('link', { name: 'Home' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a submenu link is clicked', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    fireEvent.click(toggle)
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobile).getByRole('link', { name: 'Blog Details' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the appointment CTA is clicked', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    fireEvent.click(toggle)
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobile).getByRole('link', { name: 'Make An Appointment' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('adds a shadow to the nav row after scrolling past the hero', () => {
    render(<Header />)
    const navRow = screen.getByTestId('nav-row')
    expect(navRow).not.toHaveClass('shadow-md')
    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(navRow).toHaveClass('shadow-md')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(navRow).not.toHaveClass('shadow-md')
  })
})
