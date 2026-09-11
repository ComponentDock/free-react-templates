import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading', () => {
    render(<Features />)
    expect(screen.getByText('Our Main Features')).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Organization')).toBeInTheDocument()
    expect(screen.getByText('Risk Analysis')).toBeInTheDocument()
    expect(screen.getByText('Marketing Strategy')).toBeInTheDocument()
    expect(screen.getByText('Capital Market')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<Features />)
    expect(screen.getByAltText('Consulting team at work')).toBeInTheDocument()
  })
})
