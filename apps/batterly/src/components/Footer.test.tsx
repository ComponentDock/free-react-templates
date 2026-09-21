import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Batterly')).toBeInTheDocument()
  })

  it('renders working hours', () => {
    render(<Footer />)
    expect(screen.getByText('Working Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument()
    expect(screen.getByText('8:00 AM - 9:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
  })

  it('renders about text', () => {
    render(<Footer />)
    expect(screen.getByText(/Crafting sweet memories/)).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/Batterly — All rights reserved/)).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
    expect(screen.getByText('Site Map')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toBeInTheDocument()
    expect(cdLink.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink.closest('a')).toHaveAttribute('target', '_blank')
  })

  it('newsletter form prevents default submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('test@example.com')
  })
})
