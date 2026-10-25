import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navItems, person } from '../content'

describe('Navbar', () => {
  it('renders the brand, the wordmark and every nav destination', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Rowan Ellis/ })).toHaveAttribute('href', '#main')
    expect(screen.getByText(person.monogram)).toHaveAttribute('aria-hidden', 'true')

    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }
    expect(screen.getByRole('link', { name: /Let’s talk/ })).toHaveAttribute('href', '#contact')
  })

  it('starts closed and opens from the menu toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'site-nav')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes on Escape and returns focus to the toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('closes after a link inside the menu is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    await user.click(screen.getByRole('link', { name: 'About' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes when the contact call-to-action is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    await user.click(screen.getByRole('link', { name: /Let’s talk/ }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('marks the current page in the nav', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('ignores keys other than Escape while the menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    await user.click(toggle)
    await user.keyboard('a')

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('ignores Escape while the menu is already closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false')
  })
})
