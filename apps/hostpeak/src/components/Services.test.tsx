import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading and all service cards', () => {
    render(<Services />)
    expect(screen.getByText('High Quality Service')).toBeInTheDocument()
    expect(screen.getByText('SSD Cloud Hosting')).toBeInTheDocument()
    expect(screen.getByText('Free Domain Transfer')).toBeInTheDocument()
    expect(screen.getByText('Best Hosting Service')).toBeInTheDocument()
    expect(screen.getByText('Strong Backup')).toBeInTheDocument()
    expect(screen.getByText('Email Service')).toBeInTheDocument()
    expect(screen.getByText('Data Analysis')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Lightning-fast SSD/)).toBeInTheDocument()
    expect(screen.getByText(/Award-winning hosting/)).toBeInTheDocument()
  })
})
