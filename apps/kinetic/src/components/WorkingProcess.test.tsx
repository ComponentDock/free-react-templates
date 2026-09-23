import { render, screen } from '@testing-library/react'
import { WorkingProcess } from './WorkingProcess'
import { describe, expect, it } from 'vitest'

describe('WorkingProcess', () => {
  it('renders section title', () => {
    render(<WorkingProcess />)
    expect(screen.getByText('Our Working Process')).toBeInTheDocument()
  })

  it('renders all four process steps', () => {
    render(<WorkingProcess />)
    for (const step of ['Researching', 'Wireframing', 'Prototyping', 'Final Design']) {
      expect(screen.getByText(new RegExp(step))).toBeInTheDocument()
    }
  })

  it('renders four icon containers', () => {
    const { container } = render(<WorkingProcess />)
    const icons = container.querySelectorAll('.rounded-full')
    expect(icons.length).toBe(4)
  })
})
