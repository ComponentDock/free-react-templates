import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Training Centers/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Applied Studies',
      'Computer Engineering',
      'Software Engineering',
      'Information Engineering',
      'System Engineering',
      'Graphic Design',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Practical coursework/i)).toBeInTheDocument()
    expect(screen.getByText(/Hardware and software/i)).toBeInTheDocument()
  })
})
