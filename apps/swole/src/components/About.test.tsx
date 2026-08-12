import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { ABOUT_PARAGRAPHS } from '../data'

describe('About', () => {
  it('renders the heading, two paragraphs, CTA, and photo', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We are Swole. A Dedicated Fitness Center Since 2004',
      }),
    ).toBeInTheDocument()

    ABOUT_PARAGRAPHS.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    })

    const cta = screen.getByRole('link', { name: 'Browse Services' })
    expect(cta).toHaveAttribute('href', '#courses')

    const photo = document.querySelector('img')
    expect(photo).toBeInTheDocument()
  })
})
