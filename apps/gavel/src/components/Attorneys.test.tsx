import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attorneys } from './Attorneys'
import { attorneys } from '../data'

describe('Attorneys', () => {
  it('renders the section heading', () => {
    render(<Attorneys />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Legal Attorneys' }),
    ).toBeInTheDocument()
  })

  it('renders four attorney cards with photo, name, and role', () => {
    render(<Attorneys />)
    expect(attorneys).toHaveLength(4)
    for (const attorney of attorneys) {
      expect(screen.getByRole('heading', { level: 3, name: attorney.name })).toBeInTheDocument()
      expect(screen.getByText(attorney.role)).toBeInTheDocument()
      expect(screen.getByAltText(attorney.name)).toHaveAttribute('src', attorney.photo)
    }
  })

  it('hides the quote on the back of each card', () => {
    render(<Attorneys />)
    for (const attorney of attorneys) {
      expect(screen.getByText(new RegExp(attorney.quote.slice(0, 20)))).toBeInTheDocument()
    }
  })
})
