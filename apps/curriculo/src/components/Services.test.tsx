import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText(/my/i)).toBeInTheDocument()
    expect(screen.getByText(/services/i)).toBeInTheDocument()
  })

  it('renders all service items', () => {
    render(<Services />)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Search Engine Optimization')).toBeInTheDocument()
    expect(screen.getByText('Video Editing')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText(/learn more/i)
    expect(links).toHaveLength(3)
  })
})
