import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IconBoxes } from './IconBoxes'

describe('IconBoxes', () => {
  it('renders the section title', () => {
    render(<IconBoxes />)
    expect(screen.getByText('Build your entire website in minutes')).toBeInTheDocument()
  })

  it('renders feature items', () => {
    render(<IconBoxes />)
    expect(screen.getByText('Great team')).toBeInTheDocument()
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    expect(screen.getByText('Online Marketing')).toBeInTheDocument()
    expect(screen.getByText('Easy to use')).toBeInTheDocument()
  })

  it('renders discover more CTA', () => {
    render(<IconBoxes />)
    expect(screen.getByRole('link', { name: /discover more/i })).toBeInTheDocument()
  })
})
