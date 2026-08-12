import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { instaFeedImages } from '../data'

describe('Footer', () => {
  it('renders the four widget columns with the Instagram grid and Component Dock link', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Agency' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigation Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'InstaFeed' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    const thumbs = container.querySelectorAll('img')
    expect(thumbs.length).toBeGreaterThanOrEqual(8)
    expect(thumbs[0]).toHaveAttribute('src', instaFeedImages[0])
  })

  it('shows an inline error for an invalid newsletter email', () => {
    render(<Footer />)

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('confirms a valid subscription and resets the field', () => {
    render(<Footer />)

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'a@b.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/thanks for subscribing/i)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
