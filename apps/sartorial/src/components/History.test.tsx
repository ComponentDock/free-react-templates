import { render, screen } from '@testing-library/react'
import { History } from './History'

describe('History', () => {
  it('renders section heading', () => {
    render(<History />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'The Art of Tailoring' }),
    ).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<History />)
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('10K+')).toBeInTheDocument()
    expect(screen.getByText('150+')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<History />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders Learn More link', () => {
    render(<History />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })
})
