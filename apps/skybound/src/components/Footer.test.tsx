import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four dark-footer widgets with instafeed and navigation links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-ink')
    for (const title of ['About Skybound', 'Navigation Links', 'Newsletter', 'Instafeed']) {
      expect(screen.getByRole('heading', { level: 6, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/The world has become so fast paced/)).toBeInTheDocument()
    for (const label of ['Home', 'Services', 'Project', 'Team Members', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toHaveClass('footer-link')
    }
    expect(screen.getAllByRole('img', { name: 'Traveller snapshot' })).toHaveLength(8)
    expect(screen.getByText(/For business professionals caught between/)).toBeInTheDocument()
  })

  it('validates the footer newsletter email and confirms a valid subscription', () => {
    render(<Footer />)
    const submit = screen.getByRole('button', { name: 'Subscribe to newsletter' })
    expect(submit).toHaveClass('click-btn')
    fireEvent.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Newsletter email address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.click(submit)
    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks for subscribing! Please check your inbox.',
    )
  })

  it('credits Skybound and links Component Dock instead of any external attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright © All rights reserved/)).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toHaveClass('social-link')
    }
  })
})
