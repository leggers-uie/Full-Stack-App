import React from 'react';

/**
 *The file src/Form.js exports a function that renders any validation errors sent from the API,
 * via the <ErrorDisplay> function component. It also renders the "Submit" and "cancel" buttons of a form,
 * as well as handle their functionality, via the functions handleSubmit and handleCancel.
 * Props are passed to this component from a parent component like UserSignUp - to provide it the data it needs 
 *@param {props}
 *@returns error display and submit/cancel buttons of the form
 */



export default (props) => {
    const {cancel, errors, submit, submitButtonText, elements} = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <div>
            <ErrorsDisplay errors={errors} />
            <form onSubmit={handleSubmit} >
                { elements() }
                <div className="grid-100 pad-bottom">
                    <button className="button" type="submit">{submitButtonText}</button>
                    <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

function ErrorsDisplay({ errors }) {
    let errorsDisplay = null;

    if(errors.length && typeof errors !== 'string') {
        console.log('the sign in errors', errors[0]);
        errorsDisplay = (
            <div>
                <h2 className="validation--errors--label">Validation errors</h2>
                <div className="validation-errors">
                    <ul>
                        {errors.map((error, i) =>
                         <li key={i}>{error.message}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }  else if(errors.length && typeof errors === 'string') {
        errorsDisplay = (
            <div>
                <h2 className="validation--errors--label">Validation errors</h2>
                <div className="validation-errors">
                    <ul>
                        <li key={1}>{errors}</li>
                    </ul>
                </div>
            </div>
        );  
    }
           
  
    return errorsDisplay;
}