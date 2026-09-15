import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheading, and call-to-action button', () => {
    render(<Hero />)

    expect(screen.getByText('We are here to help!')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Experience \. Innovation \. Excellence/)

    expect(screen.getByRole('link', { name: 'Request a Free Consultation' })).toBeInTheDocument()
  })

  it('shows a decorative hero background image', () => {
    render(<Hero />)

    const bgDiv = document.querySelector('[style*="picsum.photos"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
