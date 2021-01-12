import React from 'react';

export default ({ input, label, meta: { error, touched } }) =>
  (
    <div className={input.name}>
      <label htmlFor="input">{label}
        <input id="input" {...input} style={{ marginBottom: '5px' }} />
      </label>
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
