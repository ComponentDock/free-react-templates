import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Services from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByText('My Services')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)

    const titles = [
      'Digital Strategy',
      'Web Design',
      'User Experience',
      'Web Development',
      'WordPress Solutions',
      'Mobile Applications',
    ]

    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)

    const descriptions = screen.getAllByText(/A small river named Duden/)
    expect(descriptions.length).toBe(6)
  })
})
