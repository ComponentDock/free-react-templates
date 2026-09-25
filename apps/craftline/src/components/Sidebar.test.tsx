import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders profile name and title', () => {
    render(<Sidebar />)
    const names = screen.getAllByText('Alex Morgan')
    expect(names.length).toBeGreaterThanOrEqual(1)
    const titles = screen.getAllByText('UI/UX Designer')
    expect(titles.length).toBeGreaterThanOrEqual(1)
  })

  it('renders navigation links', () => {
    render(<Sidebar />)
    const links = [
      'Home',
      'About',
      'Services',
      'Skills',
      'Education',
      'Experience',
      'Work',
      'Blog',
      'Contact',
    ]
    links.forEach((label) => {
      const els = screen.getAllByText(label)
      expect(els.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders dark mode toggle button', () => {
    render(<Sidebar />)
    const btns = screen.getAllByRole('button', { name: /switch to dark mode/i })
    expect(btns.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles dark mode on click', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const btn = screen.getAllByRole('button', { name: /switch to dark mode/i })[0]!
    await user.click(btn)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getAllByText('Light').length).toBeGreaterThanOrEqual(1)
  })

  it('renders social media links', () => {
    render(<Sidebar />)
    const fbLinks = screen.getAllByRole('link', { name: 'Facebook' })
    expect(fbLinks.length).toBeGreaterThanOrEqual(1)
    const twLinks = screen.getAllByRole('link', { name: 'Twitter' })
    expect(twLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders mobile toggle button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: /toggle navigation menu/i })).toBeDefined()
  })

  it('opens mobile sidebar on toggle click', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
  })

  it('closes mobile sidebar on overlay click', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    // Click the overlay to close
    const overlay = document.querySelector('.fixed.inset-0.bg-black\\/50')
    if (overlay) {
      await user.click(overlay as HTMLElement)
      expect(toggle.getAttribute('aria-expanded')).toBe('false')
    }
  })

  it('renders profile image', () => {
    render(<Sidebar />)
    const imgs = screen.getAllByAltText('Profile photo')
    expect(imgs.length).toBeGreaterThanOrEqual(1)
  })

  it('renders copyright text', () => {
    render(<Sidebar />)
    const copyright = screen.getAllByText(/All rights reserved/)
    expect(copyright.length).toBeGreaterThanOrEqual(1)
  })
})
