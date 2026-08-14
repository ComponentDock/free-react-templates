import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MidBar } from './MidBar'

describe('MidBar', () => {
  it('renders the Pressroom logo wordmark', () => {
    render(<MidBar />)
    expect(screen.getByText('Pressroom')).toBeInTheDocument()
  })

  it('links the logo to the home anchor', () => {
    render(<MidBar />)
    expect(screen.getByRole('link', { name: 'Pressroom home' })).toHaveAttribute('href', '#home')
  })

  it('renders social media icon links', () => {
    render(<MidBar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })
})
