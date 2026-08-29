import { render, screen } from '@testing-library/react'
import { SolidButtons } from './SolidButtons'

describe('SolidButtons', () => {
  it('renders solid buttons with correct labels', () => {
    render(<SolidButtons />)
    expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /print/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
  })

  it('renders 10 buttons total', () => {
    render(<SolidButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(10)
  })

  it('applies solid fill styling with 3D shadow', () => {
    const { container } = render(<SolidButtons />)
    const buttons = container.querySelectorAll('button')
    for (const btn of buttons) {
      expect(btn.className).toContain('shadow-')
    }
  })
})
