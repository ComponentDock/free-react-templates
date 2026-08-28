import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlockButton } from './BlockButton'

describe('BlockButton', () => {
  it('renders the "Full width button" label', () => {
    render(<BlockButton />)
    expect(screen.getByText('Full width button')).toBeInTheDocument()
  })

  it('renders a full-width Button', () => {
    render(<BlockButton />)
    const btn = screen.getByRole('button', { name: /button/i })
    expect(btn).toBeInTheDocument()
  })
})
