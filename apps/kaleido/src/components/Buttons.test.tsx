import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Buttons } from './Buttons'

describe('Buttons', () => {
  it('renders the section heading', () => {
    render(<Buttons />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Buttons')
  })

  it('renders size variants', () => {
    render(<Buttons />)
    expect(screen.getByRole('button', { name: /small/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /medium/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /large/i })).toBeInTheDocument()
  })

  it('renders style variants', () => {
    render(<Buttons />)
    const allButtons = screen.getAllByRole('button')
    const buttonTexts = allButtons.map((b) => b.textContent)
    expect(buttonTexts).toContain('Primary')
    expect(buttonTexts).toContain('Outline')
    expect(buttonTexts).toContain('Ghost')
    expect(buttonTexts).toContain('Danger')
  })
})
