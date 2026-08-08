import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and six service cards with learn-more links', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    for (const title of [
      'Pre-Construction Services',
      'General Construction',
      'Expert Engineer',
      'Design Build',
      'Modeling',
      'Industrial',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Learn more/i })).toHaveLength(6)
  })
})
