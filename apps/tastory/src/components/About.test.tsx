import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders story subtitle and welcome heading', () => {
    render(<About />)
    expect(screen.getByText('Our Story')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome')
  })

  it('renders description and learn more button', () => {
    render(<About />)
    expect(screen.getByText(/far far away/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more about us/i })).toBeInTheDocument()
  })

  it('renders restaurant image', () => {
    render(<About />)
    expect(screen.getByAltText('Restaurant interior')).toBeInTheDocument()
  })
})
