const validation = (values) => {
    let errors = {};
    const EMAIL = 'alanluna@gmail.com';
    const PASSWORD = 'alan05';
    
    if (!values.email) {
        errors.email = 'Es necesario un email';
    } else if (/^[\w-.]+@([\w-]+\.)+[\w-]{4}$/g.test(values.email)) {
        errors.email = 'Se requiere un email válido';
    } else if (values.email !== EMAIL) {
        errors.email = 'El email es incorrecto';
    }
    if (!values.password) {
        errors.password = 'Es necesario ingresar una contraseña';
    } else if (!/\d/.test(values.password)) {
        errors.password = 'La contraseña debe contener al menos un número';
    } else if (values.password.length < 6 || values.password.length > 8) {
        errors.password = 'La contraseña debe tener entre 6 y 8 caracteres';
    } else if (values.password !== PASSWORD) {
        errors.password = 'La contraseña es incorrecta';
    }
    
    return { email : errors.email, password : errors.password};
}


export default validation;
