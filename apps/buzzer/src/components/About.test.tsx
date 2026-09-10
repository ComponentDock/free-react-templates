import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Build trust fast/i })).toBeInTheDocument()
  })

  it('renders the About Us label', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders the paragraph description', () => {
    render(<About />)
    expect(screen.getByText(/partner with forward-thinking companies/i)).toBeInTheDocument()
  })

  it('renders the More About Us button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /More About Us/i })).toBeInTheDocument()
  })

  it('renders experience stats', () => {
    render(<About />)
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
    expect(screen.getByText('$40M+')).toBeInTheDocument()
    expect(screen.getByText('Invested in projects')).toBeInTheDocument()
  })

  it('renders the two about cards', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Strategic Planning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Market Research' })).toBeInTheDocument()
  })
})
