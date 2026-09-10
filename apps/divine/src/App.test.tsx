import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

async function goToStep2(user: ReturnType<typeof userEvent.setup>) {
  render(<App />)
  await user.type(screen.getByLabelText(/First Name/i), 'John')
  await user.type(screen.getByLabelText(/Last Name/i), 'Doe')
  await user.selectOptions(screen.getByLabelText(/Country/i), 'Viet Nam')
  await user.type(screen.getByLabelText(/Address/i), '123 Main St')
  await user.type(screen.getByLabelText(/Town \/ City/i), 'Hanoi')
  await user.click(screen.getByRole('button', { name: /next/i }))
}

async function goToStep3(user: ReturnType<typeof userEvent.setup>) {
  await goToStep2(user)
  await user.selectOptions(screen.getByLabelText(/Shipping Method/i), 'standard')
  await user.type(screen.getByLabelText(/Shipping Address/i), '456 Ship Ave')
  await user.type(screen.getByLabelText(/City/i), 'Ho Chi Minh')
  await user.type(screen.getByLabelText(/Zip \/ Postal Code/i), '700000')
  await user.click(screen.getByRole('button', { name: /next/i }))
}

async function goToStep4(user: ReturnType<typeof userEvent.setup>) {
  await goToStep3(user)
  await user.type(screen.getByLabelText(/Name on Card/i), 'John Doe')
  await user.type(screen.getByLabelText(/Card Number/i), '4111111111111111')
  await user.type(screen.getByLabelText(/Expiry Date/i), '12/25')
  await user.type(screen.getByLabelText(/CVV/i), '123')
  await user.click(screen.getByRole('button', { name: /next/i }))
}

describe('Divine — 4-Step Order Wizard', () => {
  describe('Page layout', () => {
    it('renders the page with peach background', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('bg-page-bg')
    })

    it('renders the decorative image panel on desktop', () => {
      render(<App />)
      const img = screen.getByAltText('Decorative illustration')
      expect(img).toBeInTheDocument()
      expect(img.getAttribute('src')).toContain('picsum.photos')
    })

    it('renders the form with correct aria-label', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: /order wizard form/i })).toBeInTheDocument()
    })

    it('prevents default form submission', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: /order wizard form/i })
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
      form.dispatchEvent(submitEvent)
      expect(form).toBeInTheDocument()
    })

    it('hides decorative image on small screens via CSS class', () => {
      render(<App />)
      const imgContainer = screen.getByAltText('Decorative illustration').closest('div')
      expect(imgContainer?.className).toContain('hidden')
      expect(imgContainer?.className).toContain('md:flex')
    })
  })

  describe('Step indicator', () => {
    it('renders 4 step circles', () => {
      render(<App />)
      const steps = screen.getAllByText(/[1-4]/)
      expect(steps.length).toBeGreaterThanOrEqual(4)
    })

    it('highlights step 1 as active', () => {
      render(<App />)
      const step1 = screen.getByLabelText(/Step 1: Billing/)
      expect(step1.className).toContain('bg-accent')
    })

    it('shows other steps as inactive', () => {
      render(<App />)
      const step4 = screen.getByLabelText(/Step 4: Confirm/)
      expect(step4.className).toContain('bg-step-inactive')
    })

    it('has correct aria attributes', () => {
      render(<App />)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '1')
      expect(progressbar).toHaveAttribute('aria-valuemax', '4')
    })
  })

  describe('Step 1 — Billing Details', () => {
    it('displays Billing Details heading', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: /Billing Details/i })).toBeInTheDocument()
    })

    it('shows all billing form fields', () => {
      render(<App />)
      expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Country/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Address/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Apartment/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Town \/ City/i)).toBeInTheDocument()
    })

    it('shows required asterisks on mandatory fields', () => {
      render(<App />)
      const firstNameLabel = screen.getByLabelText(/First Name/i)
      expect(firstNameLabel.closest('div')?.textContent).toContain('*')
    })

    it('validates all required fields on Next click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('First Name is required')).toBeInTheDocument()
      expect(screen.getByText('Last Name is required')).toBeInTheDocument()
      expect(screen.getByText('Country is required')).toBeInTheDocument()
      expect(screen.getByText('Address is required')).toBeInTheDocument()
      expect(screen.getByText('Town / City is required')).toBeInTheDocument()
    })

    it('validates partial fields', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/First Name/i), 'John')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Last Name is required')).toBeInTheDocument()
      expect(screen.queryByText('First Name is required')).not.toBeInTheDocument()
    })

    it('advances to step 2 when all required fields are filled', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      expect(screen.getByText('Shipping Information')).toBeInTheDocument()
      expect(screen.queryByText('Billing Details')).not.toBeInTheDocument()
    })

    it('allows optional fields to be empty', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/First Name/i), 'John')
      await user.type(screen.getByLabelText(/Last Name/i), 'Doe')
      await user.selectOptions(screen.getByLabelText(/Country/i), 'Viet Nam')
      await user.type(screen.getByLabelText(/Address/i), '123 Main St')
      await user.type(screen.getByLabelText(/Town \/ City/i), 'Hanoi')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Shipping Information')).toBeInTheDocument()
    })

    it('shows Viet Nam as a selectable option in country dropdown', () => {
      render(<App />)
      const select = screen.getByLabelText(/Country/i)
      const options = Array.from(select.querySelectorAll('option'))
      expect(options.some((o) => o.textContent === 'Viet Nam')).toBe(true)
    })

    it('company name input has placeholder "Optional"', () => {
      render(<App />)
      const input = screen.getByLabelText(/Company Name/i)
      expect(input).toHaveAttribute('placeholder', 'Optional')
    })

    it('address input has placeholder "Street address"', () => {
      render(<App />)
      const input = screen.getByLabelText(/Address/i)
      expect(input).toHaveAttribute('placeholder', 'Street address')
    })

    it('clears error when field is updated', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('First Name is required')).toBeInTheDocument()
      await user.type(screen.getByLabelText(/First Name/i), 'J')
      expect(screen.queryByText('First Name is required')).not.toBeInTheDocument()
    })

    it('adds red border to invalid fields', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      const input = screen.getByLabelText(/First Name/i)
      expect(input.className).toContain('border-red-500')
    })
  })

  describe('Step 2 — Shipping Information', () => {
    it('shows shipping fields on step 2', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      expect(screen.getByLabelText(/Shipping Method/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Shipping Address/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/City/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Zip \/ Postal Code/i)).toBeInTheDocument()
    })

    it('validates all required fields on step 2', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Shipping Method is required')).toBeInTheDocument()
      expect(screen.getByText('Shipping Address is required')).toBeInTheDocument()
      expect(screen.getByText('City is required')).toBeInTheDocument()
      expect(screen.getByText('Zip / Postal Code is required')).toBeInTheDocument()
    })

    it('Previous button returns to step 1', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByText('Billing Details')).toBeInTheDocument()
    })

    it('advances to step 3 when all fields filled', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      expect(screen.getByText('Payment Method')).toBeInTheDocument()
    })

    it('shows shipping method options', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      const select = screen.getByLabelText(/Shipping Method/i)
      const options = Array.from(select.querySelectorAll('option'))
      expect(options.length).toBe(4) // Select + 3 methods
    })

    it('clears shipping errors on update', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Shipping Method is required')).toBeInTheDocument()
      await user.selectOptions(screen.getByLabelText(/Shipping Method/i), 'standard')
      expect(screen.queryByText('Shipping Method is required')).not.toBeInTheDocument()
    })

    it('adds red border to invalid shipping fields', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      const input = screen.getByLabelText(/Shipping Address/i)
      expect(input.className).toContain('border-red-500')
    })
  })

  describe('Step 3 — Payment Method', () => {
    it('shows payment fields on step 3', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      expect(screen.getByLabelText(/Name on Card/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Card Number/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Expiry Date/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/CVV/i)).toBeInTheDocument()
    })

    it('validates all required payment fields', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Name on Card is required')).toBeInTheDocument()
      expect(screen.getByText('Card Number is required')).toBeInTheDocument()
      expect(screen.getByText('Expiry Date is required')).toBeInTheDocument()
      expect(screen.getByText('CVV is required')).toBeInTheDocument()
    })

    it('advances to step 4 confirmation when all fields filled', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      expect(screen.getByText('Order Confirmation')).toBeInTheDocument()
    })

    it('shows Confirm button on step 4 instead of Next', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /^next$/i })).not.toBeInTheDocument()
    })

    it('card number has placeholder "0000 0000 0000 0000"', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      const input = screen.getByLabelText(/Card Number/i)
      expect(input).toHaveAttribute('placeholder', '0000 0000 0000 0000')
    })

    it('expiry has placeholder "MM/YY"', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      const input = screen.getByLabelText(/Expiry Date/i)
      expect(input).toHaveAttribute('placeholder', 'MM/YY')
    })

    it('cvv has placeholder "123"', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      const input = screen.getByLabelText(/CVV/i)
      expect(input).toHaveAttribute('placeholder', '123')
    })

    it('clears payment errors on update', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Name on Card is required')).toBeInTheDocument()
      await user.type(screen.getByLabelText(/Name on Card/i), 'John')
      expect(screen.queryByText('Name on Card is required')).not.toBeInTheDocument()
    })
  })

  describe('Step 4 — Confirmation', () => {
    it('displays order summary', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      expect(screen.getAllByText('John Doe').length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText('123 Main St')).toBeInTheDocument()
      expect(screen.getByText('Hanoi, Viet Nam')).toBeInTheDocument()
    })

    it('displays shipping info', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      expect(screen.getByText('standard')).toBeInTheDocument()
      expect(screen.getByText('456 Ship Ave')).toBeInTheDocument()
    })

    it('displays masked card number', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      expect(screen.getByText('************1111')).toBeInTheDocument()
    })

    it('shows company name when provided', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/First Name/i), 'John')
      await user.type(screen.getByLabelText(/Last Name/i), 'Doe')
      await user.type(screen.getByLabelText(/Company Name/i), 'Acme Inc')
      await user.selectOptions(screen.getByLabelText(/Country/i), 'Viet Nam')
      await user.type(screen.getByLabelText(/Address/i), '123 Main St')
      await user.type(screen.getByLabelText(/Town \/ City/i), 'Hanoi')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.selectOptions(screen.getByLabelText(/Shipping Method/i), 'express')
      await user.type(screen.getByLabelText(/Shipping Address/i), '456 Ship Ave')
      await user.type(screen.getByLabelText(/City/i), 'HCM')
      await user.type(screen.getByLabelText(/Zip \/ Postal Code/i), '700000')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/Name on Card/i), 'John Doe')
      await user.type(screen.getByLabelText(/Card Number/i), '4111111111111111')
      await user.type(screen.getByLabelText(/Expiry Date/i), '12/25')
      await user.type(screen.getByLabelText(/CVV/i), '123')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Acme Inc')).toBeInTheDocument()
    })

    it('shows apartment when provided', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/First Name/i), 'John')
      await user.type(screen.getByLabelText(/Last Name/i), 'Doe')
      await user.type(screen.getByLabelText(/Company Name/i), 'Acme')
      await user.selectOptions(screen.getByLabelText(/Country/i), 'Viet Nam')
      await user.type(screen.getByLabelText(/Address/i), '123 Main St')
      await user.type(screen.getByLabelText(/Apartment/i), 'Suite 100')
      await user.type(screen.getByLabelText(/Town \/ City/i), 'Hanoi')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.selectOptions(screen.getByLabelText(/Shipping Method/i), 'express')
      await user.type(screen.getByLabelText(/Shipping Address/i), '456 Ship Ave')
      await user.type(screen.getByLabelText(/City/i), 'HCM')
      await user.type(screen.getByLabelText(/Zip \/ Postal Code/i), '700000')
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.type(screen.getByLabelText(/Name on Card/i), 'John Doe')
      await user.type(screen.getByLabelText(/Card Number/i), '4111111111111111')
      await user.type(screen.getByLabelText(/Expiry Date/i), '12/25')
      await user.type(screen.getByLabelText(/CVV/i), '123')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('Suite 100')).toBeInTheDocument()
    })

    it('completes form submission', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      await user.click(screen.getByRole('button', { name: /confirm/i }))
      expect(screen.getByText('Order Confirmed!')).toBeInTheDocument()
      expect(screen.getByText('Thank you for your order.')).toBeInTheDocument()
    })

    it('blocks submission when payment validation fails', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      await user.type(screen.getByLabelText(/Name on Card/i), 'John')
      await user.type(screen.getByLabelText(/Card Number/i), '4111')
      await user.type(screen.getByLabelText(/Expiry Date/i), '12/25')
      // CVV empty
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByText('CVV is required')).toBeInTheDocument()
    })

    it('back button from confirmation returns to step 3', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      await user.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByText('Payment Method')).toBeInTheDocument()
    })

    it('progress bar updates correctly on step 4', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      const progressbar = screen.getByRole('progressbar')
      expect(progressbar).toHaveAttribute('aria-valuenow', '4')
    })
  })

  describe('Navigation', () => {
    it('hides Previous button on step 1', () => {
      render(<App />)
      expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument()
    })

    it('shows Next button on step 1', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('shows Previous button on step 2', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
    })

    it('Next button has accent styling', () => {
      render(<App />)
      const nextBtn = screen.getByRole('button', { name: /next/i })
      expect(nextBtn.className).toContain('bg-accent')
    })
  })

  describe('Footer', () => {
    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('displays "More templates at Component Dock"', () => {
      render(<App />)
      expect(screen.getByText(/More templates at Component Dock/)).toBeInTheDocument()
    })
  })

  describe('Responsive behavior', () => {
    it('image container uses responsive classes', () => {
      render(<App />)
      const img = screen.getByAltText('Decorative illustration')
      const container = img.closest('div')
      expect(container?.className).toContain('hidden')
      expect(container?.className).toContain('md:flex')
    })
  })

  describe('Edge cases', () => {
    it('back button on step 2 preserves data', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByLabelText(/First Name/i)).toHaveValue('John')
      expect(screen.getByLabelText(/Last Name/i)).toHaveValue('Doe')
    })

    it('back button on step 3 preserves data', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      await user.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByLabelText(/Shipping Method/i)).toHaveValue('standard')
    })

    it('back button on step 4 preserves data', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      await user.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByLabelText(/Name on Card/i)).toHaveValue('John Doe')
    })

    it('submitting on confirmation shows success', async () => {
      const user = userEvent.setup()
      await goToStep4(user)
      await user.click(screen.getByRole('button', { name: /confirm/i }))
      expect(screen.getByText('Order Confirmed!')).toBeInTheDocument()
    })

    it('progress indicator has correct step labels', () => {
      render(<App />)
      expect(screen.getByText('Billing')).toBeInTheDocument()
      expect(screen.getByText('Shipping')).toBeInTheDocument()
      expect(screen.getByText('Payment')).toBeInTheDocument()
      expect(screen.getByText('Confirm')).toBeInTheDocument()
    })
  })
})
