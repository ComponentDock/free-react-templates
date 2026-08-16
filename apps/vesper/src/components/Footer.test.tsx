import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with script wordmark and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: /Vesper Church/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders the About and Connect link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    for (const link of [
      'Staff',
      'Beliefs',
      'History',
      'Mission',
      'Wedding & Funerals',
      'Jobs & Internship',
      'Fellowships',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
    for (const link of [
      'Home Groups',
      'Recovery Groups',
      'Memberships',
      'Children & Students',
      'Volunteer',
      'Counseling',
      'Assistance',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Service Hours list', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Service Hours' })).toBeInTheDocument()
    expect(screen.getByText('Saturday Prayer Meeting: 10:00 am to 11:30 am')).toBeInTheDocument()
    expect(screen.getByText('Sunday Service: 8:30 am to 11:30 am')).toBeInTheDocument()
  })

  it('links the copyright attribution to Component Dock', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
