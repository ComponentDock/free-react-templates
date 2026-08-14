import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand in bold uppercase with a white background', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: 'Verdant' })
    expect(brand).toHaveTextContent('Verdant')
    expect(brand.className).toMatch(/uppercase/)
    expect(brand.className).toMatch(/font-bold/)
    expect(screen.getByRole('banner').className).toMatch(/bg-white/)
  })

  it('renders Home (active), Services, Blog, Contact links', () => {
    render(<Navbar />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home.className).toMatch(/active|font-bold/)
    for (const label of ['Services', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('opens the About dropdown with Testimonials, Gallery, FAQ, Why Choose Us and Sub Menus', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const about = screen.getAllByRole('button', { name: /About/ })[0]!
    expect(screen.queryByRole('link', { name: 'Testimonials' })).not.toBeInTheDocument()
    await user.click(about)
    expect(about).toHaveAttribute('aria-expanded', 'true')
    for (const label of ['Testimonials', 'Gallery', 'FAQ', 'Why Choose Us']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('button', { name: /Sub Menus/ }).length).toBeGreaterThan(0)
  })

  it('opens the nested Sub Menus dropdown with Testimonials, Gallery and Why Choose Us', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getAllByRole('button', { name: /About/ })[0]!)
    const subMenus = screen.getAllByRole('button', { name: /Sub Menus/ })[0]!
    await user.click(subMenus)
    expect(subMenus).toHaveAttribute('aria-expanded', 'true')
    // Nested entries: Testimonials / Gallery / Why Choose Us (3 + 3 in the
    // outer dropdown for Testimonials etc. — assert counts)
    expect(screen.getAllByRole('link', { name: 'Testimonials' }).length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByRole('link', { name: 'Gallery' }).length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByRole('link', { name: 'Why Choose Us' }).length).toBeGreaterThanOrEqual(2)
  })

  it('shows a green Get Started button', () => {
    render(<Navbar />)
    const getStarted = screen.getAllByRole('link', { name: 'Get Started' })[0]!
    expect(getStarted.className).toMatch(/bg-primary/)
    expect(getStarted.className).toMatch(/text-white/)
  })

  it('toggles the mobile menu with the hamburger button', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    const mobilePanel = container.querySelector('#mobile-menu')!
    const tokens = (el: Element) => el.className.split(' ')
    expect(tokens(mobilePanel)).toContain('hidden')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(tokens(mobilePanel)).toContain('block')
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(tokens(mobilePanel)).toContain('hidden')
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobilePanel = container.querySelector('#mobile-menu')!
    const links = screen.getAllByRole('link', { name: 'Blog' })
    const mobileBlog = links[links.length - 1]!
    await user.click(mobileBlog)
    expect(mobilePanel.className.split(' ')).toContain('hidden')
  })

  it('closes the mobile menu when the mobile Get Started button is chosen', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobilePanel = container.querySelector('#mobile-menu')!
    const getStarted = screen.getAllByRole('link', { name: 'Get Started' })
    await user.click(getStarted[getStarted.length - 1]!)
    expect(mobilePanel.className.split(' ')).toContain('hidden')
  })
})
