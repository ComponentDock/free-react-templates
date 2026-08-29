import { render, screen } from '@testing-library/react'
import { OutlineButtons } from './OutlineButtons'

describe('OutlineButtons', () => {
  it('renders 10 outline buttons', () => {
    render(<OutlineButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(10)
  })

  it('all outline buttons are labeled Default', () => {
    render(<OutlineButtons />)
    const defaults = screen.getAllByRole('button', { name: /default/i })
    expect(defaults.length).toBe(10)
  })
})
