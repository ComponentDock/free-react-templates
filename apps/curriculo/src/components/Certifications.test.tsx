import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Certifications } from './Certifications'

describe('Certifications', () => {
  it('renders section heading', () => {
    render(<Certifications />)
    expect(screen.getByRole('heading', { name: /certifications.*awards/i })).toBeInTheDocument()
  })

  it('renders all certification items', () => {
    render(<Certifications />)
    expect(screen.getByText('Google UX Design Professional')).toBeInTheDocument()
    expect(screen.getByText('Awwwards Site of the Day')).toBeInTheDocument()
    expect(screen.getByText('AWS Certified Solutions Architect')).toBeInTheDocument()
    expect(screen.getByText('CSS Design Awards — Best UI')).toBeInTheDocument()
    expect(screen.getByText('Meta Front-End Developer')).toBeInTheDocument()
    expect(screen.getByText('Red Dot Design Award')).toBeInTheDocument()
  })

  it('renders years', () => {
    render(<Certifications />)
    expect(screen.getByText('2031')).toBeInTheDocument()
    expect(screen.getByText('2030')).toBeInTheDocument()
    expect(screen.getByText('2029')).toBeInTheDocument()
    expect(screen.getByText('2028')).toBeInTheDocument()
    expect(screen.getByText('2027')).toBeInTheDocument()
    expect(screen.getByText('2026')).toBeInTheDocument()
  })
})
