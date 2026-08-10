import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PostCarousel } from './PostCarousel'

const items = ['Alpha', 'Beta', 'Gamma', 'Delta'] as const

function renderCarousel() {
  return render(
    <PostCarousel
      title="Top Stories"
      items={items}
      prevLabel="Previous stories"
      nextLabel="Next stories"
      renderItem={(item) => <p>{item}</p>}
    />,
  )
}

describe('PostCarousel', () => {
  it('renders the title and the first two items', () => {
    renderCarousel()
    expect(screen.getByRole('heading', { name: 'Top Stories' })).toBeInTheDocument()
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.queryByText('Gamma')).not.toBeInTheDocument()
  })

  it('cycles forward with the next button', async () => {
    const user = userEvent.setup()
    renderCarousel()
    const next = screen.getByRole('button', { name: 'Next stories' })
    await user.click(next)
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByText('Gamma')).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByText('Gamma')).toBeInTheDocument()
    expect(screen.getByText('Delta')).toBeInTheDocument()
  })

  it('cycles backward and wraps around from the start', async () => {
    const user = userEvent.setup()
    renderCarousel()
    const next = screen.getByRole('button', { name: 'Next stories' })
    const prev = screen.getByRole('button', { name: 'Previous stories' })
    await user.click(next)
    await user.click(next)
    await user.click(prev)
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByText('Gamma')).toBeInTheDocument()
    await user.click(prev)
    await user.click(prev)
    expect(screen.getByText('Delta')).toBeInTheDocument()
    expect(screen.getByText('Alpha')).toBeInTheDocument()
  })
})
