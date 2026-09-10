import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and sub-sections', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Restaurant Style' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Chef' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Restaurant interior' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Our chef at work' })).toBeInTheDocument()
  })
})
