import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SizeButtons } from './SizeButtons'

describe('SizeButtons', () => {
  it('renders three buttons with size labels', () => {
    render(<SizeButtons />)

    expect(screen.getByText('Large')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
  })

  it('renders three primary buttons', () => {
    render(<SizeButtons />)

    const buttons = screen.getAllByRole('button', { name: 'Button' })
    expect(buttons).toHaveLength(3)
  })
})
