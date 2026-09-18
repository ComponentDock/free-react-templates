import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Careerly logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Career')).toBeDefined()
    expect(screen.getByText('ly')).toBeDefined()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('For Candidates')).toBeDefined()
    expect(screen.getByText('For Employers')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('renders mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Toggle menu')).toBeDefined()
  })
})
