import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the intro heading and two paragraphs', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: /Couture Online Fashion Shop/ })).toBeInTheDocument()
    expect(screen.getAllByText(/Little Blind Text/).length).toBe(1)
    expect(screen.getAllByText(/Italic Mountains/).length).toBe(1)
  })
})
