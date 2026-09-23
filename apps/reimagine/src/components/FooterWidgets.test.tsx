import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FooterWidgets } from './FooterWidgets'

describe('FooterWidgets', () => {
  it('renders all three widget items', () => {
    render(<FooterWidgets />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Phone Number')).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<FooterWidgets />)
    expect(screen.getByText(/123 Creative Avenue/i)).toBeInTheDocument()
    expect(screen.getByText(/hello@reimagine.studio/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument()
  })
})
