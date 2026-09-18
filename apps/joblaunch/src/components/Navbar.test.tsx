import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name with Job and Launch', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Job.*Launch/i })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Post a Job button', () => {
    render(<Navbar />)
    const buttons = screen.getAllByText('+ Post a Job')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })

  it('shows dropdown on hover over Category', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const categoryBtn = screen.getByText('Category')
    await user.hover(categoryBtn)
    expect(screen.getByText('Full Time')).toBeInTheDocument()
    expect(screen.getByText('Part Time')).toBeInTheDocument()
    expect(screen.getByText('Freelance')).toBeInTheDocument()
    expect(screen.getByText('Internship')).toBeInTheDocument()
    expect(screen.getByText('Temporary')).toBeInTheDocument()
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const categoryBtn = screen.getByText('Category')
    await user.hover(categoryBtn)
    expect(screen.getByText('Full Time')).toBeInTheDocument()
    await user.unhover(categoryBtn)
    expect(screen.queryByText('Full Time')).not.toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })
})
