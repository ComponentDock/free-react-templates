import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders featured post and list posts', () => {
    render(<Blog />)
    expect(screen.getByText('Business Consultation Meetup — Key Takeaways')).toBeInTheDocument()
    expect(screen.getByText('On Graphics Design Trends')).toBeInTheDocument()
    expect(screen.getByText('Web Development Best Practices')).toBeInTheDocument()
    expect(screen.getByText('Marketing Strategies for 2026')).toBeInTheDocument()
  })
})
