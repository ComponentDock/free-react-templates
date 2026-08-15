import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders every section in order', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Dental Care, Done Right.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'EMERGENCY SERVICE.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Departments' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'A Clinic Built Around Your Comfort' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)

    expect(document.title).toBe('Mintly — Dental Care Template')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('link', { name: 'Departments' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
