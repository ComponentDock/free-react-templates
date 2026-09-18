import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What we offer')
  })

  it('renders all six services', () => {
    render(<Services />)
    const titles = [
      'App Development',
      'Graphic Design',
      'Creative Idea',
      'Marketing',
      'Awesome Support',
      'Brand Design',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Maecenas tempus tellus/)
    expect(descriptions.length).toBe(6)
  })
})
