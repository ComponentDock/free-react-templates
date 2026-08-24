import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Havenshore — Hotel & Resort Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Navbar
    expect(screen.getAllByText('Havenshore').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Call Us/)).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /Havenshore/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/go offline/i)).toBeInTheDocument()

    // Booking form
    expect(screen.getByText('Check In')).toBeInTheDocument()
    expect(screen.getByText('Check Out')).toBeInTheDocument()
    expect(screen.getByText('Guest')).toBeInTheDocument()
    expect(screen.getByText('Check Availability')).toBeInTheDocument()

    // Video intro
    expect(screen.getByRole('heading', { name: /shelter is the Outcome/i })).toBeInTheDocument()

    // Pampering
    expect(screen.getByRole('heading', { name: /Pampering Included/i })).toBeInTheDocument()

    // About features
    expect(screen.getByRole('heading', { name: /Joyful experiences/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /A world-class restaurant/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Swimming Pool/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Party Center/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByRole('heading', { name: /past guests have to say/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    expect(hamburger).toBeInTheDocument()

    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile menu renders inside a <nav> — verify it's present
    const nav = document.querySelector('header nav')
    expect(nav).toBeInTheDocument()
    expect(nav!.querySelector('a[href="#rooms"]')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    // After closing, the mobile nav is removed from DOM
    expect(document.querySelector('header nav')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(document.querySelector('header nav')).toBeInTheDocument()

    // Click a nav link — should close the menu
    const nav = document.querySelector('header nav')!
    const homeLink = nav.querySelector('a[href="#home"]') as HTMLAnchorElement
    await user.click(homeLink)
    expect(document.querySelector('header nav')).not.toBeInTheDocument()
  })
})

describe('BookingForm', () => {
  it('has date inputs and guest select', () => {
    render(<App />)
    const dateInputs = screen.getAllByDisplayValue('')
    expect(dateInputs.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByDisplayValue('Number of guests')).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    const submitBtn = screen.getByRole('button', { name: /check availability/i })
    await user.click(submitBtn)
    // No page reload — form's onSubmit calls preventDefault
  })
})

describe('Footer', () => {
  it('links to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has social links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
  })
})
