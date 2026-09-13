import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders 4 info boxes', () => {
    render(<Contact />)
    expect(screen.getByText('123 Medical Center Dr')).toBeInTheDocument()
    expect(screen.getByText('+1 (234) 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@medvista.com')).toBeInTheDocument()
    expect(screen.getByText('www.medvista.com')).toBeInTheDocument()
  })

  it('renders the contact form with all fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('renders the map iframe', () => {
    render(<Contact />)
    expect(screen.getByTitle('Medvista location map')).toBeInTheDocument()
  })
})
