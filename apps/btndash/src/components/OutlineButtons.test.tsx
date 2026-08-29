import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OutlineButtons } from './OutlineButtons'

describe('OutlineButtons', () => {
  it('renders section heading', () => {
    render(<OutlineButtons />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Outline Variants')
  })

  it('renders all 10 outline variant buttons', () => {
    render(<OutlineButtons />)
    const labels = [
      'Primary',
      'Secondary',
      'Success',
      'Info',
      'Warning',
      'Danger',
      'Light',
      'Orange',
      'Indigo',
      'Dark',
    ]
    for (const label of labels) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
  })
})
