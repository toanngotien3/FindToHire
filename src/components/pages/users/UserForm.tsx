import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserFormType } from '@/types'
import { user_form_schema } from '@/schemas'

const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormType>({
    resolver: yupResolver(user_form_schema),
  })

  const onSubmit: SubmitHandler<UserFormType> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 flex flex-col justify-center items-center"
    >
      <div className="w-full">
        <label htmlFor="tg" className="block text-sm font-medium">
          Telegram
        </label>
        <input
          {...register('tg')}
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        />
        {errors.tg && (
          <p className="mt-2 text-sm text-red-500">{errors.tg.message}</p>
        )}
      </div>
      
      <div className="w-full">
        <label htmlFor="role" className="block text-sm font-medium">
          Role
        </label>
        <input
          {...register('role')}
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        />
        {errors.role && (
          <p className="mt-2 text-sm text-red-500">{errors.role.message}</p>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="detail" className="block text-sm font-medium">
          Detail
        </label>
        <textarea
          {...register('detail')}
          rows={3}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        />
        {errors.detail && (
          <p className="mt-2 text-sm text-red-500">{errors.detail.message}</p>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="x" className="block text-sm font-medium">
          X (Twitter)
        </label>
        <input
          {...register('x')}
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        />
        {errors.x && (
          <p className="mt-2 text-sm text-red-500">{errors.x.message}</p>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="site" className="block text-sm font-medium">
          Website (optional)
        </label>
        <input
          {...register('site')}
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        />
        {errors.site && (
          <p className="mt-2 text-sm text-red-500">{errors.site.message}</p>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="exp" className="block text-sm font-medium">
          Experience time (years)
        </label>
        <input
          {...register('exp')}
          type="number"
          defaultValue={1}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        />
        {errors.exp && (
          <p className="mt-2 text-sm text-red-500">{errors.exp.message}</p>
        )}
      </div>

      <div className="w-full">
        <label htmlFor="from" className="block text-sm font-medium">
          From (optional)
        </label>
        <input
          {...register('from')}
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        />
        {errors.from && (
          <p className="mt-2 text-sm text-red-500">{errors.from.message}</p>
        )}
      </div>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="mx-auto px-4 py-2 bg-red-900 text-white font-bold rounded-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default UserForm
