import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BRAND } from '../data'

describe('Navbar', () => {
  it('renders the brand with a gold dot and all nav links with Home active', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: /Barrister/ })
    expect(brand).toHaveAttribute('href', '#home-section')
    expect(brand).toHaveTextContent(BRAND)
    expect(brand.querySelector('span')).toHaveClass('text-brand')

    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-white')
    for (const label of ['Attorneys', 'Our Services', 'About', 'Contact Us']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('opens the Attorneys dropdown on hover and closes it on leave', () => {
    render(<Navbar />)

    const attorneys = screen.getByRole('link', { name: /Attorneys/ })
    const wrapper = attorneys.closest('div')!
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()

    fireEvent.mouseEnter(wrapper)
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()

    fireEvent.mouseLeave(wrapper)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('reveals the nested submenu on hover and closes it on leave', () => {
    render(<Navbar />)

    const attorneys = screen.getByRole('link', { name: /Attorneys/ })
    const wrapper = attorneys.closest('div')!
    fireEvent.mouseEnter(wrapper)

    const dropdownButton = screen.getByRole('button', { name: /Dropdown/ })
    const childContainer = dropdownButton.closest('div')!
    fireEvent.mouseEnter(childContainer)
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Three' })).toBeInTheDocument()

    // hovering a leaf child (no submenu) leaves the submenu state untouched
    const menuOne = screen.getByRole('link', { name: 'Menu One' })
    fireEvent.mouseEnter(menuOne.closest('div')!)
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()

    // leaving the nested child closes the submenu panel
    fireEvent.mouseLeave(childContainer)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
  })

  it('toggles the nested submenu via the Dropdown button', () => {
    render(<Navbar />)

    const attorneys = screen.getByRole('link', { name: /Attorneys/ })
    const wrapper = attorneys.closest('div')!
    fireEvent.mouseEnter(wrapper)

    const dropdownButton = screen.getByRole('button', { name: /Dropdown/ })
    const childContainer = dropdownButton.closest('div')!
    fireEvent.mouseEnter(childContainer)
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()

    fireEvent.click(dropdownButton)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
    fireEvent.click(dropdownButton)
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
  })

  it('opens and closes the mobile drawer and closes on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Sub Menu Two' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // a non-Escape key keeps the drawer open
    await user.click(toggle)
    await user.keyboard('a')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // a nested child link closes the drawer
    await user.click(toggle)
    await user.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: 'Menu One' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // a grandchild submenu link closes the drawer too
    await user.click(toggle)
    await user.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: 'Sub Menu Two' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    await user.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: 'About' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})