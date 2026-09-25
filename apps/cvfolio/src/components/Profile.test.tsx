import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Profile } from './Profile'

describe('Profile', () => {
  it('renders name and job title', () => {
    render(<Profile />)

    expect(screen.getByRole('heading', { name: 'Michel Smith' })).toBeInTheDocument()
    expect(screen.getByText('Key Account Manager')).toBeInTheDocument()
  })

  it('renders personal information', () => {
    render(<Profile />)

    expect(screen.getByText('January 01, 1990')).toBeInTheDocument()
    expect(screen.getByText('michel@example.com')).toBeInTheDocument()
    expect(screen.getByText('Single')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Profile />)

    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('renders profile photo', () => {
    render(<Profile />)

    const img = screen.getByRole('img', { name: /profile photo/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
