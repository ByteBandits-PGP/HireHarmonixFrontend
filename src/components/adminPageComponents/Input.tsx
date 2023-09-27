import cn from 'classnames'
import { findInputError } from '../../common/utils/findInputError'
import { isFormInvalid } from '../../common/utils/isFormInvalid'
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

type inputProps = {
  name: string,
  label: string,
  type: string,
  id: string,
  placeholder: string,
  validation: any,
  multiline?: string,
  className: string,
  onChange:  (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Input = (props: inputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, props.name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'p-1 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'

  return (
    <>
      <div className={cn('flex flex-row w-full gap-2', props.className)}>
        <div className="flex justify-between">
          <label htmlFor={props.id} className="font-semibold capitalize input-label">
            {props.label}
          </label>

          {props.multiline ? (
            <textarea
              id={props.id}
              //type={props.type}
              className={cn(input_tailwind, 'min-h-[10rem] max-h-[20rem] resize-y input-field')}
              placeholder={props.placeholder}
              {...register(`${props.name}`, props.validation)}
              onChange={props.onChange}
            ></textarea>
          ) : (
            <input
              id={props.id}
              type={props.type}
              className={cn(input_tailwind)}
              placeholder={props.placeholder}
              {...register(props.name, props.validation)}
              onChange={props.onChange}
            />
          )}

          <AnimatePresence mode="wait" initial={false}>
            {isInvalid && (
              <InputError
                message={inputErrors?.error?.message}
                key={inputErrors?.error?.message}
              />
            )}
          </AnimatePresence>

        </div>



      </div>




    </>
  )
}

type inputErrorProps = {
  message: string
}

const InputError = (props: inputErrorProps) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {props.message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
