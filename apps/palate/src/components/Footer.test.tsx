import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { COPYRIGHT, INSTAGRAM_SEEDS, NEWSLETTER_SUCCESS, OPEN_HOURS } from '../data'

describe('Footer', () => {
  it('renders the four widgets: brand+socials, open hours, newsletter, instagram', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'Palate' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Open Hours' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Instagram' })).toBeInTheDocument()

    // Three circular footer socials (Twitter, Facebook, Instagram).
    for (const label of ['twitter', 'facebook', 'instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    for (const row of OPEN_HOURS) {
      expect(screen.getByText(row.days)).toBeInTheDocument()
    }
    expect(screen.getAllByText('9:00 - 24:00')).toHaveLength(4)
    expect(screen.getAllByText('9:00 - 02:00')).toHaveLength(3)

    // 2×3 Instagram thumbnails.
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(INSTAGRAM_SEEDS.length)

    expect(screen.getByText(COPYRIGHT)).toBeInTheDocument()
  })

  it('shows a confirmation after a valid newsletter submit', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'diner@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_SUCCESS)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('rejects an invalid newsletter email with an error', () => {
    render(<Footer />)

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
