import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppSplit } from './AppSplit'

describe('AppSplit', () => {
  it('renders the heading and the three app feature items', () => {
    render(<AppSplit />)

    expect(screen.getByRole('heading', { name: 'All you want from app' })).toBeInTheDocument()

    for (const title of ['Awesome Beauty Camera', 'Live Chat Support', 'Retina Ready']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
