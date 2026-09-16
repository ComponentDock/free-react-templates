import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageTitle } from './PageTitle'

describe('PageTitle', () => {
  it('renders the heading text', () => {
    render(<PageTitle />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Formwell')
  })
})
