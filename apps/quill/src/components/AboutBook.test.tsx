import { render, screen } from '@testing-library/react'
import { AboutBook } from './AboutBook'

describe('AboutBook', () => {
  it('renders heading and feature items', () => {
    render(<AboutBook />)
    expect(screen.getByRole('heading', { name: 'About The Book' })).toBeInTheDocument()
    expect(screen.getByText('Award Achievements')).toBeInTheDocument()
    expect(screen.getByText('Read On Any Devices')).toBeInTheDocument()
    expect(screen.getByText('Very High Resolution')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<AboutBook />)
    expect(
      screen.getByRole('img', { name: 'Author reading in a cozy setting' }),
    ).toBeInTheDocument()
  })

  it('has proper section aria-label', () => {
    render(<AboutBook />)
    expect(screen.getByRole('region', { name: 'About the book' })).toBeInTheDocument()
  })
})
