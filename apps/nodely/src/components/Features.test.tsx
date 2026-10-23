import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the three feature tiles with their titles and blurbs', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 3, name: 'Fully Secured' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Unique Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'A Volunteer' })).toBeInTheDocument()

    expect(screen.getByText(/bank-grade encryption/)).toBeInTheDocument()
    expect(screen.getByText(/distinctive interface/)).toBeInTheDocument()
    expect(screen.getByText(/community that gives back/)).toBeInTheDocument()
  })
})
