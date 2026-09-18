import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Compassion')).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    for (const link of ['Home', 'About', 'Messages', 'Events', 'Contact']) {
      expect(within(nav).getByText(link)).toBeInTheDocument()
    }
  })

  it('marks Home as active', () => {
    render(<Navbar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveClass('text-brand')
  })

  it('toggles mobile menu on button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[aboutLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('shows dropdown on Messages hover', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    const messagesBtn = screen.getByRole('button', { name: /messages/i })
    await user.hover(messagesBtn)
    expect(screen.getByText('Audio Sermons')).toBeInTheDocument()
    expect(screen.getByText('Past Messages')).toBeInTheDocument()
    expect(screen.getByText('Bible Reading')).toBeInTheDocument()
    expect(screen.getByText('End Time Prophecy')).toBeInTheDocument()
  })

  it('hides dropdown on Messages mouse leave', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    const messagesBtn = screen.getByRole('button', { name: /messages/i })
    await user.hover(messagesBtn)
    expect(screen.getByText('Audio Sermons')).toBeInTheDocument()
    await user.unhover(messagesBtn)
    expect(screen.queryByText('Audio Sermons')).not.toBeInTheDocument()
  })

  it('has correct aria attributes on dropdown', () => {
    render(<Navbar />)
    const messagesBtn = screen.getByRole('button', { name: /messages/i })
    expect(messagesBtn).toHaveAttribute('aria-expanded', 'false')
    expect(messagesBtn).toHaveAttribute('aria-haspopup', 'true')
  })
})
