import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurb, CTAs, stats, and office image', () => {
    render(<Hero />)

    expect(screen.getByText('Now Accepting New Patients')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Your Smile Deserves/)

    expect(screen.getByText(/Experience modern, gentle dental care/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Book Appointment/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call \(555\) 234-5678/ })).toBeInTheDocument()

    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('10,000+')).toBeInTheDocument()
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()

    expect(screen.getByAltText(/Modern dental office/)).toBeInTheDocument()
  })
})
