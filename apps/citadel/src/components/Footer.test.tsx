import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('itadel')).toBeInTheDocument()
  })

  it('renders Company links', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Media')).toBeInTheDocument()
    expect(screen.getByText('Career')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Stability')).toBeInTheDocument()
  })

  it('renders Solutions links', () => {
    render(<Footer />)
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Industrial Problems')).toBeInTheDocument()
    expect(screen.getByText('Construction Solution')).toBeInTheDocument()
    expect(screen.getByText('Car Manufacturing')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Problems')).toBeInTheDocument()
  })

  it('renders Branch Office section', () => {
    render(<Footer />)
    expect(screen.getByText('Branch Office')).toBeInTheDocument()
    expect(screen.getByText('London — UK')).toBeInTheDocument()
    expect(screen.getByText('New York — USA')).toBeInTheDocument()
  })

  it('renders office details', () => {
    render(<Footer />)
    expect(screen.getByText('127 Manchester City, London')).toBeInTheDocument()
    expect(screen.getByText('+008 728 362 278')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Citadel/)).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Footer />)
    expect(screen.getByText(/Delivering world-class industrial solutions/)).toBeInTheDocument()
  })
})
