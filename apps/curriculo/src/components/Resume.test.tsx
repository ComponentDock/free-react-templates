import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Resume } from './Resume'

describe('Resume', () => {
  it('renders section heading', () => {
    render(<Resume />)
    expect(screen.getByText(/my/i)).toBeInTheDocument()
    expect(screen.getByText(/resume/i)).toBeInTheDocument()
  })

  it('renders education items', () => {
    render(<Resume />)
    expect(screen.getByText('Master of Information Technology')).toBeInTheDocument()
    expect(screen.getByText('Bachelor of Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Advanced UX Certification')).toBeInTheDocument()
    expect(screen.getByText('Google UX Design Professional')).toBeInTheDocument()
  })

  it('renders experience items', () => {
    render(<Resume />)
    expect(screen.getByText('Lead Product Designer')).toBeInTheDocument()
    expect(screen.getByText('Senior UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Product Designer')).toBeInTheDocument()
    expect(screen.getByText('Junior UI/UX Designer')).toBeInTheDocument()
  })

  it('renders column headings', () => {
    render(<Resume />)
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
  })
})
