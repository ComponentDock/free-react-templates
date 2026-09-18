import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders heading and button', () => {
    render(<CallToAction />)
    expect(
      screen.getByText('Ask our top consultants for a personalized offer today.'),
    ).toBeInTheDocument()
    expect(screen.getByText('CALL 800-1-5141')).toBeInTheDocument()
  })
})
