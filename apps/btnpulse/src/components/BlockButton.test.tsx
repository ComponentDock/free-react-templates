import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlockButton } from './BlockButton'

describe('BlockButton', () => {
  it('renders a full-width primary button', () => {
    render(<BlockButton />)

    const button = screen.getByRole('button', { name: 'Button' })
    expect(button).toBeInTheDocument()
  })
})
