import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, supporting copy, and CTA buttons', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Promote your app with Applab' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Get more users to promote your app/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Get Start Now' })).toHaveAttribute('href', '#download')
    expect(screen.getByRole('link', { name: 'Download Now' })).toHaveAttribute('href', '#download')

    expect(screen.getByRole('img', { name: 'Applab app on devices' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/applab-hero/1200/900',
    )
  })
})
