import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopNav } from './TopNav'

describe('TopNav', () => {
  it('renders the shipping banner', () => {
    render(<TopNav />)
    expect(screen.getByText(/free shipping on all u.s orders over \$50/i)).toBeInTheDocument()
  })

  it('renders currency selector', () => {
    render(<TopNav />)
    expect(screen.getByText('usd')).toBeInTheDocument()
  })

  it('renders language selector', () => {
    render(<TopNav />)
    expect(screen.getByText('English')).toBeInTheDocument()
  })

  it('renders account link', () => {
    render(<TopNav />)
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })
})
