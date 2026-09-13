import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Services We Offer' })).toBeInTheDocument()
    expect(screen.getByText('Our services')).toBeInTheDocument()
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
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
