import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT } from '../data'

describe('About', () => {
  it('renders the heading, paragraph, and two garden photos', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /We have been designing gardens since 1990/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(ABOUT.text)).toBeInTheDocument()
    expect(screen.getAllByAltText('Garden design photo')).toHaveLength(2)
  })

  it('renders two distinct mission blocks', () => {
    render(<About />)
    expect(screen.getAllByRole('heading', { name: 'Our Mission' })).toHaveLength(2)
    expect(screen.getByText(ABOUT.missions[0]!.text)).toBeInTheDocument()
    expect(screen.getByText(ABOUT.missions[1]!.text)).toBeInTheDocument()
  })
})
