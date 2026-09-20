import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the heading and read more button', () => {
    render(<Welcome />)
    expect(screen.getByRole('heading', { name: 'Welcome to Ethos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders the welcome image', () => {
    render(<Welcome />)
    expect(screen.getByAltText('Students studying together')).toBeInTheDocument()
  })
})
