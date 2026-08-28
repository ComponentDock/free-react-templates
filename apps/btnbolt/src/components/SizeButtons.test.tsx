import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SizeButtons } from './SizeButtons'

describe('SizeButtons', () => {
  it('renders three size labels', () => {
    render(<SizeButtons />)
    expect(screen.getByText('Large')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
  })

  it('renders three Button buttons', () => {
    render(<SizeButtons />)
    const buttons = screen.getAllByRole('button', { name: /button/i })
    expect(buttons).toHaveLength(3)
  })
})
