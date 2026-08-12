import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Lifestyle } from './Lifestyle'

describe('Lifestyle', () => {
  it('shows the title, two paragraphs and a Read More button', () => {
    render(<Lifestyle />)
    expect(screen.getByRole('heading', { name: 'Lifestyle & Diet' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
    expect(screen.getAllByText(/Lorem ipsum dolor sit amet/i).length).toBeGreaterThanOrEqual(2)
  })
})
