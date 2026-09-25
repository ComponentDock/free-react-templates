import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeDefined()
    expect(link.closest('a')?.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeDefined()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Twitter')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
    expect(screen.getByLabelText('LinkedIn')).toBeDefined()
  })
})
