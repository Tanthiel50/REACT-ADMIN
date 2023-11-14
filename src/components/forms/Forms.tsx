import React, {useReducer ,useState} from 'react';
import './forms.scss';

const FormReducer = (state, event) => {
    return {
        ...state,
        [event.firstname]: event.value,
        [event.lastname]: event.value,
        [event.email]: event.value,
        [event.tel]: event.value,
        [event.about]: event.value,
    }
}

const Forms = () => {

    const [formData, setFormData] = useReducer(FormReducer, {}); 
    const [submitting, setSubmitting] = useState(false);
    
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    const handleChange = event => {
        setFormData({
            firstname: event.target.firstname,
            value: event.target.value,
        })
    }

    return (
        <div className='form'>
            <h1>Formulaire de contact</h1> 
            {submitting &&
                <div>You are submitting the following:
                    <ul>
                        {Object.entries(formData).map(([firstname, value]) => (
                            <li key={firstname}><strong>{firstname}</strong>:{value.toString()}</li>
                        ))}
                    </ul>
                </div>
                }
                <form action="#" method="get" className='formDetail' onChange={handleChange}> 
                    <label htmlFor="firstname">Prénom</label> 
                    <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder="Prénom"
                        required 
                        onChange={handleChange}
                    /> 
                    <label htmlFor="lastname">Nom</label> 
                    <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Nom"
                        required 
                        onChange={handleChange}
                    /> 
                    <label htmlFor="email">Email </label> 
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required 
                        onChange={handleChange}
                        autoComplete='email'
                    /> 
                    <label htmlFor="tel">Téléphone</label> 
                    <input 
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Téléphone"
                        required 
                        onChange={handleChange}
                        autoComplete='tel'
                    /> 
                    <textarea 
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        required 
                        onChange={handleChange}
                    ></textarea> 
                    <button type="submit" value="Submit"> 
                        Envoyer mon message 
                    </button> 
                </form>  
        </div>
    );
};

export default Forms;
