import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroBanner } from './IntroBanner'
import { INTRO_COLUMNS } from '../data'

describe('IntroBanner', () => {
  it('renders the duplicate "Need Legal Services?" headings', () => {
    render(<IntroBanner />)

    const headings = screen.getAllByText(INTRO_COLUMNS[0].heading)
    expect(headings).toHaveLength(2)
  })

  it('renders the first column text', () => {
    render(<IntroBanner />)

    expect(screen.getByText(INTRO_COLUMNS[0].text!)).toBeInTheDocument()
  })

  it('renders the second column heading, text, and email link', () => {
    render(<IntroBanner />)

    expect(screen.getByText(INTRO_COLUMNS[1].text!)).toBeInTheDocument()
    const emailLink = screen.getByRole('link', { name: INTRO_COLUMNS[1].linkText! })
    expect(emailLink).toHaveAttribute('href', INTRO_COLUMNS[1].link)
  })

  it('renders the third column Consultation button', () => {
    render(<IntroBanner />)

    const btn = screen.getByRole('link', { name: INTRO_COLUMNS[2].button! })
    expect(btn).toHaveAttribute('href', INTRO_COLUMNS[2].buttonHref)
  })
})
