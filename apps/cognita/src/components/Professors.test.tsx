import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Professors } from './Professors'

describe('Professors', () => {
  it('renders heading and instructor names', () => {
    render(<Professors />)

    expect(screen.getByRole('heading', { name: /our experienced professors/i })).toBeInTheDocument()

    expect(screen.getByText('Olivia Young')).toBeInTheDocument()
    expect(screen.getByText('Daniel Anderson')).toBeInTheDocument()
    expect(screen.getByText('David Brook')).toBeInTheDocument()
    expect(screen.getByText('Brigeth Smith')).toBeInTheDocument()
  })

  it('renders specialty text for each professor', () => {
    render(<Professors />)

    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText('Mobile Development')).toBeInTheDocument()
  })

  it('renders social links for professors', () => {
    render(<Professors />)

    const twitterLinks = screen.getAllByRole('link', { name: /on Twitter/i })
    expect(twitterLinks.length).toBe(4)
  })
})
