import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderBar } from './HeaderBar'

describe('HeaderBar', () => {
  it('renders subscribe button', () => {
    render(<HeaderBar />)
    expect(screen.getByRole('link', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<HeaderBar />)
    expect(screen.getByRole('link', { name: /pinterest/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })
})
