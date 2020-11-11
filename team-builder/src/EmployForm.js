import React from 'react';

export default function EmployForm(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value );
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form group inputs">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={values.name}
                        placeholder="Type Your Name"
                        maxLength="30"
                    ></input>
                </label>
                <label>
                    Email
                 <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="enter your email"
                        maxLength="30"
                    ></input>
                </label>
                | <label>
                    Role
          <select name="role" value={values.role} onChange={onChange}>
                        <option value="">-----</option>
                        <option value="Front End">Front End Dev</option>
                        <option value="Back End">Back End</option>
                        <option value="Designer">Engineer</option>
                    </select>
                </label>

                <div className="submit">
                    <button>submit</button>
                </div>
            </div>
        </form>
    );
}