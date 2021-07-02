import React from 'react';

let errorStyle = {
    color:"red",
    marginTop: "5px"
}

export const InputField = ({ input, label, type, meta, className, disabled, initialValue, onChange }) => (
    
    <span>
        <input {...input} type={type} placeholder={label} className={className} disabled={disabled || false} />
        { meta.touched && meta.error ? (<p style={errorStyle} className="text-danger">{meta.error}</p>): null}
    </span>
)