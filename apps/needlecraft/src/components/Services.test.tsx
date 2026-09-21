import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all five service labels', () => {
    render(<Services />)
    for (const label of ['Acupuncture', 'Therapy', 'Foot', 'Natural', 'Healing']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders five icon containers', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('.rounded-full')
    expect(icons.length).toBe(5)
  })
})
