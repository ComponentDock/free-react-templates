import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { COMPONENT_DOCK_URL, QUICK_LINKS, SOCIAL_LINKS } from '../data'

describe('Footer', () => {
  it('renders the five widget columns', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Subscribe Us!' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Connect With Us' })).toBeInTheDocument()
    for (const link of QUICK_LINKS) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const social of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('links to Component Dock with the current copyright year', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: /Component Dock/ })
    expect(dockLink).toHaveAttribute('href', COMPONENT_DOCK_URL)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
  })

  it('shows a validation error for an invalid subscribe email', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('shows a success message for a valid subscribe email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
