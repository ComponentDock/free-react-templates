import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  addressLabel,
  addressText,
  dropdownLabel,
  facilitiesLabel,
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
  stickyThreshold,
} from '../data'

describe('Navbar', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('renders the wordmark, desktop nav links, active Home link, and address widget', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: siteName })
    expect(logo).toHaveAttribute('href', '#home')
    expect(logo).toHaveClass('font-serif')

    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      expect(nav).toHaveTextContent(item.label)
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')

    const address = screen.getByLabelText(addressLabel)
    expect(address).toHaveTextContent(addressText)
  })

  it('starts fixed once the page is scrolled past the threshold', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header).not.toHaveClass('fixed')

    Object.defineProperty(window, 'scrollY', { value: stickyThreshold + 10, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('fixed')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).not.toHaveClass('fixed')
  })

  it('opens and closes the Facilities dropdown, closing on a child link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: facilitiesLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const dropdown = screen.getByRole('list', { name: dropdownLabel })
    expect(dropdown).toHaveTextContent('Junior Suit')
    expect(dropdown).toHaveTextContent('Single Room')

    fireEvent.click(screen.getByRole('link', { name: 'Junior Suit' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('list', { name: dropdownLabel })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu, including dropdown children', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: mobileNavLabel })
    expect(mobile).toHaveTextContent('Contact')
    expect(screen.getByRole('list', { name: dropdownLabel })).toHaveTextContent('Double Room')

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    // Reopen and close by activating a dropdown child link.
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileReopened = screen.getByRole('navigation', { name: mobileNavLabel })
    fireEvent.click(within(mobileReopened).getByRole('link', { name: 'Senior Suit' }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    // Reopen and close by activating a plain link.
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileAgain = screen.getByRole('navigation', { name: mobileNavLabel })
    fireEvent.click(within(mobileAgain).getByRole('link', { name: 'News' }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
