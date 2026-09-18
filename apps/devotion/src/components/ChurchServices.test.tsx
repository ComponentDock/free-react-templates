import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ChurchServices } from './ChurchServices'

describe('ChurchServices', () => {
  it('renders the section heading', () => {
    render(<ChurchServices />)
    expect(screen.getByText('Church Services')).toBeInTheDocument()
  })

  it('renders 3 service cards with unique titles', () => {
    render(<ChurchServices />)
    expect(screen.getByText('Sunday Worship Service')).toBeInTheDocument()
    expect(screen.getByText('Bible Study Group')).toBeInTheDocument()
    expect(screen.getByText('Youth Fellowship')).toBeInTheDocument()
  })

  it('has Read More links', () => {
    render(<ChurchServices />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })
})
