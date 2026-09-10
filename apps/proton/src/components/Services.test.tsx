import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders six service cards with titles', () => {
    render(<Services />)
    for (const title of [
      'Regular Update',
      'Infinite Possibilities',
      'Good Security',
      'Orange for Carrots',
      'Intuitive Thinking',
      'Play Video',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders the More Features button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: 'More Features' })).toBeInTheDocument()
  })

  it('has a light background', () => {
    render(<Services />)
    const section = document.querySelector('section#services')!
    expect(section).toBeInTheDocument()
    expect(section.className).toContain('bg-gray-50')
  })
})
