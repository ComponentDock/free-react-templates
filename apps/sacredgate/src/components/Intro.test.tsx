import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the welcome heading and descriptive text', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Welcome to Our Church')
    expect(screen.getByText(/power of community/i)).toBeInTheDocument()
  })

  it('displays an image', () => {
    render(<Intro />)
    expect(screen.getByRole('img', { name: /Inside our church/i })).toBeInTheDocument()
  })
})
