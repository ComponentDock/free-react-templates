import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders three contact cards', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<ContactInfo />)
    expect(screen.getByText('123 Fitness Avenue')).toBeInTheDocument()
    expect(screen.getByText('(90) 277 278 2566')).toBeInTheDocument()
    expect(screen.getByText('justly@gmail.com')).toBeInTheDocument()
  })
})
