import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectUs } from './ProjectUs'

describe('ProjectUs', () => {
  it('renders the heading', () => {
    render(<ProjectUs />)
    expect(
      screen.getByRole('heading', {
        name: /We are here to help you for better solutions/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<ProjectUs />)
    expect(screen.getByText(/experienced team is dedicated/i)).toBeInTheDocument()
  })

  it('renders the project image', () => {
    render(<ProjectUs />)
    const img = screen.getByAltText('Project solutions')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/expo-project/600/500')
  })
})
