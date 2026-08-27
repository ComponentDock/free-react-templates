import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { OutlineButtons } from './OutlineButtons'

describe('OutlineButtons', () => {
  it('renders outline buttons', () => {
    render(<OutlineButtons />)
    expect(screen.getByText('2. Outline & Border Buttons')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Primary Outline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Secondary Outline' })).toBeInTheDocument()
  })
})
