import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Impress } from './Impress'

describe('Impress', () => {
  it('renders the heading and a Request Free Demo button', () => {
    render(<Impress />)

    expect(
      screen.getByRole('heading', { name: 'Got Impressed to our features?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request Free Demo' })).toBeInTheDocument()
  })
})
