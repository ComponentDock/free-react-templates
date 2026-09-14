import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section title', () => {
    render(<Features />)
    expect(screen.getByText('Modern features')).toBeInTheDocument()
  })

  it('renders feature items', () => {
    render(<Features />)
    expect(screen.getByText('Responsive')).toBeInTheDocument()
    expect(screen.getByText('Clean code')).toBeInTheDocument()
    expect(screen.getByText('Retina ready')).toBeInTheDocument()
    expect(screen.getByText('Great team')).toBeInTheDocument()
  })

  it('renders discover more buttons', () => {
    render(<Features />)
    const links = screen.getAllByRole('link', { name: /discover more/i })
    expect(links.length).toBeGreaterThanOrEqual(2)
  })
})
