import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Services We Offer')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Locksmith Services',
      'Safes & Locks',
      'Access Control',
      'Security Doors',
      'Alarm System',
      'Video Surveillance',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Professional locksmith solutions/i)).toBeInTheDocument()
    expect(screen.getByText(/High-quality safes/i)).toBeInTheDocument()
  })
})
