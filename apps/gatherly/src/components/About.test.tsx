import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the eyebrow, heading, paragraph and the blue counter box', () => {
    render(<About />)
    expect(screen.getByTestId('about')).toHaveAttribute('id', 'about-section')
    expect(screen.getByText(about.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByText(about.text)).toBeInTheDocument()
    expect(screen.getByText(String(about.years))).toBeInTheDocument()
    expect(screen.getByText(about.yearsLabel)).toBeInTheDocument()
  })
})
