import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('renders the heading with name and title', () => {
    render(<Hero />)
    expect(screen.getByText(/My name is Alex/)).toBeInTheDocument()
    expect(screen.getByText(/Digital Product Designer/)).toBeInTheDocument()
  })

  it('renders the welcome text', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to my portfolio')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/I create beautiful/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('View My Work')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders the profile image', () => {
    render(<Hero />)
    const img = screen.getByAltText(/Alex/)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
