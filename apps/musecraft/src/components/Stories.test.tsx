import { render, screen } from '@testing-library/react'
import { Stories } from './Stories'

describe('Stories', () => {
  it('renders section title, blog items, and testimonials', () => {
    render(<Stories />)
    expect(screen.getByText('Stories', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getAllByText('Robert Williams')).toHaveLength(2)
    expect(screen.getByText('Jim Davis')).toBeInTheDocument()
    expect(screen.getByText('Ann Peterson')).toBeInTheDocument()
    expect(screen.getByText('Go to Blog')).toBeInTheDocument()
    expect(screen.getByText('Scott Hanselman')).toBeInTheDocument()
    expect(screen.getByText('Tom Bissel')).toBeInTheDocument()
    expect(screen.getByText('Steven Heller')).toBeInTheDocument()
  })

  it('shows section number 04', () => {
    render(<Stories />)
    const nums = screen.getAllByText('04')
    expect(nums.length).toBeGreaterThanOrEqual(1)
  })
})
