import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and all 3 contact cards', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()

    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('123 Creative Avenue')).toBeInTheDocument()
    expect(screen.getByText('Design District, NY 10001')).toBeInTheDocument()

    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()

    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('hello@prism.agency')).toBeInTheDocument()
  })
})
