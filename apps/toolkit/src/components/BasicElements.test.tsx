import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BasicElements } from './BasicElements'

describe('BasicElements', () => {
  it('renders the section heading', () => {
    render(<BasicElements />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Basic Elements')
  })

  it('renders the Buttons subsection', () => {
    render(<BasicElements />)
    expect(screen.getByText('Buttons', { selector: 'h3' })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<BasicElements />)
    expect(screen.getByText('Pick your style')).toBeInTheDocument()
  })

  it('renders multiple button variants', () => {
    render(<BasicElements />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(5)
  })

  it('renders primary button variant', () => {
    render(<BasicElements />)
    expect(screen.getByRole('button', { name: /^primary$/i })).toBeInTheDocument()
  })

  it('renders outline button variant', () => {
    render(<BasicElements />)
    expect(screen.getByRole('button', { name: /^outline$/i })).toBeInTheDocument()
  })

  it('renders rounded button variant', () => {
    render(<BasicElements />)
    expect(screen.getByRole('button', { name: /^rounded$/i })).toBeInTheDocument()
  })
})
