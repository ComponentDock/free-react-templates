import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { quickContact } from '../data'

describe('Header', () => {
  it('shows the logo, quick contact info, nav links, and social icons', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Frolic.' })).toHaveAttribute('href', '#home')
    expect(screen.getByText(quickContact.address)).toBeInTheDocument()
    expect(screen.getByText(quickContact.hours)).toBeInTheDocument()

    for (const label of ['Home', 'About', 'Packages', 'Gallery', 'Pricing', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Contact' })).not.toHaveAttribute('aria-current')

    for (const social of ['Facebook', 'Twitter', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toHaveAttribute('href', '#contact')
    }
  })

  it('expands and collapses the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)

    const mobileLink = screen.getAllByRole('link', { name: 'About' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
