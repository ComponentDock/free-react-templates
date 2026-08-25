import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudy } from './CaseStudy'

describe('CaseStudy', () => {
  it('renders the heading, Learn More link and three case cards', () => {
    render(<CaseStudy />)

    expect(screen.getByText('Case Study')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Case study' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: /E-Commerce Platform Redesign/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /SaaS Dashboard Design/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Mobile Banking App/i }),
    ).toBeInTheDocument()

    const viewCaseLinks = screen.getAllByRole('link', { name: 'View Case' })
    expect(viewCaseLinks).toHaveLength(3)
  })
})
