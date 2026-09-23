import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialButtons } from './SocialButtons'

describe('SocialButtons', () => {
  it('renders divider text', () => {
    render(<SocialButtons />)
    expect(screen.getByText('— Or Sign In With —')).toBeInTheDocument()
  })

  it('renders Facebook button', () => {
    render(<SocialButtons />)
    const link = screen.getByText('Facebook')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#facebook')
  })

  it('renders Twitter button', () => {
    render(<SocialButtons />)
    const link = screen.getByText('Twitter')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#twitter')
  })

  it('social buttons are full width', () => {
    render(<SocialButtons />)
    const facebook = screen.getByText('Facebook')
    const twitter = screen.getByText('Twitter')
    expect(facebook.className).toContain('w-full')
    expect(twitter.className).toContain('w-full')
  })

  it('social buttons have white background', () => {
    render(<SocialButtons />)
    const facebook = screen.getByText('Facebook')
    expect(facebook.className).toContain('bg-white')
  })

  it('social buttons have black text', () => {
    render(<SocialButtons />)
    const facebook = screen.getByText('Facebook')
    expect(facebook.className).toContain('text-black')
  })

  it('social buttons have rounded corners', () => {
    render(<SocialButtons />)
    const facebook = screen.getByText('Facebook')
    const twitter = screen.getByText('Twitter')
    expect(facebook.className).toContain('rounded-[4px]')
    expect(twitter.className).toContain('rounded-[4px]')
  })

  it('social buttons are flex items', () => {
    render(<SocialButtons />)
    const facebook = screen.getByText('Facebook')
    expect(facebook.className).toContain('flex')
  })
})
