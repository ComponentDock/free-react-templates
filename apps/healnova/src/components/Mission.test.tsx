import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mission } from './Mission'

describe('Mission', () => {
  it('renders the mission heading and play button', () => {
    render(<Mission />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We Provide High Solutions for Your Health/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Play video/i })).toBeInTheDocument()
  })
})
