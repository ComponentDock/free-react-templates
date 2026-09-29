import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HintText } from './HintText'

describe('HintText', () => {
  it('renders the hint text', () => {
    render(<HintText />)
    expect(screen.getByText(/press \[esc\] to close/i)).toBeInTheDocument()
  })

  it('is positioned at the top center', () => {
    render(<HintText />)
    const hint = screen.getByText(/press \[esc\] to close/i)
    expect(hint).toHaveClass('absolute', 'top-8', 'left-0', 'right-0', 'text-center')
  })

  it('has light gray text color', () => {
    render(<HintText />)
    const hint = screen.getByText(/press \[esc\] to close/i)
    expect(hint).toHaveClass('text-hint-text')
  })

  it('is uppercase with letter spacing', () => {
    render(<HintText />)
    const hint = screen.getByText(/press \[esc\] to close/i)
    expect(hint).toHaveClass('uppercase', 'tracking-widest')
  })

  it('has small text size', () => {
    render(<HintText />)
    const hint = screen.getByText(/press \[esc\] to close/i)
    expect(hint).toHaveClass('text-xs')
  })

  it('is not user-selectable', () => {
    render(<HintText />)
    const hint = screen.getByText(/press \[esc\] to close/i)
    expect(hint).toHaveClass('select-none')
  })
})
