import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Address } from './Address'

describe('Address', () => {
  it('renders the three column headings', () => {
    render(<Address />)
    expect(screen.getByRole('heading', { name: 'Our Location' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Opening Hour' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Drop a Message' })).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Address />)
    expect(screen.getByText(/123 Industrial Avenue/)).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<Address />)
    expect(screen.getByText(/Monday - Friday: 9:00 - 19:00/)).toBeInTheDocument()
    expect(screen.getByText(/Saturday - Sunday: Closed/)).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<Address />)
    expect(screen.getByText('info@industrix.com')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
  })

  it('renders Get Direction and Mail Us links', () => {
    render(<Address />)
    expect(screen.getByText('Get Direction')).toBeInTheDocument()
    expect(screen.getByText('Mail Us')).toBeInTheDocument()
  })

  it('has a landmark label for screen readers', () => {
    render(<Address />)
    expect(screen.getByRole('region', { name: /contact information/i })).toBeInTheDocument()
  })
})
