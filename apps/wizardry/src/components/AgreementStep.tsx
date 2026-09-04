import type { WizardData } from '../types'

interface AgreementStepProps {
  data: WizardData
  error?: string
  onChange: (field: keyof WizardData, value: boolean) => void
}

export function AgreementStep({ data, error, onChange }: AgreementStepProps) {
  return (
    <div>
      <div className="bg-brand-sky rounded-md px-8 py-2.5 -mx-8 mb-6">
        <h3 className="text-white text-xl font-bold m-0">Agreement</h3>
      </div>

      <div className="text-gray-600 text-sm leading-relaxed mb-6">
        <p className="m-0">
          Massa placerat duis ultricies lacus sed turpis tin Elementum sagittis vitae et leo duis ut
          diam quam nulla. Viverra mauris in aliquam sem fringilla ut. Id leo in vitae turpis massa
          sed elementum tempus. Aliquet enim tortor at auctor urna nunc id cursus. Nulla aliquet
          enim tortor at auctor. Consquat nisl vel pretium lectus quam id leo.
        </p>
      </div>

      <div className="pt-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.agreementAccepted}
            onChange={(e) => onChange('agreementAccepted', e.target.checked)}
            className="mt-1 h-[18px] w-[18px] rounded border border-gray-300 accent-brand-sky"
            required
          />
          <span className="text-gray-800 text-sm font-semibold">
            I read agreement and I have not any objection.
          </span>
        </label>
        {error && (
          <p className="text-red-500 text-sm mt-2" role="alert">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
