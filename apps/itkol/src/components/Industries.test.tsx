import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Industries } from './Industries'

describe('Industries', () => {
  it('renders the heading and the four industry cards', () => {
    render(<Industries />)

    expect(
      screen.getByRole('heading', { level: 2, name: /IT services customized for your industry/ }),
    ).toBeInTheDocument()
    for (const title of [
      'Industries & Manufacturing',
      'Education & Health',
      'Retail & Ecommerce',
      'Travel & Hospitality',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
