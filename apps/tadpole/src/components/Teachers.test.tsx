import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Teachers } from './Teachers'

describe('Teachers', () => {
  it('renders section heading', () => {
    render(<Teachers />)
    expect(screen.getByText('Our Teachers')).toBeInTheDocument()
  })

  it('renders all three teacher cards', () => {
    render(<Teachers />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders teacher roles', () => {
    render(<Teachers />)
    expect(screen.getByText('Lead Educator')).toBeInTheDocument()
    expect(screen.getByText('Creative Arts Director')).toBeInTheDocument()
    expect(screen.getByText('Early Learning Specialist')).toBeInTheDocument()
  })

  it('renders teacher images', () => {
    render(<Teachers />)
    expect(screen.getByAltText('Portrait of Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('Portrait of James Wilson')).toBeInTheDocument()
    expect(screen.getByAltText('Portrait of Emily Chen')).toBeInTheDocument()
  })
})
