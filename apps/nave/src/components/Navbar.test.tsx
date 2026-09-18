import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('NAVE')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Who We Are')).toBeInTheDocument()
    expect(screen.getByText('Ministries')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows mobile menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(1)
  })

  it('shows Ministries dropdown on hover and hides on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const ministries = screen.getByText('Ministries')
    await user.hover(ministries)
    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Students')).toBeInTheDocument()
    await user.unhover(ministries)
    expect(screen.queryByText('Children')).not.toBeInTheDocument()
  })

  it('hides mobile menu after clicking a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.getAllByText('Home')).toHaveLength(1)
  })

  it('hides mobile menu after clicking a child link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    const childLink = screen.getByText('Children')
    await user.click(childLink)
    expect(screen.queryByText('Children')).not.toBeInTheDocument()
  })
})
