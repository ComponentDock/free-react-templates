import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentArea } from './ContentArea'

describe('ContentArea', () => {
  it('renders instruction text', () => {
    render(<ContentArea />)
    expect(screen.getByText(/click the search icon/i)).toBeInTheDocument()
  })
})
