import { WithValidation } from '../ts/interfaces';



const withValidation = ({ Component, checker, value }: WithValidation) => {
  if (checker && !checker.validatorFunction(value)) {
    return (
        <>
            {Component}
            <span>{checker.message}</span>
        </>
    )
  }

  return Component;
};

export default withValidation;
