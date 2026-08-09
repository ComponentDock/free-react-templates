import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Process } from './Process'

describe('Process', () => {
  it('renders the section heading and the four steps in order', () => {
    const { container } = render(<Process />)
    expect(screen.getByRole('heading', { name: 'How It Works' })).toBeInTheDocument()
    const list = container.querySelector('[role="list"]')!
    const headings = Array.from(list.querySelectorAll('h3')).map((el) => el.textContent)
    expect(headings).toEqual([
      'Free Consultation',
      'Design & Permits',
      'Professional Installation',
      'Activation & Monitoring',
    ])
    for (const number of ['01', '02', '03', '04']) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
  })
})
