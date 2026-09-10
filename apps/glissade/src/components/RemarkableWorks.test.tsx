import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RemarkableWorks } from './RemarkableWorks'

describe('RemarkableWorks', () => {
  it('renders the section title', () => {
    render(<RemarkableWorks />)
    expect(screen.getByRole('heading', { name: /Remarkable Works/i })).toBeInTheDocument()
  })

  it('renders three project cards', () => {
    render(<RemarkableWorks />)
    const images = screen.getAllByRole('img', { name: 'Vector Illustration' })
    expect(images).toHaveLength(3)
  })

  it('renders View Project buttons for each card', () => {
    render(<RemarkableWorks />)
    const buttons = screen.getAllByRole('link', { name: 'View Project' })
    expect(buttons).toHaveLength(3)
    for (const btn of buttons) {
      expect(btn).toHaveAttribute('href', '#')
    }
  })
})
