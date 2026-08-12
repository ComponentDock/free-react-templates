import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with blurb and six social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Vigor' })).toBeInTheDocument()
    expect(screen.getByText(/dedicated fitness center/)).toBeInTheDocument()

    for (const social of ['Facebook', 'Twitter', 'Pinterest', 'Instagram', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders testimonials, class links, and contact info', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByText(/coaching at Vigor changed how I train/)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Classes' })).toBeInTheDocument()
    for (const cls of [
      'Bodybuilding Class',
      'Fitness Class',
      'Yoga Courses',
      'Dumbell Class',
      'Spinning Class',
      'Kangoo Jump Class',
    ]) {
      expect(screen.getByRole('link', { name: cls })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText(/Rockybeach Road/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+53 345 7953 32453' })).toHaveAttribute(
      'href',
      'tel:+53345795332453',
    )
    expect(screen.getByRole('link', { name: 'yourmail@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:yourmail@gmail.com',
    )
  })

  it('renders the bottom bar with year, credit, and a Component Dock link', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} All rights reserved`)),
    ).toBeInTheDocument()
    expect(screen.getByText(/This template is made with/)).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
