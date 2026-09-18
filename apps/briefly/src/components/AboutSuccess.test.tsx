import { render, screen } from '@testing-library/react'
import { AboutSuccess } from './AboutSuccess'

describe('AboutSuccess', () => {
  it('renders four success cards', () => {
    render(<AboutSuccess />)
    const headings = screen.getAllByText('Road to Success')
    expect(headings).toHaveLength(4)
  })

  it('renders description text', () => {
    render(<AboutSuccess />)
    const descriptions = screen.getAllByText(/Lorem ipsum dolor sit amet/)
    expect(descriptions.length).toBeGreaterThanOrEqual(4)
  })
})
