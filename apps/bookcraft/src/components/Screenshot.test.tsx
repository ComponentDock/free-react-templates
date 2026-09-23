import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Screenshot } from './Screenshot'

describe('Screenshot', () => {
  it('renders the heading and initial image', () => {
    render(<Screenshot />)
    expect(screen.getByRole('heading', { name: /Book Screenshots/i })).toBeInTheDocument()
    expect(screen.getByAltText('Book screenshot 1')).toBeInTheDocument()
  })

  it('navigates to the next screenshot', async () => {
    const user = userEvent.setup()
    render(<Screenshot />)
    await user.click(screen.getByRole('button', { name: 'Next screenshot' }))
    expect(screen.getByAltText('Book screenshot 2')).toBeInTheDocument()
  })

  it('navigates to the previous screenshot from first', async () => {
    const user = userEvent.setup()
    render(<Screenshot />)
    await user.click(screen.getByRole('button', { name: 'Previous screenshot' }))
    expect(screen.getByAltText('Book screenshot 5')).toBeInTheDocument()
  })

  it('navigates via Prev/Next text buttons', async () => {
    const user = userEvent.setup()
    render(<Screenshot />)
    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByAltText('Book screenshot 2')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Prev' }))
    expect(screen.getByAltText('Book screenshot 1')).toBeInTheDocument()
  })

  it('wraps around at the last image', async () => {
    const user = userEvent.setup()
    render(<Screenshot />)
    // Click next 5 times to wrap around
    for (let i = 0; i < 5; i++) {
      await user.click(screen.getByRole('button', { name: 'Next screenshot' }))
    }
    expect(screen.getByAltText('Book screenshot 1')).toBeInTheDocument()
  })
})
