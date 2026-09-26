import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders heading and all service cards', () => {
    render(<Services />)
    expect(screen.getByText('We do awesome services for our clients')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Web Application')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Banner Design')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Icon Design')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('SEO')).toBeInTheDocument()
  })
})
