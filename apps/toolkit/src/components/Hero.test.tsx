import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tools UI Kit.')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Free Bootstrap 4 UI Kit on Tools Design.')).toBeInTheDocument()
  })

  it('renders the DOWNLOAD TOOLS button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /download tools/i })).toBeInTheDocument()
  })

  it('has a gradient background', () => {
    const { container } = render(<Hero />)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-gradient')
  })

  it('has white text', () => {
    const { container } = render(<Hero />)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('text-white')
  })
})
