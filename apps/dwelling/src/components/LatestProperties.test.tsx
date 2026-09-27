import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LatestProperties } from './LatestProperties'

describe('LatestProperties', () => {
  it('renders the section heading', () => {
    render(<LatestProperties />)
    expect(screen.getByText('Latest')).toBeInTheDocument()
    expect(screen.getByText('Property')).toBeInTheDocument()
  })

  it('renders 6 property cards', () => {
    render(<LatestProperties />)
    const names = [
      'Home in Merrick Way',
      'Unimont Aurum',
      'Vrindavan Flora',
      'Shramik Vaibhav',
      'Poddar Wondercity',
      'GoldCrest Residency',
    ]
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders agent names', () => {
    render(<LatestProperties />)
    const agents = screen.getAllByText('Ashton Kutcher')
    expect(agents.length).toBeGreaterThanOrEqual(1)
  })

  it('renders price labels', () => {
    render(<LatestProperties />)
    expect(screen.getByText('$ 1,200/month')).toBeInTheDocument()
  })

  it('renders For Rent label', () => {
    render(<LatestProperties />)
    expect(screen.getByText('For Rent')).toBeInTheDocument()
  })

  it('renders Featured label', () => {
    render(<LatestProperties />)
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('renders heart/save buttons', () => {
    render(<LatestProperties />)
    const saveButtons = screen.getAllByRole('button', { name: /save/i })
    expect(saveButtons.length).toBe(6)
  })

  it('renders bed and bath counts', () => {
    render(<LatestProperties />)
    expect(screen.getAllByText(/Beds/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Baths/).length).toBeGreaterThanOrEqual(1)
  })
})
