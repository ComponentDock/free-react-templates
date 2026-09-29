import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders all 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('SEO/SEM')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText(/learn more/i)
    expect(links).toHaveLength(3)
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getAllByText(/Esteem spirit temper/i).length).toBeGreaterThanOrEqual(3)
  })
})
