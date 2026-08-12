import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three post cards with image, meta, and title', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    for (const title of [
      'Everything You Need to Know About Cloud Services',
      'How to Choose the Right Hosting Plan',
      'Scaling Your Business With the Cloud',
    ]) {
      expect(screen.getByRole('link', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('May 17, 2020 · Admin · 3')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
