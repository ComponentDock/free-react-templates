import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow, intro heading, and six service cards', () => {
    render(<Services />)
    expect(screen.getByText(/our services/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Far far away/ })).toBeInTheDocument()

    const titles = [
      'Construction Consultation',
      'House Renovation',
      'Planning',
      'Interior Design',
      'Architecture',
      'Installation Works',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Learn more' })).toHaveLength(6)
  })
})
