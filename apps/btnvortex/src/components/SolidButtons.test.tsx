import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SolidButtons } from './SolidButtons'

describe('SolidButtons', () => {
  it('renders section heading', () => {
    render(<SolidButtons />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Solid Variants')
  })

  it('renders all 8 semantic color buttons', () => {
    render(<SolidButtons />)
    const labels = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark']
    for (const label of labels) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
  })
})
