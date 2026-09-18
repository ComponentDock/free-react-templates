import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('Linnet')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders footer link columns', () => {
    render(<Footer />)
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
  })
})
