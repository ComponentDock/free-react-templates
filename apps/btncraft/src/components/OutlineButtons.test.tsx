import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OutlineButtons } from './OutlineButtons'

describe('OutlineButtons', () => {
  it('renders section heading', () => {
    render(<OutlineButtons />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Outline Variants')
  })

  it('renders all 8 outline variant buttons', () => {
    render(<OutlineButtons />)
    const labels = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark']
    for (const label of labels) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
  })
})
