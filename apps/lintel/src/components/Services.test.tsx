import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the What We Do heading and six service cards', () => {
    render(<Services />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/What We Do/i)
    for (const title of [
      'Creative Stairs',
      'Kitchen Design',
      'Lamp Decoration',
      'Interior Blueprint',
      'Dinning Table',
      'Modern Design',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders a blurb for each service card', () => {
    render(<Services />)
    expect(screen.getAllByText(/Perspiciatis incidunt distinctio voluptate/i)).toHaveLength(6)
  })
})
