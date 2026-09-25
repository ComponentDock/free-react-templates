import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Resume } from './Resume'

describe('Resume', () => {
  it('renders the heading', () => {
    render(<Resume />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Resume')
  })

  it('renders Education and Experience subheadings', () => {
    render(<Resume />)
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  it('renders education entries', () => {
    render(<Resume />)
    expect(screen.getByText('Master of Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Bachelor of Design')).toBeInTheDocument()
    expect(screen.getByText('Stanford University')).toBeInTheDocument()
  })

  it('renders experience entries', () => {
    render(<Resume />)
    expect(screen.getByText('Lead Product Designer')).toBeInTheDocument()
    expect(screen.getByText('Senior UI/UX Designer')).toBeInTheDocument()
    expect(screen.getByText('TechCorp')).toBeInTheDocument()
  })

  it('renders period dates', () => {
    render(<Resume />)
    expect(screen.getByText('2018 – 2020')).toBeInTheDocument()
    expect(screen.getByText('2022 – Present')).toBeInTheDocument()
  })
})
