import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { CALL_US, NAV_LINKS } from '../data'

describe('Header', () => {
  it('renders the navy top bar with brand, nav links, call-us link and sign-in button', () => {
    render(<Header />)

    const brand = screen.getByRole('link', { name: 'Landmark' })
    expect(brand).toHaveAttribute('href', '#home')

    for (const item of NAV_LINKS.filter((link) => !link.children)) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }

    const callUs = screen.getByRole('link', { name: new RegExp(`Call Us: ${CALL_US}`) })
    expect(callUs).toHaveAttribute('href', 'tel:+10783563276')

    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('opens and closes the Blog submenu on click', () => {
    render(<Header />)

    const blogButton = screen.getByRole('button', { name: /Blog/ })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    fireEvent.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toHaveAttribute(
      'href',
      '#blog-details',
    )
    expect(screen.getByRole('link', { name: 'Elements' })).toHaveAttribute('href', '#elements')

    fireEvent.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('renders the search form with keyword input, selects and Search pill', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const keyword = screen.getByLabelText('Enter Keyword')
    await user.type(keyword, 'waterfront')

    expect(screen.getByLabelText('Rent')).toBeInTheDocument()
    expect(screen.getByLabelText('Bed')).toBeInTheDocument()
    expect(screen.getByLabelText('Bath')).toBeInTheDocument()

    const searchButton = screen.getByRole('button', { name: 'Search' })
    expect(searchButton).toHaveClass('rounded-full')
    fireEvent.click(searchButton)
    expect(keyword).toHaveValue('waterfront')
  })

  it('opens and closes the mobile navigation on small viewports', async () => {
    window.innerWidth = 640
    window.dispatchEvent(new Event('resize'))
    const user = userEvent.setup()

    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(mobileNav).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: /Call Us/ })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('button', { name: 'Sign In' })).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    window.innerWidth = 1024
    window.dispatchEvent(new Event('resize'))
  })
})
