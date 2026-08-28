import { render, screen } from '@testing-library/react'
import { SolidButtons } from './SolidButtons'

describe('SolidButtons', () => {
  it('renders 4 solid buttons with correct labels', () => {
    render(<SolidButtons />)
    expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument()
  })

  it('renders 4 buttons total', () => {
    render(<SolidButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4)
  })

  it('applies solid fill styling with 3D shadow', () => {
    const { container } = render(<SolidButtons />)
    const buttons = container.querySelectorAll('button')
    for (const btn of buttons) {
      expect(btn.className).toContain('shadow-')
    }
  })
})
