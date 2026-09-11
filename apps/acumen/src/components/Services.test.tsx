import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Unique Design',
      'Clean Layout',
      'Well Responsive',
      'Pro Developing',
      'Well Documented',
      'Quick Marketing',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('has Read More links', () => {
    render(<Services />)
    const links = screen.getAllByText(/Read More/)
    expect(links.length).toBe(6)
  })
})
