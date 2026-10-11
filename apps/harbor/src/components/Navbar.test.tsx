import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

function pagesItem() {
  return screen.getByText('Pages').closest('li') as HTMLElement
}

describe('Navbar', () => {
  it('renders the logo and the full link set with Home marked current', () => {
    render(<Navbar />)
    expect(screen.getByText('Harbor')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Hosting', 'Pages', 'News', 'Contact']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { current: 'page' })).toHaveTextContent('Home')
  })

  it('opens the Pages dropdown on hover and closes it when the pointer leaves', () => {
    render(<Navbar />)
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    fireEvent.mouseEnter(pagesItem())
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '404' })).toBeInTheDocument()

    fireEvent.mouseLeave(pagesItem())
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('toggles the Pages dropdown on click and keeps aria-expanded in sync', () => {
    render(<Navbar />)
    const trigger = screen.getByRole('link', { name: /^Pages/ })

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Pricing' })).not.toBeInTheDocument()
  })

  it('does not mark items without children as expandable', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-haspopup')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-expanded')
  })

  it('opens and closes the mobile panel, including with Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Pricing' }).length).toBeGreaterThanOrEqual(1)

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('ignores other keys while the mobile panel is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    fireEvent.keyDown(document, { key: 'a' })
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })
  it('closes the mobile panel when a mobile link is used', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    // Child links live in the mobile panel only while it is open.
    fireEvent.click(screen.getByRole('link', { name: '404' }))
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // Desktop + mobile lists both render the same labels; the mobile one is last.
    const contactLinks = screen.getAllByRole('link', { name: 'Contact' })
    fireEvent.click(contactLinks[contactLinks.length - 1] as HTMLElement)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
