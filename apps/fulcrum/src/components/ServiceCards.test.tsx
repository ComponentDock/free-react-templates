import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCards } from './ServiceCards'

describe('ServiceCards', () => {
  it('renders section heading', () => {
    render(<ServiceCards />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Services')
  })

  it('renders all 6 service cards', () => {
    render(<ServiceCards />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })

  it('renders service titles', () => {
    render(<ServiceCards />)
    const titles = [
      'Content Marketing',
      'Social Media Marketing',
      'Brand & Logo Design',
      'Social Media Advertising',
      'PPC Advertising',
      'Web Design & Development',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<ServiceCards />)
    expect(screen.getByText(/Strategic content creation/)).toBeInTheDocument()
    expect(screen.getByText(/Modern, responsive websites/)).toBeInTheDocument()
  })
})
