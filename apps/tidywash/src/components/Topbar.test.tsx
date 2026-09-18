import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Topbar } from './Topbar'

it('renders contact info', () => {
  render(<Topbar />)
  expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  expect(screen.getByText('1-1234-012-1234')).toBeInTheDocument()
  expect(screen.getByText(/Mon - Sat/)).toBeInTheDocument()
})
