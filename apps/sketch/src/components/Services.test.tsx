import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/digital experiences/i)
  })

  it('renders checklist items', () => {
    render(<Services />)
    expect(screen.getByText('Modern responsive design')).toBeInTheDocument()
    expect(screen.getByText('Performance optimized')).toBeInTheDocument()
    expect(screen.getByText('SEO friendly structure')).toBeInTheDocument()
  })

  it('renders the Get Started CTA', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders the service image', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: /our services/i })).toBeInTheDocument()
  })
})
