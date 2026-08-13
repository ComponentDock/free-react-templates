import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { UiSteps } from './UiSteps'

describe('UiSteps', () => {
  it('renders the three numbered steps', () => {
    render(<UiSteps />)

    for (const title of ['Create an Account', 'Share with friends', 'Enjoy your life']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /app screen/i })).toBeInTheDocument()
  })
})
