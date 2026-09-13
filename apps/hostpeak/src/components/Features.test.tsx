import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading and all feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Choose Your Own Virtual Space')).toBeInTheDocument()
    expect(screen.getByText('Secured Server')).toBeInTheDocument()
    expect(screen.getByText('Backup Facility')).toBeInTheDocument()
    expect(screen.getByText('Easy To Customize')).toBeInTheDocument()
    expect(screen.getByText('Free Domain Transfer')).toBeInTheDocument()
    expect(screen.getByText('Live Chat Support')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Enterprise-grade security/)).toBeInTheDocument()
    expect(screen.getByText(/Automatic daily backups/)).toBeInTheDocument()
  })
})
