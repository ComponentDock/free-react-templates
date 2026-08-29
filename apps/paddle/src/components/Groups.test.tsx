import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Groups } from './Groups'

describe('Groups', () => {
  it('renders 2 button groups', () => {
    render(<Groups />)
    const groups = screen.getAllByText('Button 1')
    expect(groups).toHaveLength(3)
    const groups2 = screen.getAllByText('Button 2')
    expect(groups2).toHaveLength(3)
  })

  it('renders the section heading', () => {
    render(<Groups />)
    expect(screen.getByText('Button Groups')).toBeInTheDocument()
  })

  it('renders 6 buttons total', () => {
    render(<Groups />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(6)
  })
})
