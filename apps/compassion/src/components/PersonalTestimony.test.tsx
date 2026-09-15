import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PersonalTestimony } from './PersonalTestimony'

describe('PersonalTestimony', () => {
  it('displays section heading', () => {
    render(<PersonalTestimony />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Personal Testimony' }),
    ).toBeInTheDocument()
  })

  it('displays first testimony by default', () => {
    render(<PersonalTestimony />)
    expect(screen.getByText(/Jeremy Watson/)).toBeInTheDocument()
    expect(screen.getByText(/Compassion Church has been a blessing/)).toBeInTheDocument()
  })

  it('navigates to next testimony', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<PersonalTestimony />)

    await user.click(screen.getByRole('button', { name: /next testimony/i }))
    expect(screen.getByText(/Martha Jenkins/)).toBeInTheDocument()
    expect(screen.getByText(/Through the sermons and fellowship/)).toBeInTheDocument()
  })

  it('navigates to previous testimony', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<PersonalTestimony />)

    // Go to last
    await user.click(screen.getByRole('button', { name: /next testimony/i }))
    await user.click(screen.getByRole('button', { name: /next testimony/i }))
    expect(screen.getByText(/Robert Williams/)).toBeInTheDocument()

    // Go back
    await user.click(screen.getByRole('button', { name: /previous testimony/i }))
    expect(screen.getByText(/Martha Jenkins/)).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<PersonalTestimony />)

    // Navigate to last
    await user.click(screen.getByRole('button', { name: /next testimony/i }))
    await user.click(screen.getByRole('button', { name: /next testimony/i }))
    expect(screen.getByText(/Robert Williams/)).toBeInTheDocument()

    // Wrap to first
    await user.click(screen.getByRole('button', { name: /next testimony/i }))
    expect(screen.getByText(/Jeremy Watson/)).toBeInTheDocument()
  })

  it('wraps from first to last on previous', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<PersonalTestimony />)

    await user.click(screen.getByRole('button', { name: /previous testimony/i }))
    expect(screen.getByText(/Robert Williams/)).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<PersonalTestimony />)

    const dots = screen.getAllByRole('button', { name: /go to testimony/i })
    expect(dots).toHaveLength(3)

    await user.click(dots[2]!)
    expect(screen.getByText(/Robert Williams/)).toBeInTheDocument()

    await user.click(dots[1]!)
    expect(screen.getByText(/Martha Jenkins/)).toBeInTheDocument()
  })

  it('has pastor images with alt text', () => {
    render(<PersonalTestimony />)
    expect(screen.getByRole('img', { name: 'Jeremy Watson' })).toBeInTheDocument()
  })
})
