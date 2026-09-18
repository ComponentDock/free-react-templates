import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the features heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /our features/i })).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /minimal and modern design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /do things with love/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /take your business online/i })).toBeInTheDocument()
  })

  it('renders Learn More links for each feature', () => {
    render(<Features />)
    const links = screen.getAllByRole('link', { name: /learn more/i })
    expect(links).toHaveLength(3)
  })
})
