import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the About column, navigations, follow us and live streaming', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Decibel' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigations' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Watch Live Streaming' })).toBeInTheDocument()

    for (const item of ['Home', 'DJs', 'News', 'Top 20 of the week']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    for (const social of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    const play = screen.getByRole('link', { name: 'Watch live streaming' })
    expect(play).toHaveAttribute('href', 'https://vimeo.com/')
    expect(play).toHaveAttribute('target', '_blank')
  })

  it('links the Component Dock footer attribution', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('validates the subscribe email and confirms on success', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('A valid email address is required.')

    await user.type(screen.getByLabelText('Email address'), 'fan@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
