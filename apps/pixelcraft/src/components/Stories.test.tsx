import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stories } from './Stories'

describe('Stories', () => {
  it('renders the section number and title in the title block', () => {
    render(<Stories />)
    expect(screen.getAllByText('04').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Stories')).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<Stories />)
    const titles = [
      'Design Trends to Watch in 2024',
      'Building Accessible Web Applications',
      'The Power of Brand Storytelling',
      'Mobile-First Design Strategies',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders blog post metadata', () => {
    render(<Stories />)
    expect(screen.getAllByText('Alex Morgan').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Marcus Lee')).toBeInTheDocument()
  })
})
