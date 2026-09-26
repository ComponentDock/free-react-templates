import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders profile image and brand name', () => {
    render(<Sidebar />)
    expect(screen.getByAltText('Photosnap profile')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Photosnap' })).toBeInTheDocument()
  })

  it('renders all 6 navigation links', () => {
    render(<Sidebar />)
    const links = ['Home', 'Collection', 'About Me', 'My Services', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders newsletter email input and submit button', () => {
    render(<Sidebar />)
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe to newsletter' })).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('has complementary landmark', () => {
    render(<Sidebar />)
    expect(screen.getByRole('complementary')).toBeInTheDocument()
  })

  it('has navigation landmark', () => {
    render(<Sidebar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('shows hamburger button on mobile viewport', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: 'Open navigation' })).toBeInTheDocument()
  })

  it('toggles sidebar visibility on mobile when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const btn = screen.getByRole('button', { name: 'Open navigation' })

    await user.click(btn)
    expect(screen.getByRole('button', { name: 'Close navigation' })).toBeInTheDocument()
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()

    await user.click(screen.getByTestId('sidebar-overlay'))
    expect(screen.getByRole('button', { name: 'Open navigation' })).toBeInTheDocument()
  })

  it('submits newsletter form without page reload', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const input = screen.getByLabelText('Email address for newsletter')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe to newsletter' }))
    expect(input).toHaveValue('test@example.com')
  })

  it('closes sidebar when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const openBtn = screen.getByRole('button', { name: 'Open navigation' })

    await user.click(openBtn)
    const closeBtn = screen.getByRole('button', { name: 'Close navigation' })
    await user.click(closeBtn)
    expect(screen.getByRole('button', { name: 'Open navigation' })).toBeInTheDocument()
  })
})
