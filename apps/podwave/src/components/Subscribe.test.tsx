import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders heading', () => {
    render(<Subscribe />)
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Subscribe />)
    expect(screen.getByLabelText('Enter Email')).toBeInTheDocument()
  })

  it('renders send button', () => {
    render(<Subscribe />)
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('has required email input', () => {
    render(<Subscribe />)
    expect(screen.getByLabelText('Enter Email')).toBeRequired()
  })

  it('renders description text', () => {
    render(<Subscribe />)
    expect(screen.getByText(/Never miss an episode/)).toBeInTheDocument()
  })

  it('handles form submission', () => {
    render(<Subscribe />)
    const form = screen.getByLabelText('Enter Email').closest('form')!
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })
})
