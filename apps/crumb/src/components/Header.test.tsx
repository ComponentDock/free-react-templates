import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import {
  brandName,
  menuToggleLabel,
  mobileMenuLabel,
  navLinks,
  searchLabel,
  searchPlaceholder,
  socialLabels,
  socialLinks,
} from '../data'

describe('Header', () => {
  it('shows the search form, social icons, wordmark and nav links', () => {
    render(<Header />)

    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
    socialLinks.forEach((name) => {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    })
    expect(screen.getByRole('heading', { name: brandName })).toBeInTheDocument()
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    navLinks.forEach((label) => {
      expect(within(primaryNav).getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('does not navigate when the search form is submitted', () => {
    render(<Header />)
    fireEvent.submit(screen.getByRole('search'))
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it when a link is chosen', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: menuToggleLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: mobileMenuLabel })
    expect(mobileNav).toBeInTheDocument()

    fireEvent.click(within(mobileNav).getByRole('link', { name: navLinks[0] }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
