import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Tips } from './Tips'

describe('Tips', () => {
  it('renders the section heading', () => {
    render(<Tips />)
    expect(screen.getByRole('heading', { name: 'Tips from experts' })).toBeInTheDocument()
  })

  it('renders both blog posts', () => {
    render(<Tips />)
    expect(screen.getByText('20+ years agricultural cooperative')).toBeInTheDocument()
    expect(screen.getByText('Lawn Protection Equipments')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Tips />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(2)
  })

  it('renders the More Tips button', () => {
    render(<Tips />)
    expect(screen.getByText('More Tips')).toBeInTheDocument()
  })

  it('renders post images', () => {
    render(<Tips />)
    expect(screen.getByAltText('20+ years agricultural cooperative')).toBeInTheDocument()
    expect(screen.getByAltText('Lawn Protection Equipments')).toBeInTheDocument()
  })
})
