import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Fellowship')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Ministries')).toBeInTheDocument()
    expect(screen.getByText('Sermons')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows Ministries dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const ministries = screen.getByText('Ministries')
    await user.hover(ministries)
    expect(screen.getByText('Outreach')).toBeInTheDocument()
    expect(screen.getByText("Men's")).toBeInTheDocument()
    expect(screen.getByText("Women's")).toBeInTheDocument()
    expect(screen.getByText("Children's")).toBeInTheDocument()
    expect(screen.getByText('Youth')).toBeInTheDocument()
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const ministries = screen.getByText('Ministries')
    await user.hover(ministries)
    expect(screen.getByText('Outreach')).toBeInTheDocument()
    await user.unhover(ministries)
    expect(screen.queryByText('Outreach')).not.toBeInTheDocument()
  })

  it('shows Sermons dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const sermons = screen.getByText('Sermons')
    await user.hover(sermons)
    expect(screen.getByText('Daily Sermon')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Audio')).toBeInTheDocument()
    expect(screen.getByText('Video')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when clicking a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const homeLinks = screen.getAllByText('Home')
    const homeLink = homeLinks[1]!
    await user.click(homeLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when clicking a dropdown child link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const outreachLink = screen.getByText('Outreach')
    await user.click(outreachLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
