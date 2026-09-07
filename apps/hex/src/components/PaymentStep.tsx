import { FloatingInput } from './FloatingInput'
import { SelectInput } from './SelectInput'
import { cn } from '@free-react-templates/ui'
import { CreditCard, Wallet } from 'lucide-react'
import type { HexData } from '../types'
import type { StepErrors } from '../validation'

const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const years = Array.from({ length: 10 }, (_, i) => String(2025 + i))

interface PaymentStepProps {
  data: HexData
  errors: StepErrors
  onChange: (field: keyof HexData, value: string) => void
}

export function PaymentStep({ data, errors, onChange }: PaymentStepProps) {
  const isCreditCard = data.paymentMethod === 'credit-card'

  return (
    <div>
      <h4 className="mb-6 text-lg font-bold text-[#333]">Payment Information:</h4>

      {/* Payment method cards */}
      <div className="mb-6 flex gap-4 max-sm:flex-col">
        <button
          type="button"
          onClick={() => onChange('paymentMethod', 'credit-card')}
          className={cn(
            'flex h-[95px] w-[190px] items-center justify-center gap-2 rounded border transition-all',
            isCreditCard ? 'shadow-md border-transparent' : 'border-[#e5e5e5] bg-white',
            !data.paymentMethod && errors.paymentMethod && 'border-red-500',
          )}
        >
          <CreditCard className="h-5 w-5 text-[#333]" />
          <span className="text-sm font-medium text-[#333]">Credit Card</span>
        </button>
        <button
          type="button"
          onClick={() => onChange('paymentMethod', 'paypal')}
          className={cn(
            'flex h-[95px] w-[190px] items-center justify-center gap-2 rounded border transition-all',
            data.paymentMethod === 'paypal'
              ? 'shadow-md border-transparent'
              : 'border-[#e5e5e5] bg-white',
          )}
        >
          <Wallet className="h-5 w-5 text-[#333]" />
          <span className="text-sm font-medium text-[#333]">Paypal</span>
        </button>
      </div>
      {errors.paymentMethod && <p className="mb-4 text-xs text-red-500">{errors.paymentMethod}</p>}

      <FloatingInput
        id="holderName"
        label="Holder Name"
        value={data.holderName}
        onChange={(v) => onChange('holderName', v)}
        error={errors.holderName}
      />

      <div className="flex gap-4 max-sm:flex-col">
        <div className="flex-1">
          <FloatingInput
            id="cardNumber"
            label="Card Number"
            value={data.cardNumber}
            onChange={(v) => onChange('cardNumber', v)}
            error={errors.cardNumber}
          />
        </div>
        <div className="flex-1">
          <FloatingInput
            id="cvc"
            label="CVC"
            value={data.cvc}
            onChange={(v) => onChange('cvc', v)}
            error={errors.cvc}
          />
        </div>
      </div>

      <div className="flex gap-4 max-sm:flex-col">
        <div className="flex-1">
          <SelectInput
            id="expiryMonth"
            label="Month"
            value={data.expiryMonth}
            onChange={(v) => onChange('expiryMonth', v)}
            options={months}
            error={errors.expiryMonth}
          />
        </div>
        <div className="flex-1">
          <SelectInput
            id="expiryYear"
            label="Year"
            value={data.expiryYear}
            onChange={(v) => onChange('expiryYear', v)}
            options={years}
            error={errors.expiryYear}
          />
        </div>
      </div>

      {/* Summary Table */}
      <div className="mt-8">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-t border-[#e5e5e5]">
              <th className="w-[30%] py-3 text-left text-base font-normal text-[#666]">
                Full Name
              </th>
              <td className="py-3 text-base text-[#333]">
                {data.firstName} {data.lastName}
              </td>
            </tr>
            <tr className="border-t border-[#e5e5e5]">
              <th className="w-[30%] py-3 text-left text-base font-normal text-[#666]">
                Email Address
              </th>
              <td className="py-3 text-base text-[#333]">{data.email}</td>
            </tr>
            <tr className="border-t border-[#e5e5e5]">
              <th className="w-[30%] py-3 text-left text-base font-normal text-[#666]">
                Phone Number
              </th>
              <td className="py-3 text-base text-[#333]">{data.phone}</td>
            </tr>
            <tr className="border-t border-[#e5e5e5]">
              <th className="w-[30%] py-3 text-left text-base font-normal text-[#666]">User</th>
              <td className="py-3 text-base text-[#333]">{data.username}</td>
            </tr>
            <tr className="border-t border-[#e5e5e5]">
              <th className="w-[30%] py-3 text-left text-base font-normal text-[#666]">Gender</th>
              <td className="py-3 text-base text-[#333]">{data.gender}</td>
            </tr>
            <tr className="border-t border-[#e5e5e5]">
              <th className="w-[30%] py-3 text-left text-base font-normal text-[#666]">Address</th>
              <td className="py-3 text-base text-[#333]">{data.address}</td>
            </tr>
            <tr className="border-t border-[#e5e5e5]">
              <th className="w-[30%] py-3 text-left text-base font-normal text-[#666]">
                Card Type
              </th>
              <td className="py-3 text-base text-[#333]">Credit Card</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
