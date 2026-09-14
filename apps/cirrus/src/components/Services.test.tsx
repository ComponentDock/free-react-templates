import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByText('Cloud Services')).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByText('Cloud databases')).toBeInTheDocument()
    expect(screen.getByText('Website Hosting')).toBeInTheDocument()
    expect(screen.getByText('File Storage')).toBeInTheDocument()
    expect(screen.getByText('Forex Trading')).toBeInTheDocument()
    expect(screen.getByText('File Backups')).toBeInTheDocument()
    expect(screen.getByText('Remote Desktop')).toBeInTheDocument()
  })

  it('renders six green circle icons', () => {
    render(<Services />)
    const icons = document.querySelectorAll('.rounded-full.bg-brand-green')
    expect(icons).toHaveLength(6)
  })
})
