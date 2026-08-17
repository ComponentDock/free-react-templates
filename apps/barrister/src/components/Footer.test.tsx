import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { RECENT_POSTS, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders the four widget columns and the Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()

    for (const social of SOCIALS) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    for (const post of RECENT_POSTS) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveClass('text-brand')
    expect(screen.getByRole('link', { name: /Barrister/ })).toHaveClass('text-brand')
    expect(screen.getByText(/All rights reserved/)).toHaveTextContent(`Copyright ©${new Date().getFullYear()}`)
  })

  it('rejects empty and invalid emails and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Your email is required')

    await user.type(input, 'nope')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email')

    await user.clear(input)
    await user.type(input, 'client@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('Thanks! You are subscribed.')
  })

  it('clears the error as the user types', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(input, 'a')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renders the Learn more button linking home', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '#home-section')
  })
})