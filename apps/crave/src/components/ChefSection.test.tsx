import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChefSection } from './ChefSection'

describe('ChefSection', () => {
  it('renders the section heading', () => {
    render(<ChefSection />)
    expect(screen.getByRole('heading', { level: 4, name: 'Our Chef' })).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<ChefSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Talent & experience member',
    )
  })

  it('renders all three chef names and titles', () => {
    render(<ChefSection />)
    expect(screen.getByText('Daniel Larose')).toBeInTheDocument()
    expect(screen.getByText('Executive Chef')).toBeInTheDocument()
    expect(screen.getByText('Sofia Marchetti')).toBeInTheDocument()
    expect(screen.getByText('Pastry Chef')).toBeInTheDocument()
    expect(screen.getByText('Marcus Chen')).toBeInTheDocument()
    expect(screen.getByText('Sous Chef')).toBeInTheDocument()
  })

  it('renders chef images with alt text', () => {
    render(<ChefSection />)
    expect(screen.getByAltText('Daniel Larose')).toBeInTheDocument()
    expect(screen.getByAltText('Sofia Marchetti')).toBeInTheDocument()
    expect(screen.getByAltText('Marcus Chen')).toBeInTheDocument()
  })

  it('has the chef section id', () => {
    const { container } = render(<ChefSection />)
    expect(container.querySelector('#chef')).toBeInTheDocument()
  })
})
