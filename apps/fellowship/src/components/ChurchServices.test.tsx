import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ChurchServices } from './ChurchServices'

describe('ChurchServices', () => {
  it('renders section heading', () => {
    render(<ChurchServices />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Church Services')
  })

  it('renders all service cards', () => {
    render(<ChurchServices />)
    expect(screen.getByText('Bible Studies')).toBeInTheDocument()
    expect(screen.getByText('Piano Lessons')).toBeInTheDocument()
    expect(screen.getByText('Youth Fellowship')).toBeInTheDocument()
    expect(screen.getByText('Community Outreach')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<ChurchServices />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks.length).toBe(4)
  })

  it('has accessible label', () => {
    render(<ChurchServices />)
    expect(screen.getByLabelText('Church services')).toBeInTheDocument()
  })
})
