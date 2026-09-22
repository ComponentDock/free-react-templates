import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the address', () => {
    render(<Contact />)
    expect(screen.getByText(/333 Middle Winchendon Rd/)).toBeInTheDocument()
    expect(screen.getByText(/Rindge, NH 03461/)).toBeInTheDocument()
  })

  it('renders phone numbers', () => {
    render(<Contact />)
    expect(screen.getByText(/125-711-811/)).toBeInTheDocument()
    expect(screen.getByText(/125-668-886/)).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Contact />)
    expect(screen.getByText(/Support@fitcraftcenter.com/)).toBeInTheDocument()
  })

  it('has the contact section id', () => {
    const { container } = render(<Contact />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('renders section headings', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })
})
