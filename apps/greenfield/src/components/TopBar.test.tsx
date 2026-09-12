import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders email link', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /info@greenfield.com/i })).toHaveAttribute(
      'href',
      'mailto:info@greenfield.com',
    )
  })

  it('renders social icons', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dribbble/i })).toBeInTheDocument()
  })
})
