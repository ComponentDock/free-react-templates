import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, and stats grid', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Building Excellence Since 1998' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Parapet has been at the forefront/)).toBeInTheDocument()

    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Industry Awards')).toBeInTheDocument()
  })
})
