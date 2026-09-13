import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Attorneys } from './Attorneys'

describe('Attorneys', () => {
  it('renders the section heading', () => {
    render(<Attorneys />)
    expect(screen.getByText('Our Legal Attorneys')).toBeInTheDocument()
  })

  it('renders all four attorney names', () => {
    render(<Attorneys />)
    expect(screen.getByText('Lloyd Wilson')).toBeInTheDocument()
    expect(screen.getByText('Rachel Parker')).toBeInTheDocument()
    expect(screen.getByText('Ian Smith')).toBeInTheDocument()
    expect(screen.getByText('Alicia Henderson')).toBeInTheDocument()
  })

  it('renders attorney roles', () => {
    render(<Attorneys />)
    expect(screen.getByText('CEO, Founder')).toBeInTheDocument()
    expect(screen.getByText('Business Lawyer')).toBeInTheDocument()
    expect(screen.getByText('Insurance Lawyer')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Attorneys />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBe(4)
  })
})
