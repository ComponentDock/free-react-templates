import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders the heading, description, browse button, and image', () => {
    render(<AboutSplit />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /The world.*largest selection of online courses/,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Choose from over 100,000 online video courses/)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Browse Courses' })).toBeInTheDocument()
    expect(screen.getByAltText('Students collaborating on online courses')).toBeInTheDocument()
  })
})
