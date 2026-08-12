import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  CATEGORY_LINKS,
  CREDIT_BRAND,
  GALLERY_SEEDS,
  NEWSLETTER_TEXT,
  WORKING_HOURS,
} from '../data'

describe('Footer', () => {
  it('renders the about column with working hours', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cargoly' })).toBeInTheDocument()
    for (const slot of WORKING_HOURS) {
      expect(screen.getByText(slot.days)).toBeInTheDocument()
      expect(screen.getByText(slot.hours)).toBeInTheDocument()
    }
  })

  it('renders the category links', () => {
    render(<Footer />)

    for (const label of CATEGORY_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the gallery thumbnail grid with six seeded images', () => {
    const { container } = render(<Footer />)

    const thumbs = container.querySelectorAll('img[loading="lazy"]')
    expect(thumbs).toHaveLength(6)
    GALLERY_SEEDS.forEach((seed, index) => {
      expect(thumbs[index]).toHaveAttribute('src', `https://picsum.photos/seed/${seed}/100/100`)
    })
  })

  it('renders the newsletter form with email input and subscribe button', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByText(NEWSLETTER_TEXT)).toBeInTheDocument()
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'ada@cargoly.com')
    expect(input).toHaveValue('ada@cargoly.com')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    fireEvent.submit(input.closest('form')!)
    expect(input).toHaveValue('ada@cargoly.com')
  })

  it('renders the copyright credit with the red heart and Colorlib link', () => {
    render(<Footer />)

    expect(screen.getByText(/Copyright © \d{4} Cargoly/)).toBeInTheDocument()
    expect(screen.getByLabelText('love')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CREDIT_BRAND })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
  })
})
