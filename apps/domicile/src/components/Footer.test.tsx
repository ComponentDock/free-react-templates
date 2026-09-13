import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer with about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Domicile')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Feature')).toBeInTheDocument()
  })

  it('renders newsletter section with form', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders InstaFeed section', () => {
    render(<Footer />)
    expect(screen.getByText('InstaFeed')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('submits the newsletter form and clears email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')

    await user.click(screen.getByText('Subscribe'))
    expect(input).toHaveValue('')
  })

  it('renders social links in footer', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByLabelText(/Facebook|Twitter|Dribbble|Behance/)
    expect(socialLinks.length).toBe(4)
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
