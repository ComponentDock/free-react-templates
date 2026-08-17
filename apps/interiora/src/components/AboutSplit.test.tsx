import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSplit } from './AboutSplit'
import { ABOUT_SPLIT } from '../data'

describe('AboutSplit', () => {
  it('renders the heading, paragraph, photo, and Learn More outline button', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
      'Design the home you love',
    )
    expect(screen.getByText(ABOUT_SPLIT.text)).toBeInTheDocument()
    const image = screen.getByRole('img', { name: /home you love/i })
    expect(image).toHaveAttribute('src', ABOUT_SPLIT.image)
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })
})
