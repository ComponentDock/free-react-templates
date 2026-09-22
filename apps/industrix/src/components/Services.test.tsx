import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /we provide all of your/i })).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Industrial Construction' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mechanical Engineering' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bridge Construction' })).toBeInTheDocument()
  })

  it('renders Learn More links for each card', () => {
    render(<Services />)
    const learnMoreLinks = screen.getAllByText('Learn More')
    expect(learnMoreLinks.length).toBe(3)
  })

  it('renders service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('has an accessible heading linked via aria-labelledby', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: /we provide all of your/i })
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('aria-labelledby', 'services-heading')
  })
})
