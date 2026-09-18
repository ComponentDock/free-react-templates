import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and subtitle', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
    expect(screen.getByText(/complete range of pest control services/)).toBeInTheDocument()
  })

  it('renders all 8 service cards', () => {
    render(<Services />)
    const titles = [
      'Cockroaches',
      'Ants',
      'Rodents',
      'Scorpion',
      'Silver Fish',
      'Millipedes',
      'Spiders',
      'Centipede',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('each card has a description', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(
      /eliminate|control|removal|treatments|addresses|removes|Comprehensive|address/,
    )
    expect(descriptions.length).toBeGreaterThanOrEqual(8)
  })
})
