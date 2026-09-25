import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />)

    expect(screen.getByRole('heading', { name: 'Work Experience' })).toBeInTheDocument()
    expect(screen.getByText('PREVIOUS JOBS')).toBeInTheDocument()
  })

  it('renders job titles and companies', () => {
    render(<Experience />)

    expect(screen.getByText('Senior Key Account Manager')).toBeInTheDocument()
    expect(screen.getByText('TechCorp Inc.')).toBeInTheDocument()
    expect(screen.getByText('Key Account Manager')).toBeInTheDocument()
    expect(screen.getByText('Digital Solutions Ltd.')).toBeInTheDocument()
  })

  it('renders bullet points for each job', () => {
    render(<Experience />)

    expect(screen.getByText('Managed a portfolio of 50+ enterprise clients')).toBeInTheDocument()
    expect(screen.getByText('Grew client portfolio from 20 to 40 accounts')).toBeInTheDocument()
  })

  it('has dark purple background styling', () => {
    const { container } = render(<Experience />)

    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-experience-bg')
  })
})
