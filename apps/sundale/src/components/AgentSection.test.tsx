import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AgentSection } from './AgentSection'

describe('AgentSection', () => {
  it('renders agent name', () => {
    render(<AgentSection />)
    expect(screen.getByText('Jeremy Scott')).toBeInTheDocument()
  })

  it('renders agent role', () => {
    render(<AgentSection />)
    expect(screen.getByText('Realtor')).toBeInTheDocument()
  })

  it('renders agent bio', () => {
    render(<AgentSection />)
    expect(screen.getByText(/Etiam nec odio vestibulum/)).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<AgentSection />)
    expect(screen.getByText('+1 555 123 4567')).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<AgentSection />)
    expect(screen.getByText('office@sundale.com')).toBeInTheDocument()
  })

  it('renders agent image', () => {
    render(<AgentSection />)
    const img = screen.getByRole('img', { name: 'Real estate agent' })
    expect(img).toBeInTheDocument()
  })
})
