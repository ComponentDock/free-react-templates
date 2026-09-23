import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the Services section with 4 service cards', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: /services/i })
    expect(section).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Web Development' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'UI/UX Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Brand Strategy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Digital Marketing' })).toBeInTheDocument()
  })

  it('renders service numbers', () => {
    render(<Services />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })

  it('renders bullet list items for each service', () => {
    render(<Services />)
    expect(screen.getByText('Responsive Design')).toBeInTheDocument()
    expect(screen.getByText('User Research')).toBeInTheDocument()
    expect(screen.getByText('Visual Identity')).toBeInTheDocument()
    expect(screen.getByText('SEO Optimization')).toBeInTheDocument()
  })

  it('has a watermark and vertical label', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: /services/i })
    const watermarks = section.querySelectorAll('[aria-hidden="true"]')
    expect(watermarks.length).toBeGreaterThanOrEqual(2)
  })
})
