import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Physical Activity' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Healthy Nutrition' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Personal Training' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/praesent porttitor/i)
    expect(descriptions.length).toBe(3)
  })

  it('renders plus-icon links for each service', () => {
    render(<Services />)
    const plusLinks = screen.getAllByRole('link', { name: /learn more/i })
    expect(plusLinks.length).toBe(3)
  })
})
