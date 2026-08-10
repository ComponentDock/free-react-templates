import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import {
  aboutBlurb,
  brandName,
  closeMenuLabel,
  dropdownToggleLabel,
  menuToggleLabel,
  mobileMenuLabel,
  navLinks,
  pagesDropdown,
  searchLabel,
  searchPlaceholder,
  socialLabels,
  socialLinks,
  subscribeButtonLabel,
} from '../data'

describe('Header', () => {
  it('shows the hamburger, nav, search, subscribe button, wordmark and social icons', () => {
    render(<Header />)

    expect(screen.getByRole('button', { name: menuToggleLabel })).toBeInTheDocument()
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    navLinks.forEach((label) => {
      expect(within(primaryNav).getByText(label)).toBeInTheDocument()
    })
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: subscribeButtonLabel })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: brandName })).toBeInTheDocument()
    socialLinks.forEach((name) => {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    })
  })

  it('opens and closes the Pages dropdown', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: dropdownToggleLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    pagesDropdown.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: pagesDropdown[0]! })).not.toBeInTheDocument()
  })

  it('does not navigate when the search form is submitted', () => {
    render(<Header />)
    fireEvent.submit(screen.getByRole('search'))
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
  })

  it('opens the mobile menu and closes it with the close control', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: menuToggleLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileMenuLabel })
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav).getByText(aboutBlurb)).toBeInTheDocument()
    navLinks.forEach((label) => {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: closeMenuLabel }))
    expect(screen.queryByRole('navigation', { name: mobileMenuLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link or subscribe action is chosen', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: menuToggleLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileMenuLabel })
    fireEvent.click(within(mobileNav).getByRole('link', { name: navLinks[0]! }))
    expect(screen.queryByRole('navigation', { name: mobileMenuLabel })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: menuToggleLabel }))
    const reopened = screen.getByRole('navigation', { name: mobileMenuLabel })
    fireEvent.click(within(reopened).getByRole('link', { name: subscribeButtonLabel }))
    expect(screen.queryByRole('navigation', { name: mobileMenuLabel })).not.toBeInTheDocument()
  })
})
